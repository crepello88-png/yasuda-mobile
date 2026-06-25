window.MOBILE_DATA = {
  "generated_at": "2026-06-25T08:45",
  "today_summary": {
    "netliq": 10234.52,
    "cash": 9979.75,
    "available_funds": 9979.75,
    "excess_liquidity": 10002.63,
    "settled_cash": null,
    "buying_power": 39918.98,
    "stock_value": 885.91,
    "unrealized_pnl": 2.85,
    "realized_pnl": 0.0,
    "day_pnl_pct": 0.02784693371061857,
    "account_type": "INDIVIDUAL",
    "open_positions": 4,
    "open_orders_count": 0,
    "fills_today_count": 0,
    "vix": null,
    "vix1d": null,
    "data_source": "TWS_direct_v2"
  },
  "tws_open_orders": [],
  "tws_fills_today": [],
  "forecast": {
    "capital_short": 4237,
    "capital_champ": 0,
    "_capital_champ_note": "DISCONTINUED 2026-05-29: Champ 全 unwind。 旧 $7,027 は weekly_buys slice の stale 値 (実 position は $11k cost / -0.85%)。 unwind 後 capital は SPY (SPY_DCA_v1) へ移管、 Champ capital は 0。",
    "monthly_low": 150,
    "monthly_mid": 251,
    "monthly_high": 350,
    "annual_low_pct": 13,
    "annual_mid_pct": 22,
    "annual_high_pct": 30,
    "annual_low_usd": 1800,
    "annual_mid_usd": 3012,
    "annual_high_usd": 4200,
    "champ_annual_pct": null,
    "champ_annual_usd": null,
    "_champ_forecast_status": "DISCONTINUED 2026-05-29: Champ 廃止につき annual forecast 無効。 後継 SPY_DCA_v1 は benchmark = SPY total return (別途算出)、 個別 forecast は置かない (= 手動積立、 約束値なし)。",
    "_basis": "5/27 容量現実版: F7 backtest 2026-01-05 $14k/3枠 実測 +$1,254/5mo = $251/mo mid。3月 -$1,090 drawdown 月あり low $150。Bull月は +$1,153 (1月) で high $350。旧 forecast は全 signal 約定前提で過大、 3枠制約で 999 signal 中 40 約定 (4%) が現実。",
    "_warning": "BACKTEST由来・ライブ未確認。+$251/月は5ヶ月40trade T柱偏重の1経路。小サンプルで robust な期待値ではない。3月型連敗で low $150 より下・マイナス月もあり得る。約束ではなく参考値。",
    "_capacity_note": "F7 は 7 柱設計だが $14k/3枠では実質 4 柱稼働 (T/M/B/E)。S柱・X柱は枠不足で 0 約定。完全 7 柱分散は資本成長で解く目標。",
    "last_week_actual_pct": 0.0,
    "last_week_actual_usd": 0.0,
    "max_positions": 3,
    "signals_per_month": 200,
    "trades_per_month": 8,
    "signal_fill_rate_pct": 4,
    "growth_trajectory": [
      {
        "month": 0,
        "low": 4237,
        "mid": 4237,
        "high": 4237
      },
      {
        "month": 1,
        "low": 4387,
        "mid": 4488,
        "high": 4587
      },
      {
        "month": 2,
        "low": 4537,
        "mid": 4739,
        "high": 4937
      },
      {
        "month": 3,
        "low": 4687,
        "mid": 4990,
        "high": 5287
      },
      {
        "month": 4,
        "low": 4837,
        "mid": 5241,
        "high": 5637
      },
      {
        "month": 5,
        "low": 4987,
        "mid": 5492,
        "high": 5987
      },
      {
        "month": 6,
        "low": 5137,
        "mid": 5743,
        "high": 6337
      },
      {
        "month": 7,
        "low": 5287,
        "mid": 5994,
        "high": 6687
      },
      {
        "month": 8,
        "low": 5437,
        "mid": 6245,
        "high": 7037
      },
      {
        "month": 9,
        "low": 5587,
        "mid": 6496,
        "high": 7387
      },
      {
        "month": 10,
        "low": 5737,
        "mid": 6747,
        "high": 7737
      },
      {
        "month": 11,
        "low": 5887,
        "mid": 6998,
        "high": 8087
      },
      {
        "month": 12,
        "low": 6037,
        "mid": 7249,
        "high": 8437
      }
    ],
    "_by_strategy_monthly_status": "ARCHIVED 2026-05-29 beta — F7 全戦略 運用停止 (size_mult=0)。 以下 est は historical backtest 値で live ではない。",
    "by_strategy_monthly": [
      {
        "name": "AI_Wave_Momentum_v1",
        "signals": 16,
        "trades": 3,
        "est": 90,
        "_pillar": "T"
      },
      {
        "name": "Momentum_12_1_v1",
        "signals": 38,
        "trades": 1,
        "est": 73,
        "_pillar": "M",
        "_note": "月初のみ"
      },
      {
        "name": "Semi_Equip_Dip_v1",
        "signals": 12,
        "trades": 1,
        "est": 44,
        "_pillar": "B"
      },
      {
        "name": "Bull_Trend_Breakout_v1",
        "signals": 69,
        "trades": 3,
        "est": 20,
        "_pillar": "T",
        "_note": "ps薄い"
      },
      {
        "name": "PreEarnings_T30_T5_Industrial",
        "signals": 2,
        "trades": 1,
        "est": 15,
        "_pillar": "E"
      },
      {
        "name": "Insider_Dir200k_v1",
        "signals": 4,
        "trades": 0,
        "est": 0,
        "_pillar": "I",
        "_note": "5/27 蛇口開通、未約定"
      },
      {
        "name": "Buffett_VIX20_Panic_v1",
        "signals": 6,
        "trades": 0,
        "est": 9,
        "_pillar": "B",
        "_note": "VIX>20時のみ"
      },
      {
        "name": "Pullback_v1",
        "signals": 1,
        "trades": 0,
        "est": 0,
        "_pillar": "B",
        "_note": "calm市場で稀"
      },
      {
        "name": "PEAD_SUE_60d_v1",
        "signals": 12,
        "trades": 0,
        "est": 0,
        "_pillar": "E",
        "_note": "60d hold枠圧迫"
      },
      {
        "name": "CrossSec_Mom_v1",
        "signals": 39,
        "trades": 0,
        "est": 0,
        "_pillar": "M",
        "_note": "月初、枠不足"
      },
      {
        "name": "SectorRotation_Laggard_v1",
        "signals": 2,
        "trades": 0,
        "est": 0,
        "_pillar": "S",
        "_note": "枠不足0約定"
      },
      {
        "name": "A7_DXY_Drop_EM_Long_v1",
        "signals": 4,
        "trades": 0,
        "est": 0,
        "_pillar": "X",
        "_note": "枠不足0約定"
      },
      {
        "name": "Drop5d_BroadPanic",
        "signals": 0,
        "trades": 0,
        "est": 0,
        "_pillar": "B",
        "_note": "calm市場0fire"
      },
      {
        "name": "HYG_LQD_QQQ_v1",
        "signals": 0,
        "trades": 0,
        "est": 0,
        "_pillar": "B",
        "_note": "calm市場0fire"
      }
    ]
  },
  "champ": {
    "status": "discontinued",
    "discontinued_date": "2026-05-29",
    "_status_note": "DISCONTINUED 2026-05-29: Champ 全 unwind (5名 sell → SPY 一括化)。 以下 weekly_buys / weekly_* は 5/11-5/15 の history record として残置 (live ではない)。 将来 buy 予定 (schedule_next) は void。 後継は SPY_DCA_v1。",
    "tickers": [
      "NVDA",
      "PWR",
      "COST",
      "LLY",
      "GOOG"
    ],
    "weekly_buys": [
      {
        "date": "2026-05-11",
        "ticker": "COST",
        "shares": 1,
        "entry": 1005.82,
        "last": 1048.95,
        "pnl": 43.13,
        "pnl_pct": 4.29
      },
      {
        "date": "2026-05-11",
        "ticker": "PWR",
        "shares": 1,
        "entry": 749.42,
        "last": 769.99,
        "pnl": 20.57,
        "pnl_pct": 2.74
      },
      {
        "date": "2026-05-13",
        "ticker": "LLY",
        "shares": 1,
        "entry": 993.04,
        "last": 1004.92,
        "pnl": 11.88,
        "pnl_pct": 1.2
      },
      {
        "date": "2026-05-13",
        "ticker": "GOOG",
        "shares": 2,
        "entry": 381.9,
        "last": 393.32,
        "pnl": 22.83,
        "pnl_pct": 2.99
      },
      {
        "date": "2026-05-14",
        "ticker": "PWR",
        "shares": 1,
        "entry": 775.0,
        "last": 769.99,
        "pnl": -5.01,
        "pnl_pct": -0.65
      },
      {
        "date": "2026-05-14",
        "ticker": "NVDA",
        "shares": 4,
        "entry": 229.85,
        "last": 225.32,
        "pnl": -18.12,
        "pnl_pct": -1.97
      },
      {
        "date": "2026-05-15",
        "ticker": "NVDA",
        "shares": 6,
        "entry": 229.76,
        "last": 225.32,
        "pnl": -26.64,
        "pnl_pct": -1.93
      },
      {
        "date": "2026-05-15",
        "ticker": "GOOG",
        "shares": 1,
        "entry": 393.21,
        "last": 393.32,
        "pnl": 0.11,
        "pnl_pct": 0.03
      }
    ],
    "weekly_cost": 6978.27,
    "weekly_value": 7027.01,
    "weekly_pnl": 48.74,
    "weekly_pnl_pct": 0.7,
    "weekly_sells_cash": 1624.01,
    "schedule_next": [
      {
        "date": "2026-07-20",
        "plan": "第3月曜日 ルール: 7月分 Champ DCA、 詳細は 7月入り後 配分確定",
        "buys": []
      },
      {
        "date": "2026-08-17",
        "plan": "第3月曜日 ルール: 8月分 Champ DCA、 NVDA 8月決算前 (歴史的 90% win) タイミング、 詳細",
        "buys": []
      }
    ],
    "_schedule_next_void": "DISCONTINUED 2026-05-29: 旧 Champ buy 予定 (6/15・7/20・8/17 第3月曜ルール) は全て void。 後継 SPY_DCA_v1 は user 手動・月次・SPY のみ。"
  },
  "vix_trend": [
    {
      "date": "2026-05-05",
      "v": 16.2
    },
    {
      "date": "2026-05-06",
      "v": 16.85
    },
    {
      "date": "2026-05-07",
      "v": 17.1
    },
    {
      "date": "2026-05-08",
      "v": 17.65
    },
    {
      "date": "2026-05-09",
      "v": 18.05
    },
    {
      "date": "2026-05-11",
      "v": 18.38
    },
    {
      "date": "2026-05-12",
      "v": 17.99
    },
    {
      "date": "2026-05-13",
      "v": 17.87
    },
    {
      "date": "2026-05-14",
      "v": 17.26
    },
    {
      "date": "2026-05-15",
      "v": 18.43
    },
    {
      "date": "2026-05-26",
      "v": 16.93
    },
    {
      "date": "2026-05-27",
      "v": 16.92
    },
    {
      "date": "2026-05-28",
      "v": 15.66
    },
    {
      "date": "2026-05-29",
      "v": 15.34
    },
    {
      "date": "2026-05-30",
      "v": 15.32
    },
    {
      "date": "2026-05-31",
      "v": 15.32
    }
  ],
  "weekly_pnl": {
    "capital": 4237,
    "week_start": "2026-06-21",
    "week_end": "2026-06-25",
    "total_pnl_usd": 0.0,
    "total_pnl_pct": 0.0,
    "n_trades": 0,
    "n_wins": 0,
    "win_rate": 0.0,
    "days": [
      {
        "date": "2026-06-21",
        "dow": "Sun",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-06-22",
        "dow": "Mon",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-06-23",
        "dow": "Tue",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-06-24",
        "dow": "Wed",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-06-25",
        "dow": "Thu",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      }
    ],
    "trades": [],
    "by_strategy": [],
    "note": "daily_history から動的生成 (直近 5 営業日)、 by_strategy + trades は closed_positions ベース"
  },
  "short_summary": {
    "today": {
      "realized_net": 0,
      "realized_gross": 0,
      "commission_total": 0,
      "n_trades": 0,
      "n_wins": 0,
      "n_losses": 0,
      "win_rate_pct": null,
      "phantom_count": 0,
      "tickers": []
    },
    "week": {
      "realized_net": 0,
      "realized_gross": 0,
      "commission_total": 0,
      "n_trades": 0,
      "n_wins": 0,
      "n_losses": 0,
      "win_rate_pct": null,
      "phantom_count": 0,
      "tickers": []
    },
    "total": {
      "realized_net": -48.34,
      "live_start_date": "2026-05-11",
      "n_days_traded": 6,
      "n_days_profit": 3,
      "n_days_loss": 3,
      "n_trades_total": 14,
      "avg_daily_pnl": -8.06,
      "_note": "5/11 LIVE 開始〜、 daily_history 累計 (5/18 以前 6 trade は archived、 詳細は週次 tab 参照不可)"
    },
    "open": {
      "n_positions": 0,
      "cost_total": 0.0,
      "value_total": 0.0,
      "unrealized": 0.0,
      "positions": []
    },
    "week_start": "2026-06-21",
    "week_end": "2026-06-25",
    "today_date": "2026-06-25",
    "_note": "統一 summary、 PWA 短期/短vs長/週次 tab で参照、 二重計算禁止"
  },
  "signals_today": [],
  "signals_pending": [
    {
      "ticker": "COP",
      "strategy": "Confluence_RSIStoch_v1",
      "tier": "",
      "trigger": "Confluence_RSIStoch_v1",
      "ref_price": 106.92,
      "target_tp_pct": 4.0,
      "hold": 3,
      "selected": true,
      "shares": null,
      "sector": "Energy"
    },
    {
      "ticker": "XLE",
      "strategy": "Confluence_RSIStoch_v1",
      "tier": "",
      "trigger": "Confluence_RSIStoch_v1",
      "ref_price": 53.57,
      "target_tp_pct": 4.0,
      "hold": 3,
      "selected": true,
      "shares": null,
      "sector": "Energy"
    },
    {
      "ticker": "SLV",
      "strategy": "Confluence_RSIStoch_v1",
      "tier": "",
      "trigger": "Confluence_RSIStoch_v1",
      "ref_price": 51.78,
      "target_tp_pct": 4.0,
      "hold": 3,
      "selected": true,
      "shares": null,
      "sector": "Commodity"
    },
    {
      "ticker": "GLD",
      "strategy": "Confluence_RSIStoch_v1",
      "tier": "",
      "trigger": "Confluence_RSIStoch_v1",
      "ref_price": 365.92,
      "target_tp_pct": 4.0,
      "hold": 3,
      "selected": false,
      "shares": null,
      "sector": "Other"
    }
  ],
  "positions": [
    {
      "ticker": "VZ",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 45.818775,
      "shares": 4.0,
      "entry_value": 183.2751,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 182.25,
      "_unreal_pnl": -1.02,
      "_market_price": 45.5634918,
      "current_price": 45.63999938964844,
      "pnl_pct": -0.39017981242747135,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 45.818775,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 44.44421175,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 41.236897500000005,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "ETN",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 419.1115,
      "shares": 1.0,
      "entry_value": 419.1115,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 419.57,
      "_unreal_pnl": 0.46,
      "_market_price": 419.5733948,
      "current_price": 419.45001220703125,
      "pnl_pct": 0.08076900944766763,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 419.1115,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 406.53815499999996,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 377.20035,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "MRK",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 117.7415,
      "shares": 1.0,
      "entry_value": 117.7415,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 122.96,
      "_unreal_pnl": 5.22,
      "_market_price": 122.96202085,
      "current_price": 122.65499877929688,
      "pnl_pct": 4.173123987121685,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 117.7415,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 114.209255,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 105.96735000000001,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "KO",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 81.46635,
      "shares": 2.0,
      "entry_value": 162.9327,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 161.12,
      "_unreal_pnl": -1.81,
      "_market_price": 80.559021,
      "current_price": 80.58000183105469,
      "pnl_pct": -1.0879929798564891,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 81.46635,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 79.02235950000001,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 73.319715,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    }
  ],
  "intraday_patterns": [],
  "intraday_positions": [],
  "strategies": [
    {
      "name": "Confluence_RSIStoch_v1",
      "tier": "SS+",
      "priority": 100,
      "tp": 4.0,
      "sl": -10.0,
      "monthly_usd": 104.3,
      "win": 65.0,
      "hold": 3
    },
    {
      "name": "Sector_FriPanic_v1",
      "tier": "S",
      "priority": 60,
      "tp": 4.0,
      "sl": -10.0,
      "monthly_usd": 20.0,
      "win": 60.0,
      "hold": null
    },
    {
      "name": "Pullback_v1",
      "tier": "S-",
      "priority": 48,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 15.0,
      "win": 53.0,
      "hold": 3
    },
    {
      "name": "Drop5d_BroadPanic",
      "tier": "A+",
      "priority": 42,
      "tp": 5.06,
      "sl": -10.0,
      "monthly_usd": 7.5,
      "win": 65.0,
      "hold": 1
    }
  ],
  "tracker_strategies": [
    {
      "tier": "SSS",
      "name": "融合Champ DCA",
      "cat": "長期積立 (柱)",
      "tickers": "NVDA / PWR / COST / LLY / GOOG",
      "condition": "月次 $1,800 入金 (Mon DCA は木曜前倒し: 5/13, 5/14, 5/15)",
      "hold": "長期保有 (rebalance 時のみ見直し)",
      "freq": "月次 $1,800 (年 $21,600)",
      "sharpe": "★ 過去実 DCA 11年 = $1,040,044 (元本 $64,800 → 16.05x、 実効 CAGR +28.7%) ★ ST613 実データ",
      "live": "✅ 本番運用中 (資産形成の柱)",
      "memo": "【実績 2015-05→2026-05 月$1,800×36ヶ月 DCA + 8年放置】 NVDA $828k(×63.9) PWR $214k LLY $126k GOOG $79k COST $63k = $1.04M。 比較 SPY 単独 $138k (×2.1)。 $1k 月益 $114 = 短期 7戦略 ($26.9) の 4.2倍効率",
      "monthly_profit_usd": null,
      "_monthly_profit_note": "5/22 user 「月利益表示なし」 で hide、 11年実績は memo 参照",
      "per_share_profit_usd": 200,
      "_per_share_basis": "11年 hold 累積 (= NVDA +$180/COST +$700/AVGO +$1500 etc 平均 ~$200)",
      "_per_share_source": "11年 実績"
    },
    {
      "tier": "SS+ (Momentum regime-balanced)",
      "name": "CrossSec_Mom_v1 (月初 cross-sec 12-1 top 20%)",
      "cat": "M 柱 momentum (calm/stress regime-balanced 双子)",
      "tickers": "全 193 watchlist 月初 rank",
      "condition": "月初 trading day で 12-1 cross-sec rank top 20% → 翌寄 MOO BUY → 20d hold (TP+12/SL-8)",
      "hold": "20日",
      "freq": "n=565 OOS / 約 35 sig/月 (月初 batch)",
      "sharpe": "cost+4.02% $/株/月=$9.01 %/月=+4.22% N_eff+0.64 (Momentum_12_1 と 0.43 部分独立)",
      "live": "✅ size_mult=0.73",
      "memo": "5/24 BIMETSX M 柱 案 C deploy、 regime-balanced で calm/stress 自然分担、 stress Sharpe 6.94。",
      "monthly_profit_usd": 939.81,
      "_signals_per_month": 35.0,
      "_r2_n": 565,
      "_r2_mean_pct": 4.02,
      "_per_trade_usd": 36.78,
      "_position_basis": 915,
      "_monthly_full_size_usd": 1287.4,
      "_size_mult_current": 0.6
    },
    {
      "tier": "SS+ (Trend breakout)",
      "name": "Bull_Trend_Breakout_v1 (classic trend breakout)",
      "cat": "T 柱 trend follow (AI_Wave と独立)",
      "tickers": "全 193 watchlist breakout 検出",
      "condition": "C > SMA200 ∧ SMA50 > SMA200 ∧ C > 20d high(shift1) → 翌寄 MOO BUY → 20d hold (TP+10/SL-7)",
      "hold": "20日",
      "freq": "n=1181 OOS / 約 74 sig/月 (daily cap 5/日 で抑制)",
      "sharpe": "cost+1.23%/trade $/株/月=$2.25 %/月=+1.60% N_eff+0.86 AI_Wave corr 0.01",
      "live": "✅ size_mult=0.73",
      "memo": "5/24 BIMETSX T 柱 2 本目、 daily fire cap 5/日 主防衛、 主リスク=calm whipsaw。 R2 1 週 fail-safe。",
      "monthly_profit_usd": 607.97,
      "_signals_per_month": 74.0,
      "_r2_n": 1181,
      "_r2_mean_pct": 1.23,
      "_per_trade_usd": 11.25,
      "_position_basis": 915,
      "_monthly_full_size_usd": 832.83,
      "_size_mult_current": 0.25
    },
    {
      "tier": "SS+ (Earnings drift)",
      "name": "PEAD_SUE_60d_v1 (60d post-earnings drift 累積)",
      "cat": "E 柱 earnings drift (PreEarn と完全独立)",
      "tickers": "earnings CSV カバー watchlist 個別株 ~150 ticker",
      "condition": "earnings 当日 gap up >= +1.86% (80%-tile) → 翌 MOO BUY → 60d hold (TP+15/SL-10)",
      "hold": "60日",
      "freq": "n=157 OOS / 約 10 sig/月",
      "sharpe": "cost+8.75%/trade $/株/月=$2.62 %/月=+3.06% N_eff+0.83 PreEarn corr 0.02 完全独立",
      "live": "✅ size_mult=0.73",
      "memo": "5/25 PEAD 60d 別仮説 PASS、 旧 PEAD_SUE_Top20 (20d hold) は anti-edge dispose。 Bernard-Thomas 1990 / Ball-Brown 1968 文献根拠。 E 柱 真 2 本立て 復活。",
      "monthly_profit_usd": 584.46,
      "_signals_per_month": 10.0,
      "_r2_n": 157,
      "_r2_mean_pct": 8.75,
      "_per_trade_usd": 80.06,
      "_position_basis": 915,
      "_monthly_full_size_usd": 800.62,
      "_size_mult_current": 0.25
    },
    {
      "tier": "SS (Trend breakout)",
      "name": "AI_Wave_Momentum_v1 (2023-2024 AI winners momentum) ★ swap h18 wide",
      "cat": "短期 theme momentum",
      "tickers": "8 AI winners (NVDA/SMCI/AVGO/AMD/PLTR/META/MSFT/GOOG)",
      "condition": "20d return >= +15% (momentum confirmed) → 翌 MOO BUY → 18d hold (TP+10/SL-10 wide)",
      "hold": "14日",
      "freq": "n=978、 月 12.76 sig",
      "sharpe": "R2 OOS: eff $20.50/slot mean+1.21%/trade OOS+2.96%",
      "live": "✅ size_mult=1.0",
      "memo": "batch7 で発見 → sim_5strats_sweet_spot で h10→h18 + narrow→wide bracket swap → 月益 $111→$224 (2×)、 OOS+0.61→+2.96% (5×)、 portfolio 最強級 alpha source。",
      "monthly_profit_usd": 141.27,
      "_signals_per_month": 12.76,
      "_r2_n": 978,
      "_r2_mean_pct": 1.21,
      "_r2_sharpe": null,
      "_per_trade_usd": 11.07,
      "_position_basis": 915,
      "_monthly_full_size_usd": 141.27,
      "_size_mult_current": 1.0
    },
    {
      "tier": "S+ (Bear/Panic 平均回帰)",
      "name": "Semi_Equip_Dip_v1 (CHIPS Act semi装備 dip buying)",
      "cat": "短期 sector dip",
      "tickers": "7 semi equipment (AMAT/KLAC/LRCX/TSM/ASML/AVGO/SMH)",
      "condition": "-3% 1d dip → 翌 MOO BUY → 20d hold (TP+8/SL-10)",
      "hold": "5日",
      "freq": "n=713、 約 9 sig/月",
      "sharpe": "R2 OOS: mean+1.34% $/mo=$72",
      "live": "✅ size_mult=0.73",
      "memo": "batch8 JJ_semi_d3_h20 → R2 verified、 CHIPS Act onshoring 受益 semi 装備 dip pattern。",
      "monthly_profit_usd": 78.5,
      "_signals_per_month": 8.77,
      "_r2_n": 713,
      "_r2_mean_pct": 1.34,
      "_per_trade_usd": 12.26,
      "_position_basis": 915,
      "_monthly_full_size_usd": 107.53,
      "_size_mult_current": 0.5
    },
    {
      "tier": "S+ (Earnings drift)",
      "name": "PreEarnings_T30_T5_Industrial (Industrial sector boost)",
      "cat": "短期 期待形成 (pre-announce drift Industrial限定)",
      "tickers": "13 Industrial tickers (SECTOR_MAP='Industrial')",
      "condition": "PreEarnings_T30_T5 と同じ signal + Industrial sector 限定",
      "hold": "18日",
      "freq": "n=334、 約 4.3 sig/月",
      "sharpe": "R2 OOS: Sh+5.35 mean+1.571% (broad +0.607% の 2.6× edge) $/mo=$59.52",
      "live": "✅ size_mult=1.0",
      "memo": "batch4 N_preearn_industrial 発見、 sector booster 配線。",
      "monthly_profit_usd": 34.79,
      "_signals_per_month": 2.42,
      "_r2_win_pct": null,
      "_r2_mean_pct": 1.571,
      "_r2_sharpe": 5.35,
      "_per_trade_usd": 14.37,
      "_position_basis": 915,
      "_monthly_full_size_usd": 34.79,
      "_size_mult_current": 1.0
    },
    {
      "tier": "S",
      "name": "Hi52w_Pullback10_RSI40_v1 (52w high -10% pullback + RSI<40)",
      "cat": "momentum leader pullback",
      "tickers": "全 watchlist (>=252d history)、 top fire: KLAC/APH/ADI/PH/WAB",
      "condition": "252d 高値からの pull <= -10% AND RSI(14)<40 → 翌 MOO BUY → 7d hold (TP+7/SL-8)",
      "hold": "7日",
      "freq": "n=8888 (TRAIN+OOS)、 約 46 sig/月 (高頻度)",
      "sharpe": "Sh+0.66 OOS+0.23% win=53.8% $/mo=$223",
      "live": "⛔ paper:true (整地で hide)",
      "memo": "F2 discovery (discover_cross_stock_5_24) 結果、 OOS ≥ TRAIN robust、 Jaccard <0.05 全 LIVE で完全 incremental。 momentum leader の押し目買い、 Semis/Industrials cluster。",
      "monthly_profit_usd": 23.15,
      "_signals_per_month": 46.0,
      "_r2_n": 8888,
      "_r2_win_pct": 53.8,
      "_r2_mean_pct": 0.22,
      "_r2_sharpe": 0.63,
      "_oos_n": 2022,
      "_oos_mean_pct": 0.23,
      "_oos_sharpe": 0.66,
      "_per_trade_usd": 2.01,
      "_position_basis": 915,
      "_monthly_full_size_usd": 92.6,
      "_size_mult_current": 0.25
    },
    {
      "tier": "S",
      "name": "QQQ_50d_BreakBounce_v1 (QQQ 50d SMA fake breakdown reversal)",
      "cat": "macro index inflection",
      "tickers": "QQQ のみ",
      "condition": "QQQ 50d SMA 割れ後 10d 以内 + 5d return >+3% + 現値 SMA50 の -5%〜+2% 範囲 → 翌 MOO BUY → 5d hold (TP+4/SL-5)",
      "hold": "5日",
      "freq": "n=79、 約 4-5 sig/月",
      "sharpe": "Sh+3.50 OOS+0.91% win=67% $/mo=$10.53",
      "live": "⛔ paper:true (整地で hide)",
      "memo": "discover_index_inflection_5_24 T2 発見、 Jaccard 全 LIVE 0 = 完全直交、 fake breakdown reversal pattern。",
      "monthly_profit_usd": 18.73,
      "_signals_per_month": 4.5,
      "_r2_n": 79,
      "_r2_win_pct": 58,
      "_r2_sharpe": 1.87,
      "_oos_n": 15,
      "_oos_mean_pct": 0.91,
      "_oos_sharpe": 3.5,
      "_per_trade_usd": 8.33,
      "_position_basis": 915,
      "_monthly_full_size_usd": 37.47,
      "_size_mult_current": 0.5
    },
    {
      "tier": "S (Momentum regime-balanced)",
      "name": "Momentum_12_1_v1 (Jegadeesh-Titman classic factor)",
      "cat": "短期 momentum factor",
      "tickers": "全 193 watchlist",
      "condition": "月初 trading day で 12-1 (= 252d return 除 21d) >= +20% → 翌 MOO BUY → 21d hold",
      "hold": "5日",
      "freq": "n=6115、 約 6 sig/月 (低頻度)",
      "sharpe": "R2: Sh+0.73 OOS+0.28% $/mo=$239",
      "live": "✅ size_mult=0.73",
      "memo": "batch6 X_mom_12_1_h21 → R2 verified bit-precision、 Jegadeesh-Titman 1993 / Carhart 1997 classic momentum。",
      "monthly_profit_usd": 26.89,
      "_signals_per_month": 11.0,
      "_r2_n": 6115,
      "_r2_win_pct": 52.6,
      "_r2_mean_pct": 0.366,
      "_r2_sharpe": 0.73,
      "_per_trade_usd": 3.35,
      "_position_basis": 915,
      "_monthly_full_size_usd": 36.84,
      "_size_mult_current": 0.4
    },
    {
      "tier": "S (Bear/Panic 平均回帰)",
      "name": "Drop5d_BroadPanic (MOC 復活)",
      "cat": "短期 mean-reversion (intraday)",
      "tickers": "100銘柄 watchlist",
      "condition": "chg5<-12% + SPY 5日<-5% (broad market panic)",
      "hold": "当日 寄→引 MOC",
      "freq": "年 30〜80 件 (broad panic 時)",
      "sharpe": "MOC化 Sh+1.98 win 55% mean+0.96% (n=36820, ovn+0.91 から 2倍化 ST596)",
      "live": "✅ size_mult=0.73",
      "memo": "一度廃案後 ST596 で intraday 復活、 同日 15:00 CT MOC SELL 自動",
      "monthly_profit_usd": 13.32,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.96%",
      "_backtest_n": 851,
      "_backtest_sharpe": 0.52,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null,
      "_signals_per_month": 11.08,
      "_r2_n": 851,
      "_r2_win_pct": 62.0,
      "_r2_mean_pct": 0.18,
      "_r2_sharpe": 0.52,
      "_per_trade_usd": 1.65,
      "_position_basis": 915,
      "_monthly_full_size_usd": 18.25,
      "_size_mult_current": 0.7
    },
    {
      "tier": "S (Bear/Panic 平均回帰)",
      "name": "Pullback_v1 (SMA50>SMA200 + RSI<35 pullback → 3日hold MOO) ⭐⭐ BULL",
      "cat": "短期 pullback",
      "tickers": "GOOGL / META / AVGO / KLAC / AMAT / XLK (6 銘柄、 monitor.py 自動 entry, max 5 同時)",
      "condition": "SMA50>SMA200 (uptrend) AND RSI(14)<35 (oversold) AND 前日 RSI>=35 (fresh) → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 full Sh+3.39 vs 5d+3.11)",
      "freq": "銘柄毎 年 3〜6 件 × 6 = 年 18-36 件 (bull 期 main alpha source)",
      "sharpe": "ST680 (5/17 03:46): GOOGL Sh+6.87 / META +6.81 / AVGO +6.22 / KLAC +6.17 / AMAT +4.97 / XLK +4.05 win 60-70% n=53-65 [全 4/4 regime pass]",
      "live": "✅ size_mult=0.73",
      "memo": "bull 戦略 main: SMA50>SMA200 uptrend 中の RSI<35 一時 oversold を拾う classic pullback。 SOXX/NVDA は 3/4 で次候補。 期待年率 +18% (booster なし base) — 採用済 9 戦略中最強",
      "monthly_profit_usd": 15.1,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.29%",
      "_backtest_n": 195,
      "_backtest_sharpe": 5.39,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null,
      "_signals_per_month": 2.54,
      "_r2_n": 195,
      "_r2_win_pct": 73.0,
      "_r2_mean_pct": 0.89,
      "_r2_sharpe": 5.39,
      "_per_trade_usd": 8.14,
      "_position_basis": 915,
      "_monthly_full_size_usd": 20.68,
      "_size_mult_current": 0.5
    },
    {
      "tier": "SS+ (Insider idiosyncratic)",
      "name": "Insider_Dir200k_v1 (H5_Dir_200k single)",
      "cat": "I 柱 insider (market-neutral idiosyncratic)",
      "tickers": "watchlist 個別株 (openinsider P-buy データある ticker)",
      "condition": "openinsider P-buy ∧ title=\"Dir\" ∧ value_usd >= $200,000 → 翌寄 MOO BUY → 60d hold (TP+15/SL-15)",
      "hold": "60日",
      "freq": "n=357 OOS 6yr / 月 ≈ 5 sig/月 期待",
      "sharpe": "cost+9.45%/trade SPY corr-0.109 stress維持 N_eff+0.87、 5 variant 中エッジ最強 + 最独立",
      "live": "✅ size_mult=0.73",
      "memo": "5/25 BIMETSX I 柱 1 本目 Step 1-3 配線完了。 paper:true で executor skip 安全状態、 scrape 1週連続稼働確認後 paper→live flip で I 柱完成 = F7 7 軸 全 LIVE 達成。 H5 単独 (= 他 4 variant は intra-axis 増殖罠で禁忌)。",
      "monthly_profit_usd": 315.61,
      "_monthly_full_size_usd": 118,
      "_per_trade_usd": 86.46,
      "_size_mult_current": 0,
      "_position_basis": 915,
      "_signals_per_month": 5,
      "_r2_n": 357,
      "_r2_mean_pct": 9.45
    },
    {
      "tier": "ANTI",
      "name": "🚫 Drop5d_BroadPanic SKIP when [next_gap_pct>=+3]",
      "cat": "Anti-pattern filter (= 条件一致で signal skip)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "next_gap_pct>=+3",
      "hold": "—",
      "freq": "—",
      "sharpe": "翌寄 +3% gap で BroadPanic は壊滅 (win 23-28%, n=85, ΔSh-13)",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Drop5d_BroadPanic の signal 発火時、 filter=next_gap_pct>=+3 一致なら action=skip (= 発注 skip)。 理由: 翌寄 +3% gap で BroadPanic は壊滅 (win 23-28%, n=85, ΔSh-13)",
      "monthly_profit_usd": 11.96,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.11,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.96%"
    },
    {
      "tier": "ANTI",
      "name": "🚫 Drop5d_BroadPanic SKIP when [weekday=Tuesday]",
      "cat": "Anti-pattern filter (= 条件一致で signal skip)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "weekday=Tuesday",
      "hold": "—",
      "freq": "—",
      "sharpe": "火曜 anti-edge (win 36-42%, n=102, ΔSh-9.63)",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Drop5d_BroadPanic の signal 発火時、 filter=weekday=Tuesday 一致なら action=skip (= 発注 skip)。 理由: 火曜 anti-edge (win 36-42%, n=102, ΔSh-9.63)",
      "monthly_profit_usd": 11.96,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.11,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.96%"
    },
    {
      "tier": "S (Bear/Panic 平均回帰)",
      "name": "HYG_LQD_QQQ_v1 (信用 spread blowout → QQQ rebound)",
      "cat": "macro (credit spread → equity)",
      "tickers": "QQQ のみ",
      "condition": "HYG/LQD ratio が直近 126d 分布の bottom 15% percentile 以下 → 翌 MOO QQQ BUY → 5d hold (TP+4/SL-4)",
      "hold": "5日",
      "freq": "n=147、 約 2.5 sig/月 (rare、 macro shock 同期)",
      "sharpe": "Sh+4.97 OOS+0.53% win=66% $/mo=$11.76",
      "live": "✅ size_mult=0.73",
      "memo": "R12-C discover_bond_stress_5_23 発見、 R14-C 同類 macro 軸全滅の中で唯一生存。 HYG (高利回り) / LQD (投資適格) 比率の信用 spread blowout を bond で検知 → QQQ で mean rev、 5d hold で slot rotation 最速 (LIVE 中最短 hold 帯)、 Jaccard 0.001 既存 LIVE 全部と直交。 user adoption priority 「hold 短ければ短いほうがいい」 充足。",
      "monthly_profit_usd": 12.86,
      "_signals_per_month": 2.5,
      "_r2_n": 147,
      "_r2_win_pct": 66.0,
      "_r2_mean_pct": 0.77,
      "_r2_sharpe": 4.97,
      "_oos_n": 23,
      "_oos_mean_pct": 0.53,
      "_per_trade_usd": 7.05,
      "_position_basis": 915,
      "_monthly_full_size_usd": 17.61,
      "_size_mult_current": 0.4
    },
    {
      "tier": "S (Sector Rotation contrarian)",
      "name": "SectorRotation_Laggard_v1 (6 軸目 contrarian)",
      "cat": "S 柱 sector rotation (月次 平均回帰)",
      "tickers": "SPDR sector ETF 11: XLF/XLE/XLI/XLY/XLP/XLV/XLK/XLB/XLU/XLRE/XLC",
      "condition": "月初 trading day で 過去 60d return 下位 2 sector ETF → 翌寄 MOO BUY → 20d hold (TP+10/SL-7)",
      "hold": "20日",
      "freq": "n=26 OOS / 約 1.6 sig/月 (月初 2 件)",
      "sharpe": "cost+1.83% $/株/月=$1.13 %/月=+1.92% N_eff+0.79 CrossSec corr 0.00 完全直交 stress 0.38 要注視",
      "live": "✅ size_mult=0.73",
      "memo": "5/24 BIMETSX 6 軸目 S 柱 確立、 ST348 復活 PASS。 sector level contrarian (NOT momentum)、 月次 horizon 過剰反応の揺り戻し thesis。 stress 0.38 で R2 1 週注視必須。",
      "monthly_profit_usd": 19.56,
      "_signals_per_month": 1.6,
      "_r2_n": 26,
      "_r2_mean_pct": 1.83,
      "_per_trade_usd": 16.74,
      "_position_basis": 915,
      "_monthly_full_size_usd": 26.79,
      "_size_mult_current": 0.25
    },
    {
      "tier": "S (Bear/Panic 平均回帰)",
      "name": "Buffett_VIX20_Panic_v1 (Berkshire RSI<35 + VIX>20 panic dip)",
      "cat": "短期 panic dip (Berkshire universe)",
      "tickers": "11 Berkshire holdings (AAPL/BAC/KO/AXP/MCO/OXY/CVX/KHC/MA/V/VZ)",
      "condition": "RSI(14)<35 + close>SMA200*0.95 + **VIX>20** → 翌 MOO BUY → 10d hold (TP+10/SL-10)",
      "hold": "10日",
      "freq": "n=386、 月 5.04 sig",
      "sharpe": "R2 OOS: eff $10.90/slot mean+0.32%/trade OOS+1.33%",
      "live": "✅ size_mult=0.73",
      "memo": "sim_pre_reversal_filters 発見 → ≤10d 検証 → wide bracket sweep の 3 段最適化、 panic regime での Buffett pullback を h10 で capital efficient に捕捉。 旧 h120 比で eff 4× 改善、 capital lock 1/12。",
      "monthly_profit_usd": 10.77,
      "_signals_per_month": 5.04,
      "_r2_n": 386,
      "_r2_mean_pct": 0.32,
      "_r2_sharpe": null,
      "_per_trade_usd": 2.93,
      "_position_basis": 915,
      "_monthly_full_size_usd": 14.76,
      "_size_mult_current": 0.3
    },
    {
      "tier": "BOOST",
      "name": "⚡ Pullback_v1 ×2.0 when [vix_20_25]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "vix_20_25",
      "hold": "hold_override=3",
      "freq": "n=68 過去 evidence",
      "sharpe": "期待 ΔSh +6.0",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Pullback_v1 の signal 発火時、 filter=vix_20_25 一致なら size×2.0 適用 (= hold_override=3)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": 20.26,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.84,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.29%"
    }
  ],
  "tracker_tickers": [
    {
      "ticker": "AAPL",
      "name": "Apple Inc.",
      "reading": "アップル",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Consumer Electronics",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "ABNB",
      "name": "Airbnb, Inc.",
      "reading": "エアビーアンドビー",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Travel Services",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "ADI",
      "name": "Analog Devices, Inc.",
      "reading": "アナログ・デバイセズ",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "AEHR",
      "name": "Aehr Test Systems, Inc.",
      "reading": "エアー・テスト・システムズ",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "AEIS",
      "name": "Advanced Energy Industries, Inc.",
      "reading": "アドバンスト・エナジー",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Electrical Equipment & Parts",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "AGL",
      "name": "agilon health, inc.",
      "reading": "アグライア・テラピューティクス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Care Facilities",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "AGX",
      "name": "Argan, Inc.",
      "reading": "アーガン",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "ALSN",
      "name": "Allison Transmission Holdings, Inc.",
      "reading": "アリソン・トランスミッション",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Parts",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "AMAT",
      "name": "Applied Materials, Inc.",
      "reading": "アプライド・マテリアルズ",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "AMPX",
      "name": "Amprius Technologies, Inc.",
      "reading": "アンプリエックス・パワー",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Electrical Equipment & Parts",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "AMZN",
      "name": "Amazon.com, Inc.",
      "reading": "アマゾン・ドットコム",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Internet Retail",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "ANET",
      "name": "Arista Networks, Inc.",
      "reading": "アリスタ・ネットワークス",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Computer Hardware",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "APD",
      "name": "Air Products and Chemicals, Inc.",
      "reading": "エア・プロダクツ",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Specialty Chemicals",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "AVGO",
      "name": "Broadcom Inc.",
      "reading": "ブロードコム",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "AXP",
      "name": "American Express Company",
      "reading": "アメリカン・エキスプレス",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Credit Services",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "BAC",
      "name": "Bank of America Corporation",
      "reading": "バンク・オブ・アメリカ",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Banks - Diversified",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "BAX",
      "name": "Baxter International Inc.",
      "reading": "バクスター・インターナショナル",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Instruments & Supplies",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "BWA",
      "name": "BorgWarner Inc.",
      "reading": "ボーグワーナー",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Parts",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CAH",
      "name": "Cardinal Health, Inc.",
      "reading": "カーディナル・ヘルス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Distribution",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "CF",
      "name": "CF Industries Holdings, Inc.",
      "reading": "CF インダストリーズ",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Agricultural Inputs",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CLSK",
      "name": "CleanSpark, Inc.",
      "reading": "クリーンスパーク",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Capital Markets",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "COHU",
      "name": "Cohu, Inc.",
      "reading": "コーフー",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "COP",
      "name": "ConocoPhillips",
      "reading": "コノコフィリップス",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas E&P",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "COST",
      "name": "Costco Wholesale Corporation",
      "reading": "コストコ・ホールセール",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Discount Stores",
      "is_champ": true,
      "strategies": []
    },
    {
      "ticker": "CRM",
      "name": "Salesforce, Inc.",
      "reading": "セールスフォース",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Application",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CRSP",
      "name": "CRISPR Therapeutics AG",
      "reading": "クリスパー・セラピューティクス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "DE",
      "name": "Deere & Company",
      "reading": "ディア・アンド・カンパニー",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Farm & Heavy Construction Machinery",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "DNLI",
      "name": "Denali Therapeutics Inc.",
      "reading": "デナリ・セラピューティクス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "EBAY",
      "name": "eBay Inc.",
      "reading": "イーベイ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Internet Retail",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "EEM",
      "name": "iShares MSCI Emerging Markets ETF",
      "reading": "新興国株式 ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "新興国株式",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "EOG",
      "name": "EOG Resources, Inc.",
      "reading": "EOG リソーシズ",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas E&P",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "EQIX",
      "name": "Equinix, Inc.",
      "reading": "エクイニクス",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Specialty",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "EWJ",
      "name": "iShares MSCI Japan ETF",
      "reading": "日本株 ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "日本株 ETF",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "FIX",
      "name": "Comfort Systems USA, Inc.",
      "reading": "コンフォート・システムズ USA",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "FLR",
      "name": "Fluor Corporation",
      "reading": "フルア",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "FND",
      "name": "Floor & Decor Holdings, Inc.",
      "reading": "フロア&デコー",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Home Improvement Retail",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "FTAI",
      "name": "FTAI Aviation Ltd.",
      "reading": "FTAI アビエーション",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Aerospace & Defense",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "FTNT",
      "name": "Fortinet, Inc.",
      "reading": "フォーティネット",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Infrastructure",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "GLD",
      "name": "SPDR Gold Shares",
      "reading": "金 (商品) ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "金 (商品)",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "GOOG",
      "name": "Alphabet Inc.",
      "reading": "アルファベット (グーグル)",
      "sector_en": "Communication Services",
      "sector_jp": "通信",
      "industry": "Internet Content & Information",
      "is_champ": true,
      "strategies": []
    },
    {
      "ticker": "GOOGL",
      "name": "Alphabet Inc.",
      "reading": "アルファベット A (グーグル)",
      "sector_en": "Communication Services",
      "sector_jp": "通信",
      "industry": "Internet Content & Information",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "GPK",
      "name": "Graphic Packaging Holding Company",
      "reading": "グラフィック・パッケージング",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Packaging & Containers",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "HIW",
      "name": "Highwoods Properties, Inc.",
      "reading": "ハイウッズ・プロパティーズ",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Office",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "HOOD",
      "name": "Robinhood Markets, Inc.",
      "reading": "ロビンフッド",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Capital Markets",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "HYG",
      "name": "iShares iBoxx $ High Yield Corporate Bond ETF",
      "reading": "ハイイールド債券 ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "ハイイールド債券",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "ICHR",
      "name": "Ichor Holdings, Ltd.",
      "reading": "イチョール・ホールディングス",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "IP",
      "name": "International Paper Company",
      "reading": "インターナショナル・ペーパー",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Packaging & Containers",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "ITT",
      "name": "ITT Inc.",
      "reading": "アイティーティー",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Specialty Industrial Machinery",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "IWM",
      "name": "iShares Russell 2000 ETF",
      "reading": "iShares ラッセル2000",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "ラッセル 2000 (小型株)",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "JPM",
      "name": "JPMorgan Chase & Co.",
      "reading": "JP モルガン・チェース",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Banks - Diversified",
      "is_champ": false,
      "strategies": [
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "KBR",
      "name": "KBR, Inc.",
      "reading": "KBR (建設エンジニア)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "KLAC",
      "name": "KLA Corporation",
      "reading": "ケーエルエー",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "LIN",
      "name": "Linde plc",
      "reading": "リンデ",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Specialty Chemicals",
      "is_champ": false,
      "strategies": [
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "LITE",
      "name": "Lumentum Holdings Inc.",
      "reading": "ルメンタム",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Communication Equipment",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "LLY",
      "name": "Eli Lilly and Company",
      "reading": "イーライリリー",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Drug Manufacturers - General",
      "is_champ": true,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "LNG",
      "name": "Cheniere Energy, Inc.",
      "reading": "シェニエール・エナジー",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Midstream",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "LRCX",
      "name": "Lam Research Corporation",
      "reading": "ラム・リサーチ",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductor Equipment & Materials",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "M",
      "name": "Macy's, Inc.",
      "reading": "メイシーズ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Department Stores",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "MA",
      "name": "Mastercard Incorporated",
      "reading": "マスターカード",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Credit Services",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "MAR",
      "name": "Marriott International, Inc.",
      "reading": "マリオット・インターナショナル",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Lodging",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "META",
      "name": "Meta Platforms, Inc.",
      "reading": "メタ・プラットフォームズ",
      "sector_en": "Communication Services",
      "sector_jp": "通信",
      "industry": "Internet Content & Information",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "MS",
      "name": "Morgan Stanley",
      "reading": "モルガン・スタンレー",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Capital Markets",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "MSFT",
      "name": "Microsoft Corporation",
      "reading": "マイクロソフト",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Infrastructure",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "NVDA",
      "name": "NVIDIA Corporation",
      "reading": "エヌビディア",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": true,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "OLLI",
      "name": "Ollie's Bargain Outlet Holdings, Inc.",
      "reading": "オリーズ・バーゲン・アウトレット",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Discount Stores",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "ON",
      "name": "ON Semiconductor Corporation",
      "reading": "オン・セミコンダクター",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "PANW",
      "name": "Palo Alto Networks, Inc.",
      "reading": "パロアルト・ネットワークス",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Infrastructure",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "PH",
      "name": "Parker-Hannifin Corporation",
      "reading": "パーカー・ハネフィン",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Specialty Industrial Machinery",
      "is_champ": false,
      "strategies": [
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "PRIM",
      "name": "Primoris Services Corporation",
      "reading": "プリモリス・サービシズ",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "PSX",
      "name": "Phillips 66",
      "reading": "フィリップス 66",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Refining & Marketing",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "PWR",
      "name": "Quanta Services, Inc.",
      "reading": "クォンタ・サービシズ",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": true,
      "strategies": []
    },
    {
      "ticker": "QCOM",
      "name": "QUALCOMM Incorporated",
      "reading": "クアルコム",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "QQQ",
      "name": "Invesco QQQ Trust",
      "reading": "インベスコ QQQ (ナスダック100)",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "ナスダック 100 (テック中心)",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "SE",
      "name": "Sea Limited",
      "reading": "シー・リミテッド",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Internet Retail",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SLB",
      "name": "SLB N.V.",
      "reading": "シュルンベルジェ",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Equipment & Services",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SLDB",
      "name": "Solid Biosciences Inc.",
      "reading": "ソリッド・バイオサイエンス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SLV",
      "name": "iShares Silver Trust",
      "reading": "iShares シルバー・トラスト",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "銀コモディティ",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "SMH",
      "name": "VanEck Semiconductor ETF",
      "reading": "ヴァンエック半導体",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "半導体 (VanEck)",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "SNPS",
      "name": "Synopsys, Inc.",
      "reading": "シノプシス",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Infrastructure",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SOFI",
      "name": "SoFi Technologies, Inc.",
      "reading": "ソーファイ・テクノロジーズ",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Credit Services",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SOXX",
      "name": "iShares Semiconductor ETF",
      "reading": "iShares 半導体",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "半導体 (iShares)",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "SPXL",
      "name": "Direxion Daily S&P500 Bull 3X Shares",
      "reading": "S&P500 3x レバレッジ ETF",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "S&P500 3x",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "SPY",
      "name": "State Street SPDR S&P 500 ETF Trust",
      "reading": "SPDR S&P 500 ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "S&P 500 全体",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "STLD",
      "name": "Steel Dynamics, Inc.",
      "reading": "スティール・ダイナミクス",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Steel",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "STRL",
      "name": "Sterling Infrastructure, Inc.",
      "reading": "スターリング・インフラ",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "TMUS",
      "name": "T-Mobile US, Inc.",
      "reading": "T モバイル US",
      "sector_en": "Communication Services",
      "sector_jp": "通信",
      "industry": "Telecom Services",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "TSLA",
      "name": "Tesla, Inc.",
      "reading": "テスラ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Manufacturers",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "TWST",
      "name": "Twist Bioscience Corporation",
      "reading": "ツイスト・バイオサイエンス",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Diagnostics & Research",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "V",
      "name": "Visa Inc.",
      "reading": "ビザ",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Credit Services",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "VC",
      "name": "Visteon Corporation",
      "reading": "ビスティオン (Visteon)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Parts",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "VGAS",
      "name": "Verde Clean Fuels, Inc.",
      "reading": "バーゴン (グリーン水素)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Renewable",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "VNO",
      "name": "Vornado Realty Trust",
      "reading": "ヴォルナード・リアルティ・トラスト",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Office",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "VRTX",
      "name": "Vertex Pharmaceuticals Incorporated",
      "reading": "バーテックス・ファーマシューティカルズ",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "VTI",
      "name": "Vanguard Total Stock Market Index Fund ETF Shares",
      "reading": "バンガード・トータル株式",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "米国株式全体",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "WCC",
      "name": "WESCO International, Inc.",
      "reading": "WESCO インターナショナル",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Industrial Distribution",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "WSM",
      "name": "Williams-Sonoma, Inc.",
      "reading": "ウィリアムズ・ソノマ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Specialty Retail",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "XLB",
      "name": "State Street Materials Select Sector SPDR ETF",
      "reading": "素材セクター ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "素材・セクター",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "XLE",
      "name": "State Street Energy Select Sector SPDR ETF",
      "reading": "エネルギー・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "エネルギー・セクター",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "XLF",
      "name": "State Street Financial Select Sector SPDR ETF",
      "reading": "フィナンシャル・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "金融・セクター",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "XLK",
      "name": "State Street Technology Select Sector SPDR ETF",
      "reading": "テクノロジー・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "テクノロジー・セクター",
      "is_champ": false,
      "strategies": [
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "XLU",
      "name": "State Street Utilities Select Sector SPDR ETF",
      "reading": "公益事業セクター ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "公共事業・セクター",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "XOM",
      "name": "Exxon Mobil Corporation",
      "reading": "エクソンモービル",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Integrated",
      "is_champ": false,
      "strategies": [
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "AMD",
      "name": "AMD (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "BSX",
      "name": "BSX (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CHD",
      "name": "CHD (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CHRW",
      "name": "CHRW (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CNC",
      "name": "CNC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CNP",
      "name": "CNP (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "COIN",
      "name": "COIN (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "COO",
      "name": "COO (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CTVA",
      "name": "CTVA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "CVX",
      "name": "CVX (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "D",
      "name": "D (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "DIA",
      "name": "DIA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "DLTR",
      "name": "DLTR (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ED",
      "name": "ED (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EG",
      "name": "EG (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EL",
      "name": "EL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EPAM",
      "name": "EPAM (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EQR",
      "name": "EQR (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EQT",
      "name": "EQT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EVRG",
      "name": "EVRG (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EWZ",
      "name": "EWZ (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "EXE",
      "name": "EXE (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FAS",
      "name": "FAS (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FAST",
      "name": "FAST (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FBTC",
      "name": "FBTC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FDS",
      "name": "FDS (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FDX",
      "name": "FDX (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FISV",
      "name": "FISV (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FITB",
      "name": "FITB (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FSLR",
      "name": "FSLR (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FTV",
      "name": "FTV (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "FXI",
      "name": "FXI (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "GEHC",
      "name": "GEHC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "GL",
      "name": "GL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "GM",
      "name": "GM (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "HD",
      "name": "HD (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "IBIT",
      "name": "IBIT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "INDA",
      "name": "INDA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "INTC",
      "name": "INTC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "J",
      "name": "J (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "KDP",
      "name": "KDP (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "KWEB",
      "name": "KWEB (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "LOW",
      "name": "LOW (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MARA",
      "name": "MARA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MGM",
      "name": "MGM (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MRNA",
      "name": "MRNA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MSCI",
      "name": "MSCI (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MSTR",
      "name": "MSTR (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MTB",
      "name": "MTB (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "MU",
      "name": "MU (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NCLH",
      "name": "NCLH (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NEE",
      "name": "NEE (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NFLX",
      "name": "NFLX (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NSC",
      "name": "NSC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NTAP",
      "name": "NTAP (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "NTRS",
      "name": "NTRS (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ODFL",
      "name": "ODFL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ORLY",
      "name": "ORLY (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "PODD",
      "name": "PODD (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "RBC",
      "name": "RBC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "RCL",
      "name": "RCL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "REGN",
      "name": "REGN (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "RIOT",
      "name": "RIOT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ROK",
      "name": "ROK (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ROL",
      "name": "ROL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SBAC",
      "name": "SBAC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SCHW",
      "name": "SCHW (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SHW",
      "name": "SHW (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SOXL",
      "name": "SOXL (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SPG",
      "name": "SPG (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SYK",
      "name": "SYK (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "SYY",
      "name": "SYY (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "TDG",
      "name": "TDG (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "TGT",
      "name": "TGT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "TLT",
      "name": "TLT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "TNA",
      "name": "TNA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "TQQQ",
      "name": "TQQQ (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "UBER",
      "name": "UBER (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "UNH",
      "name": "UNH (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "UPRO",
      "name": "UPRO (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "VRT",
      "name": "VRT (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "VST",
      "name": "VST (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "WAB",
      "name": "WAB (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "WBD",
      "name": "WBD (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "XBI",
      "name": "XBI (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "XLC",
      "name": "XLC (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "XLI",
      "name": "XLI (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "CPI_Cyclical",
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "XLP",
      "name": "XLP (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "XLRE",
      "name": "XLRE (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "XLV",
      "name": "XLV (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "CPI_Defensive",
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "XLY",
      "name": "XLY (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "CPI_Cyclical",
        "SectorRotation_Laggard_v1"
      ]
    },
    {
      "ticker": "YUM",
      "name": "YUM (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    },
    {
      "ticker": "ZBRA",
      "name": "ZBRA (auto-supplement)",
      "reading": "?",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": []
    }
  ],
  "daily_history": [
    {
      "date": "2026-05-11",
      "netliq": 11540.0,
      "day_pnl": -6.28,
      "cum_pnl_short": -6.28,
      "n_trades": 1,
      "vix": 18.38,
      "netliq_baseline": 11540.0,
      "netliq_delta": 0.0
    },
    {
      "date": "2026-05-12",
      "netliq": 11618.0,
      "day_pnl": 71.66,
      "cum_pnl_short": 65.38,
      "n_trades": 3,
      "vix": 17.99,
      "netliq_baseline": 11540.0,
      "netliq_delta": 78.0
    },
    {
      "date": "2026-05-13",
      "netliq": 11650.0,
      "day_pnl": 24.41,
      "cum_pnl_short": 89.79,
      "n_trades": 2,
      "vix": 17.87,
      "netliq_baseline": 11540.0,
      "netliq_delta": 110.0
    },
    {
      "date": "2026-05-14",
      "netliq": 11628.0,
      "day_pnl": 0.0,
      "cum_pnl_short": 89.79,
      "n_trades": 0,
      "vix": 17.26,
      "netliq_baseline": 11540.0,
      "netliq_delta": 88.0
    },
    {
      "date": "2026-05-15",
      "netliq": 11637.24,
      "day_pnl": 0.0,
      "cum_pnl_short": 89.79,
      "n_trades": 0,
      "vix": 18.43,
      "netliq_baseline": 11540.0,
      "netliq_delta": 97.24,
      "_note": "5/15 day_pnl=0 (realized 0、 旧 +8.99 は unrealized 誤計上 だった、 修正済)"
    },
    {
      "date": "2026-05-18",
      "netliq": 11460.39,
      "day_pnl": -90.9,
      "cum_pnl_short": -1.11,
      "n_trades": 1,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -79.61,
      "_note": "5/18 ON 手動 SELL -$90.9 realized、 旧 cum -$1819 は不整合だったので修正、 真の cum = 5/15 +89.79 + (-90.9) = -1.11"
    },
    {
      "date": "2026-05-19",
      "netliq": 11397.4,
      "day_pnl": 1.05,
      "cum_pnl_short": -0.06,
      "n_trades": 1,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -142.6,
      "unrealized_today": -138.02
    },
    {
      "date": "2026-05-20",
      "netliq": null,
      "day_pnl": -48.28,
      "cum_pnl_short": -48.34,
      "n_trades": 6,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-05-21",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-05-22",
      "netliq": 11277.98,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -262.02,
      "unrealized_today": -216.53
    },
    {
      "date": "2026-05-23",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-05-24",
      "netliq": 20677.97,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 9137.97,
      "unrealized_today": -216.53
    },
    {
      "date": "2026-05-25",
      "netliq": 20677.97,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 9137.97,
      "unrealized_today": -216.53
    },
    {
      "date": "2026-05-26",
      "netliq": 20770.38,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 9230.38,
      "unrealized_today": -160.39
    },
    {
      "date": "2026-05-27",
      "netliq": 20505.95,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 8965.95,
      "unrealized_today": -424.83
    },
    {
      "date": "2026-05-28",
      "netliq": 20203.24,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 8663.24,
      "unrealized_today": -83.61
    },
    {
      "date": "2026-05-29",
      "netliq": 19743.15,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 8203.15,
      "unrealized_today": -335.71
    },
    {
      "date": "2026-05-30",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-05-31",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-06-05",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-06-21",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-06-22",
      "netliq": 10617.87,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -922.13,
      "unrealized_today": 0.0
    },
    {
      "date": "2026-06-23",
      "netliq": 10221.42,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -1318.58,
      "unrealized_today": -10.25
    },
    {
      "date": "2026-06-24",
      "netliq": null,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": null,
      "unrealized_today": null
    },
    {
      "date": "2026-06-25",
      "netliq": 10234.52,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -1305.48,
      "unrealized_today": 2.85
    }
  ],
  "morning_brief": "(brief なし)",
  "heartbeats": {
    "sync_mobile": {
      "ts": "2026-06-25T08:16:00",
      "ok": true,
      "note": "143,058 B",
      "age_min": 29.3686447
    },
    "vix_regime": {
      "ts": "2026-05-26T08:45:48",
      "ok": true,
      "note": "NEUTRAL score=2/4 VIX=16.63",
      "age_min": 43199.5686447
    },
    "intraday_cron": {
      "ts": "2026-05-26T08:46:09",
      "ok": true,
      "note": "bat completed",
      "age_min": 43199.2186447
    },
    "intraday_executor_scan": {
      "ts": "2026-05-26T08:45:03",
      "ok": true,
      "note": "",
      "age_min": 43200.3186447
    },
    "alert_intraday_executor_scan": {
      "ts": "2026-05-25T%H:%M:%S",
      "ok": true,
      "note": "RESOLVED: Memorial Day TWS off = 正常、 火曜 TWS 起動で自動復旧",
      "age_min": null
    },
    "alert_intraday_position_monitor": {
      "ts": "2026-05-25T%H:%M:%S",
      "ok": true,
      "note": "RESOLVED: Memorial Day TWS off = 正常、 火曜 TWS 起動で自動復旧",
      "age_min": null
    },
    "intraday_position_monitor": {
      "ts": "2026-05-26T08:45:03",
      "ok": true,
      "note": "",
      "age_min": 43200.3186447
    },
    "morning_preopen_notify": {
      "ts": "2026-06-25T08:00:04",
      "ok": true,
      "note": "7 blocks",
      "age_min": 45.30197803333333
    },
    "state_tws_reconciler": {
      "ts": "2026-05-29T07:06:33",
      "ok": true,
      "note": "state=0 TWS=6 phantoms=0 partials=0",
      "age_min": 38978.8186447
    },
    "monitor_main_engine_health": {
      "ts": "2026-06-24T18:00:02",
      "ok": true,
      "note": "cold-start: no Confluence_RSIStoch_v1 trades in 90d 内 (strategy 最近 LIVE 化 or signal 未発火)、 monitor 待機中、 baseline 33sig/mo $160/mo",
      "age_min": 885.3353113666667
    },
    "morning_tws_connect": {
      "ts": "2026-06-25T08:15:21",
      "ok": true,
      "note": "attempt=1",
      "age_min": 30.0186447
    },
    "short_term_auto_bat": {
      "ts": "2026-06-23T07:11:54",
      "ok": true,
      "note": "completed",
      "age_min": 2973.4686447
    },
    "evening_signal_gen": {
      "ts": "2026-06-22T18:03:11",
      "ok": true,
      "note": "refresh=0 signals=0",
      "age_min": 3762.1853113666666
    },
    "bot_dispatch_daily": {
      "ts": "2026-06-25T07:06:27",
      "ok": false,
      "note": "35 bots, autopilot=True",
      "age_min": 98.9186447
    },
    "bot_dispatch_intraday": {
      "ts": "2026-06-25T08:45:04",
      "ok": false,
      "note": "2 bots, autopilot=True",
      "age_min": 0.30197803333333334
    },
    "bot_dispatch_evening": {
      "ts": "2026-06-24T18:06:00",
      "ok": false,
      "note": "35 bots, autopilot=True",
      "age_min": 879.3686447
    },
    "bot_dispatch_moc": {
      "ts": "2026-06-24T16:03:04",
      "ok": false,
      "note": "4 bots, autopilot=True",
      "age_min": 1002.3019780333333
    },
    "tlt_auto_bat": {
      "ts": "2026-06-25T07:10:15",
      "ok": true,
      "note": "completed",
      "age_min": 95.1186447
    },
    "inverse_hedge_auto_bat": {
      "ts": "2026-06-24T16:30:03",
      "ok": true,
      "note": "completed",
      "age_min": 975.3186447
    },
    "alert_bot_dispatch": {
      "ts": "2026-06-22T07:14:13",
      "ok": false,
      "note": "fatal: Extra data: line 581 column 1 (char 26034)",
      "age_min": 4411.151978033333
    },
    "paper_rehearsal": {
      "ts": "2026-06-25T08:15:37",
      "ok": true,
      "note": "rehearsal ok",
      "age_min": 29.751978033333334
    },
    "alert_paper_rehearsal": {
      "ts": "2026-06-21T18:23:32",
      "ok": false,
      "note": "rehearsal timeout 300s (log: C:\\Users\\crepe\\Documents\\yasuda_short\\logs\\rehearsal_20260621.log)",
      "age_min": 5181.835311366666
    },
    "alert_short_term_executor_connect_early_warn": {
      "ts": "2026-06-21T18:34:22",
      "ok": false,
      "note": "TWS 15min 接続不可 (attempt=16) — 手動 TWS login が必要な可能性。リトライ継続中、deadline 残44min",
      "age_min": 5171.001978033333
    },
    "alert_short_term_executor_connect": {
      "ts": "2026-06-21T19:18:51",
      "ok": false,
      "note": "TWS 60min/59回 全失敗 — 手動 TWS login + executor 再実行が必要 (OPG cutoff 8:28 CT)",
      "age_min": 5126.5186447
    },
    "alert_short_term_auto_bat": {
      "ts": "2026-06-21T19:23:53",
      "ok": false,
      "note": "short_term_executor exit=1",
      "age_min": 5121.485311366666
    },
    "alert_short_term_executor_pyramid_fill_timeout_30s": {
      "ts": "2026-06-23T07:00:38",
      "ok": false,
      "note": "XLE pyramid parent BUY 30s 未確定 (status=Cancelled filled=0.0/64)、 silent fail #21/#22 防止のため bracket 配置 skip + parent cancel",
      "age_min": 2984.735311366667
    }
  },
  "regime": {
    "ts": "2026-05-26T08:45:48",
    "vix": 16.63,
    "spy_close": 745.64,
    "spy_10d_return_pct": 1.09,
    "smh_10d_return_pct": 1.73,
    "spy_50d_ma": 696.49,
    "spy_200d_ma": 676.25,
    "spy_vol_ratio_5d_20d": 0.98,
    "c1_vix_17_19": false,
    "c2_spy_uptrend_not_extended": true,
    "c3_semis_leading": true,
    "c4_vol_dry_up": false,
    "score": 2,
    "regime": "NEUTRAL",
    "note": "通常 — 2/4 pass",
    "data_freshness_days": 4
  },
  "alerts_recent": [
    {
      "ts": "2026-06-25T08:00:04",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 4 件、 採用 2 件 |   · AVGO Pullback_v1 利確+2.50% |   · SLV Confluence_RSIStoch_v1 利確+4.00% | ✅ 前夜 audit: 70 件 全 PASS | 💼 NetLiq $10,224、 cash $9,346 | ✅ paper rehearsal: 2026-06-24T08:15 OK"
    },
    {
      "ts": "2026-06-24T08:00:04",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 3 件、 採用 2 件 |   · SLV Confluence_RSIStoch_v1 利確+4.00% |   · AMZN Confluence_RSIStoch_v1 利確+4.00% | ✅ 前夜 audit: 70 件 全 PASS | 💼 NetLiq $10,223、 cash $9,346 | ✅ paper rehearsal: 2026-06-23T08:15 OK"
    },
    {
      "ts": "2026-06-23T08:00:03",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 3 件、 採用 2 件 |   · SLV Confluence_RSIStoch_v1 利確+4.00% |   · AMZN Confluence_RSIStoch_v1 利確+4.00% | ✅ 前夜 audit: 70 件 全 PASS | 💼 NetLiq $10,618、 cash $10,615 | ✅ paper rehearsal: 2026-06-22T08:15 OK"
    },
    {
      "ts": "2026-06-23T07:00:38",
      "severity": "CRITICAL",
      "source": "short_term_executor_pyramid_fill_timeout_30s",
      "message": "XLE pyramid parent BUY 30s 未確定 (status=Cancelled filled=0.0/64)、 silent fail #21/#22 防止のため bracket 配置 skip + parent cancel"
    },
    {
      "ts": "2026-06-22T08:00:06",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 1 件、 採用 0 件 | ✅ 前夜 audit: 70 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | 🚨 paper rehearsal: 2026-06-21T18:23 FAIL"
    },
    {
      "ts": "2026-06-22T07:14:13",
      "severity": "CRITICAL",
      "source": "bot_dispatch",
      "message": "fatal: Extra data: line 581 column 1 (char 26034)"
    },
    {
      "ts": "2026-06-21T19:18:51",
      "severity": "CRITICAL",
      "source": "short_term_executor_connect",
      "message": "TWS 60min/59回 全失敗 — 手動 TWS login + executor 再実行が必要 (OPG cutoff 8:28 CT)"
    },
    {
      "ts": "2026-06-21T18:34:22",
      "severity": "HIGH",
      "source": "short_term_executor_connect_early_warn",
      "message": "TWS 15min 接続不可 (attempt=16) — 手動 TWS login が必要な可能性。リトライ継続中、deadline 残44min"
    },
    {
      "ts": "2026-06-21T18:18:37",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 0 件、 採用 0 件 | ✅ 前夜 audit: 70 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-06-21T18:18:32",
      "severity": "CRITICAL",
      "source": "bot_dispatch",
      "message": "fatal: Extra data: line 581 column 1 (char 26034)"
    }
  ],
  "post_mortem": {
    "file": "weekly_post_mortem_2026-05-18.md",
    "content": "# Weekly Post-Mortem 2026-05-18 (counterfactual 直近 7 日)\n\n**Task #102 自動出力** — 場中 SL 売却 vs hold-end の比較で SL rule の週次勝敗を判定。\n\n## 📊 Summary\n\n- 期間: 過去 **7** 日 (closed_positions 1 件 対象、 うち場中 SL 系 **1** 件)\n- 場中 SL 実 P&L: **$-90.90**\n- 引け hold 仮想: **$-59.55**\n- 戦略 rule 通り hold (N日後 Close) 仮想: **$+0.00**\n- hold-引け の方が良かった件数: **1 / 1**\n- hold-rule の方が良かった件数: **0 / 1**\n\n## 🎯 今週判定: **LOSS**\n\n> 場中 SL 売却 で $31 (引け) / $91 (rule) の機会損失\n\n## 🔍 Trade-by-trade counterfactual\n\n| Ticker | Strat | Exit reason | 実 P&L | 引け hold P&L | rule hold P&L | 救済可? |\n|---|---|---|---:|---:|---:|---|\n| ON | HighPullback50_v1 | user_manual_-3%_intraday_SL | $-90.90 | $-59.55 | ? | **+$31** 救済 |\n\n## 📝 個別 narrative\n\n- **ON** (HighPullback50_v1, 2026-05-18 entry → 2026-05-18 user_manual_-3%_intraday_SL): 実 $-91 (-5.29%)、 引け hold なら $-60 (-3.50%) = **$31 救済可**\n\n---\n\n_generated by `weekly_post_mortem.py` @ 2026-05-18 23:47:53 CT_\n"
  },
  "exit_plans": [
    {
      "category": "短期 (寄付戦略)",
      "ticker": "VZ",
      "strategy": "TWS_other",
      "qty": 4.0,
      "entry_price": 45.818775,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 46.74,
        "sl_pct": -10.0,
        "sl_price": 41.24
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 46.74,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 41.24,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 45.63999938964844,
      "unrealized_pct": -0.39,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "ETN",
      "strategy": "TWS_other",
      "qty": 1.0,
      "entry_price": 419.1115,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 427.49,
        "sl_pct": -10.0,
        "sl_price": 377.2
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 427.49,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 377.2,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 419.45001220703125,
      "unrealized_pct": 0.08,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "MRK",
      "strategy": "TWS_other",
      "qty": 1.0,
      "entry_price": 117.7415,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 120.1,
        "sl_pct": -10.0,
        "sl_price": 105.97
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 120.1,
          "target_pct": 2.0,
          "status": "到達済"
        },
        {
          "type": "SL",
          "target_price": 105.97,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 122.65499877929688,
      "unrealized_pct": 4.17,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "KO",
      "strategy": "TWS_other",
      "qty": 2.0,
      "entry_price": 81.46635,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 83.1,
        "sl_pct": -10.0,
        "sl_price": 73.32
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 83.1,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 73.32,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 80.58000183105469,
      "unrealized_pct": -1.09,
      "force_sell_today": null,
      "silent_fail_note": null
    }
  ],
  "intraday_opportunities": [],
  "all_trades": [
    {
      "date": "2026-05-20",
      "ticker": "SPXL",
      "strategy": "HighPullback50_v1",
      "shares": 4,
      "entry_price": 266.25,
      "exit_price": 262.27,
      "pnl_gross": -17.94,
      "pnl_usd": -18.96,
      "commission": 1.02,
      "pnl_pct": null,
      "exit_reason": "force_sell_completed",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-20",
      "ticker": "LIN",
      "strategy": "Sector_FriPanic_v1",
      "shares": 2,
      "entry_price": 507.15,
      "exit_price": 502.78,
      "pnl_gross": -10.76,
      "pnl_usd": -11.78,
      "commission": 1.02,
      "pnl_pct": null,
      "exit_reason": "force_sell_completed",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-20",
      "ticker": "IP",
      "strategy": "Candle15m_TweezerBottom_test",
      "shares": 1,
      "entry_price": 30.25,
      "exit_price": 29.26,
      "pnl_gross": -1.59,
      "pnl_usd": -1.89,
      "commission": 0.3,
      "pnl_pct": null,
      "exit_reason": "force_sell_completed",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-20",
      "ticker": "VRTX",
      "strategy": "Intraday_T9_rsi20",
      "shares": 2,
      "entry_price": 439.88,
      "exit_price": 437.72,
      "pnl_gross": -6.34,
      "pnl_usd": -7.36,
      "commission": 1.02,
      "pnl_pct": null,
      "exit_reason": "force_sell_completed",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-20",
      "ticker": "GOOGL",
      "strategy": "HighPullback50_v1",
      "shares": 1,
      "entry_price": 387.27,
      "exit_price": 391.745,
      "pnl_gross": -2.01,
      "pnl_usd": -4.02,
      "commission": 2.01,
      "pnl_pct": null,
      "exit_reason": "silent_fail_21_round_trip",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-20",
      "ticker": "FTAI",
      "strategy": "Stoch_Oversold_v1",
      "shares": 1,
      "entry_price": 228.0,
      "exit_price": 226.68,
      "pnl_gross": -2.27,
      "pnl_usd": -4.27,
      "commission": 2.0,
      "pnl_pct": null,
      "exit_reason": "silent_fail_21_round_trip",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-19",
      "ticker": "PLTR",
      "strategy": "V10_PLTR_vwap",
      "shares": 3,
      "entry_price": 135.11,
      "exit_price": 135.46,
      "pnl_gross": 3.05,
      "pnl_usd": 1.05,
      "commission": 2.0,
      "pnl_pct": null,
      "exit_reason": "intraday_close",
      "source": "intraday",
      "_net_calc": "state_json_assumed_net"
    },
    {
      "date": "2026-05-18",
      "ticker": "ON",
      "strategy": "HighPullback50_v1",
      "shares": 15,
      "entry_price": 113.4,
      "exit_price": 107.4,
      "pnl_gross": -88.9,
      "pnl_usd": -90.9,
      "commission": 2.0,
      "pnl_pct": -5.29,
      "exit_reason": "user_manual_-3%_intraday_SL",
      "source": "monitor",
      "_net_calc": "state_json_assumed_net"
    }
  ],
  "bimet_framework": {
    "_doc": "5/25 整地後 F7 (= BIMETSX) portfolio governance。 7 柱で戦略束ねる、 merit-driven 規律。 詳細 = memory/f7-framework.md。",
    "summary": {
      "framework_name": "F7",
      "total_size": 10.76,
      "b_share_pct": 36.4,
      "live_count": 14,
      "probe_count": 5,
      "wiring_count": 1,
      "inert_count": 1,
      "empty_axes": [],
      "warning_axes": [
        "B"
      ],
      "n_eff_full_period": 7.31,
      "last_updated": "2026-05-25"
    },
    "_badges": {
      "🟢LIVE": "本番稼働 (paper:false ∧ size>0)",
      "🔵probe": "小さく実発注 size 0.25、 1 週 R2 観察中、 PASS なら upsize",
      "🟡wiring": "配線済だが paper:true で executor skip (= 安全状態、 deploy 前段階)",
      "⚪空": "未配線",
      "⚠️inert": "size 0 で実発火なし (= effective disable、 dispatcher 残置)"
    },
    "pillars": {
      "B": {
        "name": "Bear / Panic 平均回帰",
        "size_sum": 3.65,
        "share_pct": 33.9,
        "warning": "35%超 (R2 merit-driven で自然降下中)",
        "strategies": [
          {
            "name": "Drop5d_BroadPanic",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 1,
            "mo_usd": 90.77,
            "mo_pct": 62.49,
            "note": "#1 収益エンジン"
          },
          {
            "name": "Pullback_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 3,
            "mo_usd": 79.44,
            "mo_pct": 10.86,
            "note": "独立 + 高 edge"
          },
          {
            "name": "Semi_Equip_Dip_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 55.3,
            "mo_pct": 12.55,
            "note": "5/25 reduce 1.0→0.5"
          },
          {
            "name": "HYG_LQD_QQQ_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 34.37,
            "mo_pct": 6.8,
            "note": "5/25 reduce 0.75→0.4"
          },
          {
            "name": "Buffett_VIX20_Panic_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 9.29,
            "mo_pct": 0.8,
            "note": "5/25 reduce 1.0→0.3 (独立保険)"
          }
        ]
      },
      "I": {
        "name": "Insider",
        "size_sum": 0.73,
        "share_pct": 6.8,
        "warning": "Step 1-3 配線完了、 scrape 1週観察後 (5/30) live flip 予定",
        "strategies": [
          {
            "name": "Insider_Dir200k_v1 (H5)",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 60,
            "mo_usd": 118,
            "mo_pct": 2.34,
            "note": "5/25 dispatcher+config+claim 配線完了、 paper:true で安全、 5/30 paper:false + size 0.25 flip 予定"
          }
        ]
      },
      "M": {
        "name": "Momentum (regime-balanced)",
        "size_sum": 1.46,
        "share_pct": 13.6,
        "warning": null,
        "strategies": [
          {
            "name": "Momentum_12_1_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 25.18,
            "mo_pct": 9.57,
            "note": "calm 主"
          },
          {
            "name": "CrossSec_Mom_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 20,
            "mo_usd": 9.01,
            "mo_pct": 4.22,
            "note": "stress 主"
          }
        ]
      },
      "E": {
        "name": "Earnings",
        "size_sum": 1.73,
        "share_pct": 16.1,
        "warning": null,
        "strategies": [
          {
            "name": "PreEarnings_T30_T5_Industrial",
            "size": 1.0,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 26.35,
            "mo_pct": 6.64,
            "note": "★ クラウンジュエル"
          },
          {
            "name": "PEAD_SUE_60d_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 60,
            "mo_usd": 2.62,
            "mo_pct": 3.06,
            "note": "5/25 NEW: 60d drift 累積版 PASS (cost+8.75% n=157)、 旧 Top20 dispose 置換"
          }
        ]
      },
      "T": {
        "name": "Trend",
        "size_sum": 1.73,
        "share_pct": 16.1,
        "warning": null,
        "strategies": [
          {
            "name": "AI_Wave_Momentum_v1",
            "size": 1.0,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 15.69,
            "mo_pct": 8.1,
            "note": "★ クラウンジュエル"
          },
          {
            "name": "Bull_Trend_Breakout_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 20,
            "mo_usd": 2.25,
            "mo_pct": 1.6,
            "note": "5/24 deploy、 daily cap 5/日"
          }
        ]
      },
      "S": {
        "name": "Sector Rotation (contrarian)",
        "size_sum": 0.73,
        "share_pct": 6.8,
        "warning": null,
        "strategies": [
          {
            "name": "SectorRotation_Laggard_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 20,
            "mo_usd": 1.13,
            "mo_pct": 1.92,
            "note": "5/24 deploy NEW、 stress 0.38 注視"
          }
        ]
      },
      "X": {
        "name": "Cross-Asset",
        "size_sum": 0.73,
        "share_pct": 6.8,
        "warning": null,
        "strategies": [
          {
            "name": "A7_DXY_Drop_EM_Long_v1",
            "size": 0.73,
            "badge": "🟢LIVE",
            "hold": 5,
            "mo_usd": 1.1,
            "mo_pct": 3.66,
            "note": "5/24 復活、 UUP→EM"
          }
        ]
      }
    },
    "excluded": {
      "Absorption": "幻 (= 平常独立 / 暴落 Drop5d corr 0.507)、 skip",
      "Pair_StatArb": "-1.26% anti-edge、 死亡確定",
      "VolDryUp_v1": "5/25 SKIP: 2025+ で偽 PASS、 2022 bear -1.75% bull regime beta 罠"
    },
    "governance": "新戦略は screen_lib (4 関門) + フルピリオド regime gate 必須、 N_eff (not Sharpe) で評価、 intra-axis 増殖禁止、 R2 merit-driven で自然降下"
  },
  "f7_projection": {
    "_doc": "F7 3年 projection (size 0.73、 6.4年 backtest compound growth)",
    "start_usd": 14000,
    "cagr_pct": 49.7,
    "max_dd_pct": -74.8,
    "backtest_period": "2020-01-01 → 2026-05-22 (6.4年)",
    "year_by_year": {
      "2020": {
        "start": 14000,
        "end": 46029,
        "return_pct": 228.8
      },
      "2021": {
        "start": 46245,
        "end": 68340,
        "return_pct": 47.8
      },
      "2022": {
        "start": 68051,
        "end": 65203,
        "return_pct": -4.2
      },
      "2023": {
        "start": 65203,
        "end": 84461,
        "return_pct": 29.5
      },
      "2024": {
        "start": 84547,
        "end": 129597,
        "return_pct": 53.3
      },
      "2025": {
        "start": 129373,
        "end": 164065,
        "return_pct": 26.8
      },
      "2026": {
        "start": 164363,
        "end": 184024,
        "return_pct": 12.0
      }
    },
    "projections": {
      "1年後": {
        "usd": 20958,
        "multiple": 1.5
      },
      "2年後": {
        "usd": 31374,
        "multiple": 2.2
      },
      "3年後": {
        "usd": 46967,
        "multiple": 3.4
      },
      "4年後": {
        "usd": 70310,
        "multiple": 5.0
      },
      "5年後": {
        "usd": 105254,
        "multiple": 7.5
      },
      "6年後": {
        "usd": 157565,
        "multiple": 11.3
      },
      "7年後": {
        "usd": 235874,
        "multiple": 16.8
      },
      "8年後": {
        "usd": 353104,
        "multiple": 25.2
      },
      "9年後": {
        "usd": 528596,
        "multiple": 37.8
      },
      "10年後": {
        "usd": 791309,
        "multiple": 56.5
      },
      "11年後": {
        "usd": 1184589,
        "multiple": 84.6
      }
    },
    "_warning": "backtest CAGR で regime shift / capacity constraint / execution slippage 未反映",
    "champ_comparison": {
      "_ARCHIVED": "ARCHIVED 2026-05-29 — 廃止 Champ の backtest 比較 (参考用、 live 否定)。 2015-2026 仮想 DCA simulation。 logs/champ_vs_f7_11yr.json (_archived) と数値経路が不一致 ($486k vs $1.04M) のまま並存していたもの。 実 Champ live とは無関係、 history としてのみ残置。 Champ は 5/29 全 unwind → SPY 一括化。",
      "_archived_date": "2026-05-29",
      "champ_dca": {
        "monthly_usd": 1800,
        "dca_months": 36,
        "hold_months": 96,
        "total_invested": 64800,
        "tickers": [
          "NVDA",
          "PWR",
          "COST",
          "LLY",
          "GOOG"
        ],
        "milestones": {
          "1yr": {
            "month": "2021-01-01 00:00:00",
            "invested": 23400,
            "value": 30731.53,
            "gain": 7331.53,
            "return_pct": 31.3
          },
          "2yr": {
            "month": "2022-01-01 00:00:00",
            "invested": 45000,
            "value": 82923.15,
            "gain": 37923.15,
            "return_pct": 84.3
          },
          "3yr": {
            "month": "2023-01-01 00:00:00",
            "invested": 64800,
            "value": 91248.66,
            "gain": 26448.66,
            "return_pct": 40.8
          },
          "4yr": {
            "month": "2024-01-01 00:00:00",
            "invested": 64800,
            "value": 166836.3,
            "gain": 102036.3,
            "return_pct": 157.5
          },
          "5yr": {
            "month": "2025-01-01 00:00:00",
            "invested": 64800,
            "value": 304541.43,
            "gain": 239741.43,
            "return_pct": 370.0
          },
          "6yr": {
            "month": "2026-01-01 00:00:00",
            "invested": 64800,
            "value": 413678.02,
            "gain": 348878.02,
            "return_pct": 538.4
          },
          "7yr": {
            "month": "2027-01-01 00:00:00",
            "invested": 64800,
            "value": 485784.89,
            "gain": 420984.89,
            "return_pct": 649.7
          },
          "8yr": {
            "month": "2028-01-01 00:00:00",
            "invested": 64800,
            "value": 485784.89,
            "gain": 420984.89,
            "return_pct": 649.7
          },
          "9yr": {
            "month": "2029-01-01 00:00:00",
            "invested": 64800,
            "value": 485784.89,
            "gain": 420984.89,
            "return_pct": 649.7
          },
          "10yr": {
            "month": "2030-01-01 00:00:00",
            "invested": 64800,
            "value": 485784.89,
            "gain": 420984.89,
            "return_pct": 649.7
          }
        },
        "final": {
          "month": "2030-12-01 00:00:00",
          "invested": 64800,
          "value": 485784.89,
          "gain": 420984.89,
          "return_pct": 649.7
        }
      },
      "f7_vs_champ_11yr": {
        "f7_start": 14000,
        "f7_end": 1184589,
        "f7_multiple": 84.6,
        "f7_cagr": 49.7,
        "champ_invested": 64800,
        "champ_end_6_4yr": 485785,
        "champ_end_11yr": 3219214,
        "champ_multiple": 49.7,
        "champ_cagr": 50.8,
        "champ_same_capital_14k": 695509,
        "note": "Champ CAGR +50.8% ≈ F7 +49.7%、 dollar 差は元本差 (Champ 4.8k vs F7 4k)"
      }
    },
    "allocation_table": {
      "_doc": "$2,000/月 両翼配分表 (F7 $14k start + 3年積立 + 8年放置)",
      "monthly_total": 2000,
      "dca_years": 3,
      "hold_years": 8,
      "f7_start": 14000,
      "f7_cagr": 49.7,
      "champ_cagr": 50.8,
      "rows": [
        {
          "f7_monthly": 0,
          "ch_monthly": 2000,
          "invested": 86000,
          "yr3_f7": 46967,
          "yr3_ch": 144374,
          "yr3_total": 191341,
          "yr11_f7": 1184589,
          "yr11_ch": 3860997,
          "yr11_total": 5045586,
          "yr11h_f7": 162981,
          "yr11h_ch": 616721,
          "yr11h_total": 779702
        },
        {
          "f7_monthly": 200,
          "ch_monthly": 1800,
          "invested": 86000,
          "yr3_f7": 60740,
          "yr3_ch": 129937,
          "yr3_total": 190677,
          "yr11_f7": 1531976,
          "yr11_ch": 3474897,
          "yr11_total": 5006873,
          "yr11h_f7": 223517,
          "yr11h_ch": 555049,
          "yr11h_total": 778566
        },
        {
          "f7_monthly": 400,
          "ch_monthly": 1600,
          "invested": 86000,
          "yr3_f7": 74514,
          "yr3_ch": 115499,
          "yr3_total": 190013,
          "yr11_f7": 1879362,
          "yr11_ch": 3088798,
          "yr11_total": 4968160,
          "yr11h_f7": 284053,
          "yr11h_ch": 493377,
          "yr11h_total": 777430
        },
        {
          "f7_monthly": 600,
          "ch_monthly": 1400,
          "invested": 86000,
          "yr3_f7": 88287,
          "yr3_ch": 101062,
          "yr3_total": 189349,
          "yr11_f7": 2226748,
          "yr11_ch": 2702698,
          "yr11_total": 4929446,
          "yr11h_f7": 344589,
          "yr11h_ch": 431704,
          "yr11h_total": 776294
        },
        {
          "f7_monthly": 700,
          "ch_monthly": 1300,
          "invested": 86000,
          "yr3_f7": 95174,
          "yr3_ch": 93843,
          "yr3_total": 189017,
          "yr11_f7": 2400442,
          "yr11_ch": 2509648,
          "yr11_total": 4910090,
          "yr11h_f7": 374857,
          "yr11h_ch": 400868,
          "yr11h_total": 775725
        },
        {
          "f7_monthly": 800,
          "ch_monthly": 1200,
          "invested": 86000,
          "yr3_f7": 102060,
          "yr3_ch": 86624,
          "yr3_total": 188685,
          "yr11_f7": 2574135,
          "yr11_ch": 2316598,
          "yr11_total": 4890733,
          "yr11h_f7": 405125,
          "yr11h_ch": 370032,
          "yr11h_total": 775157
        },
        {
          "f7_monthly": 1000,
          "ch_monthly": 1000,
          "invested": 86000,
          "yr3_f7": 115834,
          "yr3_ch": 72187,
          "yr3_total": 188021,
          "yr11_f7": 2921521,
          "yr11_ch": 1930498,
          "yr11_total": 4852019,
          "yr11h_f7": 465661,
          "yr11h_ch": 308360,
          "yr11h_total": 774021
        },
        {
          "f7_monthly": 1000,
          "ch_monthly": 1000,
          "invested": 86000,
          "yr3_f7": 115834,
          "yr3_ch": 72187,
          "yr3_total": 188021,
          "yr11_f7": 2921521,
          "yr11_ch": 1930498,
          "yr11_total": 4852019,
          "yr11h_f7": 465661,
          "yr11h_ch": 308360,
          "yr11h_total": 774021
        },
        {
          "f7_monthly": 1200,
          "ch_monthly": 800,
          "invested": 86000,
          "yr3_f7": 129607,
          "yr3_ch": 57750,
          "yr3_total": 187356,
          "yr11_f7": 3268907,
          "yr11_ch": 1544399,
          "yr11_total": 4813306,
          "yr11h_f7": 526197,
          "yr11h_ch": 246688,
          "yr11h_total": 772885
        },
        {
          "f7_monthly": 1300,
          "ch_monthly": 700,
          "invested": 86000,
          "yr3_f7": 136494,
          "yr3_ch": 50531,
          "yr3_total": 187024,
          "yr11_f7": 3442601,
          "yr11_ch": 1351349,
          "yr11_total": 4793949,
          "yr11h_f7": 556465,
          "yr11h_ch": 215852,
          "yr11h_total": 772317
        },
        {
          "f7_monthly": 1400,
          "ch_monthly": 600,
          "invested": 86000,
          "yr3_f7": 143380,
          "yr3_ch": 43312,
          "yr3_total": 186692,
          "yr11_f7": 3616294,
          "yr11_ch": 1158299,
          "yr11_total": 4774593,
          "yr11h_f7": 586732,
          "yr11h_ch": 185016,
          "yr11h_total": 771749
        },
        {
          "f7_monthly": 1600,
          "ch_monthly": 400,
          "invested": 86000,
          "yr3_f7": 157154,
          "yr3_ch": 28875,
          "yr3_total": 186028,
          "yr11_f7": 3963680,
          "yr11_ch": 772199,
          "yr11_total": 4735879,
          "yr11h_f7": 647268,
          "yr11h_ch": 123344,
          "yr11h_total": 770612
        },
        {
          "f7_monthly": 1800,
          "ch_monthly": 200,
          "invested": 86000,
          "yr3_f7": 170927,
          "yr3_ch": 14437,
          "yr3_total": 185364,
          "yr11_f7": 4311066,
          "yr11_ch": 386100,
          "yr11_total": 4697166,
          "yr11h_f7": 707804,
          "yr11h_ch": 61672,
          "yr11h_total": 769476
        },
        {
          "f7_monthly": 2000,
          "ch_monthly": 0,
          "invested": 86000,
          "yr3_f7": 184700,
          "yr3_ch": 0,
          "yr3_total": 184700,
          "yr11_f7": 4658453,
          "yr11_ch": 0,
          "yr11_total": 4658453,
          "yr11h_f7": 768340,
          "yr11h_ch": 0,
          "yr11h_total": 768340
        }
      ]
    }
  },
  "monitoring_5_29": {
    "_doc": "F7 actual-vs-expected 監視 framework (5/29 固定)。baseline = logs/baseline_5_29_frozen.json (read-only、 唯一の真実)。",
    "frozen_at": "2026-05-29T(JST evening)",
    "live_start": "2026-06-01",
    "status": "baseline 固定済 (read-only) / LIVE データ 6/1 蓄積開始 / 初週次 report 6/7",
    "expected_monthly_deployed_usd": 251,
    "expected_monthly_unconstrained_usd": 2482,
    "sgov_daily_usd": 2.7,
    "capacity_caveat": "期待は 2 系統: signal生成率 (配線生存テスト) と slot制約後の約定 (P/L)。fire-ratio は約定同士で比較 (deployed trades_per_mo)。Insider は paper = 実約定なし。",
    "milestones": [
      {
        "label": "30日 review",
        "due": "2026-06-30",
        "test": "期待fires 30%実現 + silent fail なし → 通過/要audit/問題あり"
      },
      {
        "label": "90日 review",
        "due": "2026-08-30",
        "test": "LIVE Sharpe vs backtest 40%閾値 (n=30+)、 <40%棚上げ候補 / <0 KILL候補"
      },
      {
        "label": "180日 review",
        "due": "2026-11-30",
        "test": "Sharpe>0.5 & netP/L>0継続 / 0-0.5 size減 / <0 KILL。三脚 vs SGOV"
      }
    ],
    "alerts": [
      "fire<50% × 4週連続 → configuration audit 候補",
      "累計 netP/L<0 × 13週 (3ヶ月) 連続 → size_mult 減考慮",
      "経過90日後も portfolio < SGOV → 全体 edge 疑念"
    ],
    "weekly_report_path": "logs/weekly_report_YYYYMMDD.md (scripts/live_vs_expected_weekly.py)",
    "live_actuals_pending": "LIVE 実績 (7d/累計 fires・win・Sharpe・netP/L) は 6/1 蓄積開始後に weekly script → sync で注入予定 (週末 integration)。現在は frozen 期待値 + マイルストン表示。",
    "strategy_count": 14,
    "strategies": [
      {
        "name": "AI_Wave_Momentum_v1",
        "pillar": "T",
        "paper": false,
        "size": 1.0,
        "hold": 14,
        "exp_fires_mo": 12.76,
        "exp_trades_mo": 3,
        "exp_mo_usd": 90,
        "tier": "SS (Trend breakout)"
      },
      {
        "name": "Bull_Trend_Breakout_v1",
        "pillar": "T",
        "paper": false,
        "size": 0.73,
        "hold": 20,
        "exp_fires_mo": 74,
        "exp_trades_mo": 3,
        "exp_mo_usd": 20,
        "tier": "SS+ (Trend breakout)"
      },
      {
        "name": "CrossSec_Mom_v1",
        "pillar": "M",
        "paper": false,
        "size": 0.73,
        "hold": 20,
        "exp_fires_mo": 35,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "SS+ (Momentum regime-balanced)"
      },
      {
        "name": "PEAD_SUE_60d_v1",
        "pillar": "E",
        "paper": false,
        "size": 0.73,
        "hold": 60,
        "exp_fires_mo": 10,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "SS+ (Earnings drift)"
      },
      {
        "name": "Momentum_12_1_v1",
        "pillar": "M",
        "paper": false,
        "size": 0.73,
        "hold": 5,
        "exp_fires_mo": 6,
        "exp_trades_mo": 1,
        "exp_mo_usd": 73,
        "tier": "S (Momentum regime-balanced)"
      },
      {
        "name": "Semi_Equip_Dip_v1",
        "pillar": "B",
        "paper": false,
        "size": 0.73,
        "hold": 5,
        "exp_fires_mo": 9,
        "exp_trades_mo": 1,
        "exp_mo_usd": 44,
        "tier": "S+ (Bear/Panic 平均回帰)"
      },
      {
        "name": "PreEarnings_T30_T5_Industrial",
        "pillar": "E",
        "paper": false,
        "size": 1.0,
        "hold": 18,
        "exp_fires_mo": 4.3,
        "exp_trades_mo": 1,
        "exp_mo_usd": 15,
        "tier": "S+ (Earnings drift)"
      },
      {
        "name": "Buffett_VIX20_Panic_v1",
        "pillar": "B",
        "paper": false,
        "size": 0.73,
        "hold": 10,
        "exp_fires_mo": 5.04,
        "exp_trades_mo": 0,
        "exp_mo_usd": 9,
        "tier": "S (Bear/Panic 平均回帰)"
      },
      {
        "name": "A7_DXY_Drop_EM_Long_v1",
        "pillar": "X",
        "paper": false,
        "size": 0.73,
        "hold": 5,
        "exp_fires_mo": 4.4,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "S (Cross-Asset macro)"
      },
      {
        "name": "HYG_LQD_QQQ_v1",
        "pillar": "B",
        "paper": false,
        "size": 0.73,
        "hold": 5,
        "exp_fires_mo": 2.5,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "S (Bear/Panic 平均回帰)"
      },
      {
        "name": "SectorRotation_Laggard_v1",
        "pillar": "S",
        "paper": false,
        "size": 0.73,
        "hold": 20,
        "exp_fires_mo": 1.6,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "S (Sector Rotation contrarian)"
      },
      {
        "name": "Pullback_v1",
        "pillar": "B",
        "paper": false,
        "size": 0.73,
        "hold": 3,
        "exp_fires_mo": 1.5,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "B (base, 6-ticker pullback)"
      },
      {
        "name": "Drop5d_BroadPanic",
        "pillar": "B",
        "paper": false,
        "size": 0.73,
        "hold": 1,
        "exp_fires_mo": "regime-conditional",
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "B (Bear/Panic 平均回帰)"
      },
      {
        "name": "Insider_Dir200k_v1",
        "pillar": "I",
        "paper": true,
        "size": 0.73,
        "hold": 60,
        "exp_fires_mo": 4,
        "exp_trades_mo": 0,
        "exp_mo_usd": 0,
        "tier": "I 柱 (Insider, 5 variant 中最強・最独立)"
      }
    ]
  }
};
