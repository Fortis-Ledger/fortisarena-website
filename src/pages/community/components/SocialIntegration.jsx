import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialIntegration = () => {
  const [connectedPlatforms, setConnectedPlatforms] = useState(['discord']);

  const socialPlatforms = [
    {
      id: 'discord',
      name: 'Discord',
      icon: 'MessageSquare',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      members: '47,832',
      status: 'online',
      description: 'Join our main community hub for real-time chat and events',
      url: 'https://discord.com/invite/qTTYxTnK3s'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'Twitter',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      members: '23,456',
      status: 'active',
      description: 'Follow for updates, announcements, and community highlights',
      url: 'https://x.com/fortisarena'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: 'Youtube',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      members: '18,920',
      status: 'active',
      description: 'Watch tutorials, highlights, and community content',
      url: 'https://youtube.com/@fortisarena'
    },
    {
      id: 'twitch',
      name: 'Twitch',
      icon: 'Tv',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      members: '12,340',
      status: 'live',
      description: 'Watch live tournaments and community streams',
      url: '#'
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: 'MessageCircle',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      members: '8,765',
      status: 'active',
      description: 'Discuss strategies, share content, and get community support',
      url: '#'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'Send',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      members: '15,678',
      status: 'active',
      description: 'Get instant updates and participate in community discussions',
      url: 'https://t.me/fortisarena'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      platform: 'discord',
      type: 'message',
      content: "New tournament announced! Registration opens tomorrow 🎮",
      author: "GameMaster_Official",
      timestamp: "2 minutes ago",
      reactions: 47
    },
    {
      id: 2,
      platform: 'twitter',
      type: 'tweet',
      content: "🚀 FortisArena community just hit 50K members! Thank you all for being part of this incredible journey. The future of gaming is decentralized! #FortisArena #Web3Gaming",
      author: "@FortisArena",
      timestamp: "15 minutes ago",
      reactions: 234
    },
    {
      id: 3,
      platform: 'twitch',
      type: 'stream',
      content: "🔴 LIVE: Championship Finals - ShadowStrike vs QuantumGamer",
      author: "FortisArena_Official",
      timestamp: "1 hour ago",
      reactions: 1205
    },
    {
      id: 4,
      platform: 'youtube',
      type: 'video',
      content: "How to Master Advanced Movement Techniques - Pro Player Guide",
      author: "ProCoach_Alex",
      timestamp: "3 hours ago",
      reactions: 892
    }
  ];

  const toggleConnection = (platformId) => {
    setConnectedPlatforms(prev => 
      prev?.includes(platformId) 
        ? prev?.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-success bg-success';
      case 'live': return 'text-red-500 bg-red-500';
      case 'active': return 'text-electric-blue bg-electric-blue';
      default: return 'text-muted-foreground bg-muted-foreground';
    }
  };

  const getPlatformIcon = (platform) => {
    const platformData = socialPlatforms?.find(p => p?.id === platform);
    return platformData ? platformData?.icon : 'MessageSquare';
  };

  return (
    <div className="space-y-6">
      {/* Social Platforms */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Social Hub</h2>
            <p className="text-muted-foreground">Connect with our community across all platforms</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-success font-medium">Live Activity</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialPlatforms?.map((platform) => {
            const isConnected = connectedPlatforms?.includes(platform?.id);
            
            return (
              <div
                key={platform?.id}
                className={`relative p-4 rounded-lg border transition-all hover:shadow-gaming cursor-pointer ${
                  isConnected 
                    ? `${platform?.bgColor} border-current ${platform?.color}` 
                    : 'bg-muted border-border hover:border-accent'
                }`}
                onClick={() => platform?.url && window.open(platform?.url, '_blank')}
              >
                {/* Status Indicator */}
                <div className="absolute top-3 right-3 flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(platform?.status)?.split(' ')?.[1]}`}></div>
                  <span className={`text-xs font-medium ${getStatusColor(platform?.status)?.split(' ')?.[0]}`}>
                    {platform?.status}
                  </span>
                </div>
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${platform?.bgColor}`}>
                    <Icon name={platform?.icon} size={20} className={platform?.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{platform?.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform?.members} members</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{platform?.description}</p>
                <Button
                  variant={isConnected ? "outline" : "default"}
                  size="sm"
                  fullWidth
                  onClick={() => toggleConnection(platform?.id)}
                  className={isConnected ? `${platform?.color} border-current` : ''}
                >
                  <Icon name={isConnected ? "Check" : "Plus"} size={16} />
                  {isConnected ? "Connected" : "Connect"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Live Activity Feed</h2>
            <p className="text-muted-foreground">Latest updates from all our social channels</p>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="RefreshCw" size={16} />
            Refresh
          </Button>
        </div>

        <div className="space-y-4">
          {recentActivity?.map((activity) => {
            const platform = socialPlatforms?.find(p => p?.id === activity?.platform);
            
            return (
              <div
                key={activity?.id}
                className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className={`p-2 rounded-lg ${platform?.bgColor || 'bg-muted'}`}>
                  <Icon name={getPlatformIcon(activity?.platform)} size={16} className={platform?.color || 'text-muted-foreground'} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-foreground">{activity?.author}</span>
                    <span className="text-sm text-muted-foreground">on {platform?.name}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{activity?.timestamp}</span>
                  </div>
                  
                  <p className="text-sm text-foreground mb-2">{activity?.content}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{activity?.reactions}</span>
                    </div>
                    <button className="hover:text-foreground transition-colors">Reply</button>
                    <button className="hover:text-foreground transition-colors">Share</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">
            <Icon name="MoreHorizontal" size={16} />
            Load More Activity
          </Button>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="MessageSquare" size={20} className="mb-2" />
            <span className="text-sm">Join Discord</span>
          </Button>
          
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="Share" size={20} className="mb-2" />
            <span className="text-sm">Share Profile</span>
          </Button>
          
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="Bell" size={20} className="mb-2" />
            <span className="text-sm">Notifications</span>
          </Button>
          
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="Settings" size={20} className="mb-2" />
            <span className="text-sm">Preferences</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialIntegration;