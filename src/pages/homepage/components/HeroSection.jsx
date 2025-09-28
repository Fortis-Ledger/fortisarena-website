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
      position: 'top-8 right-8 sm:top-20 sm:right-20',
      glowColor: 'rgba(249, 115, 22, 0.5)'
    },
    { 
      name: 'Ethereum', 
      svgPath: '/token/Ethereum_3D.svg', 
      position: 'top-8 left-8 sm:top-20 sm:left-20',
      glowColor: 'rgba(37, 99, 235, 0.5)'
    },
    { 
      name: 'Solana', 
      svgPath: '/token/Solana_3D.svg', 
      position: 'bottom-8 right-8 sm:bottom-20 sm:right-20',
      glowColor: 'rgba(147, 51, 234, 0.5)'
    },
    { 
      name: 'Polygon', 
      svgPath: '/token/Polygon_3D.svg', 
      position: 'right-16 top-1/3 sm:right-32',
      glowColor: 'rgba(168, 85, 247, 0.5)'
    },
    { 
      name: 'Avalanche', 
      svgPath: '/token/Avalanche_3D.svg', 
      position: 'bottom-8 left-8 sm:bottom-20 sm:left-20',
      glowColor: 'rgba(239, 68, 68, 0.5)'
    },
    { 
      name: 'USD Coin', 
      svgPath: '/token/USD Coin_3D.svg', 
      position: 'left-16 bottom-1/3 sm:left-32',
      glowColor: 'rgba(59, 130, 246, 0.5)'
    },
    { 
      name: 'DOT', 
      svgPath: '/token/DOT_3D.svg', 
      position: 'top-1/3 right-8 sm:top-1/3 sm:right-20',
      glowColor: 'rgba(230, 0, 122, 0.5)'
    },
    { 
      name: 'USDT', 
      svgPath: '/token/USDT_3D.svg', 
      position: 'top-1/3 left-8 sm:top-1/3 sm:left-20',
      glowColor: 'rgba(26, 188, 156, 0.5)'
    },
    { 
      name: 'EOS', 
      svgPath: '/token/EOS_3D.svg', 
      position: 'bottom-1/3 right-8 sm:bottom-1/3 sm:right-20',
      glowColor: 'rgba(0, 0, 0, 0.6)'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black pt-12 sm:pt-20">
      {/* Neon glow effects - Optimized */}
      <div className="absolute inset-0">
        {/* Neon accent glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 sm:bg-purple-500/10 rounded-full blur-2xl" style={{ willChange: 'auto' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 sm:bg-cyan-500/10 rounded-full blur-2xl" style={{ willChange: 'auto' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-blue-500/3 sm:bg-blue-500/5 rounded-full blur-2xl" style={{ willChange: 'auto' }}></div>
      </div>

      {/* Floating particles background - Optimized */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 sm:bg-cyan-400/40 rounded-full shadow-lg shadow-cyan-400/10 sm:shadow-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 pt-16 sm:py-20 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Section - Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
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
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200 leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                The Next-Gen Web3 eSports Arena
              </motion.h2>

              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Compete, Earn, and Govern in the future of decentralized gaming.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Skill-based tournaments, rewards, and a thriving community.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-6"
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
            className="relative flex items-center justify-center w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] py-4 sm:py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] mx-auto">


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
                className="absolute inset-0 border border-cyan-400/20 sm:border-2 sm:border-cyan-400/30 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.1), inset 0 0 10px rgba(6, 182, 212, 0.05)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 border border-purple-400/15 sm:border-purple-400/25 rounded-full"
                style={{
                  boxShadow: '0 0 8px rgba(168, 85, 247, 0.1)'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-16 border border-blue-400/10 sm:border-blue-400/20 rounded-full"
                style={{
                  boxShadow: '0 0 5px rgba(59, 130, 246, 0.08)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-24 border border-white/10 sm:border-white/15 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              />



                {/* 3D Crypto Coins with SVG Assets - Optimized */}
                {cryptoCoins.map((coin, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 ${coin.position}`}
                    style={{
                      filter: `drop-shadow(0 0 15px ${coin.glowColor}) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))`,
                      transform: 'perspective(1000px) rotateX(15deg) translateZ(0)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform, opacity'
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0
                    }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      rotateY: [0, 360],
                      y: [0, -5, 0],
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
                        duration: 8 + index * 0.5,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      y: {
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotateX: 20,
                      rotateZ: 10,
                      filter: `drop-shadow(0 0 25px ${coin.glowColor.replace('0.5', '0.7')}) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))`,
                      transition: { duration: 0.2 }
                    }}
                    title={coin.name}
                  >
                    <img
                      src={coin.svgPath}
                      alt={coin.name}
                      className="w-full h-full object-contain"
                      style={{ willChange: 'auto' }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Center FortisArena Token - Optimized */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                    transform: 'perspective(1000px) rotateX(15deg) translateZ(0)',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                  }}
                  animate={{
                    rotateY: [0, 360],
                    y: [0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    rotateY: {
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateX: 20,
                    rotateZ: 10,
                    filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.7)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src="/token/FortisArena_3D.svg"
                    alt="FortisArena Token"
                    className="w-full h-full object-contain"
                    style={{ willChange: 'auto' }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default memo(HeroSection);