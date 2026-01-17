import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityStats = () => {
  const stats = [
    {
      id: 1,
      label: "Discord Members",
      value: "1000+",
      change: "+341",
      changeType: "increase",
      icon: "Users",
      color: "text-electric-blue"
    },
    {
      id: 2,
      label: "Active Players",
      value: "456+",
      change: "+92",
      changeType: "increase",
      icon: "Gamepad2",
      color: "text-neon-purple"
    },
    {
      id: 3,
      label: "Tournaments Hosted",
      value: "123+",
      change: "+14",
      changeType: "increase",
      icon: "Trophy",
      color: "text-golden-cta"
    },
    {
      id: 4,
      label: "Total Rewards Distributed",
      value: "$1000+",
      change: "+$421",
      changeType: "increase",
      icon: "DollarSign",
      color: "text-success"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat) => (
        <div
          key={stat?.id}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-muted ${stat?.color} bg-opacity-10`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="flex items-center space-x-1 text-sm text-success">
              <Icon name="TrendingUp" size={16} />
              <span>{stat?.change}</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
              {stat?.value}
            </h3>
            <p className="text-sm text-muted-foreground">
              {stat?.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityStats;