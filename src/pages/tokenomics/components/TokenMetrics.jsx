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
      value: "100,000,000",
      symbol: "FRT",
      change: "+0.0%",
      changeType: "neutral",
      icon: "TrendingUp"
    },
    {
      id: 3,
      label: "Market Cap",
      value: "Coming Soon",
      symbol: "USD",
      change: "+0.0%",
      changeType: "neutral",
      icon: "DollarSign"
    },
    {
      id: 4,
      label: "Token Price",
      value: "Coming Soon",
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
        return 'text-success';
      case 'negative':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">FRT Token Metrics</h3>
        <p className="text-muted-foreground">
          Fortis Token (FRT) - Utility token for staking, governance, and ecosystem support
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics?.map((metric) => (
        <div
          key={metric?.id}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon name={metric?.icon} size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  {metric?.label}
                </p>
              </div>
            </div>
            <div className={`text-xs font-medium ${getChangeColor(metric?.changeType)}`}>
              {metric?.change}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-foreground">
                {metric?.value}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
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