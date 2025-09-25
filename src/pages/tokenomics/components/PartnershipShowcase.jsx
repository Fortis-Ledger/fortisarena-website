import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipShowcase = () => {
  const plannedPartnerships = [
    {
      id: 1,
      name: 'Blockchain Infrastructure',
      type: 'Web3 Partners',
      description: 'Leading blockchain networks and scaling solutions',
      icon: 'Zap',
      status: 'In Discussion'
    },
    {
      id: 2,
      name: 'Gaming Studios',
      type: 'Content Partners',
      description: 'Established game developers and publishers',
      icon: 'Gamepad2',
      status: 'In Discussion'
    },
    {
      id: 3,
      name: 'Esports Organizations',
      type: 'Competitive Gaming',
      description: 'Professional esports teams and tournaments',
      icon: 'Trophy',
      status: 'In Discussion'
    },
    {
      id: 4,
      name: 'Streaming Platforms',
      type: 'Content Distribution',
      description: 'Live streaming and content creation platforms',
      icon: 'Video',
      status: 'In Discussion'
    },
    {
      id: 5,
      name: 'Technology Partners',
      type: 'Infrastructure',
      description: 'Cloud services and development tools',
      icon: 'Server',
      status: 'In Discussion'
    },
    {
      id: 6,
      name: 'Community Platforms',
      type: 'Social Integration',
      description: 'Social media and community management tools',
      icon: 'Users',
      status: 'In Discussion'
    }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'in discussion':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'planned':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'active':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Partnership Commitment */}
      <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Handshake" size={40} className="text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Partnerships Coming Soon</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            FortisArena is actively building strategic partnerships with industry leaders to enhance our platform capabilities, 
            expand our ecosystem, and provide the best possible experience for our gaming community.
          </p>
          
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We are currently in discussions with potential partners across various sectors:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {plannedPartnerships?.map((partnership) => (
              <div
                key={partnership?.id}
                className="bg-background/50 border border-border rounded-lg p-6 text-center hover:shadow-gaming transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={partnership?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{partnership?.name}</h4>
                <p className="text-sm text-accent font-medium mb-2">{partnership?.type}</p>
                <p className="text-sm text-muted-foreground mb-4">{partnership?.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(partnership?.status)}`}>
                  {partnership?.status}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-background/50 border border-border rounded-lg p-6 mb-6">
            <p className="text-base text-foreground leading-relaxed">
              Our partnership strategy focuses on creating mutually beneficial relationships that drive innovation, 
              expand our user base, and strengthen the FortisArena ecosystem. We are committed to working with 
              partners who share our vision of revolutionizing gaming through blockchain technology.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-accent bg-accent/10 px-4 py-2 rounded-full">
              <Icon name="Clock" size={20} />
              <span className="font-medium">Stay tuned for partnership announcements as we progress towards launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-gradient-to-r from-accent/5 to-purple-500/5 border border-accent/20 rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Partnership Benefits</h3>
          <p className="text-muted-foreground">
            Strategic alliances that will strengthen the FortisArena ecosystem
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
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} className="text-purple-500" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Security & Trust</h4>
            <p className="text-sm text-muted-foreground">
              Industry-leading security standards and audit practices
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-accent" />
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