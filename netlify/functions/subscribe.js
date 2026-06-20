// Netlify Function: /.netlify/functions/subscribe
// Saves or removes a reminder: a push subscription paired with a match id and fire time.
// Storage: Netlify Blobs (key-value store, included on free tier).

const { getStore } = require('@netlify/blobs');

function getReminderStore(){
  const siteID = process.env.BLOBS_SITE_ID;
  const token = process.env.BLOBS_TOKEN;
  if(siteID && token){
    return getStore({ name: 'reminders', siteID, token });
  }
  // Fallback to auto-injected config if available (works in some environments)
  return getStore('reminders');
}

exports.handler = async function (event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    const store = getReminderStore();
    const data = JSON.parse(event.body || '{}');

    if (event.httpMethod === 'POST') {
      const { matchId, fireAt, subscription, title, body } = data;
      if (!matchId || !fireAt || !subscription) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'matchId, fireAt, and subscription are required' }) };
      }
      const key = `reminder:${matchId}:${subscription.endpoint.slice(-24)}`;
      await store.setJSON(key, { matchId, fireAt, subscription, title, body, sent: false });
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true, key }) };
    }

    if (event.httpMethod === 'DELETE') {
      const { matchId, subscription } = data;
      if (!matchId || !subscription) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'matchId and subscription are required' }) };
      }
      const key = `reminder:${matchId}:${subscription.endpoint.slice(-24)}`;
      await store.delete(key);
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Function error', detail: String(err) }) };
  }
};
