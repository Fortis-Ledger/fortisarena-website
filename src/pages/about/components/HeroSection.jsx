import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 neural-network opacity-30"></div>
      {/* Floating Particles */}
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <Icon name="Zap" size={20} className="text-electric-blue" />
            <span className="text-white font-medium">Revolution Manifesto</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Gaming
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Liberation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where players aren't just participants but owners of their digital destiny. 
            The intersection of cutting-edge technology and gaming passion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button 
            variant="default" 
            size="lg"
            className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse"
          >
            <Icon name="Play" size={20} />
            Experience the Vision
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            <Icon name="FileText" size={20} />
            Read Manifesto
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Discover the Revolution</span>
            <Icon name="ChevronDown" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;