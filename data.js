window.MOBILE_DATA = {
  "generated_at": "2026-05-26T00:00",
  "today_summary": {
    "netliq": 20677.97,
    "cash": 10693.81,
    "available_funds": 10693.81,
    "excess_liquidity": 10693.81,
    "settled_cash": 10693.81,
    "buying_power": 10693.81,
    "stock_value": 9982.43,
    "unrealized_pnl": -216.53,
    "realized_pnl": 0.0,
    "day_pnl_pct": -1.0471530812744192,
    "account_type": "INDIVIDUAL",
    "open_positions": 8,
    "open_orders_count": 3,
    "fills_today_count": 0,
    "vix": null,
    "data_source": "TWS_direct_v2"
  },
  "tws_open_orders": [
    {
      "symbol": "XLE",
      "orderId": 211,
      "action": "SELL",
      "qty": 9.0,
      "orderType": "MKT",
      "lmtPrice": 0.0,
      "auxPrice": 0.0,
      "tif": "GTC",
      "status": "PreSubmitted",
      "filled": 0.0,
      "remaining": 9.0
    },
    {
      "symbol": "SPY",
      "orderId": 210,
      "action": "SELL",
      "qty": 1.0,
      "orderType": "MKT",
      "lmtPrice": 0.0,
      "auxPrice": 0.0,
      "tif": "GTC",
      "status": "PreSubmitted",
      "filled": 0.0,
      "remaining": 1.0
    },
    {
      "symbol": "EXE",
      "orderId": 194,
      "action": "SELL",
      "qty": 11.0,
      "orderType": "STP",
      "lmtPrice": 0.0,
      "auxPrice": 87.67,
      "tif": "GTC",
      "status": "PreSubmitted",
      "filled": 0.0,
      "remaining": 11.0
    }
  ],
  "tws_fills_today": [],
  "forecast": {
    "capital_short": 4237,
    "capital_champ": 7027,
    "monthly_low": 212,
    "monthly_mid": 247,
    "monthly_high": 283,
    "annual_low_pct": 60,
    "annual_mid_pct": 70,
    "annual_high_pct": 80,
    "annual_low_usd": 2542,
    "annual_mid_usd": 2966,
    "annual_high_usd": 3390,
    "champ_annual_pct": 13,
    "champ_annual_usd": 913,
    "_basis": "短期 +60-80%/年 (memory project_19strat_lineup_2026_05_17)、 Champ +12-15%/年 (S&P 履歴 base)、 1 週間実績 +2.12% は bull 強週 outlier",
    "last_week_actual_pct": 2.12,
    "last_week_actual_usd": 89.79,
    "annualize_naive_pct": 110,
    "growth_trajectory": [
      {
        "month": 0,
        "low": 4237,
        "mid": 4237,
        "high": 4237
      },
      {
        "month": 1,
        "low": 4449,
        "mid": 4484,
        "high": 4520
      },
      {
        "month": 2,
        "low": 4670,
        "mid": 4746,
        "high": 4823
      },
      {
        "month": 3,
        "low": 4903,
        "mid": 5023,
        "high": 5147
      },
      {
        "month": 4,
        "low": 5148,
        "mid": 5316,
        "high": 5492
      },
      {
        "month": 5,
        "low": 5405,
        "mid": 5626,
        "high": 5860
      },
      {
        "month": 6,
        "low": 5675,
        "mid": 5953,
        "high": 6253
      },
      {
        "month": 7,
        "low": 5959,
        "mid": 6300,
        "high": 6671
      },
      {
        "month": 8,
        "low": 6257,
        "mid": 6667,
        "high": 7117
      },
      {
        "month": 9,
        "low": 6570,
        "mid": 7055,
        "high": 7593
      },
      {
        "month": 10,
        "low": 6898,
        "mid": 7466,
        "high": 8101
      },
      {
        "month": 11,
        "low": 7243,
        "mid": 7901,
        "high": 8643
      },
      {
        "month": 12,
        "low": 7605,
        "mid": 8361,
        "high": 9221
      }
    ],
    "by_strategy_monthly": [
      {
        "name": "Confluence_RSIStoch_v1",
        "est": 42
      },
      {
        "name": "Confluence_RSIBB_v1",
        "est": 33
      },
      {
        "name": "HighPullback50_v1",
        "est": 26
      },
      {
        "name": "Stoch_Oversold_v1",
        "est": 19
      },
      {
        "name": "Golden_Cross_v1",
        "est": 15
      },
      {
        "name": "SMA_Stack_v1",
        "est": 15
      },
      {
        "name": "MACD_Cross_v1",
        "est": 10
      },
      {
        "name": "Inside_Day_BO_v1",
        "est": 10
      },
      {
        "name": "Sector_FriPanic_v1",
        "est": 8
      },
      {
        "name": "VolDryUp_v1",
        "est": 8
      },
      {
        "name": "BB_Lower_Bounce_v1",
        "est": 7
      },
      {
        "name": "Pullback_v1",
        "est": 6
      },
      {
        "name": "Drop5d_BroadPanic",
        "est": 3
      },
      {
        "name": "Drop5d_ETF7",
        "est": 3
      },
      {
        "name": "MSTR_Panic20",
        "est": 3
      },
      {
        "name": "SPY_Panic2_v1",
        "est": 2
      },
      {
        "name": "VIX_Backward",
        "est": 2
      },
      {
        "name": "Pharma_Panic_v1",
        "est": 1
      },
      {
        "name": "Semi_FriPanic_v1",
        "est": 1
      }
    ]
  },
  "champ": {
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
        "date": "2026-05-26",
        "plan": "PWR 1株 (~$763) + GOOG 1株 (~$389) = $1,152 (案 A、 仮確定、 5/26 朝に",
        "buys": [
          {
            "ticker": "PWR",
            "amount_usd": 800
          },
          {
            "ticker": "GOOG",
            "amount_usd": 450
          }
        ]
      },
      {
        "date": "2026-06-15",
        "plan": "TBD (6月初に再 design)",
        "buys": []
      },
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
    ]
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
    }
  ],
  "weekly_pnl": {
    "capital": 11277.98,
    "week_start": "2026-05-22",
    "week_end": "2026-05-26",
    "total_pnl_usd": 0.0,
    "total_pnl_pct": 0.0,
    "n_trades": 0,
    "n_wins": 0,
    "win_rate": 0.0,
    "days": [
      {
        "date": "2026-05-22",
        "dow": "Fri",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-05-23",
        "dow": "Sat",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-05-24",
        "dow": "Sun",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-05-25",
        "dow": "Mon",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-05-26",
        "dow": "Tue",
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
      "n_positions": 1,
      "cost_total": 1071.51,
      "value_total": 1071.51,
      "unrealized": 0.0,
      "positions": [
        {
          "ticker": "EXE",
          "shares": 11.0,
          "entry_price": 97.41,
          "cost": 1071.51
        }
      ]
    },
    "week_start": "2026-05-22",
    "week_end": "2026-05-26",
    "today_date": "2026-05-26",
    "_note": "統一 summary、 PWA 短期/短vs長/週次 tab で参照、 二重計算禁止"
  },
  "signals_today": [],
  "signals_pending": [],
  "positions": [
    {
      "ticker": "EXE",
      "strategy": "CFO_Solo_PBuy_v1",
      "entry_date": "2026-05-22",
      "entry_price": 97.41,
      "ref_price_at_signal": 97.59,
      "shares": 11,
      "entry_value": 1071.51,
      "stop_loss_price": 87.669,
      "hold_days": 3,
      "exit_style": "BRACKET",
      "status": "open",
      "bracket": true,
      "take_profit_pct": 2.5,
      "take_profit_price": 99.85,
      "size_multiplier": 1.0,
      "current_price": 97.94000244140625,
      "pnl_pct": 0.5440944886626164,
      "exit_rules": {
        "tp1_pct": 1.5,
        "tp1_price": 98.87114999999999,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 94.48769999999999,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 87.669,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "SPY",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 748.16,
      "shares": 1.0,
      "entry_value": 748.16,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 743.89,
      "_unreal_pnl": -4.27,
      "_market_price": 743.89001465,
      "current_price": 745.5900268554688,
      "pnl_pct": -0.3435058202164276,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 748.16,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 725.7152,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 673.3439999999999,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "PWR",
      "strategy": "Champ_DCA",
      "entry_date": "—",
      "entry_price": 763.21,
      "shares": 2.0,
      "entry_value": 1526.42,
      "hold_days": null,
      "exit_style": "LONG_TERM",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": true,
      "_market_value": 1444.2,
      "_unreal_pnl": -82.22,
      "_market_price": 722.0999756,
      "current_price": 723.6599731445312,
      "pnl_pct": -5.182063502242995,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 763.21,
        "trail_pct": 0.5,
        "intraday_sl_pct": null,
        "intraday_sl_price": null,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 686.889,
        "intraday_sl_exempt": true,
        "exempt_reason": "Champ DCA 長期保有"
      }
    },
    {
      "ticker": "XLE",
      "strategy": "TWS_other",
      "entry_date": "—",
      "entry_price": 59.4204111,
      "shares": 9.0,
      "entry_value": 534.7836999,
      "hold_days": null,
      "exit_style": "UNKNOWN",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": false,
      "_market_value": 538.74,
      "_unreal_pnl": 3.96,
      "_market_price": 59.8600006,
      "current_price": 59.459999084472656,
      "pnl_pct": 0.06662354524278324,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 59.4204111,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 57.637798767,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 53.478369990000004,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "COST",
      "strategy": "Champ_DCA",
      "entry_date": "—",
      "entry_price": 1006.82,
      "shares": 1.0,
      "entry_value": 1006.82,
      "hold_days": null,
      "exit_style": "LONG_TERM",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": true,
      "_market_value": 1028.0,
      "_unreal_pnl": 21.18,
      "_market_price": 1028.0,
      "current_price": 1027.93994140625,
      "pnl_pct": 2.097687909085044,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 1006.82,
        "trail_pct": 0.5,
        "intraday_sl_pct": null,
        "intraday_sl_price": null,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 906.138,
        "intraday_sl_exempt": true,
        "exempt_reason": "Champ DCA 長期保有"
      }
    },
    {
      "ticker": "NVDA",
      "strategy": "Champ_DCA",
      "entry_date": "—",
      "entry_price": 229.68666665,
      "shares": 12.0,
      "entry_value": 2756.2399998,
      "hold_days": null,
      "exit_style": "LONG_TERM",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": true,
      "_market_value": 2571.36,
      "_unreal_pnl": -184.88,
      "_market_price": 214.2799988,
      "current_price": 215.25,
      "pnl_pct": -6.2853742712017375,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 229.68666665,
        "trail_pct": 0.5,
        "intraday_sl_pct": null,
        "intraday_sl_price": null,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 206.717999985,
        "intraday_sl_exempt": true,
        "exempt_reason": "Champ DCA 長期保有"
      }
    },
    {
      "ticker": "GOOG",
      "strategy": "Champ_DCA",
      "entry_date": "—",
      "entry_price": 389.2325,
      "shares": 4.0,
      "entry_value": 1556.93,
      "hold_days": null,
      "exit_style": "LONG_TERM",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": true,
      "_market_value": 1514.36,
      "_unreal_pnl": -42.57,
      "_market_price": 378.58999635,
      "current_price": 379.3900146484375,
      "pnl_pct": -2.528690525987043,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 389.2325,
        "trail_pct": 0.5,
        "intraday_sl_pct": null,
        "intraday_sl_price": null,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 350.30925,
        "intraday_sl_exempt": true,
        "exempt_reason": "Champ DCA 長期保有"
      }
    },
    {
      "ticker": "LLY",
      "strategy": "Champ_DCA",
      "entry_date": "—",
      "entry_price": 997.1,
      "shares": 1.0,
      "entry_value": 997.1,
      "hold_days": null,
      "exit_style": "LONG_TERM",
      "status": "open",
      "bracket": false,
      "_source": "tws_direct_positions",
      "_intraday_sl_exempt": true,
      "_market_value": 1064.65,
      "_unreal_pnl": 67.55,
      "_market_price": 1064.6500244,
      "current_price": 1065.6500244140625,
      "pnl_pct": 6.874939766729771,
      "exit_rules": {
        "tp1_pct": 0.0,
        "tp1_price": 997.1,
        "trail_pct": 0.5,
        "intraday_sl_pct": null,
        "intraday_sl_price": null,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 897.39,
        "intraday_sl_exempt": true,
        "exempt_reason": "Champ DCA 長期保有"
      }
    }
  ],
  "intraday_patterns": [],
  "intraday_positions": [],
  "strategies": [
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
      "tier": "S (Cross-Asset macro)",
      "name": "A7_DXY_Drop_EM_Long_v1 (7 軸目 Cross-Asset)",
      "cat": "X 柱 cross-asset macro (通貨 → EM equity)",
      "tickers": "UUP signal → EEM/FXI/KWEB/EWZ/INDA",
      "condition": "UUP 5日 return <= -2% (ドル安) → 翌寄 EM ETF MOO BUY → 5d hold (TP+4/SL-7)",
      "hold": "5日",
      "freq": "n=70 OOS / 約 4.4 sig/月",
      "sharpe": "cost+0.87% $/株/月=$1.10 %/月=+3.66% N_eff+0.86 panic 全 corr ≤ 0.07 完全独立 stress 0.28",
      "live": "✅ size_mult=0.73",
      "memo": "5/24 BIMETSX 7 軸目 X 柱 確立、 リザレクション ふるい PASS で復活 (ゼロサイズ偽陰性)。 Asness-Moskowitz-Pedersen 2013 / Frankel-Rose 1996 文献。 S 柱 と corr -0.006 完全別軸。",
      "monthly_profit_usd": 25.57,
      "_signals_per_month": 4.4,
      "_r2_n": 70,
      "_r2_mean_pct": 0.87,
      "_per_trade_usd": 7.96,
      "_position_basis": 915,
      "_monthly_full_size_usd": 35.03,
      "_size_mult_current": 0.25
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
        "Pullback_v1"
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
        "Drop5d_BroadPanic"
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
        "Pullback_v1"
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
      "strategies": []
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
      "strategies": []
    },
    {
      "ticker": "EEM",
      "name": "iShares MSCI Emerging Markets ETF",
      "reading": "新興国株式 ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "新興国株式",
      "is_champ": false,
      "strategies": []
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
        "Pullback_v1"
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
      "strategies": []
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
        "Pullback_v1"
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
      "strategies": []
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
        "Pullback_v1"
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
      "strategies": []
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
        "Drop5d_BroadPanic"
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
      "strategies": []
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
      "strategies": []
    },
    {
      "ticker": "XLE",
      "name": "State Street Energy Select Sector SPDR ETF",
      "reading": "エネルギー・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "エネルギー・セクター",
      "is_champ": false,
      "strategies": []
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
        "Pullback_v1"
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
      "strategies": []
    },
    {
      "ticker": "XOM",
      "name": "Exxon Mobil Corporation",
      "reading": "エクソンモービル",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Integrated",
      "is_champ": false,
      "strategies": []
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
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ]
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
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ]
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
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ]
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
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ]
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
      "netliq": 20677.97,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": 9137.97,
      "unrealized_today": -216.53
    }
  ],
  "morning_brief": "# MORNING BRIEF — 2026-05-26 (火) ACH $9,400 settle 当日\n\n_draft_ts: 2026-05-20 22:50 CT (前倒し 6日前) クロコー / 5/24-25 (土日) 更新予定_\n\n## 1. Header — timing 注意\n\n- 5/19 ACH $9,400 request → **5/26 (火) settle 予定 (T+5 銀行営業日)**\n- IBKR **Cash account**: PDT 適用外、 制約は **T+1 settlement** のみ。 5/26 朝着金 cash は 5/26 当日 BUY 可、 ただし sell→buy 同日 round trip は同 cash で 不可\n- 5/20 終 NetLiq **$11,342.78** / Available Cash **$3,649.27** / 短期 open **0**、 Champ 5銘柄 (PWR 2 / COST 1 / NVDA 12 / GOOG 4 / LLY 1) のみ\n- 今週 short 累計 realized **-$48.34** (5/20 force_sell 4本 + GOOGL/FTAI round trip = 8 fills 勝1)\n\n## 2. 入金 status 確認 (06:30-07:30 CT)\n\n1. `python sync_mobile.py` run → `mobile/data.js` `today_summary.netliq` が **~$20,742** へ jump 確認\n2. `available_funds` が **$3,649 → ~$13,049 (+$9,400)** に増えてるか\n3. TWS UI 「Available Funds」 直接照合、 cash settle 反映 lag あれば 30 分待機\n\n## 3. 配分 plan (5/19 夜 user 明示)\n\n### Champ DCA $1,160 (案 A 仮確定: champ_dca_schedule.json `2026-05-26`)\n- **PWR 1 株 (~$763)** + **GOOG 1 株 (~$389)** = **$1,152**\n- NVDA は既に 12 株 (集中過剰 + 5/20 AH 反応次第) → skip\n- `_alternative_if_nvda_drops`: NVDA -7%+ drop 時 NVDA buy-the-dip 5 株 ~$1,000-1,100 を 案 A 代替 (user 5/24-25 最終判断)\n\n### 短期 $8,240 (拡張 pool)\n- 既存 $2,200 + 新規 $8,240 = **$10,440 規模**\n- 1 ポジ size: 33% × $10,440 = **~$3,447** (HighPullback50_v1 / Sector_FriPanic_v1 / Stoch_Oversold_v1 等 14 戦略 commission floor 監査済)\n- max_positions 3 並列、 mega 5/5 booster 全 fire 時は単独 $5,000 cap (5/19 large position split rule 適用、 $3k+ 個別株は 2-5 LMT ladder)\n\n## 4. 5/26 当日 chronological action\n\n| 時刻 (CT) | action | tool |\n|---|---|---|\n| 06:00 | price update | `update_prices_daily.py` (Task Scheduler 自動) |\n| 06:30 | TWS auto-start + bridge 5555 起動確認 | bat (5/17 夜 port kill 適用済) |\n| 07:00 | `sync_mobile.py` → ACH settle netliq jump 確認 | manual or cron |\n| 07:30 | **Champ DCA 起動**: `champ_dca_executor.py --date 2026-05-26` | PWR 1 / GOOG 1 MOO BUY |\n| 08:25 | **Short Term Auto 起動** (5/19 fix: 8:25 CT shift + 5×60s retry) | `short_term_executor.py` MOO BUY 寄付 |\n| 08:30 | 寄付約定 → bracket TP/SL 自動配置確認 | TWS UI + alerts.log |\n| 場中 | monitor cron 15min, force_close 14:42-15:00 window | `monitor.py` |\n| 15:00 | MOC SELL (MSTR / BroadPanic 系) 実行 | `--intraday-exit` batch |\n| 15:30 | 場引後 verify_claims 全 PASS 確認 / `mobile_history.json` 更新 | nightly audit |\n\n## 5. 想定リスク + mitigation\n\n- **ACH settle 遅延**: 5/26 朝に着金未確認なら Champ DCA を **5/27 (水) に 1日 slide**。 `champ_dca_schedule.json` `2026-05-26` を `2026-05-27` に rename + `_alternative_if_nvda_drops` 再判定。 短期 executor は既存 $3,649 で 1 ポジ ($1,200 上限) のみ起動、 残りは settle 翌日に\n- **NVDA earnings AH -4.13% 持続** (5/20 終 $223 → AH ~$214): Champ NVDA 12 株含み損 -$108 → -$180 拡大想定。 -7%+ なら 案 A→NVDA buy-the-dip 5 株切替 trigger、 5/24 (土) user 判断必要\n- **5/26 当日 signal 大量 fire**: priority queue は (1) HighPullback50_v1 NVDA/AMAT 等 Monday booster S+、 (2) Pharma_Panic_v1 / Semi_FriPanic_v1、 (3) Sector_FriPanic_v1。 max_positions 3 で 4本目以降は skip_reason 記録、 翌日再 trigger\n- **T+1 制約**: 5/26 settle cash は 5/27 から再利用可、 当日 SELL 約定 cash は 5/27 まで使えない (Cash ac",
  "heartbeats": {
    "sync_mobile": {
      "ts": "2026-05-25T23:45:44",
      "ok": true,
      "note": "131,248 B",
      "age_min": 14.65898045
    },
    "vix_regime": {
      "ts": "2026-05-25T23:45:25",
      "ok": true,
      "note": "GOOD score=3/4 VIX=17.13",
      "age_min": 14.975647116666666
    },
    "intraday_cron": {
      "ts": "2026-05-25T23:45:45",
      "ok": true,
      "note": "bat completed",
      "age_min": 14.642313783333332
    },
    "intraday_executor_scan": {
      "ts": "2026-05-26T00:00:03",
      "ok": true,
      "note": "",
      "age_min": 0.34231378333333334
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
      "ts": "2026-05-26T00:00:04",
      "ok": true,
      "note": "",
      "age_min": 0.3256471166666667
    },
    "morning_preopen_notify": {
      "ts": "2026-05-25T09:41:47",
      "ok": true,
      "note": "5 blocks",
      "age_min": 858.60898045
    },
    "state_tws_reconciler": {
      "ts": "2026-05-25T23:45:24",
      "ok": true,
      "note": "state=1 TWS=8 phantoms=0 partials=0",
      "age_min": 14.992313783333334
    },
    "monitor_main_engine_health": {
      "ts": "2026-05-25T18:00:01",
      "ok": true,
      "note": "cold-start: no Confluence_RSIStoch_v1 trades in 90d 内 (strategy 最近 LIVE 化 or signal 未発火)、 monitor 待機中、 baseline 33sig/mo $160/mo",
      "age_min": 360.3756471166667
    }
  },
  "regime": {
    "ts": "2026-05-25T23:45:25",
    "vix": 17.13,
    "spy_close": 745.64,
    "spy_10d_return_pct": 1.09,
    "smh_10d_return_pct": 1.73,
    "spy_50d_ma": 696.49,
    "spy_200d_ma": 676.25,
    "spy_vol_ratio_5d_20d": 0.98,
    "c1_vix_17_19": true,
    "c2_spy_uptrend_not_extended": true,
    "c3_semis_leading": true,
    "c4_vol_dry_up": false,
    "score": 3,
    "regime": "GOOD",
    "note": "良好 — 3/4 pass",
    "data_freshness_days": 3
  },
  "alerts_recent": [
    {
      "ts": "2026-05-25T09:41:47",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 0 件、 採用 0 件 | ✅ 前夜 audit: 70 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-05-23T08:34:26",
      "severity": "CRITICAL",
      "source": "short_term_executor_connect",
      "message": "TWS 接続 5 回全失敗 — 手動で TWS 起動 + executor 再実行が必要"
    },
    {
      "ts": "2026-05-22T08:00:05",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 13 件、 採用 3 件 |   · SPY US_D6_First_Hour_FT_v1 利確+2.00% |   · QQQ US_D7_VIX_cond_ORB_v1 利確+3.00% |   · GOOGL HighPullback50_v1 利確+6.00% | ✅ 前夜 audit: 70 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-05-22T07:21:58",
      "severity": "CRITICAL",
      "source": "R2_backtest_critical_findings",
      "message": "R2 OOS backtest 6.4 年 完了 ⚠ 重大: US_D7_VIX_cond_ORB_v1 paper→LIVE 化済が C tier -840/mo 致命的、 HighPullback50_v1 / RSIBB_v1 / Drop5d_ETF7 等 9 戦略 C tier 落ち、 LIVE 35 中 多数 anti-edge 化。 user 朝判断: 即 disable / 5/26 ACH 待ち / 様子見、 どれ?"
    },
    {
      "ts": "2026-05-21T08:39:30",
      "severity": "CRITICAL",
      "source": "state_tws_reconciler_phantom",
      "message": "state ↔ TWS phantom 検知 (3件): EXE state=11株 TWS=0, NTAP state=4株 TWS=0, ADI state=2株 TWS=0。 silent fail #22 系列、 state.json 自動 cleanup 実行。"
    },
    {
      "ts": "2026-05-21T08:00:05",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 6 件、 採用 4 件 |   · NVDA HighPullback50_v1 利確+0.84% |   · ON HighPullback50_v1 利確+0.84% |   · SPXL HighPullback50_v1 利確+0.84% |   · LIN Sector_FriPanic_v1 利確+1.36% | ✅ 前夜 audit: 62 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-05-20T08:00:05",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 6 件、 採用 4 件 |   · NVDA HighPullback50_v1 利確+0.84% |   · ON HighPullback50_v1 利確+0.84% |   · SPXL HighPullback50_v1 利確+0.84% |   · LIN Sector_FriPanic_v1 利確+1.36% | ✅ 前夜 audit: 30 件 全 PASS | ⚠ bridge 接続不可、 NetLiq/cash 不明 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-05-19T08:00:03",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 6 件、 採用 4 件 |   · NVDA HighPullback50_v1 利確+0.84% |   · ON HighPullback50_v1 利確+0.84% |   · SPXL HighPullback50_v1 利確+0.84% |   · LIN Sector_FriPanic_v1 利確+1.36% | ✅ 前夜 audit: 20 件 全 PASS | 💼 NetLiq $11,460、 cash $1,610 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    },
    {
      "ts": "2026-05-18T23:57:19",
      "severity": "INFO",
      "source": "morning_preopen",
      "message": "🌅 寄付前 サマリー (08:00 CT) | 📋 候補 6 件、 採用 4 件 |   · NVDA HighPullback50_v1 利確+0.84% |   · ON HighPullback50_v1 利確+0.84% |   · SPXL HighPullback50_v1 利確+0.84% |   · LIN Sector_FriPanic_v1 利確+1.36% | ✅ 前夜 audit: 11 件 全 PASS | 💼 NetLiq $11,460、 cash $1,610 | ℹ paper rehearsal 未走行 (cron 未配線か初回)"
    }
  ],
  "post_mortem": {
    "file": "weekly_post_mortem_2026-05-18.md",
    "content": "# Weekly Post-Mortem 2026-05-18 (counterfactual 直近 7 日)\n\n**Task #102 自動出力** — 場中 SL 売却 vs hold-end の比較で SL rule の週次勝敗を判定。\n\n## 📊 Summary\n\n- 期間: 過去 **7** 日 (closed_positions 1 件 対象、 うち場中 SL 系 **1** 件)\n- 場中 SL 実 P&L: **$-90.90**\n- 引け hold 仮想: **$-59.55**\n- 戦略 rule 通り hold (N日後 Close) 仮想: **$+0.00**\n- hold-引け の方が良かった件数: **1 / 1**\n- hold-rule の方が良かった件数: **0 / 1**\n\n## 🎯 今週判定: **LOSS**\n\n> 場中 SL 売却 で $31 (引け) / $91 (rule) の機会損失\n\n## 🔍 Trade-by-trade counterfactual\n\n| Ticker | Strat | Exit reason | 実 P&L | 引け hold P&L | rule hold P&L | 救済可? |\n|---|---|---|---:|---:|---:|---|\n| ON | HighPullback50_v1 | user_manual_-3%_intraday_SL | $-90.90 | $-59.55 | ? | **+$31** 救済 |\n\n## 📝 個別 narrative\n\n- **ON** (HighPullback50_v1, 2026-05-18 entry → 2026-05-18 user_manual_-3%_intraday_SL): 実 $-91 (-5.29%)、 引け hold なら $-60 (-3.50%) = **$31 救済可**\n\n---\n\n_generated by `weekly_post_mortem.py` @ 2026-05-18 23:47:53 CT_\n"
  },
  "exit_plans": [
    {
      "category": "短期 (寄付戦略)",
      "ticker": "EXE",
      "strategy": "CFO_Solo_PBuy_v1",
      "qty": 11,
      "entry_price": 97.41,
      "entry_date": "2026-05-22",
      "days_held": 4,
      "hold_days": 3,
      "bracket": {
        "tp_pct": 2.5,
        "tp_price": 99.85,
        "sl_pct": -10.0,
        "sl_price": 87.67
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 99.85,
          "target_pct": 2.5,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 87.67,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=3、 経過=4d",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 97.94000244140625,
      "unrealized_pct": 0.54,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "SPY",
      "strategy": "TWS_other",
      "qty": 1.0,
      "entry_price": 748.16,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 763.12,
        "sl_pct": -10.0,
        "sl_price": 673.34
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 763.12,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 673.34,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 745.5900268554688,
      "unrealized_pct": -0.34,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "XLE",
      "strategy": "TWS_other",
      "qty": 9.0,
      "entry_price": 59.4204111,
      "entry_date": "—",
      "days_held": null,
      "hold_days": 9999,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 60.61,
        "sl_pct": -10.0,
        "sl_price": 53.48
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 60.61,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 53.48,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=9999、 経過=Noned",
          "status": "発火対象 (timeout 経過)"
        }
      ],
      "current_price": 59.459999084472656,
      "unrealized_pct": 0.07,
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
  }
};
