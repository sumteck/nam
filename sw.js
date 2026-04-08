self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nam-attendance-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        'https://sumteck.github.io/nam/logo512'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
