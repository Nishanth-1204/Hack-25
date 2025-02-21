const CACHE_NAME = 'media-cache-v1';
const MEDIA_TO_CACHE = [
  '/assets/animated-text-fill.png',
  '/assets/arrow_up.png',
  '/assets/facebook.png',
  '/assets/github.png',
  '/assets/instagram.png',
  '/assets/logo.png',
  '/assets/navigate_labs_ai.jpg',
  '/assets/Reccsar.jpg',
  '/assets/RETRO.jpg',
  '/assets/S2S.jpg',
  '/assets/vid1.mp4',
  '/assets/video.mp4',
  '/assets/vite.svg',
  '/assets/xyz.png',
];

// Install and Cache Media
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching media files...');
      return cache.addAll(MEDIA_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate and Clean Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${key}`);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch Media from Cache
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (
    url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg') ||
    url.endsWith('.svg') || url.endsWith('.mp4')
  ) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((networkResponse) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          })
        );
      }).catch(() => {
        console.error('[Service Worker] Failed to fetch:', event.request.url);
      })
    );
  }
});
