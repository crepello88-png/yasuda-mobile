window.MOBILE_DATA = {
  "generated_at": "2026-05-25T13:15",
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
    "capital": 4237,
    "week_start": "2026-05-21",
    "week_end": "2026-05-25",
    "total_pnl_usd": 0.0,
    "total_pnl_pct": 0.0,
    "n_trades": 0,
    "n_wins": 0,
    "win_rate": 0.0,
    "days": [
      {
        "date": "2026-05-21",
        "dow": "Thu",
        "vix": null,
        "pnl": 0.0,
        "cum": 0.0,
        "n": 0,
        "wins": 0
      },
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
    "week_start": "2026-05-21",
    "week_end": "2026-05-25",
    "today_date": "2026-05-25",
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
  "tracker_strategies": [],
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
    }
  ],
  "morning_brief": "# MORNING BRIEF — 2026-05-26 (火) ACH $9,400 settle 当日\n\n_draft_ts: 2026-05-20 22:50 CT (前倒し 6日前) クロコー / 5/24-25 (土日) 更新予定_\n\n## 1. Header — timing 注意\n\n- 5/19 ACH $9,400 request → **5/26 (火) settle 予定 (T+5 銀行営業日)**\n- IBKR **Cash account**: PDT 適用外、 制約は **T+1 settlement** のみ。 5/26 朝着金 cash は 5/26 当日 BUY 可、 ただし sell→buy 同日 round trip は同 cash で 不可\n- 5/20 終 NetLiq **$11,342.78** / Available Cash **$3,649.27** / 短期 open **0**、 Champ 5銘柄 (PWR 2 / COST 1 / NVDA 12 / GOOG 4 / LLY 1) のみ\n- 今週 short 累計 realized **-$48.34** (5/20 force_sell 4本 + GOOGL/FTAI round trip = 8 fills 勝1)\n\n## 2. 入金 status 確認 (06:30-07:30 CT)\n\n1. `python sync_mobile.py` run → `mobile/data.js` `today_summary.netliq` が **~$20,742** へ jump 確認\n2. `available_funds` が **$3,649 → ~$13,049 (+$9,400)** に増えてるか\n3. TWS UI 「Available Funds」 直接照合、 cash settle 反映 lag あれば 30 分待機\n\n## 3. 配分 plan (5/19 夜 user 明示)\n\n### Champ DCA $1,160 (案 A 仮確定: champ_dca_schedule.json `2026-05-26`)\n- **PWR 1 株 (~$763)** + **GOOG 1 株 (~$389)** = **$1,152**\n- NVDA は既に 12 株 (集中過剰 + 5/20 AH 反応次第) → skip\n- `_alternative_if_nvda_drops`: NVDA -7%+ drop 時 NVDA buy-the-dip 5 株 ~$1,000-1,100 を 案 A 代替 (user 5/24-25 最終判断)\n\n### 短期 $8,240 (拡張 pool)\n- 既存 $2,200 + 新規 $8,240 = **$10,440 規模**\n- 1 ポジ size: 33% × $10,440 = **~$3,447** (HighPullback50_v1 / Sector_FriPanic_v1 / Stoch_Oversold_v1 等 14 戦略 commission floor 監査済)\n- max_positions 3 並列、 mega 5/5 booster 全 fire 時は単独 $5,000 cap (5/19 large position split rule 適用、 $3k+ 個別株は 2-5 LMT ladder)\n\n## 4. 5/26 当日 chronological action\n\n| 時刻 (CT) | action | tool |\n|---|---|---|\n| 06:00 | price update | `update_prices_daily.py` (Task Scheduler 自動) |\n| 06:30 | TWS auto-start + bridge 5555 起動確認 | bat (5/17 夜 port kill 適用済) |\n| 07:00 | `sync_mobile.py` → ACH settle netliq jump 確認 | manual or cron |\n| 07:30 | **Champ DCA 起動**: `champ_dca_executor.py --date 2026-05-26` | PWR 1 / GOOG 1 MOO BUY |\n| 08:25 | **Short Term Auto 起動** (5/19 fix: 8:25 CT shift + 5×60s retry) | `short_term_executor.py` MOO BUY 寄付 |\n| 08:30 | 寄付約定 → bracket TP/SL 自動配置確認 | TWS UI + alerts.log |\n| 場中 | monitor cron 15min, force_close 14:42-15:00 window | `monitor.py` |\n| 15:00 | MOC SELL (MSTR / BroadPanic 系) 実行 | `--intraday-exit` batch |\n| 15:30 | 場引後 verify_claims 全 PASS 確認 / `mobile_history.json` 更新 | nightly audit |\n\n## 5. 想定リスク + mitigation\n\n- **ACH settle 遅延**: 5/26 朝に着金未確認なら Champ DCA を **5/27 (水) に 1日 slide**。 `champ_dca_schedule.json` `2026-05-26` を `2026-05-27` に rename + `_alternative_if_nvda_drops` 再判定。 短期 executor は既存 $3,649 で 1 ポジ ($1,200 上限) のみ起動、 残りは settle 翌日に\n- **NVDA earnings AH -4.13% 持続** (5/20 終 $223 → AH ~$214): Champ NVDA 12 株含み損 -$108 → -$180 拡大想定。 -7%+ なら 案 A→NVDA buy-the-dip 5 株切替 trigger、 5/24 (土) user 判断必要\n- **5/26 当日 signal 大量 fire**: priority queue は (1) HighPullback50_v1 NVDA/AMAT 等 Monday booster S+、 (2) Pharma_Panic_v1 / Semi_FriPanic_v1、 (3) Sector_FriPanic_v1。 max_positions 3 で 4本目以降は skip_reason 記録、 翌日再 trigger\n- **T+1 制約**: 5/26 settle cash は 5/27 から再利用可、 当日 SELL 約定 cash は 5/27 まで使えない (Cash ac",
  "heartbeats": {
    "sync_mobile": {
      "ts": "2026-05-25T13:09:33",
      "ok": true,
      "note": "74,470 B",
      "age_min": 5.8065274833333325
    },
    "vix_regime": {
      "ts": "2026-05-25T13:00:30",
      "ok": true,
      "note": "GOOD score=3/4 VIX=17.13",
      "age_min": 14.856527483333334
    },
    "intraday_cron": {
      "ts": "2026-05-25T13:00:49",
      "ok": true,
      "note": "bat completed",
      "age_min": 14.539860816666668
    },
    "intraday_executor_scan": {
      "ts": "2026-05-25T13:15:03",
      "ok": true,
      "note": "",
      "age_min": 0.30652748333333335
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
      "ts": "2026-05-25T13:15:09",
      "ok": true,
      "note": "",
      "age_min": 0.20652748333333332
    },
    "morning_preopen_notify": {
      "ts": "2026-05-25T09:41:47",
      "ok": true,
      "note": "5 blocks",
      "age_min": 213.57319414999998
    },
    "state_tws_reconciler": {
      "ts": "2026-05-25T13:00:29",
      "ok": true,
      "note": "state=1 TWS=8 phantoms=0 partials=0",
      "age_min": 14.87319415
    }
  },
  "regime": {
    "ts": "2026-05-25T13:00:30",
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
      "days_held": 3,
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
          "due": "hold_days=3、 経過=3d",
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
    "_doc": "5/25 整地後 F7 (= BIMETSX 7軸: B-I-M-E-T-S-X) portfolio governance。 F8 = 将来拡張、 D 軸 (= Intraday) 追加候補 (= 場中休止中、 memory/intraday-strategies-on-hold.md)。 merit-driven 規律、 詳細 memory/f7-framework.md。",
    "summary": {
      "framework_name": "F7",
      "total_size": 10.76,
      "b_share_pct": 36.4,
      "live_count": 14,
      "probe_count": 0,
      "wiring_count": 0,
      "inert_count": 0,
      "empty_axes": [],
      "warning_axes": [
        "B"
      ],
      "n_eff_full_period": 7.31,
      "last_updated": "2026-05-25",
      "top_earners_real_position_basis_915": {
        "CrossSec_Mom_v1": {
          "monthly_usd": 772,
          "tier": "SS+",
          "note": "月 35 sig × size 0.6 で大量、 capital constraint 注意"
        },
        "Bull_Trend_Breakout_v1": {
          "monthly_usd": 208,
          "tier": "SS+",
          "note": "月 74 sig × size 0.25 probe で既 $208"
        },
        "PEAD_SUE_60d_v1": {
          "monthly_usd": 200,
          "tier": "SS+",
          "note": "月 10 sig × $80/trade × size 0.25 probe"
        }
      }
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
            "hold": 10,
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
            "hold": 18,
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
        ],
        "inert_count": 0
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
            "hold": 14,
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
    "governance": "新戦略は screen_lib (4 関門) + フルピリオド regime gate 必須、 N_eff (not Sharpe) で評価、 intra-axis 増殖禁止、 R2 merit-driven で自然降下",
    "_f8_future": {
      "name": "F8 (= F7 + D)",
      "D_pillar": "Intraday (= 同日 entry-exit、 EOD signal でなく場中 signal)",
      "status": "休止中、 5/22 R2 catastrophic で全 9 戦略 disable、 PWA 「場中(休止中)」 タブ表示",
      "revival_path": "(1) intraday discovery 仕切り直し (= screen_lib + フルピリオド regime gate)、 (2) 既 9 戦略 ふるい再走、 (3) 新 thesis (= pre-open imbalance / intraday momentum decay 等)"
    }
  },
  "tracker_tickers": [
    {
      "ticker": "AAPL",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "ABNB",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "ADI",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AEHR",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AEIS",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AGL",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AGX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "ALSN",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AMAT",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pullback_v1",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "AMD",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "AMPX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AMZN",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "ANET",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "APD",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "AVGO",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "SPY_Panic2_v1",
        "Pullback_v1",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "AXP",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "BAC",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "BAX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "BSX",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "BWA",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "CAH",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "CF",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "CHD",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "CHRW",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "CLSK",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "CNC",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "CNP",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "COHU",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "COIN",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "COO",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "COP",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "COST",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": true
    },
    {
      "ticker": "CRM",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "CRSP",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "CTVA",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "CVX",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "D",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "DE",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "DIA",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "DLTR",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "DNLI",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "EBAY",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "ED",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EEM",
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EG",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EL",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EOG",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "EPAM",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EQIX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "EQR",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EQT",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EVRG",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EWJ",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "EWZ",
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "EXE",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FAS",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "FAST",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FBTC",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "FDS",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FDX",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FISV",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FITB",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FIX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "FLR",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "FND",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "FSLR",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FTAI",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "FTNT",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "FTV",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "FXI",
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "GEHC",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "GL",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "GLD",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "GM",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "GOOG",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": true
    },
    {
      "ticker": "GOOGL",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "GPK",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "HD",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "HIW",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "HOOD",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "HYG",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "IBIT",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "ICHR",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "INDA",
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "INTC",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "IP",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "ITT",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "IWM",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "J",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "JPM",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "KBR",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "KDP",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "KLAC",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Pullback_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "KWEB",
      "strategies": [
        "A7_DXY_Drop_EM_Long_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "LIN",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "LITE",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "LLY",
      "strategies": [
        "Earnings_T_minus_5",
        "Confluence_RSIBB_v1",
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": true
    },
    {
      "ticker": "LNG",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "LOW",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "LRCX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "M",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "MA",
      "strategies": [
        "Earnings_T_minus_5",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MAR",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "MARA",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "META",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pullback_v1",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MGM",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MRNA",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "MS",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "MSCI",
      "strategies": [
        "SPY_Panic2_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MSFT",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Confluence_RSIBB_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MSTR",
      "strategies": [
        "MSTR_Panic20"
      ],
      "is_champ": false
    },
    {
      "ticker": "MTB",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "MU",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "NCLH",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "NEE",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "NFLX",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "NSC",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "NTAP",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "NTRS",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "NVDA",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "SPY_Panic2_v1",
        "Confluence_RSIBB_v1",
        "TLT_Spike_Equity_v1"
      ],
      "is_champ": true
    },
    {
      "ticker": "ODFL",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "OLLI",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "ON",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "ORLY",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "PANW",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "PH",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "PODD",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "PRIM",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "PSX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "PWR",
      "strategies": [],
      "is_champ": true
    },
    {
      "ticker": "QCOM",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "QQQ",
      "strategies": [
        "VIX_Backward",
        "Confluence_RSIBB_v1",
        "TLT_Spike_Equity_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "RBC",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "RCL",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "REGN",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "RIOT",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "ROK",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "ROL",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "SBAC",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "SCHW",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "SE",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SHW",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "SLB",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SLDB",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SLV",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "SMH",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "VIX_Backward",
        "Confluence_RSIBB_v1",
        "EarnCascade_SMH_up5_h5",
        "EarnCascade_SMH_down5_h10"
      ],
      "is_champ": false
    },
    {
      "ticker": "SNPS",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "SOFI",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SOXL",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "SOXX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "SPY_Panic2_v1",
        "Confluence_RSIBB_v1",
        "EarnCascade_SOXX_up5_h5"
      ],
      "is_champ": false
    },
    {
      "ticker": "SPG",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "SPXL",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SPY",
      "strategies": [
        "VIX_Backward"
      ],
      "is_champ": false
    },
    {
      "ticker": "STLD",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "STRL",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "SYK",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "SYY",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "TDG",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "TGT",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "TLT",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "TMUS",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "TNA",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "TQQQ",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "TSLA",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "TWST",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "SPY_Panic2_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "UBER",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "UNH",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "UPRO",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "V",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "VC",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "VGAS",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "VNO",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "VRT",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "VRTX",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pharma_Panic_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "VST",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "VTI",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "WAB",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "WBD",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "WCC",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "WSM",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic"
      ],
      "is_champ": false
    },
    {
      "ticker": "XBI",
      "strategies": [
        "VIX_Backward"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLB",
      "strategies": [
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLC",
      "strategies": [
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLE",
      "strategies": [
        "Confluence_RSIBB_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLF",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "CPI_Cyclical",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLI",
      "strategies": [
        "CPI_Cyclical",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLK",
      "strategies": [
        "Drop5d_7",
        "Drop5d_BroadPanic",
        "VIX_Backward",
        "Pullback_v1",
        "Confluence_RSIBB_v1",
        "TLT_Spike_Equity_v1",
        "VIX_Spike_XLK_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLP",
      "strategies": [
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLRE",
      "strategies": [
        "Confluence_RSIBB_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLU",
      "strategies": [
        "CPI_Defensive",
        "Confluence_RSIBB_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLV",
      "strategies": [
        "CPI_Defensive",
        "Confluence_RSIBB_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XLY",
      "strategies": [
        "CPI_Cyclical",
        "Confluence_RSIBB_v1",
        "SectorRotation_Laggard_v1"
      ],
      "is_champ": false
    },
    {
      "ticker": "XOM",
      "strategies": [
        "Earnings_T_minus_5"
      ],
      "is_champ": false
    },
    {
      "ticker": "YUM",
      "strategies": [],
      "is_champ": false
    },
    {
      "ticker": "ZBRA",
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ],
      "is_champ": false
    }
  ]
};
