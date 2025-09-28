import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { RainbowButton } from '../../../components/ui/RainbowButton';
import { AnimatedShinyText } from '../../../components/ui/AnimatedShinyText';

const CreatorHero = () => {
  return (
    <section className="relative min-h-screen bg-gaming-dark overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-network opacity-30"></div>
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div 
                className="group rounded-full border border-white/10 bg-white/5 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-neutral-300 hover:duration-300">
                  <Icon name="Video" size={14} className="text-electric-blue mr-2" />
                  <span>Creator Studio</span>
                </AnimatedShinyText>
              </motion.div>
              
              <motion.h1 
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Build Your Gaming
                <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
                  Empire
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your passion into profit. Create tournaments, build communities, and monetize your content with cutting-edge Web3 tools designed for the next generation of gaming creators.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button className="button w-full sm:w-auto">
                <span>Creator Studio Soon</span>
              </button>
              <button className="button w-full sm:w-auto">
                <span>Beta Testing Soon</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">00.0</div>
                <div className="text-xs sm:text-sm text-gray-400">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">$00.0</div>
                <div className="text-xs sm:text-sm text-gray-400">Creator Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">00.0</div>
                <div className="text-xs sm:text-sm text-gray-400">Tournaments Created</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 gaming-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Creator Dashboard</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
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
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-golden-cta to-orange-500 rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreatorHero;