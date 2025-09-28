import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { AnimatedShinyText } from '../../../components/ui/AnimatedShinyText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gaming-dark">
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
          <div className="group rounded-full border border-white/10 bg-white/5 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10 mb-6 inline-block">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-300 hover:duration-300">
              <Icon name="Zap" size={16} className="text-electric-blue mr-2" />
              <span>Revolution Manifesto</span>
            </AnimatedShinyText>
          </div>
          
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Gaming
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Liberation
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Where players aren't just participants but owners of their digital destiny. 
            The intersection of cutting-edge technology and gaming passion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-0"
        >
          <button 
            className="button w-full sm:w-auto"
          >
            <span>Experience the Vision</span>
          </button>
          
          <button 
            className="button w-full sm:w-auto"
          >
            <span>Read Manifesto</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;