import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TokenMetrics from './components/TokenMetrics';
import TokenDistribution from './components/TokenDistribution';
import StakingCalculator from './components/StakingCalculator';
import VestingSchedule from './components/VestingSchedule';
import SecurityAudits from './components/SecurityAudits';
import PartnershipShowcase from './components/PartnershipShowcase';

const TokenomicsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Token Overview', icon: 'Coins' },
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
      value: 'Polygon',
      description: 'Layer 2 Ethereum scaling solution'
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
      value: '$0.50',
      description: 'Real-time market price'
    },
    {
      label: 'All-Time High',
      value: '$0.75',
      description: 'Peak price achieved'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <TokenMetrics />
            {/* Token Utility */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Token Utility</h3>
                <p className="text-muted-foreground">
                  FRT powers the entire FortisArena ecosystem with multiple use cases
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tokenUtilities?.map((utility) => (
                  <div
                    key={utility?.id}
                    className="border border-border rounded-lg p-4 hover:shadow-gaming transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon 
                          name={utility?.icon} 
                          size={20} 
                          className={`${utility?.color} group-hover:text-accent transition-colors`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {utility?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {utility?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Economic Model */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Economic Model</h3>
                <p className="text-muted-foreground">
                  Key metrics and fundamentals of the FRT token economy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {economicMetrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">
                        {metric?.label}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-foreground mb-1">
                      {metric?.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {metric?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'distribution':
        return <TokenDistribution />;
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 neural-network opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Coins" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">FRT Token Economy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tokenomics
              <span className="block text-accent">Built for Gaming</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the economic model powering the future of decentralized gaming. 
              FRT tokens drive tournaments, governance, and rewards in the FortisArena ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="default"
                size="lg"
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse"
                iconName="Download"
                iconPosition="left"
              >
                Download Whitepaper
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                iconName="BarChart3"
                iconPosition="left"
              >
                View Live Metrics
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto py-4">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground shadow-gaming'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="Wallet"
              iconPosition="left"
            >
              Buy FRT Tokens
            </Button>
            <Button 
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gaming-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">FortisArena</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing gaming through blockchain technology
            </p>
            <p className="text-sm text-gray-500">
              © {new Date()?.getFullYear()} FortisArena. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TokenomicsPage;