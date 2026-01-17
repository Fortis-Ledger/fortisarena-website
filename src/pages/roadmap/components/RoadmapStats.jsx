import React from 'react';
import Icon from '../../../components/AppIcon';

const RoadmapStats = () => {
  const stats = [
    {
      icon: "CheckCircle",
      value: "0",
      label: "Milestones Completed",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: "Clock",
      value: "2",
      label: "In Development",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: "Target",
      value: "10",
      label: "Upcoming Features",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: "TrendingUp",
      value: "15%",
      label: "Overall Progress",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-gaming transition-all duration-300">
          <div className={`w-12 h-12 rounded-lg ${stat?.bgColor} flex items-center justify-center mb-4`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapStats;