import React, { memo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import useLazyLoad from '../../../hooks/useLazyLoad';

// Lazy load heavy components
const LazyWeb3Stats = lazy(() => import('../../../components/Web3Stats'));

const HeroSection = () => {
  const [ref, isLoaded] = useLazyLoad();
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden bg-black">
      <section 
        ref={ref}
        className="pt-48 pb-20 bg-black sm:pt-56 md:pt-60 lg:pt-64 sm:pb-24 will-change-transform relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 neural-network opacity-30"></div>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)]?.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
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
        
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="px-4 sm:px-6 mb-6 sm:mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white font-heading mb-2">
                FortisArena
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary font-heading">
                The Future of Competitive Gaming
              </h2>
            </div>
            
            {/* Tagline */}
            <p className="px-4 sm:px-6 text-lg sm:text-xl md:text-2xl text-white font-medium mb-12 sm:mb-16">
              Play on your terms. Earn real rewards. Govern the future.
            </p>

            {/* CTA Buttons */}
            <div className="px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 sm:mb-20">
              <Button
                variant="glow"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto sm:min-w-48"
                iconName="Play"
                iconPosition="left"
                onClick={() => window.open('https://tournaments.fortisarena.io', '_blank')}
              >
                Live Tournaments
              </Button>

              <Button
                variant="glow-accent"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto sm:min-w-48"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => navigate('/waitlist')}
              >
                Join Arena
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
              {/* Skill-based Tournaments */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Skill-based Tournaments</h3>
              </div>

              {/* NFT Rewards */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">NFT Rewards</h3>
              </div>

              {/* Player-Owned Economy */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.37V22h2v-6h2.5l2.5 6h2l-2.5-6H12v6h2v-6h2.5l2.5 6h2l-2.5-6H20v6h2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Player-Owned Economy</h3>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default memo(HeroSection);