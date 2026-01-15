import React from 'react';
import { motion } from 'framer-motion';

// Partner/Chain logos data
const partners = [
  {
    name: 'Polygon',
    logo: '/token/Polygon_3D.svg',
    color: '#8247E5'
  },
  {
    name: 'Ethereum',
    logo: '/token/Ethereum_3D.svg',
    color: '#627EEA'
  },
  {
    name: 'Solana',
    logo: '/token/Solana_3D.svg',
    color: '#00FFA3'
  },
  {
    name: 'Avalanche',
    logo: '/token/Avalanche_3D.svg',
    color: '#E84142'
  },
  {
    name: 'BNB Chain',
    logo: '/token/BNB_3D.png',
    color: '#F0B90B',
    scale: 0.75 // Smaller size for BNB
  },
  {
    name: 'USDT',
    logo: '/token/USDT_3D.svg',
    color: '#26A17B'
  },
  {
    name: 'USD Coin',
    logo: '/token/USD Coin_3D.svg',
    color: '#2775CA'
  },
  {
    name: 'Polkadot',
    logo: '/token/DOT_3D.svg',
    color: '#E6007A'
  },
];

const LogoMarquee = ({ speed = 30, className = '' }) => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex items-center gap-8 sm:gap-12 md:gap-16"
        animate={{
          x: [0, -50 * partners.length * 2],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{
          width: 'fit-content',
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center gap-3 sm:gap-4 flex-shrink-0 group cursor-pointer"
          >
            {/* Logo */}
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))',
                  width: partner.scale ? `${partner.scale * 100}%` : '100%',
                  height: partner.scale ? `${partner.scale * 100}%` : '100%',
                }}
              />
            </div>
            
            {/* Name */}
            <span 
              className="text-sm sm:text-base md:text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {partner.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
