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

  const contentItems = [
    {
      id: 1,
      type: 'highlight',
      title: "Epic 1v5 Clutch in Championship Finals",
      author: "ShadowStrike_99",
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?w=300&h=200&fit=crop",
      views: "45.2K",
      likes: "3.8K",
      comments: "892",
      timeAgo: "2 hours ago",
      tags: ["Championship", "Clutch", "Pro Play"]
    },
    {
      id: 2,
      type: 'artwork',
      title: "FortisArena Cyberpunk Arena Concept",
      author: "DigitalArtist_Maya",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=300&h=200&fit=crop",
      views: "28.7K",
      likes: "5.2K",
      comments: "456",
      timeAgo: "5 hours ago",
      tags: ["Concept Art", "Cyberpunk", "Arena Design"]
    },
    {
      id: 3,
      type: 'achievement',
      title: "First Player to Reach Level 100!",
      author: "QuantumGamer",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?w=300&h=200&fit=crop",
      views: "67.1K",
      likes: "8.9K",
      comments: "1.2K",
      timeAgo: "1 day ago",
      tags: ["Milestone", "Level 100", "First"]
    },
    {
      id: 4,
      type: 'tutorial',
      title: "Advanced Movement Techniques Guide",
      author: "ProCoach_Alex",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=300&h=200&fit=crop",
      views: "34.5K",
      likes: "4.1K",
      comments: "678",
      timeAgo: "3 days ago",
      tags: ["Tutorial", "Movement", "Pro Tips"]
    },
    {
      id: 5,
      type: 'highlight',
      title: "Community Tournament Highlights Reel",
      author: "EventHighlights",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?w=300&h=200&fit=crop",
      views: "89.3K",
      likes: "12.4K",
      comments: "2.1K",
      timeAgo: "1 week ago",
      tags: ["Tournament", "Highlights", "Community"]
    },
    {
      id: 6,
      type: 'artwork',
      title: "Character Skin Design Contest Winner",
      author: "CreativeDesigner_Sam",
      authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=300&h=200&fit=crop",
      views: "52.8K",
      likes: "7.3K",
      comments: "934",
      timeAgo: "1 week ago",
      tags: ["Contest Winner", "Character Design", "Skin"]
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
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Showcase</h2>
          <p className="text-muted-foreground">Amazing content created by our community</p>
        </div>
        <Button variant="default" className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark">
          <Icon name="Upload" size={16} />
          Share Content
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => setActiveFilter(filter?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter?.id
                ? 'bg-accent text-accent-foreground shadow-gaming'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={filter?.icon} size={16} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent?.map((item) => (
          <div
            key={item?.id}
            className="group bg-muted rounded-xl overflow-hidden hover:shadow-gaming transition-all duration-300 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Type Badge */}
              <div className={`absolute top-3 left-3 inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item?.type)}`}>
                <Icon name={getTypeIcon(item?.type)} size={12} />
                <span className="capitalize">{item?.type}</span>
              </div>

              {/* Play Button for Videos */}
              {item?.type === 'highlight' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={20} className="text-gaming-dark ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                {item?.title}
              </h3>

              {/* Author */}
              <div className="flex items-center space-x-2 mb-3">
                <Image
                  src={item?.authorAvatar}
                  alt={item?.author}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-muted-foreground">{item?.author}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{item?.timeAgo}</span>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={14} />
                  <span>{item?.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>{item?.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={14} />
                  <span>{item?.comments}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {item?.tags?.slice(0, 2)?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-background rounded text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
                {item?.tags?.length > 2 && (
                  <span className="px-2 py-1 bg-background rounded text-xs text-muted-foreground">
                    +{item?.tags?.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline">
          <Icon name="MoreHorizontal" size={16} />
          Load More Content
        </Button>
      </div>
      {/* Community Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Image" size={24} className="text-neon-purple mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">1,247</div>
          <div className="text-sm text-muted-foreground">Artworks</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Play" size={24} className="text-electric-blue mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">3,892</div>
          <div className="text-sm text-muted-foreground">Highlights</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="BookOpen" size={24} className="text-success mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">567</div>
          <div className="text-sm text-muted-foreground">Tutorials</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Award" size={24} className="text-golden-cta mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">2,134</div>
          <div className="text-sm text-muted-foreground">Achievements</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityContent;