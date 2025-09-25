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
            {/* Token Utility */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Token Utility</h3>
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
            {/* Economic Model */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Economic Model</h3>
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