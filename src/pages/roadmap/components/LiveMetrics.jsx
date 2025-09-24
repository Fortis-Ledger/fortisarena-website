import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeUsers: 15420,
    tournaments: 342,
    totalRewards: 2.4,
    codeCommits: 1247
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: prev?.activeUsers + Math.floor(Math.random() * 10),
        tournaments: prev?.tournaments + (Math.random() > 0.8 ? 1 : 0),
        totalRewards: prev?.totalRewards + (Math.random() * 0.1),
        codeCommits: prev?.codeCommits + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const metricsData = [
    {
      icon: "Users",
      value: metrics?.activeUsers?.toLocaleString(),
      label: "Active Users",
      change: "+12%",
      color: "text-success"
    },
    {
      icon: "Trophy",
      value: metrics?.tournaments?.toLocaleString(),
      label: "Tournaments",
      change: "+8%",
      color: "text-accent"
    },
    {
      icon: "DollarSign",
      value: `$${metrics?.totalRewards?.toFixed(1)}M`,
      label: "Total Rewards",
      change: "+15%",
      color: "text-warning"
    },
    {
      icon: "GitCommit",
      value: metrics?.codeCommits?.toLocaleString(),
      label: "Code Commits",
      change: "+23%",
      color: "text-accent"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-bold text-foreground">Live Platform Metrics</h3>
        <div className="flex items-center space-x-2 text-sm text-success">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Live</span>
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