import React from 'react';
import Icon from '../../../components/AppIcon';

const TokenMetrics = () => {
  const metrics = [
    {
      id: 1,
      label: "Total Supply",
      value: "1,000,000,000",
      symbol: "FRT",
      change: "+0.00%",
      changeType: "neutral",
      icon: "Coins"
    },
    {
      id: 2,
      label: "Circulating Supply",
      value: "250,000,000",
      symbol: "FRT",
      change: "+2.5%",
      changeType: "positive",
      icon: "TrendingUp"
    },
    {
      id: 3,
      label: "Market Cap",
      value: "$125,000,000",
      symbol: "USD",
      change: "+15.8%",
      changeType: "positive",
      icon: "DollarSign"
    },
    {
      id: 4,
      label: "Token Price",
      value: "$0.50",
      symbol: "USD",
      change: "+12.3%",
      changeType: "positive",
      icon: "BarChart3"
    },
    {
      id: 5,
      label: "Staking APY",
      value: "18.5%",
      symbol: "APY",
      change: "+1.2%",
      changeType: "positive",
      icon: "Percent"
    },
    {
      id: 6,
      label: "Total Staked",
      value: "180,000,000",
      symbol: "FRT",
      change: "+5.7%",
      changeType: "positive",
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
  );
};

export default TokenMetrics;