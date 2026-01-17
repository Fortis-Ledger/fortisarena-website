import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CommunityMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 'asia',
      name: 'Asia',
      members: 1000,
      growth: '+5%',
      coordinates: { lat: 34.0479, lng: 100.6197 },
      color: 'text-golden-cta',
      bgColor: 'bg-golden-cta/10'
    },
    {
      id: 'europe',
      name: 'Europe',
      members: 0,
      growth: '0%',
      coordinates: { lat: 54.5260, lng: 15.2551 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      id: 'north-america',
      name: 'North America',
      members: 0,
      growth: '0%',
      coordinates: { lat: 39.8283, lng: -98.5795 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      id: 'south-america',
      name: 'South America',
      members: 0,
      growth: '0%',
      coordinates: { lat: -8.7832, lng: -55.4915 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      id: 'africa',
      name: 'Africa',
      members: 0,
      growth: '0%',
      coordinates: { lat: 25.0000, lng: 100.0000 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      id: 'oceania',
      name: 'Oceania',
      members: 0,
      growth: '0%',
      coordinates: { lat: -25.2744, lng: 133.7751 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      members: 0,
      growth: '0%',
      coordinates: { lat: 25.0000, lng: 45.0000 },
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    }
  ];

  const totalMembers = regions?.reduce((sum, region) => sum + region?.members, 0);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Global Community</h2>
          <p className="text-muted-foreground">Our community spans across {regions?.length} major regions</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">1,000+</div>
          <div className="text-sm text-muted-foreground">Total Members</div>
        </div>
      </div>
      {/* Interactive Map */}
      <div className="relative bg-gaming-dark rounded-lg p-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 neural-network opacity-30"></div>
        
        {/* Map Container */}
        <div className="relative h-64 bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="FortisArena Global Community Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=20,0&z=2&output=embed"
            className="rounded-lg opacity-60"
          />
          
          {/* Overlay with community markers */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Icon name="Globe" size={48} className="text-electric-blue mx-auto mb-2" />
              <h3 className="text-xl font-bold mb-1">Global Gaming Community</h3>
              <p className="text-sm opacity-80">Connected across continents</p>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions?.map((region) => (
          <div
            key={region?.id}
            onClick={() => setSelectedRegion(region?.id === selectedRegion ? null : region?.id)}
            className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-gaming ${
              selectedRegion === region?.id
                ? `${region?.bgColor} border-current ${region?.color}`
                : 'bg-muted border-border hover:border-accent'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className={region?.color} />
                <h3 className="font-semibold text-foreground">{region?.name}</h3>
              </div>
              <div className="flex items-center space-x-1 text-sm text-success">
                <Icon name="TrendingUp" size={14} />
                <span>{region?.growth}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Members</span>
                <span className="font-semibold text-foreground">
                  {region?.members > 0 ? `${region?.members?.toLocaleString()}+` : '0'}
                </span>
              </div>
              
              {selectedRegion === region?.id && (
                <div className="pt-2 border-t border-border space-y-2 animate-in slide-in-from-top-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Active Today</span>
                    <span className="text-foreground">{region?.members > 0 ? Math.floor(region?.members * 0.15)?.toLocaleString() : '0'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tournaments</span>
                    <span className="text-foreground">{region?.members > 0 ? Math.floor(region?.members / 100) : '0'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Avg. Level</span>
                    <span className="text-foreground">{region?.members > 0 ? Math.floor(Math.random() * 50) + 25 : '0'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Community Highlights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Users" size={24} className="text-electric-blue mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">1,000+</div>
          <div className="text-sm text-muted-foreground">Discord Members</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="MessageSquare" size={24} className="text-neon-purple mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">2.5K</div>
          <div className="text-sm text-muted-foreground">Messages Today</div>
        </div>
        
        <div className="text-center p-4 bg-muted rounded-lg">
          <Icon name="Zap" size={24} className="text-golden-cta mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">65%</div>
          <div className="text-sm text-muted-foreground">Active Rate</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMap;