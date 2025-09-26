import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DAOGovernance = () => {
  const [activeTab, setActiveTab] = useState('proposals');

  const upcomingFeatures = [
    {
      id: 1,
      title: "Community Voting System",
      description: "Decentralized decision-making where community members vote on platform features, tournaments, and policies.",
      status: "planned",
      timeline: "Q2 2027",
      category: "Governance"
    },
    {
      id: 2,
      title: "FRT Token Staking",
      description: "Stake your FRT tokens to participate in governance and earn rewards while supporting the platform.",
      status: "planned",
      timeline: "Q2 2027",
      category: "Staking"
    },
    {
      id: 3,
      title: "Proposal Submission",
      description: "Community members can submit proposals for new features, tournaments, and platform improvements.",
      status: "planned",
      timeline: "Q3 2027",
      category: "Proposals"
    }
  ];

  const governanceStats = [
    { label: "DAO Launch", value: "Q2 2027", icon: "Calendar" },
    { label: "Community Members", value: "500+", icon: "Users" },
    { label: "Features Planned", value: "12", icon: "FileText" },
    { label: "Development Phase", value: "Alpha", icon: "Code" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'planned': return 'text-electric-blue bg-electric-blue/10';
      case 'development': return 'text-warning bg-warning/10';
      case 'testing': return 'text-neon-purple bg-neon-purple/10';
      case 'launched': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'planned': return 'Calendar';
      case 'development': return 'Code';
      case 'testing': return 'TestTube';
      case 'launched': return 'CheckCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">DAO Governance</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Coming Soon - Decentralized community-driven decision making</p>
        </div>
        <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark w-full sm:w-auto text-sm sm:text-base">
          <Icon name="Bell" size={14} className="sm:w-4 sm:h-4" />
          Get Notified
        </Button>
      </div>
      {/* Governance Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {governanceStats?.map((stat, index) => (
          <div key={index} className="bg-muted rounded-lg p-3 sm:p-4 text-center">
            <Icon name={stat?.icon} size={16} className="text-accent mx-auto mb-2 sm:w-5 sm:h-5" />
            <div className="text-base sm:text-lg font-semibold text-foreground">{stat?.value}</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-4 sm:mb-6 bg-muted rounded-lg p-1 overflow-x-auto scrollbar-hide">
        {[
          { id: 'proposals', label: 'Upcoming Features', icon: 'Calendar' },
          { id: 'history', label: 'Roadmap', icon: 'Map' },
          { id: 'staking', label: 'Learn More', icon: 'BookOpen' }
        ]?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-1 sm:flex-none ${
              activeTab === tab?.id
                ? 'bg-accent text-accent-foreground shadow-gaming'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={tab?.icon} size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{tab?.label}</span>
            <span className="xs:hidden">{tab?.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      {/* Upcoming Features List */}
      {activeTab === 'proposals' && (
        <div className="space-y-3 sm:space-y-4">
          {upcomingFeatures?.map((feature) => (
            <div key={feature?.id} className="border border-border rounded-lg p-4 sm:p-6 hover:shadow-gaming transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{feature?.title}</h3>
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(feature?.status)}`}>
                      <Icon name={getStatusIcon(feature?.status)} size={10} className="sm:w-3 sm:h-3" />
                      <span className="capitalize">{feature?.status}</span>
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">{feature?.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Timeline: {feature?.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Tag" size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>{feature?.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Learn More Section */}
      {activeTab === 'staking' && (
        <div className="text-center py-8 sm:py-12">
          <Icon name="BookOpen" size={40} className="text-golden-cta mx-auto mb-4 sm:w-12 sm:h-12" />
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Learn About DAO Governance</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 px-4 sm:px-0">Understand how decentralized governance will work in FortisArena</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted rounded-lg p-4 text-left">
              <h4 className="font-semibold text-foreground mb-2">Community Voting</h4>
              <p className="text-sm text-muted-foreground">Members vote on platform features, tournaments, and policies</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-left">
              <h4 className="font-semibold text-foreground mb-2">Token Staking</h4>
              <p className="text-sm text-muted-foreground">Stake FRT tokens to participate in governance and earn rewards</p>
            </div>
          </div>
          <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark w-full sm:w-auto text-sm sm:text-base">
            <Icon name="ExternalLink" size={14} className="sm:w-4 sm:h-4" />
            Read Documentation
          </Button>
        </div>
      )}
      {/* Roadmap Section */}
      {activeTab === 'history' && (
        <div className="text-center py-8 sm:py-12">
          <Icon name="Map" size={40} className="text-muted-foreground mx-auto mb-4 sm:w-12 sm:h-12" />
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">DAO Development Roadmap</h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0 mb-6">Our planned timeline for implementing decentralized governance</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-muted rounded-lg p-4">
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Q1 2026</h4>
                <p className="text-sm text-muted-foreground">Community Foundation & Token Launch</p>
              </div>
              <Icon name="Calendar" size={20} className="text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between bg-muted rounded-lg p-4">
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Q2 2027</h4>
                <p className="text-sm text-muted-foreground">DAO Governance System Launch</p>
              </div>
              <Icon name="Clock" size={20} className="text-electric-blue" />
            </div>
            <div className="flex items-center justify-between bg-muted rounded-lg p-4">
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Q3 2027</h4>
                <p className="text-sm text-muted-foreground">Advanced Features & Proposals</p>
              </div>
              <Icon name="Calendar" size={20} className="text-muted-foreground" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DAOGovernance;