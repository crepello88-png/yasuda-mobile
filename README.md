# yasuda-mobile

安田さん 短期 trading の iPhone PWA dashboard。 `yasuda_short` (private) からの **dashboard 配信専用 public repo** (戦略コード非含)。

## iPhone 設定

1. Safari で `https://crepello88-png.github.io/yasuda-mobile/` を開く
2. 共有 ボタン → 「ホーム画面に追加」
3. PWA 化 = ネイティブアプリのように動作

## 中身

- `index.html` — UI (今日 / 保有 / 場中 / 戦略 タブ)
- `data.js` — `window.MOBILE_DATA` (sync_mobile.py で auto 生成)
- `manifest.json` — PWA メタデータ
- `sw.js` — service worker (offline cache)

## data 更新

`yasuda_short/sync_mobile.py` が起動時:
1. TWS bridge から最新 positions / NetLiq 取得
2. state.json / brief 読込
3. data.js 生成 + 本 repo へ git push
4. GitHub Pages 1-2 分で反映

## 関連 (private)

- `yasuda_short` (private) — 戦略 monitor.py / executor / 検証 ST scripts
