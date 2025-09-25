import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { RainbowButton } from '../../components/ui/RainbowButton';
import { AnimatedShinyText } from '../../components/ui/AnimatedShinyText';
import TokenMetrics from './components/TokenMetrics';
import TokenDistribution from './components/TokenDistribution';
import FPTDistribution from './components/FPTDistribution';
import StakingCalculator from './components/StakingCalculator';
import VestingSchedule from './components/VestingSchedule';
import SecurityAudits from './components/SecurityAudits';
import PartnershipShowcase from './components/PartnershipShowcase';
import DualTokenArchitecture from './components/DualTokenArchitecture';

const TokenomicsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Token Overview', icon: 'Coins' },
    { id: 'dual-token', label: 'Dual Token Model', icon: 'Layers' },
    { id: 'distribution', label: 'Distribution', icon: 'PieChart' },
    { id: 'staking', label: 'Staking Calculator', icon: 'Calculator' },
    { id: 'vesting', label: 'Vesting Schedule', icon: 'Calendar' },
    { id: 'security', label: 'Security & Audits', icon: 'Shield' },
    { id: 'partnerships', label: 'Partnerships', icon: 'Handshake' }
  ];

  const tokenUtilities = [
    {
      id: 1,
      title: 'Tournament Entry Fees',
      description: 'Use FRT tokens to enter competitive tournaments and leagues',
      icon: 'Trophy',
      color: 'text-golden-cta'
    },
    {
      id: 2,
      title: 'Governance Voting',
      description: 'Participate in DAO governance and platform decision-making',
      icon: 'Vote',
      color: 'text-accent'
    },
    {
      id: 3,
      title: 'Staking Rewards',
      description: 'Stake tokens to earn passive income and platform benefits',
      icon: 'Percent',
      color: 'text-success'
    },
    {
      id: 4,
      title: 'NFT Marketplace',
      description: 'Trade gaming NFTs and exclusive collectibles',
      icon: 'Image',
      color: 'text-neon-purple'
    },
    {
      id: 5,
      title: 'Premium Features',
      description: 'Access advanced analytics and exclusive platform features',
      icon: 'Star',
      color: 'text-warning'
    },
    {
      id: 6,
      title: 'Creator Monetization',
      description: 'Content creators earn tokens through community engagement',
      icon: 'Video',
      color: 'text-destructive'
    }
  ];

  const economicMetrics = [
    {
      label: 'Token Symbol',
      value: 'FRT',
      description: 'FortisArena Token'
    },
    {
      label: 'Blockchain',
      value: 'Polygon, BSC and Ethereum',
      description: 'L2 Cross chain Bridge Scaling Solution'
    },
    {
      label: 'Token Standard',
      value: 'ERC-20',
      description: 'Compatible with all major wallets'
    },
    {
      label: 'Initial Price',
      value: '$0.10',
      description: 'Token generation event price'
    },
    {
      label: 'Current Price',
      value: 'Coming Soon',
      description: 'Real-time market price'
    },
    {
      label: 'All-Time High',
      value: 'Coming Soon',
      description: 'Peak price achieved'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <TokenMetrics />
            {/* FRT Token Utility */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">FRT Token Utility</h3>
                <p className="text-muted-foreground">
                  FRT powers the entire FortisArena ecosystem with multiple use cases
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {tokenUtilities?.map((utility) => (
                  <div
                    key={utility?.id}
                    className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                        <Icon 
                          name={utility?.icon} 
                          size={16} 
                          className={`${utility?.color} group-hover:text-accent transition-colors sm:w-5 sm:h-5`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                          {utility?.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {utility?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* FRT Economic Model */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">FRT Economic Model</h3>
                <p className="text-muted-foreground">
                  Key metrics and fundamentals of the FRT token economy
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {economicMetrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-3 sm:p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {metric?.label}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {metric?.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {metric?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

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

            {/* FPT Token Metrics */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">FPT Token Metrics</h3>
                <p className="text-muted-foreground">
                  Fortis Points Token (FPT) - Reward token for tournaments and platform incentives
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="Coins" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Total Supply
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.00%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        1,000,000,000
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="TrendingUp" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Initial Supply
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.0%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        500,000,000
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="DollarSign" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Market Cap
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.0%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        Coming Soon
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="BarChart3" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Token Price
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.0%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        Coming Soon
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="Gift" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Daily Rewards
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.0%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        Coming Soon
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon name="Users" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Active Earners
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      +0.0%
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        Coming Soon
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        Users
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FPT Token Utility */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">FPT Token Utility</h3>
                <p className="text-muted-foreground">
                  FPT powers rewards, tournaments, and platform incentives across FortisArena
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Trophy" size={16} className="text-golden-cta group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Tournament Rewards
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Earn FPT tokens for participating in tournaments and competitions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Gift" size={16} className="text-success group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Micro-Payouts
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Receive instant FPT rewards for daily activities and achievements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Zap" size={16} className="text-warning group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Platform Incentives
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Earn FPT for community engagement and platform participation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Target" size={16} className="text-neon-purple group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Game Achievements
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Unlock FPT rewards by completing in-game challenges and milestones
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Calendar" size={16} className="text-destructive group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Event Payouts
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Participate in special events and earn exclusive FPT rewards
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4 hover:shadow-gaming transition-all duration-300 group">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      <Icon name="Heart" size={16} className="text-accent group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        Community Rewards
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Get rewarded for contributing to the FortisArena community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FPT Economic Model */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">FPT Economic Model</h3>
                <p className="text-muted-foreground">
                  Key metrics and fundamentals of the FPT reward token economy
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Token Symbol
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    FPT
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Fortis Points Token
                  </p>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Blockchain
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    Polygon, BSC and Ethereum
                  </p>
                  <p className="text-xs text-muted-foreground">
                    L2 Cross chain Bridge Scaling Solution
                  </p>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Token Standard
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    ERC-20
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Compatible with all major wallets
                  </p>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Initial Price
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    $0.01 - $0.05
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Low price for frequent distribution
                  </p>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Current Price
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    Coming Soon
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Real-time market price
                  </p>
                </div>

                <div className="border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Daily Distribution
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-foreground mb-1">
                    Coming Soon
                  </p>
                  <p className="text-xs text-muted-foreground">
                    FPT tokens distributed daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'dual-token':
        return <DualTokenArchitecture />;
      case 'distribution':
        return (
          <div className="space-y-8">
            <TokenDistribution />
            
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

            <FPTDistribution />
          </div>
        );
      case 'staking':
        return <StakingCalculator />;
      case 'vesting':
        return <VestingSchedule />;
      case 'security':
        return <SecurityAudits />;
      case 'partnerships':
        return <PartnershipShowcase />;
      default:
        return <TokenMetrics />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gaming-dark relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 neural-network opacity-30"></div>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)]?.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="group rounded-full border border-white/10 bg-white/5 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10 mb-6 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-neutral-300 hover:duration-300">
                <Icon name="Coins" size={14} className="text-accent mr-2" />
                <span>FRT Token Economy</span>
              </AnimatedShinyText>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Tokenomics
              <span className="block text-accent">Built for Gaming</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the economic model powering the future of decentralized gaming. 
              FRT tokens drive tournaments, governance, and rewards in the FortisArena ecosystem.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                variant="glow"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto"
                iconName="Download"
                iconPosition="left"
              >
                Download Whitepaper
              </Button>
              <Button 
                variant="glow-accent"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto"
                iconName="BarChart3"
                iconPosition="left"
              >
                View Live Metrics
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto py-3 sm:py-4 scrollbar-hide">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground shadow-gaming'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{tab?.label}</span>
                <span className="xs:hidden">{tab?.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-neon-purple/5 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join the Revolution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get FRT tokens and become part of the decentralized gaming future
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
            <RainbowButton className="font-semibold w-full sm:w-auto">
              FRT Soon Available
            </RainbowButton>
            <RainbowButton className="font-semibold w-full sm:w-auto">
              Join Community
            </RainbowButton>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TokenomicsPage;