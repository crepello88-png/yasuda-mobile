// Service Worker - IBKR投資計画 mobile
// v4 (5/18 夜): data.js は network-only (cache 一切返さない)、 index.html も毎回 network
// iOS PWA standalone mode の "古い data.js 表示" を根絶
const CACHE = 'ibkr-plan-v4';
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
  // network-only: data.js は絶対 cache 返さない (古い NetLiq 等の表示防止)
  if (url.includes('data.js')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request))
    );
    return;
  }
  // network-first: index.html / manifest.json (cache fallback あり)
  const networkFirst = url.endsWith('/') || url.endsWith('/index.html') || url.includes('manifest.json');
  if (networkFirst) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).then(r => {
        if (r && r.ok) {
          const c = r.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, c));
        }
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // cache-first: 静的 asset (icon 等)
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
