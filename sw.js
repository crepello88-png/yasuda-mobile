// Service Worker - IBKR投資計画 mobile
// v3 (5/18): index.html / manifest を network-first 化、 静的 asset のみ cache-first
const CACHE = 'ibkr-plan-v3';
const STATIC_ASSETS = ['./icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC_ASSETS).catch(()=>null)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // network-first: data.js / index.html / manifest.json (常に最新)
  const networkFirst = url.includes('data.js') || url.endsWith('/') || url.endsWith('/index.html') || url.includes('manifest.json');
  if (networkFirst) {
    e.respondWith(
      fetch(e.request).then(r => {
        if (r && r.ok) {
          const c = r.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, c));
        }
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // cache-first: 静的 asset
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
