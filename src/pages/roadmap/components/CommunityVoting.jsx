import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityVoting = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);

  const proposals = [
    {
      id: 1,
      title: "Mobile App Development Priority",
      description: "Should we prioritize iOS or Android development for the mobile app launch?",
      options: [
        { id: 'ios', label: 'iOS First', votes: 1247, percentage: 62 },
        { id: 'android', label: 'Android First', votes: 763, percentage: 38 }
      ],
      totalVotes: 2010,
      timeLeft: "5 days",
      status: "active"
    },
    {
      id: 2,
      title: "Tournament Format Enhancement",
      description: "Which tournament format should we implement next?",
      options: [
        { id: 'battle-royale', label: 'Battle Royale', votes: 892, percentage: 45 },
        { id: 'team-based', label: 'Team-based Leagues', votes: 678, percentage: 34 },
        { id: 'solo-ranked', label: 'Solo Ranked', votes: 420, percentage: 21 }
      ],
      totalVotes: 1990,
      timeLeft: "12 days",
      status: "active"
    },
    {
      id: 3,
      title: "Reward Token Distribution",
      description: "How should we distribute bonus rewards for early adopters?",
      options: [
        { id: 'performance', label: 'Performance Based', votes: 1456, percentage: 73 },
        { id: 'participation', label: 'Participation Based', votes: 544, percentage: 27 }
      ],
      totalVotes: 2000,
      timeLeft: "Ended",
      status: "completed"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-foreground mb-1">Community Governance</h3>
          <p className="text-sm text-muted-foreground">Vote on roadmap priorities and shape the future</p>
        </div>
        <Button variant="outline" size="sm" iconName="Vote" iconPosition="left">
          View All Proposals
        </Button>
      </div>
      <div className="space-y-6">
        {proposals?.map((proposal) => (
          <div key={proposal?.id} className="border border-border rounded-lg p-4 hover:shadow-gaming transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{proposal?.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{proposal?.description}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="Users" size={12} />
                    <span>{proposal?.totalVotes?.toLocaleString()} votes</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{proposal?.timeLeft}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    proposal?.status === 'active' ?'bg-success/10 text-success' :'bg-muted text-muted-foreground'
                  }`}>
                    {proposal?.status?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {proposal?.options?.map((option) => (
                <div key={option?.id} className="flex items-center justify-between p-2 rounded bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-foreground">{option?.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {option?.votes?.toLocaleString()} votes
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-background rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${option?.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-accent w-10 text-right">
                      {option?.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {proposal?.status === 'active' && (
              <div className="mt-3 pt-3 border-t border-border">
                <Button variant="outline" size="sm" fullWidth>
                  Cast Your Vote
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityVoting;