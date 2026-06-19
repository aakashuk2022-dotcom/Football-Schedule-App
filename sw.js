self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });

self.addEventListener('push', (event) => {
  let data = { title: 'Matchday', body: 'A match is starting soon' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    // fall back to default text if payload isn't JSON
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon.png',
      badge: 'icon.png',
      vibrate: [200, 100, 200],
      tag: data.tag || 'matchday-reminder',
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('./index.html');
    })
  );
});
