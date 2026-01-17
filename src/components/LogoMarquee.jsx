import React from 'react';

// Partner/Chain logos data
const partners = [
  { name: 'Polygon', logo: '/token/Polygon_3D.svg', color: '#8247E5' },
  { name: 'Ethereum', logo: '/token/Ethereum_3D.svg', color: '#627EEA' },
  { name: 'Solana', logo: '/token/Solana_3D.svg', color: '#00FFA3' },
  { name: 'Avalanche', logo: '/token/Avalanche_3D.svg', color: '#E84142' },
  { name: 'BNB Chain', logo: '/token/BNB_3D.png', color: '#F0B90B', scale: 0.75 },
  { name: 'USDT', logo: '/token/USDT_3D.svg', color: '#26A17B' },
  { name: 'USD Coin', logo: '/token/USD Coin_3D.svg', color: '#2775CA' },
  { name: 'Polkadot', logo: '/token/DOT_3D.svg', color: '#E6007A' },
];

const LogoMarquee = ({ speed = 30, className = '' }) => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll ${speed}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container - CSS animation */}
      <div
        className="marquee-track flex items-center gap-6 sm:gap-10 md:gap-14 will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group cursor-pointer"
          >
            {/* Logo */}
            <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain"
                loading="lazy"
                style={{
                  width: partner.scale ? `${partner.scale * 100}%` : '100%',
                  height: partner.scale ? `${partner.scale * 100}%` : '100%',
                }}
              />
            </div>
            
            {/* Name */}
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-400 whitespace-nowrap">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
