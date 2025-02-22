import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (event) => {
  console.log('Service worker installed');
  // ...additional install logic...
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  // ...additional activate logic...
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  // ...additional fetch logic...
});
