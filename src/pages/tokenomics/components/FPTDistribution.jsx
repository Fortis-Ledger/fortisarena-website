import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const FPTDistribution = () => {

  const distributionData = [
    { name: 'Reward Pools (Tournaments & Achievements)', value: 30, color: '#00D4FF', description: 'Daily/weekly player rewards, gaming competitions' },
    { name: 'Ecosystem Incentives / Community', value: 20, color: '#8A2BE2', description: 'Loyalty programs, event rewards, referral bonuses' },
    { name: 'Pre-sale / Public & Private Sale', value: 15, color: '#F59E0B', description: '6 months lock post-launch to prevent dump' },
    { name: 'Staking Rewards (earned via FRT)', value: 20, color: '#FFD700', description: 'Additional reward for FRT stakers' },
    { name: 'Liquidity / Exchanges', value: 10, color: '#EF4444', description: 'To enable smooth trading of FPT on DEX/CEX' },
    { name: 'Reserve / Future Development', value: 5, color: '#6B7280', description: 'Buffer for unforeseen ecosystem requirements' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-gaming">
          <p className="font-semibold text-foreground">{data?.name}</p>
          <p className="text-sm text-muted-foreground mb-2">{data?.description}</p>
          <p className="text-sm">
            <span className="font-medium">{data?.value}%</span>
            <span className="text-muted-foreground ml-1">
              ({(data?.value * 10000000)?.toLocaleString()} FPT)
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground mb-4">FPT Distribution Breakdown</h4>
        <div className="space-y-3">
          {payload?.map((entry, index) => (
            <div key={index} className="chart-legend-item flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: entry?.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {entry?.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {entry?.value}% • {(entry?.value * 10000000)?.toLocaleString()} FPT
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {entry?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">FPT Token Distribution</h3>
        <p className="text-muted-foreground">
          Strategic allocation designed for reward distribution and ecosystem engagement
        </p>
      </div>
      
      {/* Chart Container with proper layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Pie Chart */}
        <div className="flex-1 w-full lg:w-1/2" aria-label="FPT Token Distribution Pie Chart">
          <div className="w-full h-[400px] bg-gaming-dark border border-border rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {distributionData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Legend */}
        <div className="w-full lg:w-1/2 chart-legend">
          <CustomLegend payload={distributionData} />
        </div>
      </div>
    </div>
  );
};

export default FPTDistribution;
