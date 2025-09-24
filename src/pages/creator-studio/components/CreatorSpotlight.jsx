import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CreatorSpotlight = () => {
  const [activeCreator, setActiveCreator] = useState(0);

  const creators = [
    {
      id: 1,
      name: "Alex \'ThunderStrike\' Chen",
      title: "Tournament Organizer & Streamer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      followers: "45.2K",
      monthlyEarnings: "$8,750",
      specialization: "FPS Tournaments",
      achievements: ["Organized 50+ tournaments", "Generated $250K+ in prizes", "Built community of 45K gamers"],
      quote: "FortisArena transformed my passion into a sustainable business. The tools are incredible and the community support is unmatched.",
      stats: {
        tournaments: 67,
        totalPrizes: "$312K",
        communityGrowth: "+340%"
      },
      socialLinks: {
        twitch: "thunderstrike_gaming",
        youtube: "ThunderStrikeGaming",
        twitter: "thunderstrike_fps"
      }
    },
    {
      id: 2,
      name: "Maria \'QuantumQueen\' Rodriguez",
      title: "Content Creator & Coach",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      followers: "78.5K",
      monthlyEarnings: "$12,400",
      specialization: "Strategy Games",
      achievements: ["Created 200+ educational videos", "Coached 500+ players", "NFT collection sold out in 2 hours"],
      quote: "The monetization tools here are game-changing. I've tripled my income while helping more players improve their skills.",
      stats: {
        students: 847,
        videosCreated: 234,
        nftsSold: 1250
      },
      socialLinks: {
        twitch: "quantumqueen_strategy",
        youtube: "QuantumQueenGaming",
        twitter: "quantum_maria"
      }
    },
    {
      id: 3,
      name: "Jake \'CyberSamurai\' Williams",
      title: "NFT Artist & Tournament Host",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      followers: "32.8K",
      monthlyEarnings: "$15,200",
      specialization: "Fighting Games",
      achievements: ["Sold 5K+ NFTs", "Hosted weekly tournaments", "Collaborated with major brands"],
      quote: "The NFT integration is seamless. I can create, sell, and distribute rewards all in one platform. It's revolutionary.",
      stats: {
        nftCollections: 12,
        weeklyTournaments: 48,
        brandPartnerships: 8
      },
      socialLinks: {
        twitch: "cybersamurai_fights",
        youtube: "CyberSamuraiArts",
        twitter: "cyber_samurai_nft"
      }
    }
  ];

  const currentCreator = creators?.[activeCreator];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Creator
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the creators who are building gaming empires with FortisArena. Their success stories showcase the platform's potential for transforming passion into profit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Creator Cards */}
          <div className="lg:col-span-1 space-y-4">
            {creators?.map((creator, index) => (
              <div
                key={creator?.id}
                onClick={() => setActiveCreator(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeCreator === index
                    ? 'bg-accent/10 border-accent shadow-gaming'
                    : 'bg-card border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={creator?.avatar}
                      alt={creator?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{creator?.name}</h3>
                    <p className="text-sm text-muted-foreground">{creator?.title}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-electric-blue">{creator?.followers} followers</span>
                      <span className="text-xs text-green-400">{creator?.monthlyEarnings}/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Creator Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8 h-full">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={currentCreator?.avatar}
                      alt={currentCreator?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {currentCreator?.name}
                      </h3>
                      <p className="text-muted-foreground">{currentCreator?.title}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm rounded-full">
                          {currentCreator?.specialization}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{currentCreator?.monthlyEarnings}</div>
                    <div className="text-sm text-muted-foreground">Monthly Earnings</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <Icon name="Quote" size={24} className="text-accent mb-3" />
                  <p className="text-foreground italic leading-relaxed">
                    "{currentCreator?.quote}"
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentCreator?.stats)?.map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-xl font-bold text-foreground">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {currentCreator?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Trophy" size={16} className="text-golden-cta flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-3">Connect with {currentCreator?.name?.split(' ')?.[0]}</h4>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Twitch" size={16} />
                      Twitch
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Youtube" size={16} />
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Twitter" size={16} />
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your creator journey today and become the next success story. Our platform provides everything you need to turn your gaming passion into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
              >
                <Icon name="Rocket" size={16} />
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                <Icon name="MessageCircle" size={16} />
                Talk to Creators
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSpotlight;