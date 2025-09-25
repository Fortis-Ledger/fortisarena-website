import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Web3Stats = () => {
  const [stats, setStats] = useState({
    totalPlayers: 0,
    activeGames: 0,
    nftTraded: 0,
    totalVolume: 0
  });

  const targetStats = {
    totalPlayers: 125000,
    activeGames: 45,
    nftTraded: 8900,
    totalVolume: 2.4
  };

  // Animate numbers
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          totalPlayers: Math.floor(targetStats.totalPlayers * progress),
          activeGames: Math.floor(targetStats.activeGames * progress),
          nftTraded: Math.floor(targetStats.nftTraded * progress),
          totalVolume: Number((targetStats.totalVolume * progress).toFixed(1))
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  const statItems = [
    {
      label: 'Active Players',
      value: stats.totalPlayers.toLocaleString(),
      icon: '👥',
      color: 'text-electric-blue',
      bgColor: 'from-electric-blue/20 to-electric-blue/5',
      borderColor: 'border-electric-blue/30'
    },
    {
      label: 'Live Games',
      value: stats.activeGames,
      icon: '🎮',
      color: 'text-neon-purple',
      bgColor: 'from-neon-purple/20 to-neon-purple/5',
      borderColor: 'border-neon-purple/30'
    },
    {
      label: 'NFTs Traded',
      value: stats.nftTraded.toLocaleString(),
      icon: '🖼️',
      color: 'text-neon-pink',
      bgColor: 'from-neon-pink/20 to-neon-pink/5',
      borderColor: 'border-neon-pink/30'
    },
    {
      label: 'Volume (ETH)',
      value: `${stats.totalVolume}M`,
      icon: '💰',
      color: 'text-golden-cta',
      bgColor: 'from-golden-cta/20 to-golden-cta/5',
      borderColor: 'border-golden-cta/30'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className={`
            relative p-6 rounded-2xl border-2 ${item.borderColor}
            bg-gradient-to-br ${item.bgColor}
            backdrop-blur-sm glassmorphism-card
            hover:glow-electric transition-all duration-300
            group overflow-hidden
          `}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${item.color.replace('text-', '')} 50%, transparent 70%)`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${item.color.replace('text-', '')} 0%, transparent 70%)`,
              filter: 'blur(20px)'
            }}
          />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              className="text-4xl mb-3"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              {item.icon}
            </motion.div>

            {/* Value */}
            <motion.div
              className={`text-3xl md:text-4xl font-bold ${item.color} mb-2`}
              animate={{
                textShadow: [
                  `0 0 10px ${item.color.replace('text-', '')}`,
                  `0 0 20px ${item.color.replace('text-', '')}`,
                  `0 0 10px ${item.color.replace('text-', '')}`
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {item.value}
            </motion.div>

            {/* Label */}
            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              {item.label}
            </div>

            {/* Animated underline */}
            <motion.div
              className={`h-0.5 bg-gradient-to-r from-transparent via-${item.color.replace('text-', '')} to-transparent mt-2`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2 + 0.5,
                ease: "easeOut"
              }}
            />
          </div>

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${item.color.replace('text-', 'bg-')} rounded-full`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5 + index * 0.3
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Web3Stats;
