self.addEventListener('install', event => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', event => {
  console.log('Service worker fetched:', event.request.url);
});

self.addEventListener('push', event => {
  console.log('Service worker received push notification:', event.data.text());
});

self.addEventListener('notificationclick', event => {
  console.log('Service worker notification clicked');
  event.notification.close();
});

