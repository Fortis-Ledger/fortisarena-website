import React from 'react';
import Icon from '../../../components/AppIcon';

const DualTokenArchitecture = () => {
  const frtToken = {
    name: "FRT (Fortis Token)",
    totalSupply: "200,000,000",
    initialSupply: "10,000,000",
    price: "$0.10",
    purpose: "Utility token for staking, governance, and ecosystem support",
    features: [
      "Holders can participate in voting and platform decisions",
      "Earn reward tokens for active engagement",
      "Scarce supply ensures long-term value",
      "Builds investor trust and confidence",
      "Allocation: Pre-sale, team vesting, staking pools, partnerships"
    ],
    color: "#8A2BE2"
  };

  const fptToken = {
    name: "FPT (Fortis Points Token)",
    totalSupply: "1,000,000,000",
    initialSupply: "500,000,000",
    price: "$0.01 - $0.05",
    purpose: "Abundant reward token for tournaments, competitions, and incentives",
    features: [
      "Distributed for tournaments and competitions",
      "Micro-payouts and platform incentives",
      "Encourages active participation",
      "Long-term engagement of players",
      "Allocation: Reward pools, achievements, community incentives"
    ],
    color: "#00D4FF"
  };

  const TokenCard = ({ token, isFirst = false }) => (
    <div className={`bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 h-full flex flex-col ${isFirst ? 'lg:mb-8' : ''}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${token.color}20` }}
        >
          <Icon name="Coins" size={24} style={{ color: token.color }} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{token.name}</h3>
          <p className="text-sm text-muted-foreground">{token.purpose}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total Supply</span>
          </div>
          <p className="text-lg font-bold text-foreground">{token.totalSupply}</p>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="BarChart3" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Initial Supply</span>
          </div>
          <p className="text-lg font-bold text-foreground">{token.initialSupply}</p>
        </div>
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="DollarSign" size={16} className="text-accent" />
          <span className="text-sm font-medium text-accent">Initial Price Range</span>
        </div>
        <p className="text-2xl font-bold text-accent">{token.price}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {token.name === "FRT (Fortis Token)"
            ? "Moderate initial pool for stable launch price"
            : "Larger pool for frequent claims and smooth trading"
          }
        </p>
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
        <div className="space-y-2 flex-1">
          {token.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: token.color }}
              />
              <p className="text-sm text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Dual-Token Architecture</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          FortisArena ecosystem implements a dual-token architecture that efficiently manages
          platform sustainability, user engagement, and rewards distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <TokenCard token={frtToken} isFirst={true} />
        <TokenCard token={fptToken} />
      </div>

      <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Zap" size={24} className="text-accent" />
          <h3 className="text-xl font-bold text-foreground">Key Benefits of Dual-Token Model</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Scarce FRT → Value + Ecosystem</p>
                <p className="text-sm text-muted-foreground">Limited supply ensures long-term value appreciation</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Abundant FPT → Frequent Rewards</p>
                <p className="text-sm text-muted-foreground">Enables regular reward distribution</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Clear Separation</p>
                <p className="text-sm text-muted-foreground">Easy understanding for users and Developers</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Sustainable Ecosystem</p>
                <p className="text-sm text-muted-foreground">Staking and governance mechanisms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualTokenArchitecture;
