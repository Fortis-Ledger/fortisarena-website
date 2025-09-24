import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DAOGovernance = () => {
  const [activeTab, setActiveTab] = useState('proposals');

  const proposals = [
    {
      id: 1,
      title: "Implement Cross-Chain Tournament Support",
      description: "Enable tournaments across multiple blockchain networks to increase accessibility and participation.",
      status: "active",
      votesFor: 15420,
      votesAgainst: 3210,
      totalVotes: 18630,
      timeLeft: "2 days",
      proposer: "GameMaster_Alex",
      proposerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Reduce Tournament Entry Fees by 25%",
      description: "Lower barriers to entry for new players while maintaining prize pool sustainability through increased participation.",
      status: "passed",
      votesFor: 22100,
      votesAgainst: 8900,
      totalVotes: 31000,
      timeLeft: "Passed",
      proposer: "CommunityLead_Sarah",
      proposerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Launch Creator Incentive Program",
      description: "Allocate 5% of platform revenue to reward content creators and community builders.",
      status: "draft",
      votesFor: 0,
      votesAgainst: 0,
      totalVotes: 0,
      timeLeft: "Draft",
      proposer: "DevTeam_Marcus",
      proposerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const governanceStats = [
    { label: "Total FRT Staked", value: "12.4M FRT", icon: "Coins" },
    { label: "Active Voters", value: "8,234", icon: "Vote" },
    { label: "Proposals This Month", value: "15", icon: "FileText" },
    { label: "Participation Rate", value: "67%", icon: "TrendingUp" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-electric-blue bg-electric-blue/10';
      case 'passed': return 'text-success bg-success/10';
      case 'draft': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'Clock';
      case 'passed': return 'CheckCircle';
      case 'draft': return 'Edit';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">DAO Governance</h2>
          <p className="text-muted-foreground">Shape the future of FortisArena through community voting</p>
        </div>
        <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark">
          <Icon name="Plus" size={16} />
          New Proposal
        </Button>
      </div>
      {/* Governance Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {governanceStats?.map((stat, index) => (
          <div key={index} className="bg-muted rounded-lg p-4 text-center">
            <Icon name={stat?.icon} size={20} className="text-accent mx-auto mb-2" />
            <div className="text-lg font-semibold text-foreground">{stat?.value}</div>
            <div className="text-sm text-muted-foreground">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        {[
          { id: 'proposals', label: 'Active Proposals', icon: 'Vote' },
          { id: 'history', label: 'Voting History', icon: 'History' },
          { id: 'staking', label: 'Stake FRT', icon: 'Coins' }
        ]?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab?.id
                ? 'bg-white text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Proposals List */}
      {activeTab === 'proposals' && (
        <div className="space-y-4">
          {proposals?.map((proposal) => (
            <div key={proposal?.id} className="border border-border rounded-lg p-6 hover:shadow-gaming transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{proposal?.title}</h3>
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal?.status)}`}>
                      <Icon name={getStatusIcon(proposal?.status)} size={12} />
                      <span className="capitalize">{proposal?.status}</span>
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{proposal?.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <img
                        src={proposal?.proposerAvatar}
                        alt={proposal?.proposer}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>by {proposal?.proposer}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{proposal?.timeLeft}</span>
                    </div>
                  </div>
                </div>
              </div>

              {proposal?.status === 'active' && (
                <div className="space-y-4">
                  {/* Voting Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-success">For: {proposal?.votesFor?.toLocaleString()}</span>
                      <span className="text-destructive">Against: {proposal?.votesAgainst?.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-success h-2 rounded-full transition-all"
                        style={{ width: `${(proposal?.votesFor / proposal?.totalVotes) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      {proposal?.totalVotes?.toLocaleString()} total votes
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1 text-success border-success hover:bg-success/10">
                      <Icon name="ThumbsUp" size={16} />
                      Vote For
                    </Button>
                    <Button variant="outline" className="flex-1 text-destructive border-destructive hover:bg-destructive/10">
                      <Icon name="ThumbsDown" size={16} />
                      Vote Against
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Staking Interface */}
      {activeTab === 'staking' && (
        <div className="text-center py-12">
          <Icon name="Coins" size={48} className="text-golden-cta mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Stake FRT Tokens</h3>
          <p className="text-muted-foreground mb-6">Stake your FRT tokens to participate in governance and earn rewards</p>
          <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark">
            Connect Wallet to Stake
          </Button>
        </div>
      )}
      {/* Voting History */}
      {activeTab === 'history' && (
        <div className="text-center py-12">
          <Icon name="History" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Voting History</h3>
          <p className="text-muted-foreground">Your voting history will appear here once you participate in governance</p>
        </div>
      )}
    </div>
  );
};

export default DAOGovernance;