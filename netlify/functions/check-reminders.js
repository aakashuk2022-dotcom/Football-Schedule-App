// Netlify Scheduled Function: runs every minute via cron.
// Checks stored reminders; for any whose fire time has arrived, sends a push
// notification and marks it sent (or deletes it) so it doesn't fire twice.

const { getStore } = require('@netlify/blobs');
const { sendWebPush } = require('./webpush-lib');

const config = {
  schedule: '* * * * *', // every minute
};

const handler = async function () {
  const store = getStore('reminders');
  const VAPID_PUBLIC = process.env.VAPID_PUBLIC_KEY;
  const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY;
  const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:admin@example.com';

  if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
    console.error('Missing VAPID_PUBLIC_KEY or VAPID_PRIVATE_KEY environment variables');
    return { statusCode: 500 };
  }

  const { blobs } = await store.list({ prefix: 'reminder:' });
  const now = Date.now();
  let sent = 0, errors = 0, skipped = 0;

  for (const blobMeta of blobs) {
    try {
      const reminder = await store.get(blobMeta.key, { type: 'json' });
      if (!reminder || reminder.sent) { skipped++; continue; }

      const fireTime = new Date(reminder.fireAt).getTime();
      if (now < fireTime) { continue; } // not due yet
      if (now > fireTime + 10 * 60 * 1000) {
        // More than 10 min late (e.g. function was down) — drop it rather than send a stale alert
        await store.delete(blobMeta.key);
        skipped++;
        continue;
      }

      const result = await sendWebPush(
        reminder.subscription,
        { title: reminder.title || 'Kickoff soon', body: reminder.body || '' },
        { publicKey: VAPID_PUBLIC, privateKey: VAPID_PRIVATE, subject: VAPID_SUBJECT }
      );

      if (result.ok) {
        sent++;
        await store.delete(blobMeta.key); // one-shot reminder, remove after sending
      } else if (result.status === 404 || result.status === 410) {
        // Subscription expired/unsubscribed — clean it up
        await store.delete(blobMeta.key);
        skipped++;
      } else {
        errors++;
      }
    } catch (err) {
      console.error('Error processing reminder', blobMeta.key, err);
      errors++;
    }
  }

  console.log(`Reminder check complete: ${sent} sent, ${skipped} skipped, ${errors} errors`);
  return { statusCode: 200 };
};

module.exports = { handler, config };
