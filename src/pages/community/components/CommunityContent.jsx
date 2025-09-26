import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityContent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Content', icon: 'Grid3X3' },
    { id: 'highlights', label: 'Highlights', icon: 'Star' },
    { id: 'artwork', label: 'Artwork', icon: 'Palette' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
    { id: 'tutorials', label: 'Tutorials', icon: 'BookOpen' }
  ];

  const contentItems = [];

  const upcomingFeatures = [
    {
      id: 'highlights',
      title: 'Gaming Highlights',
      description: 'Share your best gaming moments, epic clutches, and tournament plays',
      icon: 'Play',
      status: 'planned',
      timeline: 'Q2 2026'
    },
    {
      id: 'artwork',
      title: 'Community Artwork',
      description: 'Showcase your creative designs, character concepts, and fan art',
      icon: 'Image',
      status: 'planned',
      timeline: 'Q3 2026'
    },
    {
      id: 'achievements',
      title: 'Achievement Showcase',
      description: 'Celebrate milestones, level-ups, and in-game accomplishments',
      icon: 'Award',
      status: 'planned',
      timeline: 'Q2 2026'
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Guides',
      description: 'Share knowledge, tips, and strategies with the community',
      icon: 'BookOpen',
      status: 'planned',
      timeline: 'Q3 2026'
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems?.filter(item => item?.type === activeFilter?.slice(0, -1));

  const getTypeIcon = (type) => {
    switch (type) {
      case 'highlight': return 'Play';
      case 'artwork': return 'Image';
      case 'achievement': return 'Award';
      case 'tutorial': return 'BookOpen';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'highlight': return 'text-electric-blue bg-electric-blue/10';
      case 'artwork': return 'text-neon-purple bg-neon-purple/10';
      case 'achievement': return 'text-golden-cta bg-golden-cta/10';
      case 'tutorial': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Community Showcase</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Amazing content created by our community</p>
        </div>
        <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark w-full sm:w-auto text-sm sm:text-base" disabled>
          <Icon name="Clock" size={14} className="sm:w-4 sm:h-4" />
          Coming Soon
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setActiveFilter(filter?.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeFilter === filter?.id
                ? 'bg-accent text-accent-foreground shadow-gaming'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={filter?.icon} size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{filter?.label}</span>
            <span className="xs:hidden">{filter?.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      {/* Coming Soon Content */}
      <div className="text-center py-8 sm:py-12">
        <div className="mb-6">
          <Icon name="Image" size={48} className="text-muted-foreground mx-auto mb-4 sm:w-16 sm:h-16" />
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Community Showcase Coming Soon</h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            We're building an amazing platform for community content sharing
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {upcomingFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className={`p-4 sm:p-6 rounded-lg border transition-all ${
                activeFilter === feature?.id
                  ? 'bg-accent/10 border-accent/30 shadow-gaming'
                  : 'bg-muted/30 border-border hover:bg-muted/50'
              }`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Icon name={feature?.icon} size={32} className="text-accent sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                  {feature?.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
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
        <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-lg p-4 sm:p-6">
          <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
            Be the First to Share
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Join our community to get early access to content sharing features
          </p>
          <Button 
            variant="glow"
            size="glow-lg"
            className="font-semibold"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
      {/* Learn More */}
      <div className="mt-8 text-center">
        <Button variant="outline">
          <Icon name="Info" size={16} />
          Learn More About Features
        </Button>
      </div>
      {/* Community Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Image" size={24} className="text-neon-purple mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">0</div>
          <div className="text-sm text-muted-foreground">Artworks</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Play" size={24} className="text-electric-blue mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">0</div>
          <div className="text-sm text-muted-foreground">Highlights</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="BookOpen" size={24} className="text-success mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">0</div>
          <div className="text-sm text-muted-foreground">Tutorials</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Award" size={24} className="text-golden-cta mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">0</div>
          <div className="text-sm text-muted-foreground">Achievements</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityContent;