import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityVoting = () => {
  const upcomingFeatures = [
    {
      id: 1,
      title: "Proposal System",
      description: "Community members can submit and vote on platform improvements",
      icon: "FileText",
      status: "planned",
      timeline: "Q1 2028"
    },
    {
      id: 2,
      title: "Voting Power",
      description: "Token-based voting system where FRT and FPT holders have governance rights",
      icon: "Vote",
      status: "planned",
      timeline: "Q1 2028"
    },
    {
      id: 3,
      title: "Treasury Management",
      description: "Community-controlled treasury for platform development and rewards",
      icon: "DollarSign",
      status: "planned",
      timeline: "Q2 2028"
    },
    {
      id: 4,
      title: "Delegation System",
      description: "Delegate voting power to trusted community members",
      icon: "Users",
      status: "planned",
      timeline: "Q2 2028"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-foreground mb-1">DAO Governance</h3>
          <p className="text-sm text-muted-foreground">Coming Soon - Community-driven decision making</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <span>Q1 2028</span>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="text-center py-8">
        <div className="mb-6">
          <Icon name="Vote" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-xl font-bold text-foreground mb-2">Community Governance Coming Soon</h4>
          <p className="text-sm text-muted-foreground px-4">
            We're building a decentralized governance system where community members will have voting power
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {upcomingFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-all"
            >
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Icon name={feature?.icon} size={32} className="text-accent" />
                </div>
                <h5 className="font-semibold text-foreground text-sm mb-2">
                  {feature?.title}
                </h5>
                <p className="text-xs text-muted-foreground mb-3">
                  {feature?.description}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {feature?.timeline}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {feature?.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-lg p-6">
          <h5 className="font-semibold text-foreground mb-2">Prepare for Governance</h5>
          <p className="text-sm text-muted-foreground mb-4">
            Join our community now to be ready when governance launches. Early members will have special privileges.
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent">
              Q1 2028 Launch
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground">
              In Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityVoting;