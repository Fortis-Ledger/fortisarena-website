import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TokenDistribution = () => {
  const distributionData = [
    { name: 'Community Rewards', value: 35, color: '#00D4FF', description: 'Tournament prizes and player rewards' },
    { name: 'Staking Rewards', value: 20, color: '#8A2BE2', description: 'Long-term staking incentives' },
    { name: 'Team & Advisors', value: 15, color: '#FFD700', description: 'Core team allocation with vesting' },
    { name: 'Development Fund', value: 12, color: '#10B981', description: 'Platform development and maintenance' },
    { name: 'Marketing & Partnerships', value: 10, color: '#F59E0B', description: 'Growth and strategic partnerships' },
    { name: 'Liquidity Pool', value: 5, color: '#EF4444', description: 'DEX liquidity provision' },
    { name: 'Reserve Fund', value: 3, color: '#6B7280', description: 'Emergency and future opportunities' }
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
              ({(data?.value * 10000000)?.toLocaleString()} FRT)
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {payload?.map((entry, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry?.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {entry?.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {entry?.payload?.value}% • {(entry?.payload?.value * 10000000)?.toLocaleString()} FRT
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">Token Distribution</h3>
        <p className="text-muted-foreground">
          Strategic allocation designed for sustainable ecosystem growth
        </p>
      </div>
      <div className="h-80" aria-label="Token Distribution Pie Chart">
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
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TokenDistribution;