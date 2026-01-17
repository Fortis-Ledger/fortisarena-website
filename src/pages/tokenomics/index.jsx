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
      value: 'BEP-20',
      description: 'Compatible with all major wallets'
    },
    {
      label: 'Launch Price',
      value: '$0.10',
      description: 'Token generation event price'
    },
    {
      label: 'Current Price',
      value: '$0.075',
      description: 'Real-time market price'
    },
    {
      label: 'All-Time High',
      value: 'Coming Soon',
      description: 'Peak price achieved'
    },
    {
      label: 'Contract Address (BSC)',
      value: <div className="flex items-center gap-2 group cursor-pointer" onClick={() => { navigator.clipboard.writeText('0xFf10d933E1Ca7799866B5D2A615e562CAd306c96'); alert('Contract Address Copied!'); }}>
        <span className="text-xs sm:text-sm font-mono truncate max-w-[150px] sm:max-w-full" title="0xFf10d933E1Ca7799866B5D2A615e562CAd306c96">0xFf10...6c96</span>
        <Icon name="Copy" size={14} className="text-accent opacity-70 group-hover:opacity-100" />
      </div>,
      description: 'Official FRT Contract'
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
                    className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                        <Icon
                          name={utility?.icon}
                          size={20}
                          className={`${utility?.color} group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                          {utility?.title}
                        </h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {utility?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* FRT Economic Model */}
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">FRT Economic Model</h3>
                <p className="text-muted-foreground text-lg">
                  Key metrics and fundamentals of the FRT token economy
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {economicMetrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        {metric?.label}
                      </span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      {metric?.value}
                    </p>
                    <p className="text-xs text-white/50">
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
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">FPT Token Metrics</h3>
                <p className="text-muted-foreground text-lg">
                  Fortis Points Token (FPT) - Reward token for tournaments and platform incentives
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="Coins" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Total Supply
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.00%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        1,000,000,000
                      </span>
                      <span className="text-sm text-white/50 font-bold">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="TrendingUp" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Initial Supply
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.0%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        500,000,000
                      </span>
                      <span className="text-sm text-white/50 font-bold">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="DollarSign" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Market Cap
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.0%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        Coming Soon
                      </span>
                      <span className="text-sm text-white/50 font-bold">
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="BarChart3" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Token Price
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.0%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        Coming Soon
                      </span>
                      <span className="text-sm text-white/50 font-bold">
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="Gift" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Daily Rewards
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.0%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        Coming Soon
                      </span>
                      <span className="text-sm text-white/50 font-bold">
                        FPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10">
                        <Icon name="Users" size={24} className="text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                          Active Earners
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full text-xs font-semibold border text-slate-400 bg-slate-400/10 border-slate-400/20">
                      +0.0%
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10 pl-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                        Coming Soon
                      </span>
                      <span className="text-sm text-white/50 font-bold">
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
                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Trophy" size={20} className="text-golden-cta group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Tournament Rewards
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Earn FPT tokens for participating in tournaments and competitions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Gift" size={20} className="text-success group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Micro-Payouts
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Receive instant FPT rewards for daily activities and achievements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Zap" size={20} className="text-warning group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Platform Incentives
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Earn FPT for community engagement and platform participation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Target" size={20} className="text-neon-purple group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Game Achievements
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Unlock FPT rewards by completing in-game challenges and milestones
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Calendar" size={20} className="text-destructive group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Event Payouts
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Participate in special events and earn exclusive FPT rewards
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-accent/10 flex-shrink-0">
                      <Icon name="Heart" size={20} className="text-accent group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1.5 text-base group-hover:text-accent transition-colors">
                        Community Rewards
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Get rewarded for contributing to the FortisArena community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FPT Economic Model */}
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">FPT Economic Model</h3>
                <p className="text-muted-foreground text-lg">
                  Key metrics and fundamentals of the FPT reward token economy
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Token Symbol
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    FPT
                  </p>
                  <p className="text-xs text-white/50">
                    Fortis Points Token
                  </p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Blockchain
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    BSC, Ethereum and Polygon
                  </p>
                  <p className="text-xs text-white/50">
                    L2 Cross chain Bridge Scaling Solution
                  </p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Token Standard
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    BEP-20
                  </p>
                  <p className="text-xs text-white/50">
                    Compatible with all major wallets
                  </p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Initial Price
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    $0.01 - $0.05
                  </p>
                  <p className="text-xs text-white/50">
                    Low price for frequent distribution
                  </p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Current Price
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    Coming Soon
                  </p>
                  <p className="text-xs text-white/50">
                    Real-time market price
                  </p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      Daily Distribution
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    Coming Soon
                  </p>
                  <p className="text-xs text-white/50">
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
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 bg-gaming-dark relative overflow-hidden">
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
              <button
                className="button w-full sm:w-auto"
              >
                <span>Download Whitepaper</span>
              </button>
              <button
                className="button w-full sm:w-auto"
              >
                <span>View Live Metrics</span>
              </button>
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
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === tab?.id
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
            <button className="button w-full sm:w-auto">
              <span>FRT Soon Available</span>
            </button>
            <button className="button w-full sm:w-auto">
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TokenomicsPage;