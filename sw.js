// Service Worker - IBKR投資計画 mobile
// v13 (5/19 夜): tracker 引越し — 戦略 tab 詳細化 + 銘柄 tab 新規追加 (yasuda_quant/tracker_data.js から STRATEGIES_DATA + TICKERS_DATA 移行)、 tracker 廃止 (yasuda_quant/verification_tracker_fusion.html は読み取り専用 reference に)。
// v12 (5/19 夜): max-width 600→900px (PC 600 cramped fix)、 履歴 累計 PL bug 修正 (mobile_history.json 真値書直し、 sync_mobile delta 厳格化、 NetLiq 起点比較 併用 metric 追加)、 Champ banks (renderChamp null guard で 読込中 stuck fix)。
// v11 (5/19 夜): PC 広 viewport stretch 修正 — body/header/tabs max-width:600px 中央寄せ。 Champ タブ 銘柄別詳細 削除 (user 不要、 portfolio 集計のみ残す)。
// v10 (5/19 夜): P&L 色 日本式に反転 (赤=プラス / 緑=マイナス)、 米国式 緑=プラス は user 要望で破棄。
// v9 (5/19 夜): header/tabs 固定で content 重なり修正 — 明示 height (header 56px + tabs 48px) で body padding-top:calc(env+110px)、 字が隠れない。
// v8 (5/19 夜): Champ タブ 投信スタイル — 5 銘柄 avg/現在/損益 + 取得元本/評価額/含み損益 集計表示、 出口タブから Champ 除外。
// v7 (5/19 夜): 監視タブ text overflow 修正 (.row-l flex:1 + word-break:break-word)、 header/tabs を position:sticky → fixed に切替 (iOS PWA で sticky が swipe で外れる事案)。
// v6 (5/19 夜): 「出口」タブ追加 — exit_plans (sync_mobile.build_exit_plans) で銘柄別 bracket/出口候補/当日実態/force_sell 表示。
// v5 (5/19 夜): index.html 動的 data.js 読込 + loadAll try/catch 防御 + renderHistory null fix。
// 旧 cache は activate 時に削除されるので、 iPhone reload で確実に新 SW 適用 + 全 cache クリア。
const CACHE = 'ibkr-plan-v13';
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
