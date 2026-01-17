import React from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetrics = () => {
  // Static data - no real-time updates
  const metrics = {
    activeUsers: 0,
    tournaments: 0,
    totalRewards: 0,
    codeCommits: 156
  };
  const metricsData = [
    {
      icon: "Users",
      value: "0",
      label: "Active Users",
      change: "0%",
      color: "text-muted-foreground"
    },
    {
      icon: "Trophy",
      value: "0",
      label: "Tournaments",
      change: "0%",
      color: "text-muted-foreground"
    },
    {
      icon: "DollarSign",
      value: "$0",
      label: "Total Rewards",
      change: "0%",
      color: "text-muted-foreground"
    },
    {
      icon: "GitCommit",
      value: metrics?.codeCommits?.toLocaleString(),
      label: "Code Commits",
      change: "+5%",
      color: "text-accent"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-bold text-foreground">Platform Metrics</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <span>Coming Soon</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData?.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name={metric?.icon} size={20} className="text-accent" />
            </div>
            <div className="text-xl font-bold text-foreground mb-1">{metric?.value}</div>
            <div className="text-xs text-muted-foreground mb-1">{metric?.label}</div>
            <div className={`text-xs font-medium ${metric?.color}`}>{metric?.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMetrics;