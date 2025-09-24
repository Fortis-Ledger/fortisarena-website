import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CreatorHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-network opacity-30"></div>
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full px-4 py-2">
                <Icon name="Video" size={16} className="text-electric-blue" />
                <span className="text-sm font-medium text-electric-blue">Creator Studio</span>
              </div>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build Your Gaming
                <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
                  Empire
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your passion into profit. Create tournaments, build communities, and monetize your content with cutting-edge Web3 tools designed for the next generation of gaming creators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse"
              >
                <Icon name="Rocket" size={20} />
                Start Creating
              </Button>
              <Button variant="outline" size="lg" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10">
                <Icon name="Play" size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2.5K+</div>
                <div className="text-sm text-gray-400">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$1.2M+</div>
                <div className="text-sm text-gray-400">Creator Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15K+</div>
                <div className="text-sm text-gray-400">Tournaments Created</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 gaming-glow">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Creator Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingUp" size={20} className="text-green-400" />
                      <span className="text-white">Monthly Earnings</span>
                    </div>
                    <span className="text-golden-cta font-semibold">$4,250</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={20} className="text-electric-blue" />
                      <span className="text-white">Community Size</span>
                    </div>
                    <span className="text-electric-blue font-semibold">12.5K</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Trophy" size={20} className="text-neon-purple" />
                      <span className="text-white">Tournaments</span>
                    </div>
                    <span className="text-neon-purple font-semibold">23</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Icon name="Zap" size={16} className="text-golden-cta" />
                    <span>Next payout in 3 days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-golden-cta to-orange-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorHero;