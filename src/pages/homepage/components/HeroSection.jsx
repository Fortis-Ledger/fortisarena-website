import React, { memo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();



  // Crypto coins data with 3D SVG assets
  const cryptoCoins = [
    { 
      name: 'Bitcoin', 
      svgPath: '/token/Bitcoin_3D.svg', 
      position: 'top-20 right-20',
      glowColor: 'rgba(249, 115, 22, 0.5)'
    },
    { 
      name: 'Ethereum', 
      svgPath: '/token/Ethereum_3D.svg', 
      position: 'top-20 left-20',
      glowColor: 'rgba(37, 99, 235, 0.5)'
    },
    { 
      name: 'Solana', 
      svgPath: '/token/Solana_3D.svg', 
      position: 'bottom-20 right-20',
      glowColor: 'rgba(147, 51, 234, 0.5)'
    },
    { 
      name: 'Polygon', 
      svgPath: '/token/Polygon_3D.svg', 
      position: 'right-32 top-1/3',
      glowColor: 'rgba(168, 85, 247, 0.5)'
    },
    { 
      name: 'Avalanche', 
      svgPath: '/token/Avalanche_3D.svg', 
      position: 'bottom-20 left-20',
      glowColor: 'rgba(239, 68, 68, 0.5)'
    },
    { 
      name: 'USD Coin', 
      svgPath: '/token/USD Coin_3D.svg', 
      position: 'left-32 bottom-1/3',
      glowColor: 'rgba(59, 130, 246, 0.5)'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Neon glow effects */}
      <div className="absolute inset-0">
        {/* Neon accent glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full shadow-lg shadow-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-40 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Section - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
                style={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">FortisArena</span>
              </motion.h1>

              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                The Next-Gen Web3 eSports Arena
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Compete, Earn, and Govern in the future of decentralized gaming.
              </motion.p>

              <motion.p 
                className="text-base md:text-lg text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Skill-based tournaments, rewards, and a thriving community.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/waitlist')}
              >
                <span>Waitlist</span>
              </motion.button>

              <motion.button
                className="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://tournaments.fortisarena.io', '_blank')}
              >
                <span>Active Tournaments</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Circular Network Visualization */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">


              {/* Orbital Container */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 120,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
              {/* Enhanced Concentric Circles */}
              <motion.div 
                className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 border border-purple-400/25 rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-16 border border-blue-400/20 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.15)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-24 border border-white/15 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              />



                {/* 3D Crypto Coins with SVG Assets */}
                {cryptoCoins.map((coin, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-12 h-12 md:w-16 md:h-16 ${coin.position}`}
                    style={{
                      filter: `drop-shadow(0 0 20px ${coin.glowColor}) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))`,
                      transform: 'perspective(1000px) rotateX(15deg)',
                      transformStyle: 'preserve-3d'
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0,
                      rotateY: 0,
                      z: 0
                    }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      rotateY: [0, 360],
                      y: [0, -10, 0],
                      z: [0, 20, 0],
                      rotate: -360
                    }}
                    transition={{ 
                      scale: {
                        duration: 0.5, 
                        delay: 1.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      },
                      opacity: {
                        duration: 0.5, 
                        delay: 1.2 + index * 0.1
                      },
                      rotateY: {
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      y: {
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      z: {
                        duration: 3 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 120,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      rotateX: 25,
                      rotateZ: 15,
                      filter: `drop-shadow(0 0 30px ${coin.glowColor.replace('0.5', '0.8')}) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4))`,
                      transition: { duration: 0.2 }
                    }}
                    title={coin.name}
                  >
                    <motion.img
                      src={coin.svgPath}
                      alt={coin.name}
                      className="w-full h-full object-contain"
                      animate={{
                        filter: [
                          'brightness(1) saturate(1)',
                          'brightness(1.2) saturate(1.3)',
                          'brightness(1) saturate(1)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Center Stats */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <div className="text-center text-white">
                  <div className="text-6xl md:text-7xl font-bold mb-2">20k+</div>
                  <div className="text-lg md:text-xl font-medium">Gamers</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default memo(HeroSection);