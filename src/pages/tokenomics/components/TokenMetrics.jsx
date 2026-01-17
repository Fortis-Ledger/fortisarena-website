import React from 'react';
import Icon from '../../../components/AppIcon';

const TokenMetrics = () => {
  const metrics = [
    {
      id: 1,
      label: "Total Supply",
      value: "200,000,000",
      symbol: "FRT",
      change: "+0.00%",
      changeType: "neutral",
      icon: "Coins"
    },
    {
      id: 2,
      label: "Initial Supply",
      value: "10,000,000",
      symbol: "FRT",
      change: "+5.0%",
      changeType: "positive", // Changed to positive for green color demo
      icon: "TrendingUp"
    },
    {
      id: 3,
      label: "Market Cap",
      value: "$1,000,000",
      symbol: "USD",
      change: "+0.0%",
      changeType: "neutral",
      icon: "DollarSign"
    },
    {
      id: 4,
      label: "Token Price",
      value: "$0.10",
      symbol: "USD",
      change: "+0.0%",
      changeType: "neutral",
      icon: "BarChart3"
    },
    {
      id: 5,
      label: "Staking APY",
      value: "5% - 20%",
      symbol: "APY",
      change: "+0.0%",
      changeType: "neutral",
      icon: "Percent"
    },
    {
      id: 6,
      label: "Total Staked",
      value: "Coming Soon",
      symbol: "FRT",
      change: "+0.0%",
      changeType: "neutral",
      icon: "Lock"
    }
  ];

  const getChangeColor = (type) => {
    switch (type) {
      case 'positive':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'negative':
        return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">FRT Token Metrics</h3>
        <p className="text-muted-foreground text-lg">
          Fortis Token (FRT) - Utility token for staking, governance, and ecosystem support
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics?.map((metric) => (
          <div
            key={metric?.id}
            className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                  <Icon name={metric?.icon} size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {metric?.label}
                  </p>
                </div>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getChangeColor(metric?.changeType)}`}>
                {metric?.change}
              </div>
            </div>

            <div className="space-y-1 relative z-10 pl-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                  {metric?.value}
                </span>
                <span className="text-sm text-white/50 font-bold">
                  {metric?.symbol}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenMetrics;