import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const VestingSchedule = () => {
  const vestingData = [
    { month: 'Launch', team: 0, advisors: 0, community: 25, development: 10, marketing: 20 },
    { month: 'Month 3', team: 0, advisors: 5, community: 35, development: 15, marketing: 30 },
    { month: 'Month 6', team: 10, advisors: 15, community: 50, development: 25, marketing: 45 },
    { month: 'Month 12', team: 25, advisors: 35, community: 75, development: 50, marketing: 70 },
    { month: 'Month 18', team: 50, advisors: 60, community: 85, development: 75, marketing: 85 },
    { month: 'Month 24', team: 75, advisors: 85, community: 95, development: 90, marketing: 95 },
    { month: 'Month 36', team: 100, advisors: 100, community: 100, development: 100, marketing: 100 }
  ];

  const vestingCategories = [
    {
      id: 1,
      name: 'Team & Advisors',
      percentage: '15%',
      description: '36-month vesting with 12-month cliff',
      color: '#FFD700',
      icon: 'Users',
      details: [
        'Core team allocation with performance milestones',
        '12-month cliff period before any tokens unlock',
        'Linear vesting over remaining 24 months',
        'Additional performance bonuses available'
      ]
    },
    {
      id: 2,
      name: 'Community Rewards',
      percentage: '35%',
      description: 'Immediate unlock for tournaments and rewards',
      color: '#00D4FF',
      icon: 'Trophy',
      details: [
        '25% unlocked at launch for initial tournaments',
        'Monthly releases based on platform activity',
        'Additional unlocks tied to user milestones',
        'Reserved for player rewards and competitions'
      ]
    },
    {
      id: 3,
      name: 'Development Fund',
      percentage: '12%',
      description: '24-month gradual release for platform development',
      color: '#10B981',
      icon: 'Code',
      details: [
        '10% unlocked at launch for immediate development',
        'Quarterly releases tied to roadmap milestones',
        'Smart contract upgrades and new features',
        'Third-party integrations and partnerships'
      ]
    },
    {
      id: 4,
      name: 'Marketing & Growth',
      percentage: '10%',
      description: '18-month vesting for strategic partnerships',
      color: '#F59E0B',
      icon: 'Megaphone',
      details: [
        '20% unlocked at launch for initial marketing',
        'Quarterly releases for growth initiatives',
        'Influencer partnerships and sponsorships',
        'Community building and events'
      ]
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-gaming">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm">
              <span className="font-medium" style={{ color: entry?.color }}>
                {entry?.name}:
              </span>
              <span className="ml-1">{entry?.value}% unlocked</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Vesting Chart */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Token Vesting Schedule</h3>
          <p className="text-muted-foreground">
            Transparent release schedule ensuring long-term ecosystem stability
          </p>
        </div>

        <div className="h-80" aria-label="Token Vesting Schedule Chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vestingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                label={{ value: '% Unlocked', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="team" 
                stroke="#FFD700" 
                strokeWidth={2}
                name="Team & Advisors"
                dot={{ fill: '#FFD700', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="community" 
                stroke="#00D4FF" 
                strokeWidth={2}
                name="Community Rewards"
                dot={{ fill: '#00D4FF', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="development" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Development Fund"
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="marketing" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Marketing & Growth"
                dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Vesting Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {vestingCategories?.map((category) => (
          <div
            key={category?.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${category?.color}20` }}
              >
                <Icon 
                  name={category?.icon} 
                  size={24} 
                  style={{ color: category?.color }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-foreground">{category?.name}</h4>
                  <span 
                    className="text-lg font-bold"
                    style={{ color: category?.color }}
                  >
                    {category?.percentage}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category?.description}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {category?.details?.map((detail, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon 
                    name="Check" 
                    size={14} 
                    className="text-success mt-0.5 flex-shrink-0" 
                  />
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VestingSchedule;