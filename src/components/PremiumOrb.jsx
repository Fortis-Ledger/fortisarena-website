import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Solar System Style Token Orbit - Clean & Attractive
const PremiumOrb = ({ size = 400, className = '' }) => {
  
  // Generate random start angles for each token (only once on mount)
  const randomStartAngles = useMemo(() => {
    return Array.from({ length: 6 }, () => Math.random() * 360);
  }, []);

  // Token data with orbital properties - using available tokens
  const tokens = [
    { 
      name: 'Ethereum', 
      image: '/token/Ethereum_3D.svg', 
      orbitRadius: 0.30, 
      duration: 14, 
      size: 34,
      color: '#627EEA'
    },
    { 
      name: 'Solana', 
      image: '/token/Solana_3D.svg', 
      orbitRadius: 0.38, 
      duration: 18, 
      size: 30,
      color: '#00FFA3'
    },
    { 
      name: 'Polygon', 
      image: '/token/Polygon_3D.svg', 
      orbitRadius: 0.46, 
      duration: 22, 
      size: 28,
      color: '#8247E5'
    },
    { 
      name: 'Avalanche', 
      image: '/token/Avalanche_3D.svg', 
      orbitRadius: 0.54, 
      duration: 26, 
      size: 26,
      color: '#E84142'
    },
    { 
      name: 'USDT', 
      image: '/token/USDT_3D.svg', 
      orbitRadius: 0.62, 
      duration: 30, 
      size: 24,
      color: '#26A17B'
    },
    { 
      name: 'DOT', 
      image: '/token/DOT_3D.svg', 
      orbitRadius: 0.70, 
      duration: 34, 
      size: 22,
      color: '#E6007A'
    },
  ];

  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        width: size, 
        height: size,
      }}
    >
      {/* Orbital paths - subtle rings */}
      {tokens.map((token, index) => (
        <div
          key={`orbit-${index}`}
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: size * token.orbitRadius * 2,
            height: size * token.orbitRadius * 2,
            marginTop: -size * token.orbitRadius,
            marginLeft: -size * token.orbitRadius,
            border: '1px solid',
            borderColor: `rgba(139, 92, 246, ${0.12 - index * 0.015})`,
          }}
        />
      ))}

      {/* Center - FortisArena Token (Round Circle) */}
      <motion.div
        className="absolute rounded-full flex items-center justify-center overflow-hidden"
        style={{
          top: '50%',
          left: '50%',
          width: size * 0.18,
          height: size * 0.18,
          marginTop: -size * 0.09,
          marginLeft: -size * 0.09,
          boxShadow: `
            0 0 30px rgba(139, 92, 246, 0.5),
            0 0 60px rgba(6, 182, 212, 0.3)
          `,
        }}
        animate={{
          boxShadow: [
            '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
            '0 0 50px rgba(139, 92, 246, 0.7), 0 0 80px rgba(6, 182, 212, 0.5)',
            '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* FortisArena Token Image - Round */}
        <img
          src="/token/FortisArena_3D.svg"
          alt="FortisArena"
          className="w-full h-full object-cover"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))',
          }}
        />
      </motion.div>

      {/* Orbiting Tokens - Random start positions */}
      {tokens.map((token, index) => {
        const orbitRadius = size * token.orbitRadius;
        const startAngle = randomStartAngles[index];
        
        return (
          <motion.div
            key={token.name}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              width: token.size,
              height: token.size,
              marginTop: -token.size / 2,
              marginLeft: -token.size / 2,
            }}
            initial={{
              rotate: startAngle,
            }}
            animate={{
              rotate: [startAngle, startAngle + 360],
            }}
            transition={{
              duration: token.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Token positioned at orbit radius */}
            <motion.div
              className="absolute flex items-center justify-center"
              style={{
                width: token.size,
                height: token.size,
                left: orbitRadius,
                top: 0,
                marginLeft: -token.size / 2,
                marginTop: -token.size / 2,
              }}
              initial={{
                rotate: -startAngle,
              }}
              animate={{
                rotate: [-startAngle, -startAngle - 360], // Counter-rotate to keep token upright
              }}
              transition={{
                duration: token.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Token glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${token.color}30 0%, transparent 70%)`,
                  filter: 'blur(6px)',
                  transform: 'scale(1.3)',
                }}
              />
              
              {/* Token image */}
              <motion.img
                src={token.image}
                alt={token.name}
                className="w-full h-full object-contain relative z-10"
                style={{
                  filter: `drop-shadow(0 0 4px ${token.color}60)`,
                }}
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.4,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Subtle particle dust */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = size * (0.25 + (i % 5) * 0.1);
        const particleSize = 1.5 + (i % 3);
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: particleSize,
              height: particleSize,
              left: '50%',
              top: '50%',
              marginLeft: -particleSize / 2,
              marginTop: -particleSize / 2,
              background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.5)' : 'rgba(6, 182, 212, 0.5)',
            }}
            animate={{
              x: [
                Math.cos(angle) * radius * 0.9,
                Math.cos(angle + Math.PI * 2) * radius,
                Math.cos(angle) * radius * 0.9,
              ],
              y: [
                Math.sin(angle) * radius * 0.9,
                Math.sin(angle + Math.PI * 2) * radius,
                Math.sin(angle) * radius * 0.9,
              ],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 0.8,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

export default PremiumOrb;
