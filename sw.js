// Service Worker - IBKR投資計画 mobile
// v37 (5/24): Hi52w_Pullback10_RSI40_v1 を paper=true 一時停止 = LIVE 11 戦略に戻る。 audit_live_overlap_5_24 で OOS fire 11,687 件 = 想定 760 件の 15.4x 超過確認、 元 discovery agent sig/月 計算ミス + R2 verify が見抜けず。 R2 protocol 拡張 (sig/月 妥当性 / overlap / 集中 / deploy 1週 fail-safe) memory 保存済。
// v36 (5/24): Hi52w_Pullback10_RSI40_v1 (= F2 discovery: 252d high -10% pullback + RSI<40 → 翌 MOO BUY h7 TP+7/SL-8) 追加 = 計 12 戦略 LIVE。 SS tier $223.44/mo OOS+0.23% Sh+0.66 robust、 n=8888 OOS n=2022、 Jaccard <0.05 全 LIVE で完全 incremental、 top fire: KLAC/APH/ADI/PH/WAB (Semis/Industrials cluster)。 size_mult=0.25 probe (50 concurrent strain で控えめ start、 4-8週後 ramp)。 user 「採用して次々止まらず探して」 directive、 round #6 並行 launch 済。
// v35 (5/24): HYG_LQD_QQQ_v1 (信用 spread blowout = HYG/LQD 126d bottom 15% → QQQ rebound、 5d hold TP+4/SL-4) 追加 = 計 11 戦略 LIVE。 portfolio sim Δ$/mo+$24.86 ΔSh+0.15、 macro 軸唯一の生存、 Sh+4.97 quality 最強級、 LIVE 中最短 hold 帯 (5d)。 user adoption priority 「hold 短ければ短いほうがいい」 充足。
// v34 (5/24): 「メイン (Confluence_RSIStoch_v1)」 → 「Confluence_RSIStoch_v1」 に rename (user 「メインの文字消して」)、 戦略名揃え。 同時 Loser_3yr50_h10_v1 (De Bondt-Thaler 古典 3yr loser h10 D bracket) を SS tier で tracker 追加 (5/24 採用、 size_mult=0.75)。
// v31 (5/23): レア badge 位置を name 横 → ティア badge 直下 に移動 (user 「ティアのところに レア表記して」)、 ティアと一体で 視認、 中央寄せ + 2 行 (🦄 レア / 月X.X回) で 字 大きくして 視認性向上。
// v30 (5/23): 戦略タブ に「🦄 レア」 バッジ追加 — _signals_per_month < 5 の戦略 (Pullback_v1 / Sector_FriPanic_v1 / Drop5d_BroadPanic 等) は cyan バッジ + freq 行 cyan + card 左 cyan border で 視認、 user 「月 5 シグナル未満は レア表記、 シグナル起きたらいいかな程度に見やすく」 対応。 Champ DCA は対象外。
// v29 (5/22 朝): 監視タブ heartbeat 色判定を「鮮度のみ」 → 「健全性 (ok flag + タスク種別 cadence)」 に統一 — 旧 場中 15/30min 一律 → 1日1発タスク (morning_preopen / verify_claims 等) が正常稼働後も当日中ずっと赤になる設計矛盾を解消。 新: HEARTBEAT_CADENCE table で interval (15min cron 系: red_min=30) と event (1日1発系: ok のみで判定、 age 無視) を区別、 ok=false は 一律 赤、 alert_* で ok=true は resolved 緑。 user 「赤を見たら本当にダメ」 が達成。
// v28 (5/21 夜): 場中タブ末尾に「💡 日中チャンス」 card 追加 — 取りこぼし (今朝 phantom rollback された再エントリー候補) + Gap Fade pending を列挙、 current_price + signal ref 距離 + TP/SL 距離 + action_label (🟢🟡🔴) + reason 表示、 情報表示のみ で 発注ボタンなし。 source: sync_mobile.build_intraday_opportunities()。
// v27 (5/20 0:35): Web Push 通知 追加 (user 「アップルウォッチ してるから クロコーからだ！ って分かる振動」) — VAPID + push handler + クロコー専用 vibrate [200,100,200,100,200] 5 連、 iOS 16.4+ home screen PWA で動作、 issue close 毎に iPhone+Watch 振動通知。
// v26 (5/19 夜): 📬 返信 タブ 新規追加 (user 「A: PWA 返信タブ実装」) — gh issue list pwa-report で クロコー返信表示、 未読 NEW バッジ + localStorage seen tracking。
// v25 (5/19 夜): 📮 報告 ボタン 追加 (header)。 PWA から GitHub Issue 経由で クロコー (Claude) に報告 — 6 テンプレ (売れてない/約定変/PnL変/UI崩れ/確認/自由入力) + 自動 context (data.js timestamp / NetLiq / 表示タブ等) 添付。
// v24 (5/19 夜): タブ順序 user 指定順に並び替え (今日/保有/出口/履歴/週次/Champ/短期/短vs長/場中/監視/戦略/銘柄)。
// v23 (5/19 夜): 日次ログ 深掘り (user 「もっと深く掘れないの？」) — trade 毎の 戦略 / 株数 / entry→exit / exit_reason / commission / gross/net 全表示、 TWS fills も補足。
// v22 (5/19 夜): 日次ログに ticker 別 P&L 追加 (user 「日次ログは何の銘柄か見えない」 fix)、 all_trades を date 別 group で 該当日 ticker + net P&L 表示。
// v21 (5/19 夜): 約定 tab 廃止 → 履歴 tab 内 (日次ログ直下) に統合 (user 「履歴の日次ログの所に約定タブ移して」)、 PWA tabs 13 → 12。
// v20 (5/19 夜): 短期 tab 復元 (cron が古い source mobile/index.html で public 上書きして消えた事案 fix)、 同時に source 側にも反映。
// v19 (5/19 夜): manifest icon (icon-192.png + icon-512.png) 不在 fix で 生成、 last-good today_summary preserve で TWS 直 fail 時の None 上書き 防止、 tws_direct connect retry 3 回 + clientId ずらし。
// v18 (5/19 夜): 週次 trade 詳細 section 完全削除 (user 「見た目汚いいらない」)、 戦略別 内訳 のみ残す。
// v17 (5/19 夜): 週次 trade 詳細 / 戦略別 NaN/undefined fix (field 名 t.pnl → t.pnl_usd, s.name → s.strategy)、 trade 詳細は短期 タブへ誘導 (user 「トレード詳細は短期タブへ」)。
// v16 (5/19 夜): 週次 tab に 長期 unreal + 短期 realized 合計 section 追加 (user 「週次が長期と短期の合計」 で確定)。
// v15 (5/19 夜): 短期 tab 新規 (Champ 除外、 短期 only サマリ + 保有 + 戦略別 + closed trades)、 PWA tabs 12 → 13。
// v14 (5/19 夜): 約定 tab 新規 (all_trades = closed_positions + TWS fills 統合)、 短vs長 tab 新規 (Champ vs 短期 比較)、 週次の by_strategy + trades 実データ反映 (旧 [] 空 fix)。 PWA tabs 10 → 12。
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
// v39 (5/24): QQQ_50d_BreakBounce_v1 (= T2 discovery、 QQQ 50d SMA fake breakdown reversal) 採用 + Pullback_v1 size_mult 1.0→0.5 (audit REDUCE_SIZE)。 LIVE 13 戦略 (= SS 5 + S 3 + A 5)。 Hi52w spec 改訂後 (pull-15 + cooldown 21d + daily cap 10) で sig/月 80 (target 50-100 内)。 sentiment overlay (= AV news) infra 設置済、 daily cron .bat user 登録待ち。 過去 handover docs (5/4-5/11) 検証 = 既 LIVE で網羅確認。 insider 系 (R9-A / R10-A) は 60d hold で user 切り判断。
const CACHE = 'ibkr-plan-v40';
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

// 5/20 push notification (Claude/クロコー からの返信即受信)
self.addEventListener('push', function(event) {
  let data = { title: '🦝 クロコーから', body: '新規返信あり' };
  if (event.data) {
    try { data = event.data.json(); } catch (e) { data.body = event.data.text(); }
  }
  const options = {
    body: data.body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200, 100, 200],  // クロコー専用 パターン
    tag: data.tag || 'kuroko-reply',
    renotify: true,
    requireInteraction: false,
    data: { url: data.url || './', issueNum: data.issueNum }
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './#tab=reports';
  event.waitUntil(clients.openWindow(url));
});
