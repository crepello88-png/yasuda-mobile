window.MOBILE_DATA = {
  "generated_at": "2026-05-22T22:19",
  "today_summary": {
    "netliq": 11277.98,
    "cash": 1293.82,
    "available_funds": 1293.82,
    "excess_liquidity": 1293.82,
    "settled_cash": 1293.82,
    "buying_power": 1293.82,
    "stock_value": 9982.43,
    "unrealized_pnl": -216.53,
    "realized_pnl": 0.0,
    "day_pnl_pct": -1.91993601691083,
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
      "tier": "SS",
      "name": "Pullback_v1 (SMA50>SMA200 + RSI<35 pullback → 3日hold MOO) ⭐⭐ BULL",
      "cat": "短期 pullback",
      "tickers": "GOOGL / META / AVGO / KLAC / AMAT / XLK (6 銘柄、 monitor.py 自動 entry, max 5 同時)",
      "condition": "SMA50>SMA200 (uptrend) AND RSI(14)<35 (oversold) AND 前日 RSI>=35 (fresh) → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 full Sh+3.39 vs 5d+3.11)",
      "freq": "銘柄毎 年 3〜6 件 × 6 = 年 18-36 件 (bull 期 main alpha source)",
      "sharpe": "ST680 (5/17 03:46): GOOGL Sh+6.87 / META +6.81 / AVGO +6.22 / KLAC +6.17 / AMAT +4.97 / XLK +4.05 win 60-70% n=53-65 [全 4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 03:46 自動採用) monitor.py Pullback_v1",
      "memo": "bull 戦略 main: SMA50>SMA200 uptrend 中の RSI<35 一時 oversold を拾う classic pullback。 SOXX/NVDA は 3/4 で次候補。 期待年率 +18% (booster なし base) — 採用済 9 戦略中最強",
      "monthly_profit_usd": 77.53,
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
      "_r2_sharpe": 5.39
    },
    {
      "tier": "SS",
      "name": "メイン (Confluence_RSIStoch_v1)",
      "cat": "短期 confluence (BULL TOP)",
      "tickers": "既存24 + ST710 新20 = 44 銘柄。 新候補 top: PRIM+14.91 / ON+11.24 / M+10.97 / VNO+10.04 / OLLI+9.94 / COP+8.99 / MAR+8.64 / CAH+7.92 / PANW+7.66 / DE+7.26 / ITT+7.22 / BAC+7.07 / EBAY+6.96 / ALSN+6.73 / MS+6.70 / VTI+6.51 / ADI+6.51 / FTAI+6.44 / IP+6.41 / SPXL+5.99",
      "condition": "SMA50>SMA200 AND RSI(14)<35 AND Stochastic %K(14)<20 同日発火 + Jan/Mar/May skip → 翌寄 BUY → 3日後 寄付 SELL",
      "hold": "3日 寄→3日後寄 MOO bracket (ST699: 5d→3d、 12mo Sh+4.21→+4.10 で同等性能なら回転重視)",
      "freq": "銘柄毎 年 10-15 件 × 44 = 年 440-660 件 (max alpha bull strategy)",
      "sharpe": "ST710 (5/17 12:01) 拡張: 新候補 43 中 top 20 採用、 全 OOS Sh+5.99-14.91 + reg 3-4/4 pass。 small/mid-cap (PRIM/M/VNO/OLLI) で alpha mean+3-4%、 既存 + 拡張で 信号密度 約 3x",
      "live": "✅ 自動 entry (ST710 拡張 5/17 12:01) monitor.py Confluence_RSIStoch_v1 + 44 銘柄 ⭐⭐⭐ 最強 bull",
      "memo": "2-indicator (Pullback + Stoch) 完全同日 confluence、 single より rare だが te_Sh 2x。 ST710 で 20 銘柄追加 = signal 頻度 ~3x、 期待年率 +50-70%",
      "monthly_profit_usd": 602.79,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "NVDA ~\\$220 × mean 0.25%",
      "_backtest_n": 2526,
      "_backtest_sharpe": 2.72,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null,
      "_signals_per_month": 32.89,
      "_r2_n": 2526,
      "_r2_win_pct": 59.0,
      "_r2_mean_pct": 0.55,
      "_r2_sharpe": 2.72
    },
    {
      "tier": "SS",
      "name": "Sector_FriPanic_v1 (Sector ETF Fri-2% → Mon 寄 BUY target → 1日hold MOO) PANIC follow-on",
      "cat": "短期 panic 追随",
      "tickers": "JPM (XLF) / BAC (XLF) / MS (XLF) / LIN (XLB) / PH (XLI) / XOM (XLE) (6 pair、 monitor.py 自動 entry, max 5)",
      "condition": "金曜のみ 発火: 対応 sector ETF (XLF/XLB/XLI/XLE) 1日 chg<-2% → 翌月曜 寄付 BUY → 1日後 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO (週末挟むので Mon→Tue)",
      "freq": "年 5-15 件 × 6 = 年 30-90 件 (sector panic 頻度依存)",
      "sharpe": "ST713 (5/17 12:04): XLF→JPM Sh+5.97 win 77% n=30 4/4 reg / XLF→BAC +5.05 / XLF→MS +6.94 / XLB→LIN +7.33 3/4 / XLI→PH +7.07 3/4 / XLE→XOM +4.77 3/4",
      "live": "✅ 自動 entry (5/17 12:04 自動採用) monitor.py Sector_FriPanic_v1",
      "memo": "既存 Pharma_Panic / Semi_FriPanic と同様の sector-follow 構造、 金曜投売り (週末ポジ調整) を Mon の反発で取る = panic 月曜効果",
      "monthly_profit_usd": 72.1,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "XLK ~\\$176 × mean 0.55%",
      "_backtest_n": 193,
      "_backtest_sharpe": 4.74,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null,
      "_signals_per_month": 2.51,
      "_r2_n": 193,
      "_r2_win_pct": 62.0,
      "_r2_mean_pct": 0.85,
      "_r2_sharpe": 4.74
    },
    {
      "tier": "SS",
      "name": "Drop5d_BroadPanic (MOC 復活)",
      "cat": "短期 mean-reversion (intraday)",
      "tickers": "100銘柄 watchlist",
      "condition": "chg5<-12% + SPY 5日<-5% (broad market panic)",
      "hold": "当日 寄→引 MOC",
      "freq": "年 30〜80 件 (broad panic 時)",
      "sharpe": "MOC化 Sh+1.98 win 55% mean+0.96% (n=36820, ovn+0.91 から 2倍化 ST596)",
      "live": "✅ 自動 entry + MOC SELL (5/17 早朝 廃案撤回)",
      "memo": "一度廃案後 ST596 で intraday 復活、 同日 15:00 CT MOC SELL 自動",
      "monthly_profit_usd": 64.38,
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
      "_r2_sharpe": 0.52
    },
    {
      "tier": "A",
      "name": "Semi_FriPanic_v1 (SMH Fri-3% → AVGO Mon 1日)",
      "cat": "短期 mean-rev",
      "tickers": "AVGO のみ (monitor.py 自動 entry)",
      "condition": "SMH chg5<-3% on Friday AND month not in {2,3} → AVGO Mon 寄付 BUY → Tue 寄付 SELL",
      "hold": "1日 寄→翌寄 MOO",
      "freq": "年 5〜10 件",
      "sharpe": "ST641 (5/17 早朝): Sh+3.94 mean+0.82% win 65% n=85 [4/4 regime pass]",
      "live": "✅ 自動 entry (5/17 早朝 自動採用) monitor.py Semi_FriPanic_v1",
      "memo": "ST643: 2/3月 anti-edge (Sh-3.71/-1.06) skip 必須、 Fri vs Mon-Thr +2.67 Sh Δ で Friday filter 必須。 1/4/9/11月 強 (Sh+8-17)。 NVDA/KLAC/AMAT/MU は 3/4 regime のみで AVGO 単独運用",
      "monthly_profit_usd": 11.75,
      "_per_share_source": "comprehensive_oos_backtest_5_22",
      "per_share_profit_usd": null,
      "_per_share_basis": "SMH ~\\$560 × mean 0.82%",
      "_backtest_n": 49,
      "_backtest_sharpe": 4.08,
      "_backtest_oos_n": null,
      "_backtest_oos_mean_pct": null,
      "_signals_per_month": 0.64,
      "_r2_n": 49,
      "_r2_win_pct": 59.0,
      "_r2_mean_pct": 0.59,
      "_r2_sharpe": 4.08
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
      "tier": "A",
      "name": "N1_TSLA_Consec4_v1",
      "cat": "— (= N1/N7/N9 系統 5/22 採用、 source paper Sh+2-4)",
      "tickers": "(該当 watchlist)",
      "condition": "— (= monitor.py STRATEGY_HOLD コメント参照)",
      "hold": "hold ?d",
      "freq": "月 約 1.0 回",
      "sharpe": "Sh+2.96 mean+0.89% win 71%",
      "live": "✅ paper:false LIVE",
      "memo": "5/22 R2 OOS で SS/A tier 確認、 dispatcher 実装済",
      "monthly_profit_usd": 24.26,
      "_signals_per_month": 0.98,
      "_r2_n": 75,
      "_r2_win_pct": 71.0,
      "_r2_mean_pct": 0.89,
      "_r2_sharpe": 2.96
    },
    {
      "tier": "A",
      "name": "N7_VIXCurl_SMH_v1",
      "cat": "— (= N1/N7/N9 系統 5/22 採用、 source paper Sh+2-4)",
      "tickers": "(該当 watchlist)",
      "condition": "— (= monitor.py STRATEGY_HOLD コメント参照)",
      "hold": "hold ?d",
      "freq": "月 約 0.4 回",
      "sharpe": "Sh+3.25 mean+0.88% win 82%",
      "live": "✅ paper:false LIVE",
      "memo": "5/22 R2 OOS で SS/A tier 確認、 dispatcher 実装済",
      "monthly_profit_usd": 11.68,
      "_signals_per_month": 0.43,
      "_r2_n": 33,
      "_r2_win_pct": 82.0,
      "_r2_mean_pct": 0.88,
      "_r2_sharpe": 3.25
    },
    {
      "tier": "A",
      "name": "Confluence_BBStoch_v1",
      "cat": "— (= N1/N7/N9 系統 5/22 採用、 source paper Sh+2-4)",
      "tickers": "(該当 watchlist)",
      "condition": "— (= monitor.py STRATEGY_HOLD コメント参照)",
      "hold": "hold ?d",
      "freq": "月 約 1.2 回",
      "sharpe": "Sh+3.53 mean+0.66% win 74%",
      "live": "✅ paper:false LIVE",
      "memo": "5/22 R2 OOS で SS/A tier 確認、 dispatcher 実装済",
      "monthly_profit_usd": 22.9,
      "_signals_per_month": 1.16,
      "_r2_n": 89,
      "_r2_win_pct": 74.0,
      "_r2_mean_pct": 0.66,
      "_r2_sharpe": 3.53
    },
    {
      "tier": "A",
      "name": "N9_Cascade3_SMH_v1",
      "cat": "— (= N1/N7/N9 系統 5/22 採用、 source paper Sh+2-4)",
      "tickers": "(該当 watchlist)",
      "condition": "— (= monitor.py STRATEGY_HOLD コメント参照)",
      "hold": "hold ?d",
      "freq": "月 約 1.1 回",
      "sharpe": "Sh+1.96 mean+0.52% win 73%",
      "live": "✅ paper:false LIVE",
      "memo": "5/22 R2 OOS で SS/A tier 確認、 dispatcher 実装済",
      "monthly_profit_usd": 17.4,
      "_signals_per_month": 1.09,
      "_r2_n": 84,
      "_r2_win_pct": 73.0,
      "_r2_mean_pct": 0.52,
      "_r2_sharpe": 1.96
    },
    {
      "tier": "A",
      "name": "N1_NVDA_Consec4_v1",
      "cat": "— (= N1/N7/N9 系統 5/22 採用、 source paper Sh+2-4)",
      "tickers": "(該当 watchlist)",
      "condition": "— (= monitor.py STRATEGY_HOLD コメント参照)",
      "hold": "hold ?d",
      "freq": "月 約 0.7 回",
      "sharpe": "Sh+2.15 mean+0.51% win 70%",
      "live": "✅ paper:false LIVE",
      "memo": "5/22 R2 OOS で SS/A tier 確認、 dispatcher 実装済",
      "monthly_profit_usd": 11.79,
      "_signals_per_month": 0.69,
      "_r2_n": 53,
      "_r2_win_pct": 70.0,
      "_r2_mean_pct": 0.51,
      "_r2_sharpe": 2.15
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
        "Semi_FriPanic_v1",
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
        "Sector_FriPanic_v1",
        "Confluence_BBStoch_v1",
        "N1_NVDA_Consec4_v1"
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
        "Confluence_RSIStoch_v1",
        "Confluence_BBStoch_v1"
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
        "Confluence_RSIStoch_v1",
        "N7_VIXCurl_SMH_v1",
        "N9_Cascade3_SMH_v1"
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
        "Drop5d_BroadPanic",
        "N1_TSLA_Consec4_v1"
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
    }
  ],
  "morning_brief": "# MORNING BRIEF — 2026-05-26 (火) ACH $9,400 settle 当日\n\n_draft_ts: 2026-05-20 22:50 CT (前倒し 6日前) クロコー / 5/24-25 (土日) 更新予定_\n\n## 1. Header — timing 注意\n\n- 5/19 ACH $9,400 request → **5/26 (火) settle 予定 (T+5 銀行営業日)**\n- IBKR **Cash account**: PDT 適用外、 制約は **T+1 settlement** のみ。 5/26 朝着金 cash は 5/26 当日 BUY 可、 ただし sell→buy 同日 round trip は同 cash で 不可\n- 5/20 終 NetLiq **$11,342.78** / Available Cash **$3,649.27** / 短期 open **0**、 Champ 5銘柄 (PWR 2 / COST 1 / NVDA 12 / GOOG 4 / LLY 1) のみ\n- 今週 short 累計 realized **-$48.34** (5/20 force_sell 4本 + GOOGL/FTAI round trip = 8 fills 勝1)\n\n## 2. 入金 status 確認 (06:30-07:30 CT)\n\n1. `python sync_mobile.py` run → `mobile/data.js` `today_summary.netliq` が **~$20,742** へ jump 確認\n2. `available_funds` が **$3,649 → ~$13,049 (+$9,400)** に増えてるか\n3. TWS UI 「Available Funds」 直接照合、 cash settle 反映 lag あれば 30 分待機\n\n## 3. 配分 plan (5/19 夜 user 明示)\n\n### Champ DCA $1,160 (案 A 仮確定: champ_dca_schedule.json `2026-05-26`)\n- **PWR 1 株 (~$763)** + **GOOG 1 株 (~$389)** = **$1,152**\n- NVDA は既に 12 株 (集中過剰 + 5/20 AH 反応次第) → skip\n- `_alternative_if_nvda_drops`: NVDA -7%+ drop 時 NVDA buy-the-dip 5 株 ~$1,000-1,100 を 案 A 代替 (user 5/24-25 最終判断)\n\n### 短期 $8,240 (拡張 pool)\n- 既存 $2,200 + 新規 $8,240 = **$10,440 規模**\n- 1 ポジ size: 33% × $10,440 = **~$3,447** (HighPullback50_v1 / Sector_FriPanic_v1 / Stoch_Oversold_v1 等 14 戦略 commission floor 監査済)\n- max_positions 3 並列、 mega 5/5 booster 全 fire 時は単独 $5,000 cap (5/19 large position split rule 適用、 $3k+ 個別株は 2-5 LMT ladder)\n\n## 4. 5/26 当日 chronological action\n\n| 時刻 (CT) | action | tool |\n|---|---|---|\n| 06:00 | price update | `update_prices_daily.py` (Task Scheduler 自動) |\n| 06:30 | TWS auto-start + bridge 5555 起動確認 | bat (5/17 夜 port kill 適用済) |\n| 07:00 | `sync_mobile.py` → ACH settle netliq jump 確認 | manual or cron |\n| 07:30 | **Champ DCA 起動**: `champ_dca_executor.py --date 2026-05-26` | PWR 1 / GOOG 1 MOO BUY |\n| 08:25 | **Short Term Auto 起動** (5/19 fix: 8:25 CT shift + 5×60s retry) | `short_term_executor.py` MOO BUY 寄付 |\n| 08:30 | 寄付約定 → bracket TP/SL 自動配置確認 | TWS UI + alerts.log |\n| 場中 | monitor cron 15min, force_close 14:42-15:00 window | `monitor.py` |\n| 15:00 | MOC SELL (MSTR / BroadPanic 系) 実行 | `--intraday-exit` batch |\n| 15:30 | 場引後 verify_claims 全 PASS 確認 / `mobile_history.json` 更新 | nightly audit |\n\n## 5. 想定リスク + mitigation\n\n- **ACH settle 遅延**: 5/26 朝に着金未確認なら Champ DCA を **5/27 (水) に 1日 slide**。 `champ_dca_schedule.json` `2026-05-26` を `2026-05-27` に rename + `_alternative_if_nvda_drops` 再判定。 短期 executor は既存 $3,649 で 1 ポジ ($1,200 上限) のみ起動、 残りは settle 翌日に\n- **NVDA earnings AH -4.13% 持続** (5/20 終 $223 → AH ~$214): Champ NVDA 12 株含み損 -$108 → -$180 拡大想定。 -7%+ なら 案 A→NVDA buy-the-dip 5 株切替 trigger、 5/24 (土) user 判断必要\n- **5/26 当日 signal 大量 fire**: priority queue は (1) HighPullback50_v1 NVDA/AMAT 等 Monday booster S+、 (2) Pharma_Panic_v1 / Semi_FriPanic_v1、 (3) Sector_FriPanic_v1。 max_positions 3 で 4本目以降は skip_reason 記録、 翌日再 trigger\n- **T+1 制約**: 5/26 settle cash は 5/27 から再利用可、 当日 SELL 約定 cash は 5/27 まで使えない (Cash ac",
  "heartbeats": {
    "intraday_position_monitor": {
      "ts": "2026-05-22T22:15:02",
      "ok": true,
      "note": "",
      "age_min": 4.777381016666666
    },
    "sync_mobile": {
      "ts": "2026-05-22T22:17:57",
      "ok": true,
      "note": "124,635 B",
      "age_min": 1.8607143499999999
    },
    "verify_claims": {
      "ts": "2026-05-21T22:53:06",
      "ok": true,
      "note": "70p/0f",
      "age_min": 1406.71071435
    },
    "intraday_cron": {
      "ts": "2026-05-22T22:05:12",
      "ok": true,
      "note": "bat completed",
      "age_min": 14.61071435
    },
    "intraday_executor_scan": {
      "ts": "2026-05-22T22:15:02",
      "ok": true,
      "note": "",
      "age_min": 4.777381016666666
    },
    "vix_regime": {
      "ts": "2026-05-22T22:15:23",
      "ok": true,
      "note": "GOOD score=3/4 VIX=17.13",
      "age_min": 4.427381016666667
    },
    "morning_preopen_notify": {
      "ts": "2026-05-22T08:00:05",
      "ok": true,
      "note": "8 blocks",
      "age_min": 859.7273810166666
    },
    "morning_tws_connect": {
      "ts": "2026-05-22T08:35:19",
      "ok": true,
      "note": "attempt=1",
      "age_min": 824.4940476833333
    },
    "short_term_auto_bat": {
      "ts": "2026-05-22T08:42:05",
      "ok": true,
      "note": "completed",
      "age_min": 817.7273810166666
    },
    "alert_state_tws_reconciler_phantom": {
      "ts": "2026-05-21T20:55:00",
      "ok": true,
      "note": "5/21 08:39 EXE/NTAP/ADI phantom 検知 + cleanup 完了、 state=0 TWS=5 (Champ のみ) 確認",
      "age_min": 1524.81071435
    },
    "state_tws_reconciler": {
      "ts": "2026-05-22T22:15:22",
      "ok": true,
      "note": "state=3 TWS=8 phantoms=0 partials=0",
      "age_min": 4.444047683333333
    },
    "alert_test_wire_5_21": {
      "ts": "2026-05-21T09:24:36",
      "ok": true,
      "note": "resolved 09:24: user iPhone で push 受信確認済 (5/21 朝 alert_state_tws_reconciler_phantom 再発 critical で実発火、 user 受信報告)。 wire (notify_failure → push_send.py → VAPID Web Push → Apple PWA) 生存確認",
      "age_min": 2215.21071435
    },
    "alert_R2_backtest_critical_findings": {
      "ts": "2026-05-22T07:21:58",
      "ok": false,
      "note": "R2 OOS backtest 6.4 年 完了 ⚠ 重大: US_D7_VIX_cond_ORB_v1 paper→LIVE 化済が C tier -840/mo 致命的、 HighPullback50_v1 / RSIBB_v1 / Drop5d_ETF7 等 9 戦略 C tier 落ち、 LIVE 35 中 多数 anti-edge 化。 user 朝判断: 即 disable / 5/2",
      "age_min": 897.8440476833333
    }
  },
  "regime": {
    "ts": "2026-05-22T22:15:23",
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
