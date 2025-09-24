import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CreatorTools = () => {
  const [activeTab, setActiveTab] = useState('tournament');

  const tools = {
    tournament: [
      {
        id: 1,
        name: "Tournament Builder",
        description: "Create custom tournaments with bracket management, prize pools, and automated payouts.",
        icon: "Trophy",
        features: ["Bracket Generation", "Prize Pool Management", "Automated Payouts", "Live Streaming Integration"],
        status: "Available"
      },
      {
        id: 2,
        name: "Match Scheduler",
        description: "Schedule matches across time zones with automated notifications and reminders.",
        icon: "Calendar",
        features: ["Multi-timezone Support", "Auto Notifications", "Conflict Detection", "Calendar Integration"],
        status: "Available"
      },
      {
        id: 3,
        name: "Prize Distribution",
        description: "Automated prize distribution system with NFT rewards and token payments.",
        icon: "Gift",
        features: ["Smart Contracts", "NFT Rewards", "Token Payments", "Tax Reporting"],
        status: "Beta"
      }
    ],
    content: [
      {
        id: 4,
        name: "Stream Overlay Kit",
        description: "Professional overlay templates with real-time tournament data and branding.",
        icon: "Monitor",
        features: ["Custom Branding", "Real-time Data", "Multi-platform Support", "Interactive Elements"],
        status: "Available"
      },
      {
        id: 5,
        name: "Content Templates",
        description: "Pre-designed templates for social media, thumbnails, and promotional materials.",
        icon: "Image",
        features: ["Social Media Templates", "Thumbnail Generator", "Brand Guidelines", "Asset Library"],
        status: "Available"
      },
      {
        id: 6,
        name: "Analytics Dashboard",
        description: "Comprehensive analytics for audience engagement, revenue tracking, and growth metrics.",
        icon: "BarChart3",
        features: ["Audience Insights", "Revenue Tracking", "Growth Metrics", "Performance Reports"],
        status: "Available"
      }
    ],
    monetization: [
      {
        id: 7,
        name: "Revenue Optimizer",
        description: "AI-powered revenue optimization with dynamic pricing and sponsorship matching.",
        icon: "DollarSign",
        features: ["Dynamic Pricing", "Sponsorship Matching", "Revenue Forecasting", "Payout Automation"],
        status: "Coming Soon"
      },
      {
        id: 8,
        name: "NFT Creator Suite",
        description: "Create and manage NFT collections for tournaments, achievements, and exclusive content.",
        icon: "Hexagon",
        features: ["NFT Minting", "Collection Management", "Marketplace Integration", "Royalty Tracking"],
        status: "Beta"
      },
      {
        id: 9,
        name: "Subscription Manager",
        description: "Manage subscriber tiers, exclusive content, and community access levels.",
        icon: "Crown",
        features: ["Tier Management", "Exclusive Content", "Access Control", "Subscriber Analytics"],
        status: "Available"
      }
    ]
  };

  const tabs = [
    { id: 'tournament', name: 'Tournament Tools', icon: 'Trophy' },
    { id: 'content', name: 'Content Creation', icon: 'Video' },
    { id: 'monetization', name: 'Monetization', icon: 'DollarSign' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'text-green-400 bg-green-400/10';
      case 'Beta': return 'text-yellow-400 bg-yellow-400/10';
      case 'Coming Soon': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Creator
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Toolkit
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and monetize your gaming content and tournaments. Built by creators, for creators.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-card border border-border rounded-xl p-2 inline-flex">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground shadow-gaming'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools?.[activeTab]?.map((tool) => (
            <div
              key={tool?.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={tool?.icon} size={24} className="text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tool?.status)}`}>
                  {tool?.status}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {tool?.name}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {tool?.description}
              </p>

              <div className="space-y-2 mb-6">
                {tool?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tool?.status === 'Available' ? 'default' : 'outline'} 
                fullWidth
                disabled={tool?.status === 'Coming Soon'}
              >
                {tool?.status === 'Available' ? 'Get Started' : 
                 tool?.status === 'Beta' ? 'Join Beta' : 'Coming Soon'}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Need Custom Tools?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our development team can create custom tools and integrations tailored to your specific needs. Let's build something amazing together.
            </p>
            <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
              <Icon name="MessageCircle" size={16} />
              Contact Development Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorTools;