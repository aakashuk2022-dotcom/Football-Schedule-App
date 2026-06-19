// Minimal Web Push implementation using only Node's built-in crypto module.
// Implements VAPID auth (RFC 8292) and aes128gcm payload encryption (RFC 8291),
// so we don't depend on npm install succeeding in the Netlify build environment.

const crypto = require('crypto');

function base64url(buf) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64url(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Buffer.from(s, 'base64');
}

function derToRawSignature(der) {
  let offset = 2;
  function readInt() {
    if (der[offset] !== 0x02) throw new Error('expected INTEGER in DER signature');
    offset++;
    const len = der[offset];
    offset++;
    let bytes = der.subarray(offset, offset + len);
    offset += len;
    while (bytes.length > 32 && bytes[0] === 0) bytes = bytes.subarray(1);
    if (bytes.length < 32) {
      const padded = Buffer.alloc(32);
      bytes.copy(padded, 32 - bytes.length);
      bytes = padded;
    }
    return bytes;
  }
  const r = readInt();
  const s = readInt();
  return Buffer.concat([r, s]);
}

function createVapidAuthHeader(audience, subject, publicKeyB64, privateKeyB64) {
  const header = { typ: 'JWT', alg: 'ES256' };
  const exp = Math.floor(Date.now() / 1000) + 12 * 3600;
  const payload = { aud: audience, exp, sub: subject };

  const encHeader = base64url(Buffer.from(JSON.stringify(header)));
  const encPayload = base64url(Buffer.from(JSON.stringify(payload)));
  const unsigned = encHeader + '.' + encPayload;

  const pubRaw = fromBase64url(publicKeyB64);
  const x = pubRaw.subarray(1, 33), y = pubRaw.subarray(33, 65);
  const jwk = { kty: 'EC', crv: 'P-256', d: privateKeyB64, x: base64url(x), y: base64url(y) };
  const keyObj = crypto.createPrivateKey({ key: jwk, format: 'jwk' });

  const sigDER = crypto.sign('sha256', Buffer.from(unsigned), { key: keyObj, dsaEncoding: 'der' });
  const sigRaw = derToRawSignature(sigDER);

  const jwt = unsigned + '.' + base64url(sigRaw);
  return `vapid t=${jwt}, k=${publicKeyB64}`;
}

function hkdf(salt, ikm, info, length) {
  const prk = crypto.createHmac('sha256', salt).update(ikm).digest();
  let t = Buffer.alloc(0);
  let okm = Buffer.alloc(0);
  let i = 1;
  while (okm.length < length) {
    t = crypto.createHmac('sha256', prk).update(Buffer.concat([t, info, Buffer.from([i])])).digest();
    okm = Buffer.concat([okm, t]);
    i++;
  }
  return okm.subarray(0, length);
}

function encryptPayload(payloadObj, p256dhB64, authB64) {
  const payload = JSON.stringify(payloadObj);
  const userPublicKey = fromBase64url(p256dhB64);
  const authSecret = fromBase64url(authB64);

  const localKeys = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  const localPublicRaw = localKeys.publicKey.export({ type: 'spki', format: 'der' }).subarray(-65);

  const userPubKeyObj = crypto.createPublicKey({
    key: { kty: 'EC', crv: 'P-256', x: base64url(userPublicKey.subarray(1, 33)), y: base64url(userPublicKey.subarray(33, 65)) },
    format: 'jwk',
  });
  const sharedSecret = crypto.diffieHellman({ privateKey: localKeys.privateKey, publicKey: userPubKeyObj });

  const salt = crypto.randomBytes(16);

  const keyInfo = Buffer.concat([Buffer.from('WebPush: info\0'), userPublicKey, localPublicRaw]);
  const ikm = hkdf(authSecret, sharedSecret, keyInfo, 32);

  const cek = hkdf(salt, ikm, Buffer.from('Content-Encoding: aes128gcm\0'), 16);
  const nonce = hkdf(salt, ikm, Buffer.from('Content-Encoding: nonce\0'), 12);

  const payloadBuf = Buffer.from(payload, 'utf8');
  const paddedPayload = Buffer.concat([payloadBuf, Buffer.from([0x02])]);

  const cipher = crypto.createCipheriv('aes-128-gcm', cek, nonce);
  const ciphertext = Buffer.concat([cipher.update(paddedPayload), cipher.final()]);
  const authTag = cipher.getAuthTag();
  const encryptedRecord = Buffer.concat([ciphertext, authTag]);

  const recordSize = Buffer.alloc(4);
  recordSize.writeUInt32BE(4096, 0);
  const keyIdLen = Buffer.from([localPublicRaw.length]);

  const header = Buffer.concat([salt, recordSize, keyIdLen, localPublicRaw]);
  return Buffer.concat([header, encryptedRecord]);
}

/**
 * Sends a Web Push notification.
 * @param {Object} subscription - { endpoint, keys: { p256dh, auth } }
 * @param {Object} payload - object to JSON-encode and deliver (e.g. { title, body })
 * @param {Object} vapid - { publicKey, privateKey, subject }
 */
async function sendWebPush(subscription, payload, vapid) {
  const endpointUrl = new URL(subscription.endpoint);
  const audience = `${endpointUrl.protocol}//${endpointUrl.host}`;

  const authHeader = createVapidAuthHeader(audience, vapid.subject, vapid.publicKey, vapid.privateKey);
  const body = encryptPayload(payload, subscription.keys.p256dh, subscription.keys.auth);

  const res = await fetch(subscription.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Encoding': 'aes128gcm',
      'TTL': '3600',
      'Authorization': authHeader,
    },
    body,
  });

  return { status: res.status, ok: res.ok };
}

module.exports = { sendWebPush, base64url, fromBase64url };
