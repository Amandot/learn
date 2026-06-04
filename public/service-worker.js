// Self-uninstalling service worker to clear out previously registered service workers
// from other projects running on the same localhost port.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.registration.unregister()
    .then(() => self.clients.claim())
    .then(() => {
      console.log('Successfully unregistered old service worker.');
    });
});
