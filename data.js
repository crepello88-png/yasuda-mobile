window.MOBILE_DATA = {
  "generated_at": "2026-05-22T18:35",
  "today_summary": {
    "netliq": 11282.99,
    "cash": 1293.82,
    "available_funds": 1293.82,
    "excess_liquidity": 1293.82,
    "settled_cash": 1293.82,
    "buying_power": 1293.82,
    "stock_value": 9987.44,
    "unrealized_pnl": -211.52,
    "realized_pnl": 0.0,
    "day_pnl_pct": -1.8746803817073312,
    "account_type": "INDIVIDUAL",
    "open_positions": 8,
    "open_orders_count": 3,
    "fills_today_count": 3,
    "vix": null,
    "data_source": "TWS_direct_v2"
  },
  "tws_open_orders": [
    {
      "symbol": "XLE",
      "orderId": 207,
      "action": "SELL",
      "qty": 9.0,
      "orderType": "STP",
      "lmtPrice": 0.0,
      "auxPrice": 53.38,
      "tif": "GTC",
      "status": "PreSubmitted",
      "filled": 0.0,
      "remaining": 9.0
    },
    {
      "symbol": "SPY",
      "orderId": 199,
      "action": "SELL",
      "qty": 1.0,
      "orderType": "STP",
      "lmtPrice": 0.0,
      "auxPrice": 672.44,
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
  "tws_fills_today": [
    {
      "symbol": "EXE",
      "time": "2026-05-22 13:35:46+00:00",
      "side": "BOT",
      "shares": 11.0,
      "price": 97.41,
      "avgPrice": 97.41,
      "orderId": 191,
      "commission": 1.000033,
      "realizedPnL": 0.0
    },
    {
      "symbol": "SPY",
      "time": "2026-05-22 13:35:53+00:00",
      "side": "BOT",
      "shares": 1.0,
      "price": 747.16,
      "avgPrice": 747.16,
      "orderId": 197,
      "commission": 1.000003,
      "realizedPnL": 0.0
    },
    {
      "symbol": "XLE",
      "time": "2026-05-22 13:36:05+00:00",
      "side": "BOT",
      "shares": 9.0,
      "price": 59.3093,
      "avgPrice": 59.3093,
      "orderId": 204,
      "commission": 1.000027,
      "realizedPnL": 0.0
    }
  ],
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
    "capital": 11460.39,
    "week_start": "2026-05-18",
    "week_end": "2026-05-22",
    "total_pnl_usd": -138.13,
    "total_pnl_pct": -1.21,
    "n_trades": 8,
    "n_wins": 1,
    "win_rate": 20.0,
    "days": [
      {
        "date": "2026-05-18",
        "dow": "Mon",
        "vix": null,
        "pnl": -90.9,
        "cum": -90.9,
        "n": 1,
        "wins": 0
      },
      {
        "date": "2026-05-19",
        "dow": "Tue",
        "vix": null,
        "pnl": 1.05,
        "cum": -89.85,
        "n": 1,
        "wins": 1
      },
      {
        "date": "2026-05-20",
        "dow": "Wed",
        "vix": null,
        "pnl": -48.28,
        "cum": -138.13,
        "n": 6,
        "wins": 0
      },
      {
        "date": "2026-05-21",
        "dow": "Thu",
        "vix": null,
        "pnl": 0.0,
        "cum": -138.13,
        "n": 0,
        "wins": 0
      },
      {
        "date": "2026-05-22",
        "dow": "Fri",
        "vix": null,
        "pnl": 0.0,
        "cum": -138.13,
        "n": 0,
        "wins": 0
      }
    ],
    "trades": [
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
    "by_strategy": [
      {
        "strategy": "V10_PLTR_vwap",
        "n": 1,
        "pnl": 1.05,
        "wins": 1,
        "win_rate": 100.0
      },
      {
        "strategy": "Candle15m_TweezerBottom_test",
        "n": 1,
        "pnl": -1.89,
        "wins": 0,
        "win_rate": 0.0
      },
      {
        "strategy": "Stoch_Oversold_v1",
        "n": 1,
        "pnl": -4.27,
        "wins": 0,
        "win_rate": 0.0
      },
      {
        "strategy": "Intraday_T9_rsi20",
        "n": 1,
        "pnl": -7.36,
        "wins": 0,
        "win_rate": 0.0
      },
      {
        "strategy": "Sector_FriPanic_v1",
        "n": 1,
        "pnl": -11.78,
        "wins": 0,
        "win_rate": 0.0
      },
      {
        "strategy": "HighPullback50_v1",
        "n": 3,
        "pnl": -113.88,
        "wins": 0,
        "win_rate": 0.0
      }
    ],
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
      "realized_net": -138.13,
      "realized_gross": -126.76,
      "commission_total": 11.37,
      "n_trades": 8,
      "n_wins": 1,
      "n_losses": 7,
      "win_rate_pct": 12.5,
      "phantom_count": 0,
      "tickers": [
        "SPXL",
        "LIN",
        "IP",
        "VRTX",
        "GOOGL",
        "FTAI",
        "PLTR",
        "ON"
      ]
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
      "n_positions": 3,
      "cost_total": 2352.45,
      "value_total": 2352.45,
      "unrealized": 0.0,
      "positions": [
        {
          "ticker": "EXE",
          "shares": 11.0,
          "entry_price": 97.41,
          "cost": 1071.51
        },
        {
          "ticker": "SPY",
          "shares": 1.0,
          "entry_price": 747.16,
          "cost": 747.16
        },
        {
          "ticker": "XLE",
          "shares": 9.0,
          "entry_price": 59.3093,
          "cost": 533.78
        }
      ]
    },
    "week_start": "2026-05-18",
    "week_end": "2026-05-22",
    "today_date": "2026-05-22",
    "_note": "統一 summary、 PWA 短期/短vs長/週次 tab で参照、 二重計算禁止"
  },
  "signals_today": [
    {
      "ticker": "EXE",
      "strategy": "CFO_Solo_PBuy_v1",
      "ref_price": 97.41,
      "target_tp_pct": 2.5,
      "boost_n": 1.0
    },
    {
      "ticker": "SPY",
      "strategy": "US_D6_First_Hour_FT_v1",
      "ref_price": 747.16,
      "target_tp_pct": 2.0,
      "boost_n": 0.75
    },
    {
      "ticker": "XLE",
      "strategy": "Candle15m_TweezerBottom",
      "ref_price": 59.3093,
      "target_tp_pct": 2.0,
      "boost_n": 0.5
    }
  ],
  "signals_pending": [
    {
      "ticker": "QQQ",
      "strategy": "US_D7_VIX_cond_ORB_v1",
      "tier": "",
      "trigger": "US_D7_VIX_cond_ORB_v1",
      "ref_price": 714.51,
      "target_tp_pct": 3.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Index"
    },
    {
      "ticker": "GOOGL",
      "strategy": "HighPullback50_v1",
      "tier": "",
      "trigger": "HighPullback50_v1",
      "ref_price": 387.66,
      "target_tp_pct": 6.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "InternetMedia"
    },
    {
      "ticker": "GOOG",
      "strategy": "HighPullback50_v1",
      "tier": "",
      "trigger": "HighPullback50_v1",
      "ref_price": 383.47,
      "target_tp_pct": 6.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Other"
    },
    {
      "ticker": "WBD",
      "strategy": "Candle15m_TweezerBottom",
      "tier": "",
      "trigger": "Candle15m_TweezerBottom",
      "ref_price": 26.93,
      "target_tp_pct": 2.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Other"
    },
    {
      "ticker": "IBIT",
      "strategy": "Candle15m_TweezerBottom",
      "tier": "",
      "trigger": "Candle15m_TweezerBottom",
      "ref_price": 42.94,
      "target_tp_pct": 2.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Other"
    },
    {
      "ticker": "FBTC",
      "strategy": "Candle15m_TweezerBottom",
      "tier": "",
      "trigger": "Candle15m_TweezerBottom",
      "ref_price": 65.98,
      "target_tp_pct": 2.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Other"
    },
    {
      "ticker": "COST",
      "strategy": "TweezerBottom_30m",
      "tier": "",
      "trigger": "TweezerBottom_30m",
      "ref_price": 1029.07,
      "target_tp_pct": 2.0,
      "hold": 1,
      "selected": false,
      "shares": null,
      "sector": "Other"
    }
  ],
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
      "strategy": "US_D6_First_Hour_FT_v1",
      "entry_date": "2026-05-22",
      "entry_price": 747.16,
      "ref_price_at_signal": 746.4,
      "shares": 1,
      "entry_value": 747.16,
      "stop_loss_price": 672.444,
      "hold_days": 1,
      "exit_style": "BRACKET",
      "status": "open",
      "bracket": true,
      "take_profit_pct": 2.0,
      "take_profit_price": 762.1,
      "size_multiplier": 0.75,
      "current_price": 745.5900268554688,
      "pnl_pct": -0.21012542755650676,
      "exit_rules": {
        "tp1_pct": 1.2,
        "tp1_price": 756.12592,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 724.7452,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 672.444,
        "intraday_sl_exempt": false,
        "exempt_reason": null
      }
    },
    {
      "ticker": "XLE",
      "strategy": "Candle15m_TweezerBottom",
      "entry_date": "2026-05-22",
      "entry_price": 59.3093,
      "ref_price_at_signal": 59.0,
      "shares": 9,
      "entry_value": 533.7837,
      "stop_loss_price": 53.378370000000004,
      "hold_days": 1,
      "exit_style": "BRACKET",
      "status": "open",
      "bracket": true,
      "take_profit_pct": 2.0,
      "take_profit_price": 60.5,
      "size_multiplier": 0.5,
      "current_price": 59.459999084472656,
      "pnl_pct": 0.2540901418034869,
      "exit_rules": {
        "tp1_pct": 1.2,
        "tp1_price": 60.0210116,
        "trail_pct": 0.5,
        "intraday_sl_pct": -3.0,
        "intraday_sl_price": 57.530021,
        "catastrophic_stp_pct": -10.0,
        "catastrophic_stp_price": 53.378370000000004,
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
      "_market_value": 1446.86,
      "_unreal_pnl": -79.56,
      "_market_price": 723.4299927,
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
      "_market_value": 1028.2,
      "_unreal_pnl": 21.38,
      "_market_price": 1028.19995115,
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
      "_market_value": 2574.48,
      "_unreal_pnl": -181.76,
      "_market_price": 214.5399933,
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
      "_market_value": 1516.0,
      "_unreal_pnl": -40.93,
      "_market_price": 379.0,
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
  "intraday_patterns": [
    {
      "pattern_id": "ORB4_AGL_15m",
      "ticker": "AGL",
      "pattern_name": "AGL orb_15m_break thr=0",
      "tp_pct": 1.0,
      "sl_pct": -0.5,
      "fired": false
    },
    {
      "pattern_id": "VC1_KBR",
      "ticker": "KBR",
      "pattern_name": "KBR vol_climax_max thr=0",
      "tp_pct": 1.0,
      "sl_pct": -0.5,
      "fired": false
    },
    {
      "pattern_id": "VC2_VNO_60m",
      "ticker": "VNO",
      "pattern_name": "VNO vol_climax_max thr=0",
      "tp_pct": 1.5,
      "sl_pct": -2.0,
      "fired": false
    },
    {
      "pattern_id": "VC3_PRIM",
      "ticker": "PRIM",
      "pattern_name": "PRIM vol_climax_max thr=0",
      "tp_pct": 0.5,
      "sl_pct": -2.0,
      "fired": false
    }
  ],
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
      "hold": null
    },
    {
      "name": "Confluence_RSIBB_v1",
      "tier": "SS",
      "priority": 95,
      "tp": 4.0,
      "sl": -10.0,
      "monthly_usd": 78.0,
      "win": 63.0,
      "hold": null
    },
    {
      "name": "HighPullback50_v1",
      "tier": "S+",
      "priority": 88,
      "tp": 6.0,
      "sl": -10.0,
      "monthly_usd": 60.0,
      "win": 55.0,
      "hold": null
    },
    {
      "name": "EarnCascade_SOXX_up5_h5",
      "tier": "S+",
      "priority": 85,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 12.5,
      "win": 75.0,
      "hold": null
    },
    {
      "name": "EarnCascade_SMH_up5_h5",
      "tier": "S+",
      "priority": 82,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 12.5,
      "win": 75.0,
      "hold": null
    },
    {
      "name": "Stoch_Oversold_v1",
      "tier": "S+",
      "priority": 80,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 44.0,
      "win": 54.0,
      "hold": null
    },
    {
      "name": "Confluence_BBStoch_v1",
      "tier": "S+",
      "priority": 78,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 36.0,
      "win": 62.0,
      "hold": null
    },
    {
      "name": "EarnCascade_SMH_down5_h10",
      "tier": "S+",
      "priority": 75,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 7.5,
      "win": 75.0,
      "hold": null
    },
    {
      "name": "Golden_Cross_v1",
      "tier": "S",
      "priority": 73,
      "tp": 3.75,
      "sl": -10.0,
      "monthly_usd": 36.0,
      "win": 68.0,
      "hold": null
    },
    {
      "name": "SMA_Stack_v1",
      "tier": "S",
      "priority": 72,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 36.0,
      "win": 62.0,
      "hold": null
    },
    {
      "name": "MACD_Cross_v1",
      "tier": "S",
      "priority": 65,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 24.0,
      "win": 56.0,
      "hold": null
    },
    {
      "name": "Inside_Day_BO_v1",
      "tier": "S",
      "priority": 63,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 22.8,
      "win": 56.0,
      "hold": null
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
      "name": "CFO_Solo_PBuy_v1",
      "tier": "S",
      "priority": 60,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 12.4,
      "win": 58.0,
      "hold": null
    },
    {
      "name": "VolDryUp_v1",
      "tier": "S-",
      "priority": 58,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 20.0,
      "win": 55.0,
      "hold": null
    },
    {
      "name": "BB_Lower_Bounce_v1",
      "tier": "S-",
      "priority": 50,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 16.0,
      "win": 54.0,
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
      "hold": null
    },
    {
      "name": "TLT_Spike_Equity_v1",
      "tier": "A+",
      "priority": 45,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 15.0,
      "win": 65.0,
      "hold": null
    },
    {
      "name": "Drop5d_BroadPanic",
      "tier": "A+",
      "priority": 42,
      "tp": 5.06,
      "sl": -10.0,
      "monthly_usd": 7.5,
      "win": 65.0,
      "hold": null
    },
    {
      "name": "Drop5d_ETF7",
      "tier": "A+",
      "priority": 40,
      "tp": 5.0,
      "sl": -10.0,
      "monthly_usd": 7.5,
      "win": 55.0,
      "hold": null
    },
    {
      "name": "MSTR_Panic20",
      "tier": "A",
      "priority": 35,
      "tp": 5.31,
      "sl": -10.0,
      "monthly_usd": 6.0,
      "win": 70.0,
      "hold": null
    },
    {
      "name": "VIX_Spike_XLK_v1",
      "tier": "A",
      "priority": 33,
      "tp": 2.0,
      "sl": -10.0,
      "monthly_usd": 5.4,
      "win": 68.0,
      "hold": null
    },
    {
      "name": "SPY_Panic2_v1",
      "tier": "A",
      "priority": 32,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 4.5,
      "win": 65.0,
      "hold": null
    },
    {
      "name": "VIX_Backward",
      "tier": "A",
      "priority": 30,
      "tp": 2.0,
      "sl": -10.0,
      "monthly_usd": 4.5,
      "win": 65.0,
      "hold": null
    },
    {
      "name": "Drop5d_VIX30_StochKD",
      "tier": "A",
      "priority": 28,
      "tp": 2.5,
      "sl": -10.0,
      "monthly_usd": 4.5,
      "win": 65.0,
      "hold": null
    },
    {
      "name": "Pharma_Panic_v1",
      "tier": "A-",
      "priority": 20,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 2.0,
      "win": 70.0,
      "hold": null
    },
    {
      "name": "Semi_FriPanic_v1",
      "tier": "B+",
      "priority": 15,
      "tp": 3.0,
      "sl": -10.0,
      "monthly_usd": 1.0,
      "win": 60.0,
      "hold": null
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
      "tier": "?",
      "name": "Golden_Cross_v1 (ANET SMA20上抜けSMA50 → 3日hold MOO) ⭐ BULL",
      "cat": "短期 momentum",
      "tickers": "ANET のみ (monitor.py 自動 entry)",
      "condition": "SMA20 上抜け SMA50 (前日下、当日上) AND close>SMA50 → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d 回転重視)",
      "freq": "年 2〜4 件",
      "sharpe": "ST678 (5/17 03:38): ANET Sh+6.10 win 74% n=23 [4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 03:38 自動採用) monitor.py Golden_Cross_v1",
      "memo": "安田さん 5/17 03:37「強気相場の投資法を見つけないと戦えない」→ 全 9 戦略が mean-reversion 系で静穏期 idle → bull 用 momentum 補充。 ANET 単独 4/4 (TSLA/AVGO/COST/LLY も 3/4 で次候補)、 sample n=23 small で LIVE 検証段階",
      "monthly_profit_usd": -1.26,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.5%",
      "_backtest_n": 11,
      "_backtest_sharpe": -3.13,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "A",
      "name": "Pullback_v1 (SMA50>SMA200 + RSI<35 pullback → 3日hold MOO) ⭐⭐ BULL",
      "cat": "短期 pullback",
      "tickers": "GOOGL / META / AVGO / KLAC / AMAT / XLK (6 銘柄、 monitor.py 自動 entry, max 5 同時)",
      "condition": "SMA50>SMA200 (uptrend) AND RSI(14)<35 (oversold) AND 前日 RSI>=35 (fresh) → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 full Sh+3.39 vs 5d+3.11)",
      "freq": "銘柄毎 年 3〜6 件 × 6 = 年 18-36 件 (bull 期 main alpha source)",
      "sharpe": "ST680 (5/17 03:46): GOOGL Sh+6.87 / META +6.81 / AVGO +6.22 / KLAC +6.17 / AMAT +4.97 / XLK +4.05 win 60-70% n=53-65 [全 4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 03:46 自動採用) monitor.py Pullback_v1",
      "memo": "bull 戦略 main: SMA50>SMA200 uptrend 中の RSI<35 一時 oversold を拾う classic pullback。 SOXX/NVDA は 3/4 で次候補。 期待年率 +18% (booster なし base) — 採用済 9 戦略中最強",
      "monthly_profit_usd": 20.58,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.29%",
      "_backtest_n": 195,
      "_backtest_sharpe": 5.39,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "disabled",
      "name": "BB_Lower_Bounce_v1 (uptrend + BB下バンド touch → 1日hold MOO) BULL",
      "cat": "短期 pullback",
      "tickers": "NVDA (QQQ は ST726 除外)",
      "condition": "SMA50>SMA200 AND close <= BB(20,2) lower (前日 close > BB下 = fresh) → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO bracket (ST699: 5d→1d、 12mo Sh+6.34→+9.94 大幅改善)",
      "freq": "銘柄毎 年 3〜6 件 × 2 = 年 6-12 件",
      "sharpe": "ST683 (5/17 03:50): NVDA Sh+3.41 win 62% n=42 / QQQ Sh+3.41 win 68% n=53 [4/4 regime pass]",
      "live": "⏸ disabled (size_mult=0、 signal 観測のみ、 trail で復活検討)",
      "memo": "Pullback_v1 と相補: RSI ベース vs BB-band ベース、 NVDA は BB だけ 4/4 (RSI<35 では 3/4 含み)、 QQQ ETF 用",
      "monthly_profit_usd": 7.0,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.2,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%"
    },
    {
      "tier": "disabled",
      "name": "MACD_Cross_v1 (uptrend + MACD hist 0 上抜け → 1日hold MOO) BULL",
      "cat": "短期 momentum",
      "tickers": "AVGO (NVDA/AMZN は ST726 除外、 max 5)",
      "condition": "SMA50>SMA200 AND MACD histogram > 0 AND 前日 hist <= 0 (fresh cross) → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO bracket (ST699: 5d→1d、 12mo Sh -0.91→+3.32 劇的改善)",
      "freq": "銘柄毎 年 6〜10 件 × 3 = 年 18-30 件",
      "sharpe": "ST683 (5/17 03:50): NVDA Sh+4.02 win 62% n=77 / AVGO Sh+1.98 n=85 / AMZN Sh+3.11 n=71 [4/4 regime pass]",
      "live": "⏸ disabled (size_mult=0、 signal 観測のみ、 trail で復活検討)",
      "memo": "古典 MACD signal cross above zero、 uptrend 必須 (filter out 弱気側 false signal)、 Pullback と MACD で寄付 timing 分散",
      "monthly_profit_usd": 17.0,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 1.83,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.83%"
    },
    {
      "tier": "C",
      "name": "SMA_Stack_v1 (4-SMA bullish stack fresh → 3日hold MOO) ⭐ BULL trend onset",
      "cat": "短期 trend onset",
      "tickers": "AVGO / MA / SMH / SOXX / META (5 銘柄、 monitor.py 自動 entry, max 5 同時)",
      "condition": "SMA10 > SMA20 > SMA50 > SMA200 (4本完全 bullish stack) AND 前日 stack 不成立 (fresh transition) → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 12mo Sh+4.38→+4.89)",
      "freq": "銘柄毎 年 4〜8 件 × 5 = 年 20-40 件",
      "sharpe": "ST685/686 (5/17 04:00): AVGO te+2.99 / MA +8.01 (n=11) / SMH +4.35 / SOXX +6.61 / META +8.47 (n=14) Train>=2022 OOS pass",
      "live": "✅ 自動 entry (5/17 04:00 自動採用) monitor.py SMA_Stack_v1",
      "memo": "Trend onset: bull stack transition の最初の日に乗る。 短期反転 (BB/RSI) と違い 中期 trend follow、 booster effect 期待",
      "monthly_profit_usd": -1.9,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.21%",
      "_backtest_n": 116,
      "_backtest_sharpe": -0.88,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "HighPullback50_v1 (50日高値 → -3-5% pullback → 1日hold MOO) ⭐ BULL pullback v3",
      "cat": "短期 pullback",
      "tickers": "GOOGL/SNPS/NVDA + EQIX/ON/GOOG/SPXL/STRL/UPRO/VC = 10 銘柄 (ST710 拡張 20→ST726 で AAPL/IWM/LIN/META/MSCI/NFLX/PH/SMH/SOXX/XLK 除外、 max 5 同時)",
      "condition": "SMA50>SMA200 AND close/50日高値 ratio = 0.95-0.97 (3-5% pullback) AND 50日高値が直近 7 日内 + Mar skip → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "銘柄毎 年 5〜10 件 × 20 = 年 100-200 件 (signal max)",
      "sharpe": "ST710 (5/17 12:01) 拡張: 既存 5 + ST687 ext 7 + ST710 new 8。 新 top: EQIX +8.52 / ON +5.79 / GOOG +5.68 / SPXL +5.65 / STRL +5.10",
      "live": "✅ LIVE (trail 2% 適用、 5/22 朝 size 0.75 復活)",
      "memo": "直近高値から軽い pullback で押し目買い、 ETF + 大型 tech + leveraged ETF ハイブリッド、 ST710 で 8 銘柄追加 = 最高頻度 bull 戦略",
      "monthly_profit_usd": -95.51,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.8%",
      "_backtest_n": 1079,
      "_backtest_sharpe": -5.78,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "Stoch_Oversold_v1 (Stoch %K<20 + uptrend → 1日hold MOO) BULL oscillator",
      "cat": "短期 pullback",
      "tickers": "V/NVDA/META/INTC/AMD/AVGO + AEHR/DNLI/FTAI/YUM/AGX/WSM/LLY = 14 銘柄 (ST710 拡張 24→ST726 で AMAT/AMZN/ANET/GLD/KLAC/MA/MSFT/QQQ/RBC/SOXX 除外、 max 5)",
      "condition": "SMA50>SMA200 AND Stochastic %K(14日)<20 AND 前日 %K>=20 (fresh oversold) + Mar skip → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "銘柄毎 年 4〜8 件 × 24 = 年 96-192 件",
      "sharpe": "ST710 (5/17 12:01) 拡張: 新候補 17 中 top 10 採用。 AEHR +7.19 / MSFT +6.79 / DNLI +6.59 / FTAI +6.49 / RBC +5.69 / YUM +5.37 / AGX +5.10",
      "live": "✅ LIVE (trail 2% 適用、 5/22 朝 size 0.75 復活)",
      "memo": "BB/RSI とは別の oscillator (Stochastic)、 拡張で 24 銘柄、 small/mid-cap (AEHR/DNLI/FTAI) と BLUE chip 混在で 多様な signal source",
      "monthly_profit_usd": -85.91,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.7%",
      "_backtest_n": 1307,
      "_backtest_sharpe": -3.75,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "B (未稼働) Phase 1 paper",
      "name": "S1' CFO Solo P-buy (CFO単独 P-buy → 3日hold MOO) INSIDER",
      "cat": "短期 insider / fundamental",
      "tickers": "CFO universe 55 銘柄 (form4 で 全期 CFO P-buy 履歴ある銘柄、 monitor_config.json watchlist に登録済)",
      "condition": "当該 ticker の form4 で 直近 14d に CFO の open-market P-buy filing あり AND cluster window 30d 内に 他 insider P-buy 0 件 (= mu=1 solo) → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (TP+2.5% / SL-10%)",
      "freq": "年 11 件 (n=89 / 8年検証期間) × universe 53 銘柄 → 実発火 月 1-2件 (CFO P-buy は稀)",
      "sharpe": "logs/insider_skeptic_top.md A2 family role_CFO_solo_h3: n=89 Sh+2.72 win 61.8% OOS Sh+2.83 [3/4 regime pass]、 unique_tickers=53、 mean+0.83% per trade",
      "live": "⏳ Phase 1 paper (5/19 採用、 Tier B 未稼働、 実 trade 出るまで promote 禁止)",
      "memo": "古典 S1 cluster は ST329/446/581 で 3 度目の同結論で完全廃案、 派生で発見された 単一 insider role-based alpha。 CEO solo (h=1) は n=62 で sample 小、 CFO solo h=3 が最 robust。 10%-owner cluster は機関主体 で逆指標 (Sh-2.06)。 user 採用判断"
    },
    {
      "tier": "?",
      "name": "EarnCascade_SOXX_up5_h5 ⭐ EARNINGS (NVDA/AVGO 決算 ≥+5% → SOXX 5日hold)",
      "cat": "短期 earnings cascade",
      "tickers": "SOXX のみ (semi-leader NVDA/AVGO の earnings reaction trigger)",
      "condition": "NVDA or AVGO の earnings 当日 close/前日 close ≥ +5% (positive beat reaction) → 翌寄 SOXX BUY → 5日後 SELL",
      "hold": "5日 寄→5日後 MOO bracket (PEAD = post-earnings announcement drift)",
      "freq": "年 8-12 件 (NVDA + AVGO 各 4 回 earnings × beat rate)",
      "sharpe": "5/19 ST722-Earn (BG agent): Sh+2.62 win 68% n=69、 OOS Sh+8.21 win 100%",
      "live": "✅ 自動 entry (5/19 採用) monitor.py EarnCascade_SOXX_up5_h5",
      "memo": "古典 PEAD anomaly の sector cascade 版。 mega cap (NVDA/AVGO) 決算 beat → 半導体 ETF (SOXX) に drift で resmash continuation alpha",
      "monthly_profit_usd": 0.49,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SOXX ~\\$230 × mean 2.5%",
      "_backtest_n": 2,
      "_backtest_sharpe": 0.0,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "?",
      "name": "EarnCascade_SMH_up5_h5 ⭐ EARNINGS (NVDA/AVGO 決算 ≥+5% → SMH 5日hold)",
      "cat": "短期 earnings cascade",
      "tickers": "SMH のみ (semi-leader NVDA/AVGO の earnings reaction trigger)",
      "condition": "NVDA or AVGO の earnings 当日 close/前日 close ≥ +5% → 翌寄 SMH BUY → 5日後 SELL",
      "hold": "5日 寄→5日後 MOO bracket",
      "freq": "年 8-12 件",
      "sharpe": "5/19 ST722-Earn: Sh+2.51 win 67% n=69、 OOS Sh+8.58",
      "live": "✅ 自動 entry (5/19 採用) monitor.py EarnCascade_SMH_up5_h5",
      "memo": "SOXX と並走、 SMH は VanEck Semi ETF (SOXX は iShares)、 holdings やや異なるが NVDA/AVGO weight 同等",
      "monthly_profit_usd": 0.49,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SMH ~\\$560 × mean 2.0%",
      "_backtest_n": 2,
      "_backtest_sharpe": 0.0,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "?",
      "name": "EarnCascade_SMH_down5_h10 ⭐ EARNINGS (NVDA/AVGO 決算 ≤-5% → SMH 10日hold reversion)",
      "cat": "短期 earnings reversion",
      "tickers": "SMH のみ",
      "condition": "NVDA or AVGO の earnings 当日 close/前日 close ≤ -5% (negative miss) → 翌寄 SMH BUY → 10日後 SELL (mean reversion)",
      "hold": "10日 寄→10日後 MOO bracket",
      "freq": "年 3-5 件 (miss は beat より少ない)",
      "sharpe": "5/19 ST722-Earn: Sh+2.54 win 70% n=40、 OOS Sh+4.48",
      "live": "✅ 自動 entry (5/19 採用) monitor.py EarnCascade_SMH_down5_h10",
      "memo": "down-side overreaction → 10日で fade、 mean reversion。 up-side cascade と相補で earnings 両方向 catch",
      "monthly_profit_usd": -0.13,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SMH ~\\$560 × mean 2.5%",
      "_backtest_n": 4,
      "_backtest_sharpe": -1.44,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "SS",
      "name": "Confluence_RSIStoch_v1 ⭐⭐⭐ GOLD STANDARD (RSI<35 ∩ Stoch<20 同日 + uptrend → 3日hold MOO)",
      "cat": "短期 confluence (BULL TOP)",
      "tickers": "既存24 + ST710 新20 = 44 銘柄。 新候補 top: PRIM+14.91 / ON+11.24 / M+10.97 / VNO+10.04 / OLLI+9.94 / COP+8.99 / MAR+8.64 / CAH+7.92 / PANW+7.66 / DE+7.26 / ITT+7.22 / BAC+7.07 / EBAY+6.96 / ALSN+6.73 / MS+6.70 / VTI+6.51 / ADI+6.51 / FTAI+6.44 / IP+6.41 / SPXL+5.99",
      "condition": "SMA50>SMA200 AND RSI(14)<35 AND Stochastic %K(14)<20 同日発火 + Jan/Mar/May skip → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 12mo Sh+4.21→+4.10 で同等性能なら回転重視)",
      "freq": "銘柄毎 年 10-15 件 × 44 = 年 440-660 件 (max alpha bull strategy)",
      "sharpe": "ST710 (5/17 12:01) 拡張: 新候補 43 中 top 20 採用、 全 OOS Sh+5.99-14.91 + reg 3-4/4 pass。 small/mid-cap (PRIM/M/VNO/OLLI) で alpha mean+3-4%、 既存 + 拡張で 信号密度 約 3x",
      "live": "✅ 自動 entry (ST710 拡張 5/17 12:01) monitor.py Confluence_RSIStoch_v1 + 44 銘柄 ⭐⭐⭐ 最強 bull",
      "memo": "2-indicator (Pullback + Stoch) 完全同日 confluence、 single より rare だが te_Sh 2x。 ST710 で 20 銘柄追加 = signal 頻度 ~3x、 期待年率 +50-70%",
      "monthly_profit_usd": 160.01,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.25%",
      "_backtest_n": 2526,
      "_backtest_sharpe": 2.72,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "Confluence_RSIBB_v1 ⭐⭐⭐ PLATINUM (RSI<35 ∩ BB(20,2) lower 同日 + uptrend → 1日hold MOO)",
      "cat": "短期 confluence (BULL TOP2)",
      "tickers": "NVDA/AVGO/META/GOOGL/AMZN/AMAT/LLY/MSFT/MA/SMH/SOXX/XLK/XLV/XLE/XLY (15 銘柄、 ST726 で SPY/V/XLI/XLF + EEM/EWJ/GLD/HYG/SLV 除外、 max 5)",
      "condition": "SMA50>SMA200 AND RSI(14)<35 AND close<=BB(20,2) lower 同日発火 → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO bracket (ST699: 5d→1d、 12mo Sh+4.94→+5.37、 SOXX/GOOGL 即反発)",
      "freq": "銘柄毎 年 4-8 件 × 20 = 年 80-160 件",
      "sharpe": "ST692 Pat A (5/17 04:14): OOS te_Sh+2.41-20.29 全 20 銘柄 pass。 SOXX +20.29 (mean+4.13% win 94%) / GOOGL +14.76 / SMH +13.68 / NVDA +10.25 / QQQ +10.92 / MA +8.54 / AVGO +8.22 / META +7.77 / AMAT +8.74 / V +6.48 / SPY +6.16 / MSFT +6.04 / XLI +6.20 / XLV +4.86 / XLE +5.58",
      "live": "✅ 自動 entry (5/17 04:14 自動採用) monitor.py Confluence_RSIBB_v1 ⭐⭐⭐",
      "memo": "異なる indicator combo (RSI+BB) vs RSI+Stoch、 fire 日 異なる、 全 9 セクター ETF 含む = bull 期 ETF rotation 完全カバー。 期待年率 +40-50% (mean% 2-4 + 高頻度)",
      "monthly_profit_usd": -7.45,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%",
      "_backtest_n": 720,
      "_backtest_sharpe": -0.53,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "VolDryUp_v1 (vol<0.6×20d + 20d高値 0.97+ → 3日hold MOO) BULL stealth",
      "cat": "短期 stealth bull",
      "tickers": "IWM/KLAC/AVGO/META/SMH (5 銘柄、 ST726 で SPY/QQQ/XLF/COST/MA 除外、 max 5)",
      "condition": "SMA50>SMA200 AND Volume < 0.6×20日平均 AND close >= 0.97×20日高値 → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 12mo Sh+3.44→+4.60、 stealth breakout 3d で抜け)",
      "freq": "銘柄毎 年 3-7 件 × 10 = 年 30-70 件",
      "sharpe": "ST693 Pat B (5/17 04:18): OOS XLF te_Sh+8.42 win 76% / IWM +7.82 / SPY +7.47 / QQQ +7.35 / COST +6.16 / KLAC +3.99 / AVGO +3.48 / SMH +3.52 / META +3.14 / MA +2.44",
      "live": "✅ 自動 entry (5/17 04:18 自動採用) monitor.py VolDryUp_v1",
      "memo": "Stealth bull = 高値圏で出来高静か = 機関の静かな accumulation 仮説。 他 bull 戦略と独立 (volume signal、 他は価格/オシレーター)。 期待年率 +15-20%",
      "monthly_profit_usd": -21.34,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": -1.45,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.91%",
      "_backtest_n": 376,
      "_backtest_sharpe": -3.04,
      "_backtest_oos_n": 58,
      "_backtest_oos_mean_pct": -0.088
    },
    {
      "tier": "C",
      "name": "Inside_Day_BO_v1 (Inside Day Breakout in uptrend → 1日hold MOO) BULL micro-pattern",
      "cat": "短期 breakout",
      "tickers": "NVDA のみ (ST726 で SPY/GLD 除外、 max 5 同時)",
      "condition": "SMA50>SMA200 AND 前日 (i-1) が 前々日 (i-2) の inside (高値↓+安値↑) AND 今日 close > 前々日高値 (breakout) → 翌寄 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "銘柄毎 年 8〜10 件 × 3 = 年 24-30 件",
      "sharpe": "ST712 (5/17 12:03): NVDA oos Sh+4.56 win 71% n=24 reg 3/4 l12 +21.5 / SPY +8.16 win 74% n=23 reg 3/4 / GLD +5.42 win 56% n=25 reg 3/4",
      "live": "✅ 自動 entry (5/17 12:03 自動採用) monitor.py Inside_Day_BO_v1",
      "memo": "Inside day = volatility 圧縮、 breakout で trend continuation。 NVDA last 12mo Sh+21.5 = 直近 regime 最強、 SPY/GLD で 分散",
      "monthly_profit_usd": -5.98,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.44%",
      "_backtest_n": 90,
      "_backtest_sharpe": -4.69,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "A",
      "name": "Sector_FriPanic_v1 (Sector ETF Fri-2% → Mon 寄 BUY target → 1日hold MOO) PANIC follow-on",
      "cat": "短期 panic 追随",
      "tickers": "JPM (XLF) / BAC (XLF) / MS (XLF) / LIN (XLB) / PH (XLI) / XOM (XLE) (6 pair、 monitor.py 自動 entry, max 5)",
      "condition": "金曜のみ 発火: 対応 sector ETF (XLF/XLB/XLI/XLE) 1日 chg<-2% → 翌月曜 寄付 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO (週末挟むので Mon→Tue)",
      "freq": "年 5-15 件 × 6 = 年 30-90 件 (sector panic 頻度依存)",
      "sharpe": "ST713 (5/17 12:04): XLF→JPM Sh+5.97 win 77% n=30 4/4 reg / XLF→BAC +5.05 / XLF→MS +6.94 / XLB→LIN +7.33 3/4 / XLI→PH +7.07 3/4 / XLE→XOM +4.77 3/4",
      "live": "✅ 自動 entry (5/17 12:04 自動採用) monitor.py Sector_FriPanic_v1",
      "memo": "既存 Pharma_Panic / Semi_FriPanic と同様の sector-follow 構造、 金曜投売り (週末ポジ調整) を Mon の反発で取る = panic 月曜効果",
      "monthly_profit_usd": 19.14,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "XLK ~\\$176 × mean 0.55%",
      "_backtest_n": 193,
      "_backtest_sharpe": 4.74,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "MSTR_Panic20 (自動)",
      "cat": "短期 swing",
      "tickers": "MSTR",
      "condition": "MSTR chg5 < -20% (Drop5d_7 -12% より深い専用 threshold)",
      "hold": "当日 寄→引 MOC",
      "freq": "年 2〜3 件 (n=25/10年)",
      "sharpe": "MOC SELL 化で Sh+9.95 win 72% (intraday、 ovn+7.33 から +36% up)",
      "live": "✅ 自動 entry + MOC SELL 引け売り (5/17 早朝 ST596 採用)",
      "memo": "寄→引 intraday: MOO BUY 寄付 + MOC SELL 15:00 CT 引け売り、 同日完結",
      "monthly_profit_usd": -49.87,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "MSTR ~\\$300 × mean 5.31%",
      "_backtest_n": 774,
      "_backtest_sharpe": -1.43,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "A",
      "name": "Drop5d_BroadPanic (MOC 復活)",
      "cat": "短期 mean-reversion (intraday)",
      "tickers": "100銘柄 watchlist",
      "condition": "chg5<-12% + SPY 5日<-5% (broad market panic)",
      "hold": "当日 寄→引 MOC",
      "freq": "年 30〜80 件 (broad panic 時)",
      "sharpe": "MOC化 Sh+1.98 win 55% mean+0.96% (n=36820, ovn+0.91 から 2倍化 ST596)",
      "live": "✅ 自動 entry + MOC SELL (5/17 早朝 廃案撤回)",
      "memo": "一度廃案後 ST596 で intraday 復活、 同日 15:00 CT MOC SELL 自動",
      "monthly_profit_usd": 17.09,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.96%",
      "_backtest_n": 851,
      "_backtest_sharpe": 0.52,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "SPY_Panic2_v1 (SPY 1d<-2% → 5銘柄候補 max 3 entry)",
      "cat": "短期 mean-rev",
      "tickers": "NVDA(MOC) + MSCI(MOC) + TWST(MOC) + AVGO(MOO) + SOXX(MOO) (max 3 同時 entry)",
      "condition": "SPY 1日 chg<-2% (fresh trigger) → 翌寄 BUY → MOC or MOO SELL (per-ticker)",
      "hold": "1日 (NVDA/MSCI/TWST = 寄→引 MOC、 AVGO/SOXX = 寄→翌寄 MOO)",
      "freq": "年 10 件 × max 3 = 30 entry/年",
      "sharpe": "ST644/648/656 (5/17 02:55): NVDA MOC Sh+5.13 / MSCI MOC +5.31 / TWST MOC +4.34 / AVGO MOO +3.86 / SOXX MOO +3.73 (全 4/4 regime pass)",
      "live": "✅ 自動 entry (5/17 02:55 自動採用 + basket 拡張) monitor.py SPY_Panic2_v1",
      "memo": "ST650 で AVGO/SOXX MOC化は 2022-2023 fail (Sh-2.89/-0.58) で MOO に戻し、 NVDA は MOC で 4/4 維持。 ST656 で全 watchlist 30+ 銘柄から MSCI/TWST も MOC 4/4 確認 → basket 拡張。 max 3 entry なので NVDA/MSCI/TWST が優先 (MOC 強い順)、 AVGO/SOXX は 4 銘柄目以降 overflow 時のみ entry",
      "monthly_profit_usd": -2.38,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SPY ~\\$740 × mean 1.0%",
      "_backtest_n": 225,
      "_backtest_sharpe": -0.42,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "B",
      "name": "Semi_FriPanic_v1 (SMH Fri-3% → AVGO Mon 1日)",
      "cat": "短期 mean-rev",
      "tickers": "AVGO のみ (monitor.py 自動 entry)",
      "condition": "SMH chg5<-3% on Friday AND month not in {2,3} → AVGO Mon 寄付 BUY → Tue 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "年 5〜10 件",
      "sharpe": "ST641 (5/17 早朝): Sh+3.94 mean+0.82% win 65% n=85 [4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 早朝 自動採用) monitor.py Semi_FriPanic_v1",
      "memo": "ST643: 2/3月 anti-edge (Sh-3.71/-1.06) skip 必須、 Fri vs Mon-Thr +2.67 Sh Δ で Friday filter 必須。 1/4/9/11月 強 (Sh+8-17)。 NVDA/KLAC/AMAT/MU は 3/4 regime のみで AVGO 単独運用",
      "monthly_profit_usd": 3.12,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SMH ~\\$560 × mean 0.82%",
      "_backtest_n": 49,
      "_backtest_sharpe": 4.08,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "Pharma_Panic_v1 (XBI-7%∩IBB-5% → VRTX 1日)",
      "cat": "短期 mean-rev",
      "tickers": "VRTX のみ (monitor.py 自動 entry)",
      "condition": "XBI chg5<-7% AND IBB chg5<-5% AND month != 11 → VRTX 翌寄 BUY → 翌寄 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "年 3〜6 件 (改良後)",
      "sharpe": "ST627/631 (5/17 早朝): base Sh+4.50 → IBB confirm Sh+5.17 n=81 → +11月 skip [4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 早朝 自動採用 + 02:15 改良) monitor.py Pharma_Panic_v1",
      "memo": "ST628 個別 VRTX/REGN は直近 Sh -7.62 劣化 → sector trigger 経由が直近 robust。 ST631: 11月 anti-edge Sh-9.09 + IBB<-5 confirm で Sh+0.67 改善。 VIX>=30 booster 候補 Sh+5.95。 hold=5d 既存 Pharma 桶屋 (brief_enhancer) と並走可、 同日 entry 時は v1 優先",
      "monthly_profit_usd": 0.22,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "XLV ~\\$140 × mean 0.7%",
      "_backtest_n": 25,
      "_backtest_sharpe": 0.45,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "A",
      "name": "Sector Booster (Drop5d 7番目)",
      "cat": "booster",
      "tickers": "Drop5d 系全 watchlist",
      "condition": "Drop5d fire 時 sector が Industrial/Materials/ConsCyc → size +0.5x",
      "hold": "親 ETF7 寄→翌寄 / BroadPanic 寄→引",
      "freq": "年 50〜100 件 (Drop5d fire の 1/4 程度)",
      "sharpe": "recent 2024+ Industrial 10-100M Sh+14.42 / Materials Sh+15.54 / ConsCyc Sh+10.18",
      "live": "✅ 5/16 夜 採用 (boost_n +1)",
      "memo": "ST533 cross-tab で発見、 booster_multipliers 7要素 ([1..3.5]) に拡張",
      "per_share_profit_usd": null,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est",
      "monthly_profit_usd": 19.14,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "_backtest_n": 193,
      "_backtest_sharpe": 4.74,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "?",
      "name": "VIX_Backward (VIX6M base)",
      "cat": "短期 day trade",
      "tickers": "SPY / QQQ / SMH / XLK / XBI",
      "condition": "VIX/VIX6M ratio ≥ 1.0 (backwardation)",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "年 12〜15 件 (n=117/10年)",
      "sharpe": "XBI Sh+4.00 / XLK +2.62 / SMH +2.55 / QQQ +2.50 (n=117) — VIX3M v1 から VIX6M v2 に変更で頻度6倍",
      "live": "✅ 自動 entry + brief alert (5/16 夜 round9 ST535/543)",
      "memo": "ST543 で VIX6M ベース (n=117) は VIX3M (n=18) より頻度高 alpha 明確",
      "monthly_profit_usd": null,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "XLK ~\\$176 × mean 1.5%",
      "_backtest_n": 0,
      "_backtest_sharpe": null,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "Drop5d_ETF7 (浅 threshold + bad月skip)",
      "cat": "短期 mean-reversion",
      "tickers": "11 ETF (XLI/QQQ/XLE/XLK/SMH/SOXX/XBI/XLF/XLY/XLV/SPY)",
      "condition": "chg5<-7 + pchg5≥-7 + 月∉{1,4,6,9} + 翌日Mon以外 + VIX≥20 + ETF∉{XLE,XLF}",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "年 12〜20 件 (5層 filter 後)",
      "sharpe": "5層 filter Sh+4.08 win 60%; per-ETF: XLV+10.84/SMH+8.54/SOXX+7.76/XBI+3.83/QQQ+3.44 (ST578)",
      "live": "✅ 自動 entry + 5層 filter + per-ETF hold (5/16 夜 round12 ST571/572/578)",
      "memo": "ST578: XLE Sh-3.54 win 36% / XLF -0.58 → 除外。 ST572 VIX<20 Sh-9.75 / ST571 Mon Sh+0.40",
      "monthly_profit_usd": -182.53,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SMH ~\\$560 × mean 3.5%",
      "_backtest_n": 2524,
      "_backtest_sharpe": -1.93,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "BOOST",
      "name": "AAII panic booster (Drop5d 9番目)",
      "cat": "booster",
      "tickers": "Drop5d 系全 watchlist",
      "condition": "AAII Bull-Bear spread < -40 (極端 panic)",
      "hold": "親 ETF7 寄→翌寄 / BroadPanic 寄→引",
      "freq": "年 10〜20 件 (AAII < -40 は稀)",
      "sharpe": "Drop5d 翌日 Sh+9.75 win 74% mean +4.67% (n=1310) — 9 番目 booster",
      "live": "✅ booster +1 (5/16 夜 round10 ST549)",
      "memo": "AAII csv 週次 fetch、 hardcoded fallback あり",
      "per_share_profit_usd": 5.55,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est"
    },
    {
      "tier": "C",
      "name": "SPY 5/5 down booster (Drop5d 10番目)",
      "cat": "booster",
      "tickers": "Drop5d 系全 watchlist",
      "condition": "SPY 直近 5日 全 down",
      "hold": "親 ETF7 寄→翌寄 / BroadPanic 寄→引",
      "freq": "年 30〜50 件",
      "sharpe": "Drop5d 翌日 Sh+3.24 win 58% mean +0.82% (n=4065)",
      "live": "✅ booster +1 (5/16 夜 round10 ST552)",
      "memo": "broad market sell signal、 BroadPanic と補完的",
      "per_share_profit_usd": null,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est",
      "monthly_profit_usd": -2.38,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "_backtest_n": 225,
      "_backtest_sharpe": -0.42,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "BOOST",
      "name": "ETF Deep Panic booster (12番目)",
      "cat": "booster",
      "tickers": "Drop5d_ETF7 (11 ETF)",
      "condition": "Drop5d_ETF7 fire 時 chg5 < -10% (extreme regime)",
      "hold": "親 ETF7 のみ (1日 寄→翌寄 MOO)",
      "freq": "年 5〜15 件 (極端panic 時のみ)",
      "sharpe": "QQQ Sh+11.06 (n=9) / XLY +12.68 (n=8) / XLK +9.89 (n=9) / SMH -12% +4.99 (n=39) / SPY +5.60 (n=7) (hold=2d)",
      "live": "✅ 自動 booster +1 (5/16 夜 round11 ST564 自動採用)",
      "memo": "rare だが extreme alpha、 deep panic 規模で size 多倍化",
      "per_share_profit_usd": 5.6,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est"
    },
    {
      "tier": "BOOST",
      "name": "Good月 × VIX6M booster (13番目)",
      "cat": "booster",
      "tickers": "Drop5d_ETF7 (11 ETF)",
      "condition": "Drop5d_ETF7 fire 時 month ∈ {2,3,8,10,11} + VIX/VIX6M ≥ 1.0",
      "hold": "親 ETF7 のみ (1日 寄→翌寄 MOO)",
      "freq": "年 10〜20 件",
      "sharpe": "good月+VIX6Mbw Sh+5.31 win 62% mean +0.97% (n=109) — good月単体 Sh+4.30",
      "live": "✅ booster +1 (5/16 夜 round11 ST563 自動採用)",
      "memo": "ST563 stacking 検証で good月単体+1.48 vs VIX6M 追加で更に +1.01",
      "per_share_profit_usd": 0.66,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est"
    },
    {
      "tier": "BOOST",
      "name": "Tech/Semis × VIX6M booster (Drop5d 11番目)",
      "cat": "booster",
      "tickers": "Drop5d 系 (Tech/Semis 銘柄のみ)",
      "condition": "Drop5d fire & sector ∈ {Tech, Semis} & VIX/VIX6M ≥ 1.0",
      "hold": "親 ETF7 寄→翌寄 / BroadPanic 寄→引",
      "freq": "年 5〜10 件",
      "sharpe": "Tech Sh+8.23 win 68% n=66 / Semis +6.49 win 67% n=184 (VIX6M backward 時)",
      "live": "✅ booster +1 (5/16 夜 round10 ST553)",
      "memo": "既存 Industrial/Materials/ConsCyc 3 sector booster と組み合わせ可",
      "per_share_profit_usd": 1.65,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est"
    },
    {
      "tier": "ANTI",
      "name": "Earnings 直前 7日 skip",
      "cat": "filter",
      "tickers": "Drop5d 系全 watchlist (earnings 持つ銘柄)",
      "condition": "Drop5d signal fire 時 earnings ≤ 7日先 → skip",
      "hold": "親 ETF7/BroadPanic 共通 filter (entry skip のみ、 親 exit に従う)",
      "freq": "全 Drop5d signal の ~5% 除外",
      "sharpe": "Pre-earnings 7日 = Sh-1.81 (anti-edge), mid (14+日離れ) = Sh+3.81 win 57% (ST536)",
      "live": "✅ 5/16 夜 採用 (ST536)",
      "memo": "yfinance earnings_dates lookup",
      "per_share_profit_usd": 4.4,
      "_per_share_basis": "avoided loss est (= skip しなかったら出てた損失)"
    },
    {
      "tier": "?",
      "name": "VIX +15% spike booster",
      "cat": "6番目 booster",
      "tickers": "Drop5d 系全 watchlist",
      "condition": "Drop5d signal 当日 VIX 1日 change% ≥ +15%",
      "hold": "親 ETF7 寄→翌寄 / BroadPanic 寄→引",
      "freq": "年 20〜50 件 (VIX spike+15% 単体は年 50-80件、 Drop5d 同日 hit はさらに小)",
      "sharpe": "Drop5d × VIX spike Sh+2.16 win 56% (n=9012) / 翌日 QQQ Sh+4.70",
      "live": "✅ 5/16 夜 採用 (boost_n +1 加算)",
      "memo": "ST508/509 brief_enhancer alert + monitor booster 両方",
      "per_share_profit_usd": null,
      "_per_share_basis": "(base × (mult-1)) - booster 増分 est",
      "monthly_profit_usd": null,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "_backtest_n": 0,
      "_backtest_sharpe": null,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "disabled",
      "name": "Intraday Surge (COIN/MSTR/MARA) +2% 30min → +60min ⚡ 場中",
      "cat": "場中 momentum (crypto-proxy)",
      "tickers": "COIN / MSTR / MARA",
      "condition": "15m bar の連続 2 本 return >= +2% → 即 MKT BUY → +60min (= 4×15m bar) で MKT SELL or TP touch",
      "hold": "場中 60min (intraday、 15:45 CT で強制 close)",
      "freq": "月 fires raw 76 件 (COIN 24 / MSTR 23 / MARA 30)、 max_pos=2 制約後 **実 trade 30-35件/月**",
      "sharpe": "ST725 (5/17 夜) 4重 OOS PASS: COIN n=70 win 61% mean +0.86% / MSTR n=65 win 55% +0.70% / MARA n=87 win 55% +0.59%  ⇒ **月益 ~$235 (size $980)、 年率 +66%/元本$4,237**",
      "live": "⏸ disabled (5/22 朝 Agent G OOS で全 net negative、 enabled=false)",
      "memo": "安田さん 5/17「場中で反応ないなら PC 起動意味ない」→ Path 2 intraday LIVE 実装。 crypto-proxy 群は universe 平均より突出 (mean reversion でなく momentum follow)。 OCA bracket: LMT TP+0.7-0.86% / STP SL-3% (server side、 PC 落ちても発動)"
    },
    {
      "tier": "disabled",
      "name": "Intraday RSI20 (AMD/PLTR/VRTX) 5m RSI<20 → +30min ⚡ 場中",
      "cat": "場中 reversion (high-beta)",
      "tickers": "AMD / PLTR / VRTX",
      "condition": "5m bar RSI(14) < 20 → 即 MKT BUY → +30min (= 6×5m bar) で MKT SELL or TP touch",
      "hold": "場中 30min (intraday、 15:45 CT 強制 close)",
      "freq": "月 fires raw 86 件 (AMD 18 / PLTR 37 / VRTX 31)、 max_pos=2 制約後 **実 trade 40-50件/月**",
      "sharpe": "ST725 PASS: AMD n=52 win 58% mean +0.71% / PLTR n=107 win 62% +0.33% / VRTX n=89 win 56% +0.27% (VRTX は recent regime caveat、 small size 推奨)  ⇒ **月益 ~$190 (size $980)、 年率 +54%/元本$4,237**",
      "live": "⏸ disabled (5/22 朝 Agent G OOS で全 net negative、 enabled=false)",
      "memo": "急落底 reversion: 場中 5m RSI<20 = 一時的 oversold、 30min で反発。 VRTX は前半 win 42% / 後半 70% で regime 依存強く size 半減、 AMD/PLTR は全 regime stable"
    },
    {
      "tier": "A",
      "name": "Drop5d_7 (chg5d<=-7% mean reversion → next open MOO bracket) 🔧 5/22 bracket 復活",
      "cat": "短期 reversion",
      "tickers": "watchlist 100銘柄全数 (SECTOR_MAP filter + Tue skip + earnings≤7d skip)",
      "condition": "chg5d <= -7% AND not (earnings within 7d) AND not Tue → 翌寄 BUY → bracket OCA (TP+5% / SL-10%)",
      "hold": "1日 寄→翌寄 MOO + 場中 bracket (ST134 元 / ST244 で TP+10% optimum、 5% は conservative)",
      "freq": "watchlist 全体 月 5〜15 件 (panic 局面集中、 VIX>20 で頻度倍増)",
      "sharpe": "ST134 元 Sh+2.79 (hold=1d TP+3% time)、 ST244 で TP+10% optimum 判明 / ST485 hold=1d filter込み Sh+6.66",
      "live": "✅ 本番運用中 (5/22 朝 bracket 復活、 _default 2% → tp 5% / sl -10%、 silent skip 解消)",
      "memo": "5/22 朝 user 採用: ST134 元 / ST244 optimum、 watchlist 全 100銘柄。 5/16 夜「intraday/overnight ズレ」 で一旦廃案候補だったが 5/22 で bracket spec 明示化 + silent skip 解消で復活、 _default 2% から 5% に上方修正",
      "monthly_profit_usd": 15.0,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 3.3,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.5%"
    },
    {
      "tier": "A",
      "name": "Drop5d_StrictATR (chg5d<=-7% + ATR strict variant → next open MOO bracket) 🔧 5/22 bracket 復活",
      "cat": "短期 reversion (ATR variant)",
      "tickers": "watchlist 100銘柄全数 (earnings≤7d skip + size_mult 1.5)",
      "condition": "chg5d <= -7% AND ATR strict filter AND not (earnings within 7d) → 翌寄 BUY → bracket OCA (TP+4% / SL-10%)",
      "hold": "1日 寄→翌寄 MOO + 場中 bracket (ST184/489 hold=1d Sh+7.46)",
      "freq": "watchlist 全体 月 3〜8 件 (ATR フィルタで Drop5d_7 より厳しめ)",
      "sharpe": "ST184/489 hold=1d Sh+7.46 (ATR variant、 strict filter で higher conviction)",
      "live": "✅ 本番運用中 (5/22 朝 bracket 復活、 _default 2% → tp 4% / sl -10%)",
      "memo": "Drop5d_7 の ATR variant、 size_multiplier 1.5、 5/22 朝 user 採用で _default 2% から TP 4% に上方修正、 commission floor 確保",
      "monthly_profit_usd": 15.0,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 3.3,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.5%"
    },
    {
      "tier": "S",
      "name": "Earnings_T_minus_5 (earnings 5日前 entry → 寄付 hold) 🔧 5/22 bracket 復活",
      "cat": "短期 earnings drift",
      "tickers": "watchlist 100銘柄全数 (earnings calendar 連動)",
      "condition": "earnings 発表 5 営業日前 → 翌寄 BUY → hold=5d 寄付 SELL or bracket TP+3%/SL-10%",
      "hold": "5日 寄→5日後寄 MOO + 場中 bracket",
      "freq": "watchlist 全体 月 8〜20 件 (earnings cycle 毎)",
      "sharpe": "ST532 earnings drift base、 mean move 控えめ (TP+3% で commission floor 確保)",
      "live": "✅ 本番運用中 (5/22 朝 bracket 復活、 _default 2% → tp 3% / sl -10%)",
      "memo": "5/22 朝 user 採用: ST532 hold=5d earnings 直前 entry、 mean move 控えめだが _default 2% より TP 3% で commission floor (RT $2.80) 確保",
      "monthly_profit_usd": 25.0,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 1.1,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.5%"
    },
    {
      "tier": "C",
      "name": "IB1_SlopeMA_v1 (200SMA slope>0 + 5SMA touch → 3日hold) 📝 paper 田舎投資家ブログ",
      "cat": "短期 trend pullback (paper)",
      "tickers": "watchlist 100銘柄 (daily、 2022-2026 backtest 必要)",
      "condition": "SMA200 slope > 0 (= SMA200[t] > SMA200[t-20]) AND close touch SMA5 (low <= SMA5 <= high) → 翌寄 BUY → 3日後 SELL",
      "hold": "3日 寄→3日後寄 + bracket (TP+4% / SL-10%)",
      "freq": "watchlist 全体 月 10〜25 件 (uptrend filter で頻度抑え)",
      "sharpe": "田舎投資家ブログ /3921/ Sh+4.78 n=30 (FX 由来 → stock 移植 decay -30% 想定)、 paper 1週後 LIVE 判定",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "田舎投資家ブログ 1位「衝撃の200sma」 移植: 200SMA 上向き + 5SMA touch pullback、 paper 1週後 LIVE 判定。 100銘柄 × 4年 で n>=300 必須、 source n=30 は ST 採用基準未満",
      "monthly_profit_usd": -1543.25,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%",
      "_backtest_n": 23364,
      "_backtest_sharpe": -2.63,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "IB3_WickReversal_v1 (long lower wick + chg5d<-5% → 2日hold) 📝 paper 田舎投資家ブログ",
      "cat": "短期 wick reversal (paper)",
      "tickers": "watchlist 100銘柄 (daily panic 文脈)",
      "condition": "lower_wick / body >= 2.0 AND close > open AND chg5d < -5% (panic) → 翌寄 BUY → 2日後 SELL",
      "hold": "2日 寄→2日後寄 + bracket (TP+3% / SL-10%)",
      "freq": "watchlist 全体 月 5〜15 件 (panic 文脈 + wick 限定)",
      "sharpe": "田舎投資家ブログ /3734/ ピンバー Sh+1.98 n=69 (paper 1週後 LIVE 判定)",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "田舎投資家ブログ 2位 ピンバー: long lower wick (body 2x+) + reversal close、 panic 文脈で底打ち拾う、 paper 1週後 LIVE 判定",
      "monthly_profit_usd": -798.62,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.8%",
      "_backtest_n": 12002,
      "_backtest_sharpe": -2.75,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "IB4_RCI_Reversal_v1 (RCI(9)>RCI(26) from oversold → 3日hold) 📝 paper 田舎投資家ブログ",
      "cat": "短期 oscillator reversal (paper)",
      "tickers": "watchlist 100銘柄 (daily)",
      "condition": "RCI(9) < -80 (oversold) AND RCI(9) cross above RCI(26) → 翌寄 BUY → 3日後 SELL",
      "hold": "3日 寄→3日後寄 + bracket (TP+3.5% / SL-10%)",
      "freq": "watchlist 全体 月 8〜20 件",
      "sharpe": "田舎投資家ブログ /4032/ RCI 単体 Sh+2.14 n=77 + /3978/ 200MA+RCI Sh+2.69 n=51 (paper 1週後 LIVE 判定)",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "田舎投資家ブログ 4位 200MA+RCI 派生: RCI(9) oversold cross above RCI(26) reversal、 既存 Stoch_Oversold と直交 oscillator、 paper 1週後 LIVE 判定",
      "monthly_profit_usd": -222.54,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.2%",
      "_backtest_n": 4277,
      "_backtest_sharpe": -1.98,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "US_D1_ORB_Stocks_v1 (ORB-5min stocks-in-play 動的 universe) 📝 paper US-D1 Zarattini",
      "cat": "場中 ORB momentum (paper)",
      "tickers": "動的 stocks-in-play universe (100銘柄 watchlist fallback、 RelVol>1 上位 20)",
      "condition": "08:35 CT 5min ORB、 close>open → BUY STOP @ ORB high / close<open → SELL STOP @ ORB low、 SL=entry±(0.1×ATR14)、 risk 1% / max 4x lev",
      "hold": "場中 (entry → 15:00 CT MOC exit)",
      "freq": "毎日 fire 候補 (動的 universe 通過分のみ実 trade)",
      "sharpe": "Zarattini SSRN 4729284 Sharpe ≈ 2.40 (2016-2023 8年 7000+ 株 QC backtest)、 cumul 1,484% Win 17% Beta -0.04",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "US-D1 Zarattini ORB 5min stocks-in-play、 paper 1週後 LIVE 判定。 動的 universe = 当日 09:30-09:35 ET volume / 過去14日 同時刻 vol 比 上位20 RelVol>1。 risk 1% / max 4x lev / 15:00 CT MOC",
      "monthly_profit_usd": -2030.22,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.7%",
      "_backtest_n": 23781,
      "_backtest_sharpe": -3.73,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "US_D2_SPY_NoiseArea_v1 (SPY 1m VSO_t×N boundary cross) 📝 paper US-D2 ★priority 1★",
      "cat": "場中 SPY noise band (paper)",
      "tickers": "SPY 単独 (1m bar、 data_1m/SPY_1m.pkl 完備)",
      "condition": "SPY 1m NoiseArea VSO_t × N (N=1.0 baseline)、 cross Upper → LONG / Lower → SHORT (LIVE long-only)、 exit opp boundary or VWAP trail or 14:55 CT MOC",
      "hold": "場中 (entry → opp boundary / VWAP trail / 14:55 CT MOC)",
      "freq": "毎日 fire 候補 (SPY 1m、 VIX>40 で頻度大)",
      "sharpe": "Zarattini SSRN 4824172 Sharpe 1.33 全期 / Sharpe 3.50 (VIX>40)、 CAGR 19.6% (2007-2024 SPY 1m) cumul 1,985% Hit 43%",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "US-D2 SPY Noise Area = ★priority 1★、 VSO_t × N boundary cross mean reversion、 yasuda_short data_1m/SPY_1m.pkl 完備、 paper 1週後 LIVE 判定。 5/22 SPY 1m 2年 backtest 第一弾",
      "monthly_profit_usd": -6.92,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SPY ~\\$740 × mean 0.5%",
      "_backtest_n": 166,
      "_backtest_sharpe": -6.55,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "?",
      "name": "US_D3_PreFOMC_Drift_v1 (FOMC -24h drift SPY hold=1d) 📝 paper US-D3 ⚠ post-2015 decay",
      "cat": "短期 calendar event drift (paper)",
      "tickers": "SPY 単独 (TQQQ/SPXL は次拡張候補)",
      "condition": "FOMC announcement -24h → entry FOMC-1 close → exit FOMC day 13:30 CT (= announcement -30min)、 hold=1d",
      "hold": "1日 calendar (FOMC-1 close → FOMC day 13:30 CT)",
      "freq": "年 8 件 (FOMC 8 回 / 年、 2026: 06-18 / 07-30 / 09-17 / 11-05 / 12-17)",
      "sharpe": "NY Fed SR512 Lucca-Moench 1994-2011 n=131 events 24h +49bp t-stat>4.5 (80% US equity premium)、 ⚠ post-2015 SPY CAGR≈4% Sh≈0.5-0.6 decay",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "US-D3 NY Fed SR512 Pre-FOMC drift、 post-2015 press conference 開始後 drift 弱体化 (Hu 2020 FRL)、 2016-2019 flat → 2020+ 復活。 commission floor (RT $2.80 ≈ 0.07% << 49bp) 十分 net positive だが decay 警戒",
      "monthly_profit_usd": null,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SPY ~\\$740 × mean 0.5%",
      "_backtest_n": 0,
      "_backtest_sharpe": null,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "US_D6_First_Hour_FT_v1 (09:30→10:30 first-hour follow-through) 📝 paper US-D6 ⚠ n=125 small",
      "cat": "場中 first-hour momentum (paper)",
      "tickers": "SPY 単独 (1m bar)",
      "condition": "09:30→10:30 ET first-hour 移動幅 Group 4 = $1.02 absolute (or 0.25% pct)、 first-hour DOWN → 76% 当日 close < 10:30 (trend follow)、 LIVE は UP path のみ採用",
      "hold": "場中 (10:30 trigger → 15:00 CT MOC exit)",
      "freq": "毎日 fire 候補 (Group 4 該当 6ヶ月 n≈30 / 125 days)",
      "sharpe": "OptionAlpha 2022-04-25〜2022-10-24 6ヶ月 n≈125 days 76% win、 ⚠ small n、 QS 補強 first-30min positive 年率 6.67% Sh 1.08",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "US-D6 OptionAlpha first-hour follow-through、 small n=125 days (6ヶ月 OOS 必須)、 long-only 体制保持で LIVE は first-hour UP path のみ、 DOWN path は paper observe",
      "monthly_profit_usd": -47.47,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SPY ~\\$740 × mean 0.5%",
      "_backtest_n": 520,
      "_backtest_sharpe": -7.2,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null
    },
    {
      "tier": "C",
      "name": "US_D7_VIX_cond_ORB_v1 (US-D1 + VIX size mult 0.5x-2.0x) 📝 paper US-D7 (D1 booster)",
      "cat": "場中 ORB + VIX gate (paper)",
      "tickers": "US-D1 と同 universe (動的 stocks-in-play、 100銘柄 fallback)",
      "condition": "US-D1 ORB-5min base + VIX size mult: <15=0.5x / 15-20=1.0x / 20-25=1.3x / 25-30=1.6x / >=30=2.0x、 VIX<12 skip。 SL=entry±(0.1×ATR14) risk 1% max 4x lev、 15:00 CT MOC",
      "hold": "場中 (US-D1 同、 entry → 15:00 CT MOC)",
      "freq": "US-D1 と同頻度 × VIX gate filter (VIX<12 skip)",
      "sharpe": "US-D1 baseline Sh 2.40 → VIX>30 帯で Sh ~3.50 推定 (US-D2 VIX>40 挙動からの近似)、 既存 Drop5d_VIX30_StochKD (日次 Sh+14) の場中版",
      "live": "✅ LIVE 5/22 (size 0.75)、 ⚠ yasuda universe OOS 未確定 (5/29 再走で tier 確定)",
      "memo": "US-D7 = US-D1 + VIX size scaling booster、 本質差は size scaling のみ、 LIVE 化時 D7 形式へ統合推奨。 source: SSRN 4729284 + Agent C VIX filter",
      "monthly_profit_usd": -5840.7,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": -1.09,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.8%",
      "_backtest_n": 68497,
      "_backtest_sharpe": -4.03,
      "_backtest_oos_n": 15743,
      "_backtest_oos_mean_pct": -0.81
    },
    {
      "tier": "disabled",
      "name": "RSI35_Trend",
      "cat": "短期 mean-reversion (disabled)",
      "tickers": "100銘柄 watchlist subset",
      "condition": "RSI(14) <= 35 → 翌寄 BUY hold 1d",
      "hold": "1d",
      "freq": "30-60/yr (= mean -0.00% / alpha ゼロ)",
      "sharpe": "ST136 OOS+0.77 弱 / Agent F mean -0.00%",
      "live": "⏸ disabled (size_mult=0、 alpha ゼロで keep disabled)",
      "memo": "5/16 ST136 OOS 弱、 5/22 朝 Agent F audit で mean -0.00% (= 期待値ゼロ) 確認、 keep disabled。 trail 効果検証なし。",
      "monthly_profit_usd": 12,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 0.66,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.3%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ MSTR_Panic20 ×1.5 when [weekday=Monday]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "weekday=Monday",
      "hold": "hold_override=1",
      "freq": "n=73 過去 evidence",
      "sharpe": "期待 ΔSh +9.63",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 MSTR_Panic20 の signal 発火時、 filter=weekday=Monday 一致なら size×1.5 適用 (= hold_override=1)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 15.93,
      "_per_share_basis": "MSTR ~\\$300 × mean 5.31%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ Confluence_RSIBB_v1 ×1.5 when [gap_pct<=-3]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "gap_pct<=-3",
      "hold": "hold_override=3",
      "freq": "n=39 過去 evidence",
      "sharpe": "期待 ΔSh +16.99",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Confluence_RSIBB_v1 の signal 発火時、 filter=gap_pct<=-3 一致なら size×1.5 適用 (= hold_override=3)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.2,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ Confluence_RSIStoch_v1 ×1.5 when [gap_pct<=-3]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "gap_pct<=-3",
      "hold": "hold_override=3",
      "freq": "n=95 過去 evidence",
      "sharpe": "期待 ΔSh +8.21",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Confluence_RSIStoch_v1 の signal 発火時、 filter=gap_pct<=-3 一致なら size×1.5 適用 (= hold_override=3)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 0.55,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.25%"
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
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.84,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.29%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ Confluence_BBStoch_v1 ×1.5 when [spy_above_50ma]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "spy_above_50ma",
      "hold": "hold_override=5",
      "freq": "n=33 過去 evidence",
      "sharpe": "期待 ΔSh +5.26",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Confluence_BBStoch_v1 の signal 発火時、 filter=spy_above_50ma 一致なら size×1.5 適用 (= hold_override=5)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.2,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ Sector_FriPanic_v1 ×2.0 when [vix_ge_30]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "vix_ge_30",
      "hold": "hold_override=1",
      "freq": "n=42 過去 evidence",
      "sharpe": "期待 ΔSh +4.92",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Sector_FriPanic_v1 の signal 発火時、 filter=vix_ge_30 一致なら size×2.0 適用 (= hold_override=1)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 0.97,
      "_per_share_basis": "XLK ~\\$176 × mean 0.55%"
    },
    {
      "tier": "BOOST",
      "name": "⚡ VolDryUp_v1 ×1.5 when [self_below_200ma]",
      "cat": "Size booster (= 条件一致で size 拡大)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "self_below_200ma",
      "hold": "hold_override=1",
      "freq": "n=24 過去 evidence",
      "sharpe": "期待 ΔSh +4.04",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 VolDryUp_v1 の signal 発火時、 filter=self_below_200ma 一致なら size×1.5 適用 (= hold_override=1)。 monitor.py が evaluate + executor で size 計算時に乗算。",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.0,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.91%"
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
      "monthly_profit_usd": null,
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
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.11,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.96%"
    },
    {
      "tier": "ANTI",
      "name": "🚫 Sector_FriPanic_v1 SKIP when [spy_5d_return>0]",
      "cat": "Anti-pattern filter (= 条件一致で signal skip)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "spy_5d_return>0",
      "hold": "—",
      "freq": "—",
      "sharpe": "SPY 5d positive で FriPanic 壊滅 (win 20%, n=20, ΔSh-19.51)",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Sector_FriPanic_v1 の signal 発火時、 filter=spy_5d_return>0 一致なら action=skip (= 発注 skip)。 理由: SPY 5d positive で FriPanic 壊滅 (win 20%, n=20, ΔSh-19.51)",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 0.97,
      "_per_share_basis": "XLK ~\\$176 × mean 0.55%"
    },
    {
      "tier": "ANTI",
      "name": "🚫 SPY_Panic2_v1 SKIP when [spy_5d_return>0]",
      "cat": "Anti-pattern filter (= 条件一致で signal skip)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "spy_5d_return>0",
      "hold": "—",
      "freq": "—",
      "sharpe": "SPY 5d positive で Panic2 壊滅 (win 18.5%, n=27, ΔSh-11.36)",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 SPY_Panic2_v1 の signal 発火時、 filter=spy_5d_return>0 一致なら action=skip (= 発注 skip)。 理由: SPY 5d positive で Panic2 壊滅 (win 18.5%, n=27, ΔSh-11.36)",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 7.4,
      "_per_share_basis": "SPY ~\\$740 × mean 1.0%"
    },
    {
      "tier": "ANTI",
      "name": "🚫 Confluence_RSIBB_v1 SKIP when [vix_25_30]",
      "cat": "Anti-pattern filter (= 条件一致で signal skip)",
      "tickers": "(該当 戦略の watchlist)",
      "condition": "vix_25_30",
      "hold": "—",
      "freq": "—",
      "sharpe": "VIX 25-30 のみ逆 (両側帯 15-20/30+ は OK、 win 33.6%, n=107, ΔSh-11.",
      "live": "✅ wire 済 (confluence_filters.py、 monitor.py signal-phase + executor exec-phase)",
      "memo": "5/20 wire 採用。 base 戦略 Confluence_RSIBB_v1 の signal 発火時、 filter=vix_25_30 一致なら action=skip (= 発注 skip)。 理由: VIX 25-30 のみ逆 (両側帯 15-20/30+ は OK、 win 33.6%, n=107, ΔSh-11.17)",
      "monthly_profit_usd": null,
      "_per_share_source": "OOS_backtest",
      "per_share_profit_usd": 2.2,
      "_per_share_basis": "NVDA ~\\$220 × mean 1.0%"
    },
    {
      "tier": "S",
      "name": "A10_WideBar_Capitulation_v1",
      "cat": "その他",
      "tickers": "NVDA / SPY / VTI / QQQ / SOXX ... (計30銘柄)",
      "condition": "today_range/ATR20>=2 ∧ close near low → 翌寄 BUY hold 2d (paper、 Sh+2.54 n=616 mean+1.0% win 58.6% 4/4 regime)",
      "hold": "2日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "today_range/ATR20>=2 ∧ close near low → 翌寄 BUY hold 2d (paper、 Sh+2.54 n=616 mean+1.0% win 58.6% 4/4 regime)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] scripts/discover_untapped_alpha_5_22.py A10.2 (Axis10 microstructure): today_range/ATR20 >= 2.0 AND close near low (= bottom 25% of range) → 翌寄 BUY hold 2d、 OOS Sh=2.54 n=616 mean=+1.0% win=58.6% regime 4/4 (bull+1.98/bear+4.04/high+4.65/low+1.85)、 source: Crabel 1990 volatility expansion / Wyckoff capitulation、 既存 Drop5d 系 (= 5d 累計) と機構違い (= 1d wide bar)、 全 100銘柄 watchlist、 paper 1週後 LIVE 判定。 注: 高頻度 (n=616 OOS) のため signals capped を monitor 配線時 1日 max 1-2 にすべき。 / [_5_22_live] 5/22 user 採用 (= O agent 結果)、 paper→LIVE、 size_mult 0.75",
      "_auto_meta": {
        "key": "A10_WideBar_Capitulation_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 2.54
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "A2_BTC_Drop_CryptoProxy_v1",
      "cat": "その他",
      "tickers": "CLSK / MSTR / COIN / MARA / RIOT ... (計7銘柄)",
      "condition": "BTC-USD 1d<=-3% → COIN/MSTR/MARA/RIOT/CLSK/IBIT/FBTC 翌寄 BUY hold 2d (paper、 Sh+2.08 n=231 mean+1.37% win 52.8% 3/4 regime)",
      "hold": "2日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "BTC-USD 1d<=-3% → COIN/MSTR/MARA/RIOT/CLSK/IBIT/FBTC 翌寄 BUY hold 2d (paper、 Sh+2.08 n=231 mean+1.37% win 52.8% 3/4 regime)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] scripts/discover_untapped_alpha_5_22.py A2.1 (Axis2 crypto-proxy): BTC-USD 1d <= -3% → COIN/MSTR/MARA/RIOT/CLSK/IBIT/FBTC 翌寄 BUY hold 2d、 OOS Sh=2.08 n=231 mean=+1.37% win=52.8% regime 3/4 (bull+1.08/bear+6.01/high+17.48/low+0.81)、 source: Liu-Tsyvinski 2018 / Quantpedia #698 BTC-stock contagion / Bianchi 2020 JFE、 既存 戦略 30+ にない直交軸 (= crypto contagion reversal)、 paper 1週後 LIVE 判定。 mean+1.37% >> commission floor 0.07% OK。 watchlist に MSTR/COIN/MARA/RIOT/CLSK 含む。 / [_5_22_live] 5/22 user 採用 (= O agent 結果)、 paper→LIVE、 size_mult 0.75",
      "_auto_meta": {
        "key": "A2_BTC_Drop_CryptoProxy_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 2.08
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "A7_DXY_Drop_EM_Long_v1",
      "cat": "その他",
      "tickers": "EEM / FXI / KWEB / EWZ / INDA",
      "condition": "UUP 5d<=-2% → EEM/FXI/KWEB/EWZ/INDA 翌寄 BUY hold 5d (paper、 Sh+4.36 n=54 mean+1.76% win 72.2% 4/4 regime)",
      "hold": "5日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "UUP 5d<=-2% → EEM/FXI/KWEB/EWZ/INDA 翌寄 BUY hold 5d (paper、 Sh+4.36 n=54 mean+1.76% win 72.2% 4/4 regime)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] scripts/discover_untapped_alpha_5_22.py A7.2 (Axis7 macro cross-asset): UUP (DXY proxy) 5d <= -2% → EEM/FXI/KWEB/EWZ/INDA 翌寄 BUY hold 5d、 OOS Sh=4.36 n=54 mean=+1.76% win=72.2% regime 4/4 (bull+2.88/bear+6.88/high+5.80/low+3.85)、 source: Asness-Moskowitz-Pedersen 2013 cross-asset / Frankel-Rose 1996 DXY-EM、 既存 cross-asset (TLT_Spike) と 異なる asset axis、 完全直交、 paper 1週後 LIVE 判定。 全 regime pass + 高 Sharpe。 / [_5_22_live] 5/22 user 採用 (= O agent 結果)、 paper→LIVE、 size_mult 0.75",
      "_auto_meta": {
        "key": "A7_DXY_Drop_EM_Long_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 4.36
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "CFO_Solo_PBuy_v1",
      "cat": "短期 insider / fundamental",
      "tickers": "WAB / LLY / INTC / CHD / CHRW ... (計55銘柄)",
      "condition": "logs/insider_skeptic_top.md A2: CFO solo P-buy (mu=1) h=3、 Sh+2.72 win 61.8% n=89 OOS+2.83 3/4 regime",
      "hold": "3日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "logs/insider_skeptic_top.md A2: CFO solo P-buy (mu=1) h=3、 Sh+2.72 win 61.8% n=89 OOS+2.83 3/4 regime",
      "live": "✅ 本番運用中 (TWS 自動執行)",
      "memo": "[_note] 5/19 採用 (Phase 1 paper Tier B): S1' CFO solo P-buy h=3、 logs/insider_skeptic_top.md A2 family Sh+2.72 win 61.8% n=89 OOS+2.83 3/4 regime。 mean+0.83% × 2 = TP+2.5% 目安",
      "_auto_meta": {
        "key": "CFO_Solo_PBuy_v1",
        "tp_pct": 2.5,
        "sl_pct": -10.0,
        "size_multiplier": 1.0,
        "paper": false,
        "sharpe_value": 2.72
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "Drop5d_VIX30_StochKD",
      "cat": "短期 mean-reversion (Drop5d系)",
      "tickers": "NVDA / SOXX / XLK / XLF / AVGO ... (計58銘柄)",
      "condition": "ST178/182/184 (5/14 夜): Drop5d-12 + VIX>=30 + Stoch K>D、Sharpe +14.09 (n=35)、Bootstrap CI [+9.08,+21.52]、4重 pass。size 0.5/max 1。",
      "hold": "1日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "ST178/182/184 (5/14 夜): Drop5d-12 + VIX>=30 + Stoch K>D、Sharpe +14.09 (n=35)、Bootstrap CI [+9.08,+21.52]、4重 pass。size 0.5/max 1。",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.5]",
      "memo": "[_5_21_revision] Agent F: 1.95 → 2.5、 size_multiplier 0.5 維持",
      "_auto_meta": {
        "key": "Drop5d_VIX30_StochKD",
        "tp_pct": 2.5,
        "sl_pct": -10.0,
        "size_multiplier": 0.5,
        "paper": false,
        "sharpe_value": 14.09
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "N1_NVDA_Consec4_v1",
      "cat": "その他",
      "tickers": "NVDA",
      "condition": "NVDA 4 連敗 → 翌寄 BUY hold 3d (paper、 Sh+3.16 OOS+2.65 n=56 4/4 regime)",
      "hold": "3日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "NVDA 4 連敗 → 翌寄 BUY hold 3d (paper、 Sh+3.16 OOS+2.65 n=56 4/4 regime)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N1 family (Alpha Architect Connors / Alvarez consec-down style): NVDA 4 連敗 → 翌寄 BUY hold 3d、 Sh+3.16 OOS+2.65 n=56 mean+1.58% win 57% 4/4 regime。 既存 Drop5d 累積とは別軸 (= streak count)、 NVDA 個別 reversion。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N1_NVDA_Consec4_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 3.16
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "N1_TSLA_Consec4_v1",
      "cat": "その他",
      "tickers": "TSLA",
      "condition": "TSLA 4 連敗 → 翌寄 BUY hold 3d (paper、 Sh+2.75 OOS+5.32 n=75)",
      "hold": "3日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "TSLA 4 連敗 → 翌寄 BUY hold 3d (paper、 Sh+2.75 OOS+5.32 n=75)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N1: TSLA 4 連敗 → 翌寄 BUY hold 3d、 Sh+2.75 OOS+5.32 n=75 mean+2.29% win 57% 3/4 regime。 wide MFE で TP+4%、 既存 TSLA 個別 reversion 軸なし。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N1_TSLA_Consec4_v1",
        "tp_pct": 4.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 2.75
      },
      "_supplement": true
    },
    {
      "tier": "A",
      "name": "N3_HYG_Credit_XBI_v1",
      "cat": "その他",
      "tickers": "XBI",
      "condition": "HYG 5d<=-1.5% → XBI 翌寄 BUY hold 5d (paper、 Sh+1.94 OOS+8.11 n=45 4/4)",
      "hold": "5日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "HYG 5d<=-1.5% → XBI 翌寄 BUY hold 5d (paper、 Sh+1.94 OOS+8.11 n=45 4/4)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N3 (SSRN credit-equity contagion / Avramov-Chordia overreaction): HYG (high-yield bond ETF) 5d <= -1.5% (= credit spread spike proxy) → XBI biotech 翌寄 BUY hold 5d、 Sh+1.94 OOS+8.11 n=45 win 64% 4/4 regime。 既存 TLT_Spike は flight-to-safety (リスクオフ防衛買)、 こちらは credit panic → リスクオン反転で方向違いの cross-asset。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N3_HYG_Credit_XBI_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 1.94
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "N7_VIXCurl_SMH_v1",
      "cat": "その他",
      "tickers": "SMH",
      "condition": "VIX/VIX3M >= 1.0 → SMH 翌寄 BUY hold 5d (paper、 Sh+2.00 OOS+4.03 n=69 4/4)",
      "hold": "5日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "VIX/VIX3M >= 1.0 → SMH 翌寄 BUY hold 5d (paper、 Sh+2.00 OOS+4.03 n=69 4/4)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N7 (SSRN volatility term structure / Quantpedia #156): VIX/VIX3M >= 1.0 (term inverted = panic) → SMH 翌寄 BUY hold 5d、 Sh+2.00 OOS+4.03 n=69 win 64% 4/4 regime。 既存 VIX_Backward は VIX6M 比、 こちらは VIX3M で短期 term curl、 SMH target。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N7_VIXCurl_SMH_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 2.0
      },
      "_supplement": true
    },
    {
      "tier": "A",
      "name": "N7_VIXCurl_XLK_v1",
      "cat": "その他",
      "tickers": "XLK",
      "condition": "VIX/VIX3M >= 1.0 → XLK 翌寄 BUY hold 5d (paper、 Sh+1.98 OOS+3.17 n=69 4/4)",
      "hold": "5日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "VIX/VIX3M >= 1.0 → XLK 翌寄 BUY hold 5d (paper、 Sh+1.98 OOS+3.17 n=69 4/4)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N7: VIX/VIX3M >= 1.0 → XLK 翌寄 BUY hold 5d、 Sh+1.98 OOS+3.17 n=69 win 67% 4/4 regime。 N7_VIXCurl_SMH_v1 と同 trigger / 別 target (= 分散 dual deploy)、 mean+1.25%。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N7_VIXCurl_XLK_v1",
        "tp_pct": 2.5,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 1.98
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "N9_Cascade3_SMH_v1",
      "cat": "その他",
      "tickers": "SMH",
      "condition": "3+ sector ETFs same-day chg<=-3% → SMH 翌寄 BUY hold 5d (paper、 Sh+2.19 OOS+3.41 n=75 4/4)",
      "hold": "5日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "3+ sector ETFs same-day chg<=-3% → SMH 翌寄 BUY hold 5d (paper、 Sh+2.19 OOS+3.41 n=75 4/4)",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] discover_panic_world_5_21.py N9 (arxiv q-fin cross-asset contagion / Quantifiable Edges market breadth): 3+ sector ETFs same-day chg <= -3% (= cross-sectional panic cascade) → SMH 翌寄 BUY hold 5d、 Sh+2.19 OOS+3.41 n=75 win 65% 4/4 regime。 既存 Sector_FriPanic_v1 は単一 sector 個別 trigger、 こちらは broad 同日 cascade で直交。 paper 1週後 LIVE 判定。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "N9_Cascade3_SMH_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": 2.19
      },
      "_supplement": true
    },
    {
      "tier": "?",
      "name": "PEAD_Down5d_v1",
      "cat": "その他",
      "tickers": "NVDA / AVGO / META / GOOGL / AAPL ... (計7銘柄)",
      "condition": "(monitor.py 参照)",
      "hold": "?",
      "freq": "(未集計)",
      "sharpe": "[_5_22_discovery] scripts/discover_short_term_global_5_22.py C2 (PEAD overreaction): earnings 当日 gap<-3% → 翌寄 BUY hold 5d、 OOS Sh=2.47 n=60 mean=+2.38% win=60% regime 4/4 (bull+1.98/bear+4.31/high+3.75/low+2.21)、 source: 反 PEAD = overreaction (Lakonishok 1991, Tetlock 2007)、 paper 1週後 LIVE 判定。 既存 Earnings_T_minus_5 (= 決算前) と反対方向で重複なし。",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] scripts/discover_short_term_global_5_22.py C2 (PEAD overreaction): earnings 当日 gap<-3% → 翌寄 BUY hold 5d、 OOS Sh=2.47 n=60 mean=+2.38% win=60% regime 4/4 (bull+1.98/bear+4.31/high+3.75/low+2.21)、 source: 反 PEAD = overreaction (Lakonishok 1991, Tetlock 2007)、 paper 1週後 LIVE 判定。 既存 Earnings_T_minus_5 (= 決算前) と反対方向で重複なし。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "PEAD_Down5d_v1",
        "tp_pct": 4.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": null
      },
      "_supplement": true
    },
    {
      "tier": "?",
      "name": "Sun_Eff_Long_v1",
      "cat": "その他",
      "tickers": "SPY / QQQ / SOXX / XLK / SMH",
      "condition": "(monitor.py 参照)",
      "hold": "?",
      "freq": "(未集計)",
      "sharpe": "[_5_22_discovery] scripts/discover_short_term_global_5_22.py C5 (Sunday-Effect reversal): Fri close < SMA20 ∧ VIX>20 → Mon 寄付 BUY hold 1d、 OOS Sh=4.43 n=66 mean=+0.63% win=66.7% regime 4/4 (bull+7.52/bear+2.28/high+8.83/low+2.81)、 universe: SPY/QQQ/SOXX/SMH/XLK、 source: QuantSeeker 2022 / 中国量化坛 周末效应 反転 / Sunday-fear thesis、 paper 1週後 LIVE 判定。 既存 Mon 関連 (RSI35 Tue skip / Sector_FriPanic) と別軸。 mean+0.63% > commission floor 0.07% OK。",
      "live": "✅ 本番運用中 (TWS 自動執行) [size×0.75]",
      "memo": "[_5_22_discovery] scripts/discover_short_term_global_5_22.py C5 (Sunday-Effect reversal): Fri close < SMA20 ∧ VIX>20 → Mon 寄付 BUY hold 1d、 OOS Sh=4.43 n=66 mean=+0.63% win=66.7% regime 4/4 (bull+7.52/bear+2.28/high+8.83/low+2.81)、 universe: SPY/QQQ/SOXX/SMH/XLK、 source: QuantSeeker 2022 / 中国量化坛 周末效应 反転 / Sunday-fear thesis、 paper 1週後 LIVE 判定。 既存 Mon 関連 (RSI35 Tue skip / Sector_FriPanic) と別軸。 mean+0.63% > commission floor 0.07% OK。 / [_5_22_live] 5/22 user 採用: paper→LIVE 化、 size_mult 0.75 (= 中央値、 失敗許容) で初週",
      "_auto_meta": {
        "key": "Sun_Eff_Long_v1",
        "tp_pct": 2.0,
        "sl_pct": -10.0,
        "size_multiplier": 0.75,
        "paper": false,
        "sharpe_value": null
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "TLT_Spike_Equity_v1",
      "cat": "短期 cross-asset reversion",
      "tickers": "NVDA / QQQ / XLK",
      "condition": "TLT 5日 >=+3% flight-to-safety reversion → 翌寄 NVDA/XLK/QQQ BUY: Sh+3.09〜+3.46 win 72-78% n=36",
      "hold": "3日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "TLT 5日 >=+3% flight-to-safety reversion → 翌寄 NVDA/XLK/QQQ BUY: Sh+3.09〜+3.46 win 72-78% n=36",
      "live": "✅ 本番運用中 (TWS 自動執行)",
      "memo": "[_5_20_revision] 2.0% → 3%、 panic rebound で wide MFE 期待 / [_note] 5/19 夜間自走 採用 (Phase 1 paper Tier B): TLT 5d>=+3% → NVDA/XLK/QQQ 翌寄 BUY、 Sh+3.09〜+3.46 win 72-78% n=36。 hold 3d",
      "_auto_meta": {
        "key": "TLT_Spike_Equity_v1",
        "tp_pct": 3.0,
        "sl_pct": -10.0,
        "size_multiplier": 1.0,
        "paper": false,
        "sharpe_value": 3.09
      },
      "_supplement": true
    },
    {
      "tier": "S",
      "name": "VIX_Spike_XLK_v1",
      "cat": "短期 vol spike",
      "tickers": "XLK",
      "condition": "VIX 1日 +30% spike → 翌寄 XLK BUY: Sh+3.21 OOS+8.33 win 83% n=23",
      "hold": "7日 寄→翌寄 MOO bracket",
      "freq": "(未集計)",
      "sharpe": "VIX 1日 +30% spike → 翌寄 XLK BUY: Sh+3.21 OOS+8.33 win 83% n=23",
      "live": "✅ 本番運用中 (TWS 自動執行)",
      "memo": "[_note] 5/19 夜間自走 採用 (Phase 1 paper Tier B): VIX 1d +30% → XLK 翌寄 BUY、 Sh+3.21 OOS+8.33 win 83% n=23。 hold 7d",
      "_auto_meta": {
        "key": "VIX_Spike_XLK_v1",
        "tp_pct": 2.0,
        "sl_pct": -10.0,
        "size_multiplier": 1.0,
        "paper": false,
        "sharpe_value": 3.21
      },
      "_supplement": true
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Stoch_Oversold_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic",
        "Stoch_Oversold_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pullback_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
      ]
    },
    {
      "ticker": "AMD",
      "name": "Advanced Micro Devices, Inc.",
      "reading": "アドバンスト・マイクロ・デバイセズ",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Stoch_Oversold_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Golden_Cross_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Semi_FriPanic_v1",
        "SPY_Panic2_v1",
        "Pullback_v1",
        "MACD_Cross_v1",
        "SMA_Stack_v1",
        "Stoch_Oversold_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "VolDryUp_v1",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Earnings_T_minus_5",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "BSX",
      "name": "Boston Scientific Corporation",
      "reading": "ボストン・サイエンティフィック",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Devices",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CHD",
      "name": "Church & Dwight Co., Inc.",
      "reading": "チャーチ・アンド・ドワイト",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Household & Personal Products",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "CHRW",
      "name": "C.H. Robinson Worldwide, Inc.",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Integrated Freight & Logistics",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CNC",
      "name": "Centene Corporation",
      "reading": "(未登録)",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Healthcare Plans",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "CNP",
      "name": "CenterPoint Energy, Inc.",
      "reading": "(未登録)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Regulated Electric",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "COO",
      "name": "The Cooper Companies, Inc.",
      "reading": "(未登録)",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Instruments & Supplies",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
      "strategies": [
        "Earnings_T_minus_5"
      ]
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "CTVA",
      "name": "Corteva, Inc.",
      "reading": "(未登録)",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Agricultural Inputs",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "CVX",
      "name": "Chevron Corporation",
      "reading": "シェブロン",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas Integrated",
      "is_champ": false,
      "strategies": [
        "Earnings_T_minus_5"
      ]
    },
    {
      "ticker": "D",
      "name": "Dominion Energy, Inc.",
      "reading": "(未登録)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Regulated Electric",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "DLTR",
      "name": "Dollar Tree, Inc.",
      "reading": "(未登録)",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Discount Stores",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic",
        "Stoch_Oversold_v1"
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
        "RSI35_Trend",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "ED",
      "name": "Consolidated Edison, Inc.",
      "reading": "(未登録)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Regulated Electric",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
      "ticker": "EG",
      "name": "Everest Group, Ltd.",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Insurance - Reinsurance",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "EL",
      "name": "The Estée Lauder Companies Inc.",
      "reading": "(未登録)",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Household & Personal Products",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "EPAM",
      "name": "EPAM Systems, Inc.",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Information Technology Services",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "HighPullback50_v1"
      ]
    },
    {
      "ticker": "EQR",
      "name": "Equity Residential",
      "reading": "(未登録)",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Residential",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "EQT",
      "name": "EQT Corporation",
      "reading": "EQT コーポレーション",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas E&P",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "EVRG",
      "name": "Evergy, Inc.",
      "reading": "(未登録)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Regulated Electric",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
      "ticker": "EXE",
      "name": "Expand Energy Corporation",
      "reading": "(未登録)",
      "sector_en": "Energy",
      "sector_jp": "エネルギー",
      "industry": "Oil & Gas E&P",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "FAS",
      "name": "Direxion Daily Financial Bull 3X Shares",
      "reading": "金融セクター 3x レバレッジ ETF",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "金融 3x",
      "is_champ": false,
      "strategies": [
        "Drop5d_StrictATR"
      ]
    },
    {
      "ticker": "FAST",
      "name": "Fastenal Company",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Industrial Distribution",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "FDS",
      "name": "FactSet Research Systems Inc.",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Financial Data & Stock Exchanges",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "FDX",
      "name": "FedEx Corporation",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Integrated Freight & Logistics",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "FISV",
      "name": "Fiserv, Inc.",
      "reading": "(未登録)",
      "sector_en": "?",
      "sector_jp": "?",
      "industry": "?",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "FITB",
      "name": "Fifth Third Bancorp",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Banks - Regional",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "FSLR",
      "name": "First Solar, Inc.",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Solar",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1",
        "Stoch_Oversold_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
      ]
    },
    {
      "ticker": "FTV",
      "name": "Fortive Corporation",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Scientific & Technical Instruments",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "GEHC",
      "name": "GE HealthCare Technologies Inc.",
      "reading": "GE ヘルスケア",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Devices",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "GL",
      "name": "Globe Life Inc.",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Insurance - Life",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
      "ticker": "GM",
      "name": "General Motors Company",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Manufacturers",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
      "strategies": [
        "Earnings_T_minus_5",
        "HighPullback50_v1"
      ]
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "HighPullback50_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "HD",
      "name": "The Home Depot, Inc.",
      "reading": "ホーム・デポ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Home Improvement Retail",
      "is_champ": false,
      "strategies": [
        "Earnings_T_minus_5"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "INTC",
      "name": "Intel Corporation",
      "reading": "インテル",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "Stoch_Oversold_v1",
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "VolDryUp_v1"
      ]
    },
    {
      "ticker": "J",
      "name": "Jacobs Solutions Inc.",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Engineering & Construction",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Earnings_T_minus_5",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "KDP",
      "name": "Keurig Dr Pepper Inc.",
      "reading": "(未登録)",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Beverages - Non-Alcoholic",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Pullback_v1",
        "Confluence_RSIStoch_v1",
        "VolDryUp_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Earnings_T_minus_5",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "Stoch_Oversold_v1",
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "LOW",
      "name": "Lowe's Companies, Inc.",
      "reading": "ロウズ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Home Improvement Retail",
      "is_champ": false,
      "strategies": [
        "Earnings_T_minus_5"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Earnings_T_minus_5",
        "SMA_Stack_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pullback_v1",
        "SMA_Stack_v1",
        "Stoch_Oversold_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "VolDryUp_v1"
      ]
    },
    {
      "ticker": "MGM",
      "name": "MGM Resorts International",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Resorts & Casinos",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "MRNA",
      "name": "Moderna, Inc.",
      "reading": "モデルナ",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Earnings_T_minus_5"
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
        "RSI35_Trend",
        "Confluence_RSIStoch_v1",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "MSCI",
      "name": "MSCI Inc.",
      "reading": "エムエスシーアイ",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Financial Data & Stock Exchanges",
      "is_champ": false,
      "strategies": [
        "SPY_Panic2_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
      ]
    },
    {
      "ticker": "MSTR",
      "name": "Strategy Inc",
      "reading": "マイクロストラテジー",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Application",
      "is_champ": false,
      "strategies": [
        "MSTR_Panic20"
      ]
    },
    {
      "ticker": "MTB",
      "name": "M&T Bank Corporation",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Banks - Regional",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "MU",
      "name": "Micron Technology, Inc.",
      "reading": "マイクロン・テクノロジー",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Semiconductors",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend",
        "Earnings_T_minus_5"
      ]
    },
    {
      "ticker": "NCLH",
      "name": "Norwegian Cruise Line Holdings Ltd.",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Travel Services",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "NEE",
      "name": "NextEra Energy, Inc.",
      "reading": "ネクステラ・エナジー",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Regulated Electric",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "NSC",
      "name": "Norfolk Southern Corporation",
      "reading": "ノーフォーク・サザン",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Railroads",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend"
      ]
    },
    {
      "ticker": "NTAP",
      "name": "NetApp, Inc.",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Infrastructure",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "NTRS",
      "name": "Northern Trust Corporation",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Asset Management",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "SPY_Panic2_v1",
        "BB_Lower_Bounce_v1",
        "Stoch_Oversold_v1",
        "HighPullback50_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "Inside_Day_BO_v1",
        "Sector_FriPanic_v1",
        "Confluence_BBStoch_v1",
        "TLT_Spike_Equity_v1"
      ]
    },
    {
      "ticker": "ODFL",
      "name": "Old Dominion Freight Line, Inc.",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Trucking",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Stoch_Oversold_v1",
        "Confluence_RSIStoch_v1",
        "HighPullback50_v1"
      ]
    },
    {
      "ticker": "ORLY",
      "name": "O'Reilly Automotive, Inc.",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Auto Parts",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
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
        "RSI35_Trend",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "PODD",
      "name": "Insulet Corporation",
      "reading": "(未登録)",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Devices",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "VIX_Backward",
        "Drop5d_ETF7",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "Confluence_BBStoch_v1",
        "TLT_Spike_Equity_v1"
      ]
    },
    {
      "ticker": "RBC",
      "name": "RBC Bearings Incorporated",
      "reading": "RBC ベアリングス",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Tools & Accessories",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend"
      ]
    },
    {
      "ticker": "RCL",
      "name": "Royal Caribbean Cruises Ltd.",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Travel Services",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "REGN",
      "name": "Regeneron Pharmaceuticals, Inc.",
      "reading": "リジェネロン",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Biotechnology",
      "is_champ": false,
      "strategies": [
        "Earnings_T_minus_5"
      ]
    },
    {
      "ticker": "ROK",
      "name": "Rockwell Automation, Inc.",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Specialty Industrial Machinery",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "ROL",
      "name": "Rollins, Inc.",
      "reading": "(未登録)",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Personal Services",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "SBAC",
      "name": "SBA Communications Corporation",
      "reading": "(未登録)",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Specialty",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "SCHW",
      "name": "The Charles Schwab Corporation",
      "reading": "(未登録)",
      "sector_en": "Financial Services",
      "sector_jp": "金融",
      "industry": "Capital Markets",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SHW",
      "name": "The Sherwin-Williams Company",
      "reading": "(未登録)",
      "sector_en": "Basic Materials",
      "sector_jp": "素材",
      "industry": "Specialty Chemicals",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "RSI35_Trend",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "VIX_Backward",
        "Drop5d_ETF7",
        "SMA_Stack_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "VolDryUp_v1",
        "EarnCascade_SMH_up5_h5",
        "EarnCascade_SMH_down5_h10"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "HighPullback50_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "SOXL",
      "name": "Direxion Daily Semiconductor Bull 3X Shares",
      "reading": "半導体 3x レバレッジ ETF",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "半導体 3x",
      "is_champ": false,
      "strategies": [
        "Drop5d_StrictATR"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Drop5d_ETF7",
        "SPY_Panic2_v1",
        "SMA_Stack_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "EarnCascade_SOXX_up5_h5"
      ]
    },
    {
      "ticker": "SPG",
      "name": "Simon Property Group, Inc.",
      "reading": "サイモン・プロパティ・グループ",
      "sector_en": "Real Estate",
      "sector_jp": "REIT/不動産",
      "industry": "REIT - Retail",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1",
        "HighPullback50_v1"
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
        "RSI35_Trend",
        "VIX_Backward",
        "Drop5d_ETF7",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_BroadPanic",
        "HighPullback50_v1"
      ]
    },
    {
      "ticker": "SYK",
      "name": "Stryker Corporation",
      "reading": "ストライカー",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Medical Devices",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend"
      ]
    },
    {
      "ticker": "SYY",
      "name": "Sysco Corporation",
      "reading": "(未登録)",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Food Distribution",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "TDG",
      "name": "TransDigm Group Incorporated",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Aerospace & Defense",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "TGT",
      "name": "Target Corporation",
      "reading": "ターゲット",
      "sector_en": "Consumer Defensive",
      "sector_jp": "生活必需",
      "industry": "Discount Stores",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic"
      ]
    },
    {
      "ticker": "TNA",
      "name": "Direxion Daily Small Cap Bull 3X Shares",
      "reading": "ラッセル 2000 3x レバレッジ ETF",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "ラッセル 2000 3x",
      "is_champ": false,
      "strategies": [
        "Drop5d_StrictATR"
      ]
    },
    {
      "ticker": "TQQQ",
      "name": "ProShares UltraPro QQQ",
      "reading": "NASDAQ100 3x レバレッジ ETF",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "NASDAQ100 3x",
      "is_champ": false,
      "strategies": [
        "Drop5d_StrictATR"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "SPY_Panic2_v1"
      ]
    },
    {
      "ticker": "UBER",
      "name": "Uber Technologies, Inc.",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Software - Application",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "UNH",
      "name": "UnitedHealth Group Incorporated",
      "reading": "(未登録)",
      "sector_en": "Healthcare",
      "sector_jp": "ヘルスケア",
      "industry": "Healthcare Plans",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "UPRO",
      "name": "ProShares UltraPro S&P500",
      "reading": "S&P500 3x レバレッジ ETF (ProShares)",
      "sector_en": "?",
      "sector_jp": "レバレッジ ETF",
      "industry": "S&P500 3x (ProShares)",
      "is_champ": false,
      "strategies": [
        "Drop5d_StrictATR",
        "HighPullback50_v1"
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
        "Stoch_Oversold_v1",
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
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "HighPullback50_v1"
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
        "Drop5d_7",
        "Drop5d_StrictATR",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "VRT",
      "name": "Vertiv Holdings Co",
      "reading": "(未登録)",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Electrical Equipment & Parts",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Earnings_T_minus_5",
        "Pharma_Panic_v1"
      ]
    },
    {
      "ticker": "VST",
      "name": "Vistra Corp.",
      "reading": "(未登録)",
      "sector_en": "Utilities",
      "sector_jp": "公益",
      "industry": "Utilities - Independent Power Producers",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Confluence_RSIStoch_v1"
      ]
    },
    {
      "ticker": "WAB",
      "name": "Westinghouse Air Brake Technologies Corporation",
      "reading": "ウェスティングハウス・エア・ブレーキ",
      "sector_en": "Industrials",
      "sector_jp": "産業",
      "industry": "Railroads",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend",
        "CFO_Solo_PBuy_v1"
      ]
    },
    {
      "ticker": "WBD",
      "name": "Warner Bros. Discovery, Inc.",
      "reading": "(未登録)",
      "sector_en": "Communication Services",
      "sector_jp": "通信",
      "industry": "Entertainment",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "Stoch_Oversold_v1"
      ]
    },
    {
      "ticker": "XBI",
      "name": "State Street SPDR S&P Biotech ETF",
      "reading": "バイオテック ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "バイオテック",
      "is_champ": false,
      "strategies": [
        "VIX_Backward",
        "Drop5d_ETF7"
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
        "RSI35_Trend",
        "Drop5d_ETF7",
        "Confluence_RSIBB_v1",
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "CPI_Cyclical",
        "Drop5d_ETF7"
      ]
    },
    {
      "ticker": "XLI",
      "name": "State Street Industrial Select Sector SPDR ETF",
      "reading": "インダストリアル・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "産業・セクター",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend",
        "CPI_Cyclical",
        "Drop5d_ETF7"
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
        "RSI35_Trend",
        "Drop5d_7",
        "Drop5d_StrictATR",
        "Drop5d_VIX30_StochKD",
        "Drop5d_BroadPanic",
        "VIX_Backward",
        "Drop5d_ETF7",
        "Pullback_v1",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1",
        "TLT_Spike_Equity_v1",
        "VIX_Spike_XLK_v1"
      ]
    },
    {
      "ticker": "XLRE",
      "name": "State Street Real Estate Select Sector SPDR ETF",
      "reading": "不動産セクター ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "不動産・セクター",
      "is_champ": false,
      "strategies": [
        "Confluence_RSIBB_v1"
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
        "CPI_Defensive",
        "Confluence_RSIStoch_v1",
        "Confluence_RSIBB_v1"
      ]
    },
    {
      "ticker": "XLV",
      "name": "State Street Health Care Select Sector SPDR ETF",
      "reading": "ヘルスケア・セレクト・セクター",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "ヘルスケア・セクター",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend",
        "CPI_Defensive",
        "Drop5d_ETF7",
        "Confluence_RSIBB_v1"
      ]
    },
    {
      "ticker": "XLY",
      "name": "State Street Consumer Discretionary Select Sector SPDR ETF",
      "reading": "一般消費財セクター ETF",
      "sector_en": "?",
      "sector_jp": "ETF",
      "industry": "一般消費財・セクター",
      "is_champ": false,
      "strategies": [
        "CPI_Cyclical",
        "Drop5d_ETF7",
        "Confluence_RSIBB_v1"
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
        "Earnings_T_minus_5",
        "Sector_FriPanic_v1"
      ]
    },
    {
      "ticker": "YUM",
      "name": "Yum! Brands, Inc.",
      "reading": "ヤム・ブランズ",
      "sector_en": "Consumer Cyclical",
      "sector_jp": "一般消費",
      "industry": "Restaurants",
      "is_champ": false,
      "strategies": [
        "RSI35_Trend",
        "Stoch_Oversold_v1"
      ]
    },
    {
      "ticker": "ZBRA",
      "name": "Zebra Technologies Corporation",
      "reading": "(未登録)",
      "sector_en": "Technology",
      "sector_jp": "テクノロジー",
      "industry": "Communication Equipment",
      "is_champ": false,
      "strategies": [
        "CFO_Solo_PBuy_v1"
      ]
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
      "netliq": 11282.99,
      "day_pnl": 0.0,
      "cum_pnl_short": -48.34,
      "n_trades": 0,
      "vix": null,
      "netliq_baseline": 11540.0,
      "netliq_delta": -257.01,
      "unrealized_today": -211.52
    }
  ],
  "morning_brief": "# MORNING BRIEF — 2026-05-26 (火) ACH $9,400 settle 当日\n\n_draft_ts: 2026-05-20 22:50 CT (前倒し 6日前) クロコー / 5/24-25 (土日) 更新予定_\n\n## 1. Header — timing 注意\n\n- 5/19 ACH $9,400 request → **5/26 (火) settle 予定 (T+5 銀行営業日)**\n- IBKR **Cash account**: PDT 適用外、 制約は **T+1 settlement** のみ。 5/26 朝着金 cash は 5/26 当日 BUY 可、 ただし sell→buy 同日 round trip は同 cash で 不可\n- 5/20 終 NetLiq **$11,342.78** / Available Cash **$3,649.27** / 短期 open **0**、 Champ 5銘柄 (PWR 2 / COST 1 / NVDA 12 / GOOG 4 / LLY 1) のみ\n- 今週 short 累計 realized **-$48.34** (5/20 force_sell 4本 + GOOGL/FTAI round trip = 8 fills 勝1)\n\n## 2. 入金 status 確認 (06:30-07:30 CT)\n\n1. `python sync_mobile.py` run → `mobile/data.js` `today_summary.netliq` が **~$20,742** へ jump 確認\n2. `available_funds` が **$3,649 → ~$13,049 (+$9,400)** に増えてるか\n3. TWS UI 「Available Funds」 直接照合、 cash settle 反映 lag あれば 30 分待機\n\n## 3. 配分 plan (5/19 夜 user 明示)\n\n### Champ DCA $1,160 (案 A 仮確定: champ_dca_schedule.json `2026-05-26`)\n- **PWR 1 株 (~$763)** + **GOOG 1 株 (~$389)** = **$1,152**\n- NVDA は既に 12 株 (集中過剰 + 5/20 AH 反応次第) → skip\n- `_alternative_if_nvda_drops`: NVDA -7%+ drop 時 NVDA buy-the-dip 5 株 ~$1,000-1,100 を 案 A 代替 (user 5/24-25 最終判断)\n\n### 短期 $8,240 (拡張 pool)\n- 既存 $2,200 + 新規 $8,240 = **$10,440 規模**\n- 1 ポジ size: 33% × $10,440 = **~$3,447** (HighPullback50_v1 / Sector_FriPanic_v1 / Stoch_Oversold_v1 等 14 戦略 commission floor 監査済)\n- max_positions 3 並列、 mega 5/5 booster 全 fire 時は単独 $5,000 cap (5/19 large position split rule 適用、 $3k+ 個別株は 2-5 LMT ladder)\n\n## 4. 5/26 当日 chronological action\n\n| 時刻 (CT) | action | tool |\n|---|---|---|\n| 06:00 | price update | `update_prices_daily.py` (Task Scheduler 自動) |\n| 06:30 | TWS auto-start + bridge 5555 起動確認 | bat (5/17 夜 port kill 適用済) |\n| 07:00 | `sync_mobile.py` → ACH settle netliq jump 確認 | manual or cron |\n| 07:30 | **Champ DCA 起動**: `champ_dca_executor.py --date 2026-05-26` | PWR 1 / GOOG 1 MOO BUY |\n| 08:25 | **Short Term Auto 起動** (5/19 fix: 8:25 CT shift + 5×60s retry) | `short_term_executor.py` MOO BUY 寄付 |\n| 08:30 | 寄付約定 → bracket TP/SL 自動配置確認 | TWS UI + alerts.log |\n| 場中 | monitor cron 15min, force_close 14:42-15:00 window | `monitor.py` |\n| 15:00 | MOC SELL (MSTR / BroadPanic 系) 実行 | `--intraday-exit` batch |\n| 15:30 | 場引後 verify_claims 全 PASS 確認 / `mobile_history.json` 更新 | nightly audit |\n\n## 5. 想定リスク + mitigation\n\n- **ACH settle 遅延**: 5/26 朝に着金未確認なら Champ DCA を **5/27 (水) に 1日 slide**。 `champ_dca_schedule.json` `2026-05-26` を `2026-05-27` に rename + `_alternative_if_nvda_drops` 再判定。 短期 executor は既存 $3,649 で 1 ポジ ($1,200 上限) のみ起動、 残りは settle 翌日に\n- **NVDA earnings AH -4.13% 持続** (5/20 終 $223 → AH ~$214): Champ NVDA 12 株含み損 -$108 → -$180 拡大想定。 -7%+ なら 案 A→NVDA buy-the-dip 5 株切替 trigger、 5/24 (土) user 判断必要\n- **5/26 当日 signal 大量 fire**: priority queue は (1) HighPullback50_v1 NVDA/AMAT 等 Monday booster S+、 (2) Pharma_Panic_v1 / Semi_FriPanic_v1、 (3) Sector_FriPanic_v1。 max_positions 3 で 4本目以降は skip_reason 記録、 翌日再 trigger\n- **T+1 制約**: 5/26 settle cash は 5/27 から再利用可、 当日 SELL 約定 cash は 5/27 まで使えない (Cash ac",
  "heartbeats": {
    "intraday_position_monitor": {
      "ts": "2026-05-22T18:30:03",
      "ok": true,
      "note": "",
      "age_min": 5.3626213
    },
    "sync_mobile": {
      "ts": "2026-05-22T18:20:36",
      "ok": true,
      "note": "225,195 B",
      "age_min": 14.8126213
    },
    "verify_claims": {
      "ts": "2026-05-21T22:53:06",
      "ok": true,
      "note": "70p/0f",
      "age_min": 1182.3126213
    },
    "intraday_cron": {
      "ts": "2026-05-22T18:20:36",
      "ok": true,
      "note": "bat completed",
      "age_min": 14.8126213
    },
    "intraday_executor_scan": {
      "ts": "2026-05-22T18:30:02",
      "ok": true,
      "note": "",
      "age_min": 5.379287966666666
    },
    "vix_regime": {
      "ts": "2026-05-22T18:30:23",
      "ok": true,
      "note": "GOOD score=3/4 VIX=17.13",
      "age_min": 5.029287966666667
    },
    "morning_preopen_notify": {
      "ts": "2026-05-22T08:00:05",
      "ok": true,
      "note": "8 blocks",
      "age_min": 635.3292879666666
    },
    "morning_tws_connect": {
      "ts": "2026-05-22T08:35:19",
      "ok": true,
      "note": "attempt=1",
      "age_min": 600.0959546333332
    },
    "short_term_auto_bat": {
      "ts": "2026-05-22T08:42:05",
      "ok": true,
      "note": "completed",
      "age_min": 593.3292879666666
    },
    "alert_state_tws_reconciler_phantom": {
      "ts": "2026-05-21T20:55:00",
      "ok": true,
      "note": "5/21 08:39 EXE/NTAP/ADI phantom 検知 + cleanup 完了、 state=0 TWS=5 (Champ のみ) 確認",
      "age_min": 1300.4126213000002
    },
    "state_tws_reconciler": {
      "ts": "2026-05-22T18:30:23",
      "ok": true,
      "note": "state=3 TWS=8 phantoms=0 partials=0",
      "age_min": 5.029287966666667
    },
    "alert_test_wire_5_21": {
      "ts": "2026-05-21T09:24:36",
      "ok": true,
      "note": "resolved 09:24: user iPhone で push 受信確認済 (5/21 朝 alert_state_tws_reconciler_phantom 再発 critical で実発火、 user 受信報告)。 wire (notify_failure → push_send.py → VAPID Web Push → Apple PWA) 生存確認",
      "age_min": 1990.8126213
    },
    "alert_R2_backtest_critical_findings": {
      "ts": "2026-05-22T07:21:58",
      "ok": false,
      "note": "R2 OOS backtest 6.4 年 完了 ⚠ 重大: US_D7_VIX_cond_ORB_v1 paper→LIVE 化済が C tier -840/mo 致命的、 HighPullback50_v1 / RSIBB_v1 / Drop5d_ETF7 等 9 戦略 C tier 落ち、 LIVE 35 中 多数 anti-edge 化。 user 朝判断: 即 disable / 5/2",
      "age_min": 673.4459546333333
    }
  },
  "regime": {
    "ts": "2026-05-22T18:30:23",
    "vix": 17.13,
    "spy_close": 742.72,
    "spy_10d_return_pct": 1.52,
    "smh_10d_return_pct": 5.14,
    "spy_50d_ma": 694.87,
    "spy_200d_ma": 675.66,
    "spy_vol_ratio_5d_20d": 1.055,
    "c1_vix_17_19": true,
    "c2_spy_uptrend_not_extended": true,
    "c3_semis_leading": true,
    "c4_vol_dry_up": false,
    "score": 3,
    "regime": "GOOD",
    "note": "良好 — 3/4 pass",
    "data_freshness_days": 1
  },
  "alerts_recent": [
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
      "days_held": 0,
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
          "due": "hold_days=3、 経過=0d",
          "status": "未到達"
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
      "strategy": "US_D6_First_Hour_FT_v1",
      "qty": 1,
      "entry_price": 747.16,
      "entry_date": "2026-05-22",
      "days_held": 0,
      "hold_days": 1,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 762.1,
        "sl_pct": -10.0,
        "sl_price": 672.44
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 762.1,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 672.44,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=1、 経過=0d",
          "status": "未到達"
        }
      ],
      "current_price": 745.5900268554688,
      "unrealized_pct": -0.21,
      "force_sell_today": null,
      "silent_fail_note": null
    },
    {
      "category": "短期 (寄付戦略)",
      "ticker": "XLE",
      "strategy": "Candle15m_TweezerBottom",
      "qty": 9,
      "entry_price": 59.3093,
      "entry_date": "2026-05-22",
      "days_held": 0,
      "hold_days": 1,
      "bracket": {
        "tp_pct": 2.0,
        "tp_price": 60.5,
        "sl_pct": -10.0,
        "sl_price": 53.38
      },
      "exits": [
        {
          "type": "TP",
          "target_price": 60.5,
          "target_pct": 2.0,
          "status": "未到達"
        },
        {
          "type": "SL",
          "target_price": 53.38,
          "target_pct": -10.0,
          "status": "未到達"
        },
        {
          "type": "timeout",
          "due": "hold_days=1、 経過=0d",
          "status": "未到達"
        }
      ],
      "current_price": 59.459999084472656,
      "unrealized_pct": 0.25,
      "force_sell_today": null,
      "silent_fail_note": null
    }
  ],
  "intraday_opportunities": [],
  "all_trades": [
    {
      "date": "2026-05-22",
      "ticker": "EXE",
      "strategy": "TWS_BOT",
      "shares": 11.0,
      "entry_price": 97.41,
      "exit_price": null,
      "pnl_usd": 0,
      "pnl_pct": null,
      "exit_reason": "tws_fill",
      "source": "tws_executions",
      "commission": 1.000033,
      "side": "BOT"
    },
    {
      "date": "2026-05-22",
      "ticker": "SPY",
      "strategy": "TWS_BOT",
      "shares": 1.0,
      "entry_price": 747.16,
      "exit_price": null,
      "pnl_usd": 0,
      "pnl_pct": null,
      "exit_reason": "tws_fill",
      "source": "tws_executions",
      "commission": 1.000003,
      "side": "BOT"
    },
    {
      "date": "2026-05-22",
      "ticker": "XLE",
      "strategy": "TWS_BOT",
      "shares": 9.0,
      "entry_price": 59.3093,
      "exit_price": null,
      "pnl_usd": 0,
      "pnl_pct": null,
      "exit_reason": "tws_fill",
      "source": "tws_executions",
      "commission": 1.000027,
      "side": "BOT"
    },
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
  "pwa_reports": [
    {
      "number": 9,
      "title": "[テスト] GH Actions PWA ack 動作確認 #1",
      "body": "VAPID + subscription 登録後の 初回 push テスト。 5-10s 以内に iPhone + Watch 振動するか確認。",
      "state": "CLOSED",
      "created_at": "2026-05-21T04:23:22Z",
      "closed_at": "2026-05-21T11:23:27Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "テスト用、 動作確認済、 close",
          "created_at": "2026-05-21T11:23:27Z"
        }
      ]
    },
    {
      "number": 8,
      "title": "[PWA報告] 2026-05-21 04:19 {   \"endpoint\": \"https://web.push.apple.",
      "body": "## メッセージ\n{   \"endpoint\": \"https://web.push.apple.com/QH1K9NcUOyOFggzNTnLUEpSxo1wevvK40x5ZBrDF6M2ZUSueuBSu-6ztfszd1JhqPkb7H2KGDjakzDL_FmJgW6Wyj9Thdn894MDVqdhZh472W3IxziyVviZVG2x_6EdYgWnUGiMyRkza-pePl1nB8xiQ1YlMfvFFvHDr5J6AIWc\",   \"keys\": {     \"p256dh\": \"BNkH8I9Dt--H9SnreCC-8TfJ-c7EbTl16r9vSfAr1D20woABXxQxAolrpQ15k_lc2WAYN-SEA9FtpjuPKHEmqLY\",     \"auth\": \"HR6xU6Ub3QRdxUj7W4ufPQ\"   } }\n\n## 自動 Context\n- 報告時刻: 2026-05-21 04:19 (browser local)\n- data.js generated_at: 2026-05-20T23:16\n- 表示中タブ: 今日\n- NetLiq: $?\n- Cash (Available): $?\n- unrealized: $?\n- 短期 open: 0 件\n- データソース: bridge_fallback\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-21T04:19:50Z",
      "closed_at": "2026-05-21T04:23:03Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "クロコー: subscription 受領 + logs/push_subscriptions.json に保存済、 next: GH Secrets 登録 + テスト",
          "created_at": "2026-05-21T04:23:02Z"
        }
      ]
    },
    {
      "number": 2,
      "title": "[PWA報告] 2026-05-20 04:48 🚨 売れてないぞ！",
      "body": "## メッセージ\n🚨 売れてないぞ！\n\n## 自動 Context\n- 報告時刻: 2026-05-20 04:48 (browser local)\n- data.js generated_at: 2026-05-19T23:45\n- 表示中タブ: 今日\n- NetLiq: $11397.4\n- Cash (Available): $697.57\n- unrealized: $-138.02\n- 短期 open: 9 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T04:48:56Z",
      "closed_at": "2026-05-20T05:02:39Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー (Claude) 返信 — 想定 troubleshooting\n\n5/20 00:01 CT 受信、 #1 とセットの 「もし朝 売れなかったら」 演習想定として 対応。\n\n### 仮想 5/20 8:35 CT で SPXL/LIN/IP/VRTX が TWS に残ってる場合\n\n#### Step 1: 原因 4 候補 を 5 分で切り分け\n| 仮説 | 確認方法 |\n|---|---|\n| A. TWS connect fail | `logs/short_term_auto_20260520.log` 末尾「TWS 接続失敗」 |\n| B. status=Inactive (5/19 IP 型) | log で「Inactive」 検索、 TWS Open Orders タブ |\n| C. cron 走らず | `Get-ScheduledTask 'Short Term Auto'` LastResult |\n| D. cash 不足で reject | TWS account → AvailableFunds |\n\n#### Step 2: 仮説別 即時対応\n- **A**: retry loop 5回 自動回復、 9:00 までに約定すれば OK、 過ぎたら手動 `python short_term_executor.py --execute --yes`\n- **B**: TWS UI で該当銘柄右クリック → 取消 → MOO SELL 手動再投入\n- **C**: PowerShell で `Start-ScheduledTask -TaskName 'Short Term Auto'` 即起動\n- **D**: 5/19 PLTR SLD $406 settle 後の cash で十分、 別 silent fail なら別途調査\n\n#### Step 3: 報告\nlog + TWS UI screenshot を chat or issue で送れば即 fix push、 翌日朝の reaction も同時設計。\n\n### 今回はテスト送信で 受領 + 仮想対応 完了、 close します。\n\n本番で 不発の時は新規 issue (タイトル違うもの) で送ってください、 仮想 != 本番 で扱い分けます。",
          "created_at": "2026-05-20T05:02:38Z"
        }
      ]
    },
    {
      "number": 3,
      "title": "[PWA報告] 2026-05-20 05:02 明日は頑張ろうね",
      "body": "## メッセージ\n明日は頑張ろうね\n\n## 自動 Context\n- 報告時刻: 2026-05-20 05:02 (browser local)\n- data.js generated_at: 2026-05-20T00:00\n- 表示中タブ: 今日\n- NetLiq: $11397.4\n- Cash (Available): $697.57\n- unrealized: $-138.02\n- 短期 open: 9 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T05:02:29Z",
      "closed_at": "2026-05-20T05:04:42Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー (Claude) 返信\n\nありがとうございます。 頑張ります。\n\n### 朝 (8:25-8:35 CT) 自動配線確認\n\n- ✅ Short Term Auto cron (8:25 CT) → force_sell 4 銘柄 MOO SELL\n- ✅ silent fail 6 種 fix 配線済 (claims 29 PASS)\n- ✅ TWS connect retry 5x60s で robust 化\n- ✅ commission floor 監査済 12 patterns で場中走行\n- ✅ NVDA earnings 5/20 引け後 reaction 待ち、 5/21 朝に BTD arm 判断\n\n### 引け後 (15:00+ CT)\n\n- NVDA Q1 FY27 結果次第 で 5/21 朝の BTD trigger 価格 配線判断\n- PWA 「📬 返信」 タブで僕の返信 確認可\n\n明朝の force_sell 4 銘柄 約定 + NVDA earnings reaction、 user 起床後 PWA 確認お願いします。 何か想定外あれば 1 タップで 「📮 報告」 ください、 即 troubleshoot します。\n\n良い1日を。",
          "created_at": "2026-05-20T05:04:42Z"
        }
      ]
    },
    {
      "number": 1,
      "title": "[PWA報告] 2026-05-20 04:47 また売ってないけどどうした？",
      "body": "## メッセージ\nまた売ってないけどどうした？\n\n## 自動 Context\n- 報告時刻: 2026-05-20 04:47 (browser local)\n- data.js generated_at: 2026-05-19T23:45\n- 表示中タブ: 今日\n- NetLiq: $11397.4\n- Cash (Available): $697.57\n- unrealized: $-138.02\n- 短期 open: 9 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T04:47:10Z",
      "closed_at": "2026-05-20T05:02:36Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー (Claude) 返信 — 受領確認 + 朝の準備状況\n\n5/20 00:01 CT 受信、 朝 8:25 起動の force_sell に向けた事前確認スコープと判定。\n\n### 朝 8:25-8:35 CT 配線済 (今夜 silent fail 6 種 fix 後の体制)\n\n- `monitor_config.json` `daily_force_sell` 2026-05-20: SPXL 4 / LIN 2 / IP 1 / VRTX 2 = 4 件 確定\n- `short_term_executor.py` `connect_tws` 5×60s retry loop (TWS auto-start 余裕)\n- `intraday_position_monitor` SELL 前 TWS shares 確認 (IP Error 201 防止)\n- `claims.json` 29 件 PASS、 morning_tws_connect / daily_force_sell_executed / commission_floor 監査済\n\n### 朝 8:35 CT に user 確認推奨\n\n1. PWA「保有」 タブ で 4 銘柄消滅 + Champ 5 銘柄のみ\n2. TWS UI で「最近の取引履歴」 に SELL 4 件 約定確認\n3. PWA「監視」 タブ heartbeat 全 緑\n4. PWA「履歴」 タブ 日次ログ 2026-05-20 に 4 件 closed\n\n### 想定外れた場合の即時対応\n\n「📮 報告」 で **#2 と同じテンプレ「🚨 売れてないぞ！」** 即送信 → 僕が即 troubleshoot + fix push。\n\nこのテスト issue で 双方向サイクル 動作確認 OK、 close します。 明朝の本番 reactionは TWS UI + PWA 両方確認の上 必要なら 再送信を。",
          "created_at": "2026-05-20T05:02:36Z"
        }
      ]
    },
    {
      "number": 5,
      "title": "[PWA報告] 2026-05-20 16:16 slvも買ってないのに買ったことになってる",
      "body": "## メッセージ\nslvも買ってないのに買ったことになってる\n\n## 自動 Context\n- 報告時刻: 2026-05-20 16:16 (browser local)\n- data.js generated_at: 2026-05-20T11:00\n- 表示中タブ: 保有\n- NetLiq: $11417.32\n- Cash (Available): $71.5\n- unrealized: $-77.19\n- 短期 open: 8 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T16:16:14Z",
      "closed_at": "2026-05-21T01:29:30Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー返信 — SLV 確認、 構造修復済\n\n仰る通り、 **SLV は買えてません**。 state.json には記録残ってたが TWS 側で reject。\n\n### log 直接抜粋 (Error 201)\n```\nSLV BUY 1 MKT → Cancelled\n理由: 利用可能な決済済み現金 71.50 USD < 必要 72.06 USD\n```\n= **cash 不足で TWS reject**、 SLV 1株 ($67.95) 買うのに必要 $72 (commission 込) なかった。\n\n### root cause (silent fail #22)\n- 朝の short_term_executor の発注 順序:\n  - force_sell 4 銘柄 (cash 戻り未 settle)\n  - 新規 BUY 候補多数 (GOOGL → FTAI → SLV → ...)\n- SLV 順番で cash 枯渇 → Error 201 reject\n- でも reject 確認せず state.open_positions に **paper 追加** (= 嘘の記録)\n\n### Fix 実装済\n- `short_term_executor.py` に **parent_reject_state_skip** logic 追加:\n  - parent BUY status が Cancelled/Inactive/ApiCancelled なら state.json append skip\n  - + critical alert 発信\n- claim `parent_reject_state_skip_wired` (critical) 追加\n- state-TWS 整合保証、 「買ってないのに買ったことに」 再発防止\n\n5/20 朝の発注順序も再考: cash 余力 ascending sort or 高 priority 先 等で改善余地あり、 場引後 追加検討。",
          "created_at": "2026-05-21T01:29:29Z"
        }
      ]
    },
    {
      "number": 6,
      "title": "[PWA報告] 2026-05-20 17:19 対応中からどうなりました？修正して実行して下さい",
      "body": "## メッセージ\n対応中からどうなりました？修正して実行して下さい\n\n## 自動 Context\n- 報告時刻: 2026-05-20 17:19 (browser local)\n- data.js generated_at: 2026-05-20T12:00\n- 表示中タブ: 保有\n- NetLiq: $11392.14\n- Cash (Available): $71.5\n- unrealized: $-102.36\n- 短期 open: 8 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T17:19:32Z",
      "closed_at": "2026-05-21T01:29:32Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー返信 — 場中 lockdown + 帰宅後 fix 進捗\n\n場中 (07:25-15:00 CT) は user 指示で「検証停止 / 監視集中」 ルール、 PWA report 受信は次セッションまで処理が遅れます。 帰宅後 (20:13 CT) に 4 件 同時把握 → 即対応中。\n\n### 完了済 (今この瞬間)\n- ✅ silent fail #21 (bracket TP stale ref): `place_bracket_moo_buy` 完全 rewrite、 actual fill price 基準で TP/SL 再計算\n- ✅ silent fail #22 (parent reject state phantom): cash 不足 reject の state 整合\n- ✅ claims 2 件追加 (bracket_post_fill_recalc / parent_reject_state_skip) で構造監視\n- ✅ 全 4 issues (#4-#7) 個別 reply + close\n\n### 場引後 (継続中、 ~1-2h で完成)\n- 夜間自走 alpha 探索 8 系統結果の wire 配線 (confluence boosters 7件 + anti-pattern filter 5 件 — config staging 済)\n- NVDA earnings AH -1.26% (= soft、 BTD trigger 未到達)、 5/21 朝に再判断\n\n### 場中の流れ自動運用評価\n- 8:25 Short Term Auto cron → force_sell 4 銘柄 全約定 ✓ (silent fail 6 種 fix 効いた)\n- 8:33 新規 GOOGL/FTAI 発注 → TP 即発火 bug (= 今夜 fix)\n- 8:34 SLV cash 不足 reject (= 今夜 fix)\n- 場中 intraday cron で hold_min timeout + 14:55 force_close 動作確認\n\n明朝 8:25 でこの最新 fix の本機 stress test。 修復循環 続けます。",
          "created_at": "2026-05-21T01:29:31Z"
        }
      ]
    },
    {
      "number": 7,
      "title": "[PWA報告] 2026-05-20 17:22 監視も赤字がいっぱい。権限いるならパスでいいから直して",
      "body": "## メッセージ\n監視も赤字がいっぱい。権限いるならパスでいいから直して\n\n## 自動 Context\n- 報告時刻: 2026-05-20 17:22 (browser local)\n- data.js generated_at: 2026-05-20T12:15\n- 表示中タブ: 監視\n- NetLiq: $11397.99\n- Cash (Available): $71.5\n- unrealized: $-96.52\n- 短期 open: 8 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T17:22:22Z",
      "closed_at": "2026-05-21T01:29:34Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "まだです？",
          "created_at": "2026-05-20T17:46:37Z"
        },
        {
          "author": "crepello88-png",
          "body": "## クロコー返信 — 監視 赤の root cause\n\n「監視 赤字いっぱい」 = 場中 silent fail が積み上がった結果:\n\n1. **alerts.log**: SLV cash 不足 reject、 GOOGL/FTAI 同日 round-trip notification (=critical alert)\n2. **heartbeat**: 場中 fail 系列 (state-TWS 整合不全)\n3. **claims**: 朝の force_sell PASS だが 新規 BUY 系で不整合\n\n### 全 root cause + fix\n- silent fail #21 (bracket TP stale ref → 即発火): `place_bracket_moo_buy` rewrite **完了**\n- silent fail #22 (parent reject state phantom): state 整合 logic **完了**\n- 場中 cron 健全性 (heartbeat OK): force_sell + sync_mobile + vix_regime 全 緑、 「赤」 は 上記 critical alerts + closed state mismatch 由来\n\n### 「権限要るならパスでいい」 件\nadmin パス共有は不要、 全ての対応は僕 (sky CLI) 側で完結。 user 操作不要、 ただし朝 PWA 「📮 報告」 だけは Watch 振動 alert のため iPhone Safari install 必要 (前夜 未完了、 朝起きたら 5 分 setup お願い)。\n\n### 場引後 計画 (続行中)\n- confluence boosters 7 件 + anti-pattern filter 5 件 wire 配線\n- NVDA 5/21 朝 reaction 確認 → BTD GTC arm 判断\n- claims 32 PASS 化 (#21 #22 追加)\n- 監視タブ 赤 全クリア\n\n明朝の 8:25 で最新 fix の stress test。 「同じ失敗」 引き起こすパターン、 1 つずつ着実に潰します。",
          "created_at": "2026-05-21T01:29:33Z"
        }
      ]
    },
    {
      "number": 4,
      "title": "[PWA報告] 2026-05-20 16:14 買うと売りが一緒になっていてシグナル読み取って売ってない",
      "body": "## メッセージ\n買うと売りが一緒になっていてシグナル読み取って売ってない\n\n## 自動 Context\n- 報告時刻: 2026-05-20 16:14 (browser local)\n- data.js generated_at: 2026-05-20T11:00\n- 表示中タブ: 今日\n- NetLiq: $11417.32\n- Cash (Available): $71.5\n- unrealized: $-77.19\n- 短期 open: 8 件\n- データソース: TWS_direct_v2\n- UA: Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers\n\n## クロコー アクション\n- このメッセージを読んで対応をお願いします\n- 完了したら issue close + reply",
      "state": "CLOSED",
      "created_at": "2026-05-20T16:14:50Z",
      "closed_at": "2026-05-21T01:29:27Z",
      "comments": [
        {
          "author": "crepello88-png",
          "body": "## クロコー返信 — 完全 root cause + fix 実装済\n\n仰る通り、 「買うと売りが一緒、 signal 読み取って売ってない」 = **真の bug 検出**。 spec ではなく **bracket TP 即発火** の事故。\n\n### 原因 (silent fail #21)\n- `place_bracket_moo_buy` が **signal 計算時の ref_price** で TP/SL price 計算\n- MOO 実 fill 価格 ≠ ref_price (= 8:32 signal → 8:33 fill の数秒で価格動く)\n- GOOGL: ref $387.66 → TP $390.92 計算、 MOO fill **$391.75 (TP より高い)** → TP child 即発火 → SLD $391.75 = commission のみ食って -$2.01\n- FTAI: ref $223.49 → TP $225.52 計算、 MOO fill **$226.95 (TP より高い)** → 同様 → SLD $226.68 = -$2.27\n\n### Fix 実装済 (silent fail #21 構造修復)\n- `place_bracket_moo_buy` を 完全 rewrite:\n  1. parent BUY を transmit=True で先に MOO 発注\n  2. fill 待ち poll (max 30s)、 `avgFillPrice` 取得\n  3. **actual fill price で TP/SL 再計算** (BRK2_ OCA group 後発注)\n  4. fill 失敗時 critical alert + state 追加 skip\n- claim `bracket_post_fill_recalc_wired` (critical) 追加で構造監視\n- 同種 bug 再発しない設計\n\n明日朝 8:30 force_sell + 新規 BUY で本機 検証、 結果は 「📬 返信」 タブで確認可能。\n\n確認 ありがとう、 spec の盲点 1 つ潰せました。",
          "created_at": "2026-05-21T01:29:27Z"
        }
      ]
    }
  ]
};
