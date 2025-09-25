import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityLeaderboard = () => {
  const [activeCategory, setActiveCategory] = useState('players');

  const categories = [
    { id: 'players', label: 'Top Players', icon: 'Trophy' },
    { id: 'contributors', label: 'Contributors', icon: 'Heart' },
    { id: 'governance', label: 'Governance', icon: 'Vote' }
  ];

  const leaderboardData = {
    players: [
      {
        rank: 1,
        name: "ShadowStrike_99",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        score: "2,847",
        metric: "Tournament Wins",
        badge: "Champion",
        badgeColor: "text-golden-cta bg-golden-cta/10"
      },
      {
        rank: 2,
        name: "QuantumGamer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        score: "2,634",
        metric: "Tournament Wins",
        badge: "Elite",
        badgeColor: "text-electric-blue bg-electric-blue/10"
      },
      {
        rank: 3,
        name: "NeonAssassin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        score: "2,421",
        metric: "Tournament Wins",
        badge: "Pro",
        badgeColor: "text-neon-purple bg-neon-purple/10"
      },
      {
        rank: 4,
        name: "CyberWarrior",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        score: "2,198",
        metric: "Tournament Wins",
        badge: "Expert",
        badgeColor: "text-success bg-success/10"
      },
      {
        rank: 5,
        name: "PixelMaster",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        score: "1,987",
        metric: "Tournament Wins",
        badge: "Veteran",
        badgeColor: "text-warning bg-warning/10"
      }
    ],
    contributors: [
      {
        rank: 1,
        name: "CommunityBuilder_Alex",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
        score: "15,420",
        metric: "Community Points",
        badge: "Ambassador",
        badgeColor: "text-golden-cta bg-golden-cta/10"
      },
      {
        rank: 2,
        name: "ContentCreator_Sarah",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
        score: "12,890",
        metric: "Community Points",
        badge: "Creator",
        badgeColor: "text-electric-blue bg-electric-blue/10"
      },
      {
        rank: 3,
        name: "ModeratorMike",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
        score: "11,567",
        metric: "Community Points",
        badge: "Moderator",
        badgeColor: "text-neon-purple bg-neon-purple/10"
      },
      {
        rank: 4,
        name: "EventOrganizer_Lisa",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
        score: "9,234",
        metric: "Community Points",
        badge: "Organizer",
        badgeColor: "text-success bg-success/10"
      },
      {
        rank: 5,
        name: "TutorialMaster",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
        score: "8,901",
        metric: "Community Points",
        badge: "Educator",
        badgeColor: "text-warning bg-warning/10"
      }
    ],
    governance: [
      {
        rank: 1,
        name: "DAOChampion",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
        score: "847",
        metric: "Proposals Voted",
        badge: "Governor",
        badgeColor: "text-golden-cta bg-golden-cta/10"
      },
      {
        rank: 2,
        name: "VotingExpert",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face",
        score: "623",
        metric: "Proposals Voted",
        badge: "Delegate",
        badgeColor: "text-electric-blue bg-electric-blue/10"
      },
      {
        rank: 3,
        name: "ProposalKing",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=40&h=40&fit=crop&crop=face",
        score: "456",
        metric: "Proposals Voted",
        badge: "Proposer",
        badgeColor: "text-neon-purple bg-neon-purple/10"
      },
      {
        rank: 4,
        name: "GovernanceGuru",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face",
        score: "389",
        metric: "Proposals Voted",
        badge: "Advisor",
        badgeColor: "text-success bg-success/10"
      },
      {
        rank: 5,
        name: "CommunityVoice",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        score: "312",
        metric: "Proposals Voted",
        badge: "Voter",
        badgeColor: "text-warning bg-warning/10"
      }
    ]
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return { icon: 'Crown', color: 'text-golden-cta' };
      case 2: return { icon: 'Medal', color: 'text-gray-400' };
      case 3: return { icon: 'Award', color: 'text-amber-600' };
      default: return { icon: 'Hash', color: 'text-muted-foreground' };
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Community Leaderboard</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Celebrating our top community members</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" size={16} className="text-success sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm text-success font-medium">Live Rankings</span>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex space-x-1 mb-4 sm:mb-6 bg-muted rounded-lg p-1 overflow-x-auto scrollbar-hide">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-1 sm:flex-none ${
              activeCategory === category?.id
                ? 'bg-accent text-accent-foreground shadow-gaming'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={category?.icon} size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{category?.label}</span>
            <span className="xs:hidden">{category?.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      {/* Leaderboard List */}
      <div className="space-y-2 sm:space-y-3">
        {leaderboardData?.[activeCategory]?.map((member) => {
          const rankIcon = getRankIcon(member?.rank);
          
          return (
            <div
              key={member?.rank}
              className={`flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-lg border transition-all hover:shadow-gaming ${
                member?.rank <= 3 
                  ? 'bg-gradient-to-r from-muted/50 to-transparent border-accent/20' :'bg-muted/30 border-border'
              }`}
            >
              {/* Rank */}
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                {member?.rank <= 3 ? (
                  <Icon name={rankIcon?.icon} size={16} className={`${rankIcon?.color} sm:w-5 sm:h-5`} />
                ) : (
                  <span className="text-sm sm:text-lg font-bold text-muted-foreground">#{member?.rank}</span>
                )}
              </div>
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <Image
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                {member?.rank === 1 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-golden-cta rounded-full flex items-center justify-center">
                    <Icon name="Star" size={8} className="text-gaming-dark sm:w-2.5 sm:h-2.5" />
                  </div>
                )}
              </div>
              {/* Member Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{member?.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${member?.badgeColor} w-fit`}>
                    {member?.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{member?.metric}</p>
              </div>
              {/* Score */}
              <div className="text-right flex-shrink-0">
                <div className="text-lg sm:text-xl font-bold text-foreground">{member?.score}</div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
              {/* Trend Arrow */}
              <div className="flex items-center flex-shrink-0">
                <Icon 
                  name={member?.rank <= 3 ? "TrendingUp" : "Minus"} 
                  size={14} 
                  className={`${member?.rank <= 3 ? "text-success" : "text-muted-foreground"} sm:w-4 sm:h-4`} 
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* View All Button */}
      <div className="mt-4 sm:mt-6 text-center">
        <button className="text-accent hover:text-accent/80 font-medium text-xs sm:text-sm transition-colors">
          View Full Leaderboard →
        </button>
      </div>
    </div>
  );
};

export default CommunityLeaderboard;