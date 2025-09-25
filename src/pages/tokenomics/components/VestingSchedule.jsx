import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const VestingSchedule = () => {
  const frtVestingData = [
    { month: 'Launch', team: 0, presale: 0, staking: 5, liquidity: 20, ecosystem: 5, reserve: 0 },
    { month: 'Month 3', team: 0, presale: 10, staking: 8, liquidity: 20, ecosystem: 8, reserve: 2 },
    { month: 'Month 6', team: 2, presale: 20, staking: 10, liquidity: 20, ecosystem: 10, reserve: 5 },
    { month: 'Month 12', team: 6, presale: 20, staking: 12, liquidity: 20, ecosystem: 12, reserve: 8 },
    { month: 'Month 18', team: 12, presale: 20, staking: 14, liquidity: 20, ecosystem: 14, reserve: 10 },
    { month: 'Month 24', team: 20, presale: 20, staking: 15, liquidity: 20, ecosystem: 15, reserve: 12 },
    { month: 'Month 36', team: 35, presale: 20, staking: 15, liquidity: 20, ecosystem: 15, reserve: 15 },
    { month: 'Month 48', team: 50, presale: 20, staking: 15, liquidity: 20, ecosystem: 15, reserve: 15 }
  ];

  const fptVestingData = [
    { month: 'Launch', rewards: 10, community: 5, presale: 0, staking: 0, liquidity: 10, reserve: 0 },
    { month: 'Month 1', rewards: 12, community: 6, presale: 0, staking: 2, liquidity: 10, reserve: 1 },
    { month: 'Month 2', rewards: 14, community: 7, presale: 0, staking: 4, liquidity: 10, reserve: 1 },
    { month: 'Month 3', rewards: 16, community: 8, presale: 0, staking: 6, liquidity: 10, reserve: 2 },
    { month: 'Month 4', rewards: 18, community: 9, presale: 0, staking: 8, liquidity: 10, reserve: 2 },
    { month: 'Month 5', rewards: 20, community: 10, presale: 0, staking: 10, liquidity: 10, reserve: 3 },
    { month: 'Month 6', rewards: 22, community: 11, presale: 16.6, staking: 12, liquidity: 10, reserve: 3 },
    { month: 'Month 7', rewards: 24, community: 12, presale: 33.2, staking: 14, liquidity: 10, reserve: 3 },
    { month: 'Month 8', rewards: 26, community: 13, presale: 49.8, staking: 16, liquidity: 10, reserve: 4 },
    { month: 'Month 9', rewards: 28, community: 14, presale: 66.4, staking: 18, liquidity: 10, reserve: 4 },
    { month: 'Month 10', rewards: 30, community: 15, presale: 83, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 11', rewards: 32, community: 16, presale: 100, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 12', rewards: 35, community: 18, presale: 100, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 18', rewards: 45, community: 20, presale: 100, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 24', rewards: 55, community: 20, presale: 100, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 36', rewards: 75, community: 20, presale: 100, staking: 20, liquidity: 10, reserve: 5 },
    { month: 'Month 48', rewards: 100, community: 20, presale: 100, staking: 20, liquidity: 10, reserve: 5 }
  ];

  const frtVestingCategories = [
    {
      id: 1,
      name: 'Team & Advisors',
      percentage: '15%',
      description: '48-month vesting with 6-month cliff',
      color: '#FFD700',
      icon: 'Users',
      details: [
        'Core team allocation with performance milestones',
        '6-month cliff period before any tokens unlock',
        'Gradual linear vesting over 48 months',
        'Additional performance bonuses available'
      ]
    },
    {
      id: 2,
      name: 'Pre-sale / Private Sale',
      percentage: '20%',
      description: '3-6 months lock post-launch',
      color: '#8A2BE2',
      icon: 'DollarSign',
      details: [
        '3-6 months lock to prevent dump',
        '20% unlocked by Month 6, then stable',
        'Early investor protection mechanism',
        'Aligned with long-term project success'
      ]
    },
    {
      id: 3,
      name: 'Staking & Governance Rewards',
      percentage: '15%',
      description: 'Continuous distribution for staking',
      color: '#00D4FF',
      icon: 'Lock',
      details: [
        '5% unlocked at launch for immediate rewards',
        'Gradual increase to 15% by Month 24',
        'Incentivizes long-term holding and participation',
        'Governance voting rewards included'
      ]
    },
    {
      id: 4,
      name: 'Liquidity (DEX/CEX)',
      percentage: '20%',
      description: 'Immediate unlock for price stability',
      color: '#EF4444',
      icon: 'TrendingUp',
      details: [
        '20% unlocked at launch for immediate liquidity',
        'Stable at 20% throughout vesting period',
        'Ensures smooth trading from day one',
        'Maintains healthy market depth'
      ]
    },
    {
      id: 5,
      name: 'Ecosystem Growth / Partnerships',
      percentage: '15%',
      description: 'Gradual release for partnerships',
      color: '#10B981',
      icon: 'Handshake',
      details: [
        '5% unlocked at launch for initial partnerships',
        'Gradual increase to 15% by Month 24',
        'Tournament sponsorships and collaborations',
        'Community building initiatives'
      ]
    },
    {
      id: 6,
      name: 'Reserve / Contingency',
      percentage: '15%',
      description: 'Long-term strategic reserve',
      color: '#6B7280',
      icon: 'Shield',
      details: [
        'Gradual unlock over 48 months',
        'Reaches 15% by Month 36',
        'Emergency fund for unforeseen opportunities',
        'Buffer for market volatility'
      ]
    }
  ];

  const fptVestingCategories = [
    {
      id: 1,
      name: 'Reward Pools (Tournaments & Achievements)',
      percentage: '30%',
      description: 'Continuous distribution for gameplay',
      color: '#00D4FF',
      icon: 'Trophy',
      details: [
        '10% unlocked at launch for immediate rewards',
        'Gradual increase to 100% by Month 48',
        'Tournament prizes and achievement rewards',
        'Daily/weekly player engagement incentives'
      ]
    },
    {
      id: 2,
      name: 'Ecosystem Incentives / Community',
      percentage: '20%',
      description: 'Community engagement rewards',
      color: '#8A2BE2',
      icon: 'Heart',
      details: [
        '5% unlocked at launch for community building',
        'Gradual increase to 20% by Month 12',
        'Loyalty programs and referral bonuses',
        'Event rewards and special promotions'
      ]
    },
    {
      id: 3,
      name: 'Pre-sale / Public & Private Sale',
      percentage: '15%',
      description: '6 months lock post-launch',
      color: '#F59E0B',
      icon: 'DollarSign',
      details: [
        '6 months lock to prevent dump',
        '16.6% unlock per month from Month 6-11',
        '100% unlocked by Month 11',
        'Early investor protection mechanism'
      ]
    },
    {
      id: 4,
      name: 'Staking Rewards (earned via FRT)',
      percentage: '20%',
      description: 'Additional rewards for FRT stakers',
      color: '#FFD700',
      icon: 'Lock',
      details: [
        'Gradual increase to 20% by Month 10',
        'Additional FPT rewards for FRT stakers',
        'Incentivizes dual-token ecosystem participation',
        'Long-term staking bonus rewards'
      ]
    },
    {
      id: 5,
      name: 'Liquidity / Exchanges',
      percentage: '10%',
      description: 'Immediate unlock for trading',
      color: '#EF4444',
      icon: 'TrendingUp',
      details: [
        '10% unlocked at launch for immediate trading',
        'Stable at 10% throughout vesting period',
        'Maintains healthy market liquidity',
        'Supports frequent reward claims'
      ]
    },
    {
      id: 6,
      name: 'Reserve / Future Development',
      percentage: '5%',
      description: 'Buffer for ecosystem requirements',
      color: '#6B7280',
      icon: 'Shield',
      details: [
        'Gradual increase to 5% by Month 10',
        'Buffer for unforeseen ecosystem requirements',
        'Future development and feature expansion',
        'Emergency fund for reward distribution'
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

  const VestingChart = ({ data, title, categories, isFPT = false }) => (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">
          Transparent release schedule ensuring long-term ecosystem stability
        </p>
      </div>

      <div className="h-80 mb-8" aria-label={`${title} Chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
            {isFPT ? (
              <>
                <Line 
                  type="monotone" 
                  dataKey="rewards" 
                  stroke="#00D4FF" 
                  strokeWidth={2}
                  name="Reward Pools (Tournaments & Achievements)"
                  dot={{ fill: '#00D4FF', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="community" 
                  stroke="#8A2BE2" 
                  strokeWidth={2}
                  name="Ecosystem Incentives / Community"
                  dot={{ fill: '#8A2BE2', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="presale" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="Pre-sale / Public & Private Sale"
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="staking" 
                  stroke="#FFD700" 
                  strokeWidth={2}
                  name="Staking Rewards (earned via FRT)"
                  dot={{ fill: '#FFD700', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="liquidity" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Liquidity / Exchanges"
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reserve" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  name="Reserve / Future Development"
                  dot={{ fill: '#6B7280', strokeWidth: 2, r: 4 }}
                />
              </>
            ) : (
              <>
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
                  dataKey="presale" 
                  stroke="#8A2BE2" 
                  strokeWidth={2}
                  name="Pre-sale / Private Sale"
                  dot={{ fill: '#8A2BE2', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="staking" 
                  stroke="#00D4FF" 
                  strokeWidth={2}
                  name="Staking & Governance Rewards"
                  dot={{ fill: '#00D4FF', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="liquidity" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Liquidity (DEX/CEX)"
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ecosystem" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Ecosystem Growth / Partnerships"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reserve" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  name="Reserve / Contingency"
                  dot={{ fill: '#6B7280', strokeWidth: 2, r: 4 }}
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <Icon name={category.icon} size={20} style={{ color: category.color }} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.percentage}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
            <div className="space-y-1">
              {category.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  />
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* FRT Vesting Schedule */}
      <VestingChart 
        data={frtVestingData}
        title="FRT Token Vesting Schedule"
        categories={frtVestingCategories}
        isFPT={false}
      />

      {/* Separator Line */}
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center space-x-4 w-full max-w-4xl">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-full border border-accent/20">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
      </div>

      {/* FPT Vesting Schedule */}
      <VestingChart 
        data={fptVestingData}
        title="FPT Token Vesting Schedule"
        categories={fptVestingCategories}
        isFPT={true}
      />
    </div>
  );
};

export default VestingSchedule;