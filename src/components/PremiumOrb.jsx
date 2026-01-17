import React, { useMemo, useEffect, useState } from 'react';

// Check if mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

// Solar System Style Token Orbit - Optimized for Performance
const PremiumOrb = ({ size = 400, className = '' }) => {
  const isMobile = useIsMobile();
  
  // Smaller size on mobile
  const actualSize = isMobile ? Math.min(size, 280) : size;
  
  // Generate random start angles for each token (only once on mount)
  const randomStartAngles = useMemo(() => {
    return Array.from({ length: 6 }, () => Math.random() * 360);
  }, []);

  // Token data - fewer tokens on mobile
  const allTokens = [
    { name: 'Ethereum', image: '/token/Ethereum_3D.svg', orbitRadius: 0.30, duration: 14, size: 34, color: '#627EEA' },
    { name: 'Solana', image: '/token/Solana_3D.svg', orbitRadius: 0.38, duration: 18, size: 30, color: '#00FFA3' },
    { name: 'Polygon', image: '/token/Polygon_3D.svg', orbitRadius: 0.46, duration: 22, size: 28, color: '#8247E5' },
    { name: 'Avalanche', image: '/token/Avalanche_3D.svg', orbitRadius: 0.54, duration: 26, size: 26, color: '#E84142' },
    { name: 'USDT', image: '/token/USDT_3D.svg', orbitRadius: 0.62, duration: 30, size: 24, color: '#26A17B' },
    { name: 'DOT', image: '/token/DOT_3D.svg', orbitRadius: 0.70, duration: 34, size: 22, color: '#E6007A' },
  ];
  
  // Show fewer tokens on mobile
  const tokens = isMobile ? allTokens.slice(0, 4) : allTokens;

  // Generate unique keyframe names for each token
  const keyframes = useMemo(() => {
    return tokens.map((token, index) => {
      const startAngle = randomStartAngles[index];
      return `
        @keyframes orbit-${index} {
          from { transform: rotate(${startAngle}deg); }
          to { transform: rotate(${startAngle + 360}deg); }
        }
        @keyframes counter-orbit-${index} {
          from { transform: rotate(${-startAngle}deg); }
          to { transform: rotate(${-startAngle - 360}deg); }
        }
      `;
    }).join('\n');
  }, [tokens, randomStartAngles]);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: actualSize, height: actualSize }}
    >
      <style>{keyframes}</style>
      <style>{`
        @keyframes center-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 50px rgba(139, 92, 246, 0.7), 0 0 80px rgba(6, 182, 212, 0.5); }
        }
        @keyframes token-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>

      {/* Orbital paths - subtle rings */}
      {tokens.map((token, index) => (
        <div
          key={`orbit-${index}`}
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: actualSize * token.orbitRadius * 2,
            height: actualSize * token.orbitRadius * 2,
            marginTop: -actualSize * token.orbitRadius,
            marginLeft: -actualSize * token.orbitRadius,
            border: '1px solid',
            borderColor: `rgba(139, 92, 246, ${0.12 - index * 0.015})`,
          }}
        />
      ))}

      {/* Center - FortisArena Token */}
      <div
        className="absolute rounded-full flex items-center justify-center overflow-hidden will-change-transform"
        style={{
          top: '50%',
          left: '50%',
          width: actualSize * 0.18,
          height: actualSize * 0.18,
          marginTop: -actualSize * 0.09,
          marginLeft: -actualSize * 0.09,
          animation: 'center-pulse 3s ease-in-out infinite',
        }}
      >
        <img
          src="/token/FortisArena_3D.svg"
          alt="FortisArena"
          className="w-full h-full object-cover"
          style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }}
        />
      </div>

      {/* Orbiting Tokens - CSS animations */}
      {tokens.map((token, index) => {
        const orbitRadius = actualSize * token.orbitRadius;
        const tokenSize = isMobile ? token.size * 0.85 : token.size;
        
        return (
          <div
            key={token.name}
            className="absolute will-change-transform"
            style={{
              top: '50%',
              left: '50%',
              width: tokenSize,
              height: tokenSize,
              marginTop: -tokenSize / 2,
              marginLeft: -tokenSize / 2,
              animation: `orbit-${index} ${token.duration}s linear infinite`,
            }}
          >
            {/* Token positioned at orbit radius */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: tokenSize,
                height: tokenSize,
                left: orbitRadius,
                top: 0,
                marginLeft: -tokenSize / 2,
                marginTop: -tokenSize / 2,
                animation: `counter-orbit-${index} ${token.duration}s linear infinite`,
              }}
            >
              {/* Token glow - simplified */}
              {!isMobile && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${token.color}25 0%, transparent 70%)`,
                    filter: 'blur(4px)',
                    transform: 'scale(1.2)',
                  }}
                />
              )}
              
              {/* Token image */}
              <img
                src={token.image}
                alt={token.name}
                className="w-full h-full object-contain relative z-10"
                style={{
                  filter: `drop-shadow(0 0 3px ${token.color}50)`,
                  animation: isMobile ? 'none' : `token-pulse 2.5s ease-in-out infinite ${index * 0.4}s`,
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Subtle particle dust - only on desktop */}
      {!isMobile && Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = actualSize * (0.25 + (i % 3) * 0.12);
        const particleSize = 1.5 + (i % 2);
        
        return (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: particleSize,
              height: particleSize,
              left: '50%',
              top: '50%',
              marginLeft: Math.cos(angle) * radius - particleSize / 2,
              marginTop: Math.sin(angle) * radius - particleSize / 2,
              background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)',
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

export default PremiumOrb;
