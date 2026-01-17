import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCoins = () => {
  const containerRef = useRef();

  const coins = [
    {
      id: 1,
      symbol: '$',
      color: 'from-yellow-400 to-green-500',
      textColor: 'text-pink-500',
      delay: 0,
      duration: 8
    },
    {
      id: 2,
      symbol: '₿',
      color: 'from-pink-500 to-rose-500',
      textColor: 'text-pink-500',
      delay: 2,
      duration: 10
    },
    {
      id: 3,
      symbol: '🍎',
      color: 'from-pink-300 to-orange-400',
      textColor: 'text-orange-500',
      delay: 4,
      duration: 9
    },
    {
      id: 4,
      symbol: 'T',
      color: 'from-purple-600 to-indigo-600',
      textColor: 'text-yellow-400',
      delay: 6,
      duration: 11
    },
    {
      id: 5,
      symbol: 'F',
      color: 'from-cyan-400 to-blue-500',
      textColor: 'text-white',
      delay: 1,
      duration: 7
    },
    {
      id: 6,
      symbol: '⚡',
      color: 'from-yellow-300 to-yellow-500',
      textColor: 'text-orange-600',
      delay: 3,
      duration: 8.5
    },
    {
      id: 7,
      symbol: '🔗',
      color: 'from-green-400 to-emerald-500',
      textColor: 'text-green-500',
      delay: 5,
      duration: 9.5
    },
    {
      id: 8,
      symbol: '💎',
      color: 'from-blue-400 to-purple-500',
      textColor: 'text-blue-500',
      delay: 7,
      duration: 10.5
    }
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-30">

      {/* Animated Coins */}
      {coins.map((coin) => (
        <motion.div
          key={coin.id}
          className="absolute w-16 h-16 rounded-full shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${coin.color.split(' ')[1]}, ${coin.color.split(' ')[3]})`,
            top: '25%',
            right: '-4rem',
            zIndex: 50,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))'
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0.8,
            rotateY: 0,
            opacity: 1
          }}
          animate={{ 
            x: -1200,
            y: [0, -50, 0, 30, 0],
            scale: [0.8, 1.2, 1, 0.9, 1],
            rotateY: [0, 180, 360, 540, 720],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{
            duration: coin.duration,
            delay: coin.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.1, 0.3, 0.8, 1]
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span 
              className={`text-2xl font-bold ${coin.textColor} drop-shadow-lg`}
              style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
            >
              {coin.symbol}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Floating particles around coins */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            top: '25%',
            right: '-2rem',
            zIndex: 30
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0,
            opacity: 1
          }}
          animate={{ 
            x: -1000,
            y: [0, -30, 0, 20, 0],
            scale: [0, 1, 0.5, 1, 0],
            opacity: [0, 1, 0.8, 1, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Wavy ribbon effect */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-full h-32 opacity-20"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#gradient)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Light fixture effect */}
      <div className="absolute top-1/4 left-8 w-24 h-24">
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-purple-300 opacity-50"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedCoins;