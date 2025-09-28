import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityLeaderboard = () => {
  const [activeCategory, setActiveCategory] = useState('players');
  const navigate = useNavigate();

  const categories = [
    { id: 'players', label: 'Top Players', icon: 'Trophy' },
    { id: 'contributors', label: 'Contributors', icon: 'Heart' },
    { id: 'governance', label: 'Governance', icon: 'Vote' }
  ];

  const leaderboardData = {
    players: [],
    contributors: [],
    governance: []
  };

  const upcomingFeatures = [
    {
      id: 'players',
      title: 'Tournament Leaderboard',
      description: 'Track tournament wins, kill counts, and performance metrics',
      icon: 'Trophy',
      status: 'planned',
      timeline: 'Q2 2026'
    },
    {
      id: 'contributors',
      title: 'Community Points System',
      description: 'Earn points for community contributions, content creation, and helping others',
      icon: 'Heart',
      status: 'planned',
      timeline: 'Q3 2026'
    },
    {
      id: 'governance',
      title: 'DAO Governance Leaderboard',
      description: 'Track voting participation, proposal submissions, and governance engagement',
      icon: 'Vote',
      status: 'planned',
      timeline: 'Q2 2027'
    }
  ];

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
          <Icon name="Clock" size={16} className="text-muted-foreground sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">Coming Soon</span>
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
      {/* Coming Soon Content */}
      <div className="text-center py-8 sm:py-12">
        <div className="mb-6">
          <Icon name="Clock" size={48} className="text-muted-foreground mx-auto mb-4 sm:w-16 sm:h-16" />
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Leaderboard Coming Soon</h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            We're building an amazing leaderboard system to celebrate our community members
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 sm:gap-6 mb-8">
          {upcomingFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className={`p-4 sm:p-6 rounded-lg border transition-all ${
                activeCategory === feature?.id
                  ? 'bg-accent/10 border-accent/30 shadow-gaming'
                  : 'bg-muted/30 border-border hover:bg-muted/50'
              }`}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Icon name={feature?.icon} size={24} className="text-accent sm:w-6 sm:h-6" />
              </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                    {feature?.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    {feature?.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      {feature?.timeline}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      {feature?.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-lg p-4 sm:p-6">
          <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
            Be the First to Know
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Join our community to get early access to leaderboards and exclusive features
          </p>
          <button 
            onClick={() => navigate('/waitlist', { state: { from: '/community' } })}
            className="button text-xs sm:text-sm"
          >
            <span>Join Waitlist</span>
          </button>
        </div>
      </div>
      {/* Learn More Button */}
      <div className="mt-4 sm:mt-6 text-center">
        <button className="text-accent hover:text-accent/80 font-medium text-xs sm:text-sm transition-colors">
          Learn More About Leaderboards →
        </button>
      </div>
    </div>
  );
};

export default CommunityLeaderboard;