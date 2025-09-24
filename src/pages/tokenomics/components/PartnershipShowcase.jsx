import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipShowcase = () => {
  const strategicPartners = [
    {
      id: 1,
      name: 'Polygon',
      type: 'Blockchain Infrastructure',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop&crop=center',
      description: 'Layer 2 scaling solution providing fast and low-cost transactions',
      status: 'Active',
      integration: 'Smart Contracts & Payments',
      website: 'https://polygon.technology'
    },
    {
      id: 2,
      name: 'Chainlink',
      type: 'Oracle Network',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center',
      description: 'Decentralized oracle network for secure off-chain data',
      status: 'Active',
      integration: 'Price Feeds & Random Numbers',
      website: 'https://chain.link'
    },
    {
      id: 3,
      name: 'The Graph',
      type: 'Data Indexing',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      description: 'Indexing protocol for querying blockchain data',
      status: 'Integration',
      integration: 'Tournament Data & Analytics',
      website: 'https://thegraph.com'
    },
    {
      id: 4,
      name: 'Immutable X',
      type: 'NFT Infrastructure',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=60&fit=crop&crop=center',
      description: 'Layer 2 solution for NFTs with zero gas fees',
      status: 'Planned',
      integration: 'Gaming NFTs & Rewards',
      website: 'https://immutable.com'
    }
  ];

  const gamingPartners = [
    {
      id: 1,
      name: 'Unity Technologies',
      category: 'Game Engine',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=80&h=80&fit=crop&crop=center',
      description: 'Leading game development platform'
    },
    {
      id: 2,
      name: 'Epic Games',
      category: 'Game Distribution',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=80&h=80&fit=crop&crop=center',
      description: 'Unreal Engine and Epic Games Store'
    },
    {
      id: 3,
      name: 'Twitch',
      category: 'Streaming Platform',
      logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&crop=center',
      description: 'Live streaming integration'
    },
    {
      id: 4,
      name: 'Discord',
      category: 'Community Platform',
      logo: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=80&h=80&fit=crop&crop=center',
      description: 'Community management and communication'
    },
    {
      id: 5,
      name: 'Steam',
      category: 'Game Distribution',
      logo: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=80&h=80&fit=crop&crop=center',
      description: 'PC gaming platform integration'
    },
    {
      id: 6,
      name: 'NVIDIA',
      category: 'Hardware Partner',
      logo: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=80&h=80&fit=crop&crop=center',
      description: 'GeForce gaming hardware'
    }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'text-success bg-success/10 border-success/20';
      case 'integration':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'planned':
        return 'text-muted-foreground bg-muted/10 border-border';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Strategic Blockchain Partners */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Strategic Blockchain Partners</h3>
          <p className="text-muted-foreground">
            Leading Web3 infrastructure providers powering FortisArena
          </p>
        </div>

        <div className="space-y-6">
          {strategicPartners?.map((partner) => (
            <div
              key={partner?.id}
              className="border border-border rounded-lg p-6 hover:shadow-gaming transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={partner?.logo}
                      alt={partner?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{partner?.name}</h4>
                    <p className="text-sm text-accent font-medium">{partner?.type}</p>
                  </div>
                </div>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(partner?.status)}`}>
                  {partner?.status}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{partner?.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Integration:</span>
                  <span className="text-sm text-muted-foreground">{partner?.integration}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-accent hover:text-accent/80 cursor-pointer">
                  <span>Learn More</span>
                  <Icon name="ExternalLink" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Gaming Ecosystem Partners */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Gaming Ecosystem Partners</h3>
          <p className="text-muted-foreground">
            Collaborating with industry leaders to enhance the gaming experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {gamingPartners?.map((partner) => (
            <div
              key={partner?.id}
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden mx-auto mb-3 group-hover:shadow-gaming transition-all duration-300">
                <Image
                  src={partner?.logo}
                  alt={partner?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h5 className="font-semibold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">
                {partner?.name}
              </h5>
              <p className="text-xs text-muted-foreground mb-2">{partner?.category}</p>
              <p className="text-xs text-muted-foreground">{partner?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Partnership Benefits */}
      <div className="bg-gradient-to-r from-accent/5 to-neon-purple/5 border border-accent/20 rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Partnership Benefits</h3>
          <p className="text-muted-foreground">
            Strategic alliances that strengthen the FortisArena ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Enhanced Performance</h4>
            <p className="text-sm text-muted-foreground">
              Leveraging cutting-edge infrastructure for optimal gaming performance
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} className="text-neon-purple" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Security & Trust</h4>
            <p className="text-sm text-muted-foreground">
              Industry-leading security standards and audit practices
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-golden-cta/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-golden-cta" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Community Growth</h4>
            <p className="text-sm text-muted-foreground">
              Access to established gaming communities and distribution channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipShowcase;