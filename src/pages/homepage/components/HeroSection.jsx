import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedTitle, AnimatedWords, GradientText } from '../../../components/AnimatedText';
import PremiumOrb from '../../../components/PremiumOrb';
import ParticleField, { GradientMesh, GridBackground } from '../../../components/ParticleField';
import { StatsBar } from '../../../components/AnimatedCounter';
import { GlowButton, AnimatedBorderButton } from '../../../components/MagneticButton';

const HeroSection = () => {
  const navigate = useNavigate();

  // Stats data
  const stats = useMemo(() => [
    { value: 125, suffix: 'K+', label: 'Active Players' },
    { value: 3, suffix: 'K+', label: 'Tournaments' },
    { value: 15, prefix: '$', suffix: 'M+', label: 'Total Rewards' },
    { value: 850, suffix: '+', label: 'Communities' },
  ], []);

  // Floating crypto coins
  const cryptoCoins = useMemo(() => [
    { name: 'Bitcoin', svgPath: '/token/Bitcoin_3D.svg', x: 85, y: 15, size: 50, delay: 0 },
    { name: 'Ethereum', svgPath: '/token/Ethereum_3D.svg', x: 10, y: 20, size: 45, delay: 0.2 },
    { name: 'Solana', svgPath: '/token/Solana_3D.svg', x: 90, y: 70, size: 40, delay: 0.4 },
    { name: 'Polygon', svgPath: '/token/Polygon_3D.svg', x: 5, y: 65, size: 35, delay: 0.6 },
    { name: 'Avalanche', svgPath: '/token/Avalanche_3D.svg', x: 15, y: 85, size: 30, delay: 0.8 },
    { name: 'USDT', svgPath: '/token/USDT_3D.svg', x: 80, y: 85, size: 35, delay: 1 },
  ], []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        <GridBackground />
        <GradientMesh />
        <ParticleField count={40} colors={['cyan', 'purple', 'pink']} />
      </div>

      {/* Floating crypto coins */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {cryptoCoins.map((coin, index) => (
          <motion.div
            key={coin.name}
            className="absolute"
            style={{
              left: `${coin.x}%`,
              top: `${coin.y}%`,
              width: coin.size,
              height: coin.size,
            }}
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1 + coin.delay,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.img
              src={coin.svgPath}
              alt={coin.name}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
              }}
              animate={{
                y: [-10, 10, -10],
                rotateY: [0, 360],
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateY: {
                  duration: 10 + index * 2,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">Now Live • Join the Revolution</span>
            </motion.div>

            {/* Main title */}
            <div className="space-y-4">
              <AnimatedTitle 
                text="FortisArena"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                delay={0.2}
              />
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium"
              >
                <span className="text-gray-300">The Next-Gen </span>
                <GradientText className="font-bold">Web3 eSports Arena</GradientText>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-3"
            >
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Compete, Earn, and Govern in the future of decentralized gaming.
              </p>
              <p className="text-base text-gray-400 max-w-lg mx-auto lg:mx-0">
                Skill-based tournaments, blockchain rewards, and a thriving community of gamers.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => navigate('/waitlist')}
                className="w-full sm:w-auto"
              >
                <span>Join Waitlist</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </GlowButton>

              <AnimatedBorderButton
                onClick={() => window.open('https://tournaments.fortisarena.io', '_blank')}
                className="w-full sm:w-auto"
              >
                <span>Active Tournaments</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </AnimatedBorderButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fair Play Guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Premium Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <PremiumOrb size={400} className="hidden sm:block" />
            <PremiumOrb size={280} className="sm:hidden" />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="text-center mb-6">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Powering the Gaming Revolution</span>
          </div>
          <StatsBar stats={stats} />
          <div className="text-center mt-4">
            <span className="inline-flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live data • Updated every 5 minutes
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default memo(HeroSection);
