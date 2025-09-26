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
      members: '500+',
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
      members: '200+',
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
      members: '100+',
      status: 'active',
      description: 'Watch tutorials, highlights, and community content',
      url: 'https://youtube.com/@fortisarena'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'Send',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      members: '300+',
      status: 'active',
      description: 'Get instant updates and participate in community discussions',
      url: 'https://t.me/fortisarena'
    }
  ];

  const recentActivity = [];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      {/* Activity Feed Coming Soon */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center py-8">
          <Icon name="Activity" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Live Activity Feed</h2>
          <p className="text-muted-foreground mb-6">Real-time updates from all our social channels</p>
          
          <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-2">Coming Soon</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We're building a live activity feed that will show real-time updates from Discord, Twitter, YouTube, and Telegram
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent">
                Q2 2026
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground">
                In Development
              </span>
            </div>
          </div>

          <Button variant="outline">
            <Icon name="Bell" size={16} />
            Get Notified When Live
          </Button>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button 
            variant="outline" 
            className="flex-col h-auto py-4"
            onClick={() => window.open('https://discord.com/invite/qTTYxTnK3s', '_blank')}
          >
            <Icon name="MessageSquare" size={20} className="mb-2" />
            <span className="text-sm">Join Discord</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-col h-auto py-4"
            onClick={() => window.open('https://x.com/fortisarena', '_blank')}
          >
            <Icon name="Twitter" size={20} className="mb-2" />
            <span className="text-sm">Follow Twitter</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-col h-auto py-4"
            onClick={() => window.open('https://youtube.com/@fortisarena', '_blank')}
          >
            <Icon name="Youtube" size={20} className="mb-2" />
            <span className="text-sm">Subscribe YouTube</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-col h-auto py-4"
            onClick={() => window.open('https://t.me/fortisarena', '_blank')}
          >
            <Icon name="Send" size={20} className="mb-2" />
            <span className="text-sm">Join Telegram</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialIntegration;