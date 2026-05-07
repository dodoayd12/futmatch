// Cache versiyonunu her deploy'da artır → eski cache silinir
const CACHE_NAME = 'futmatch-v7';
const STATIC_ASSETS = [
  '/logo.jpg',
  '/manifest.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  // Hemen aktif ol — eski SW'yi bekleme
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  // Tüm açık sekmeleri hemen kontrol al
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Firebase, CDN ve harici kaynaklar → her zaman ağdan
  if (
    url.includes('firestore') ||
    url.includes('firebase') ||
    url.includes('googleapis.com') ||
    url.includes('unpkg.com') ||
    url.includes('gstatic.com')
  ) {
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // index.html → Network-first (güncelleme hemen yansısın)
  if (url.endsWith('/') || url.includes('index.html') || !url.includes('.')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Diğer static dosyalar (logo, manifest) → Cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
