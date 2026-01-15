import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

// CSS-based premium orb (no Three.js dependency for better performance)
const PremiumOrb = ({ size = 400, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Main orb with gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(6, 182, 212, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 60%),
            linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)
          `,
          boxShadow: `
            0 0 60px rgba(139, 92, 246, 0.4),
            0 0 120px rgba(6, 182, 212, 0.3),
            0 0 180px rgba(236, 72, 153, 0.2),
            inset 0 0 60px rgba(255, 255, 255, 0.1)
          `,
          backdropFilter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />

      {/* Inner glow layer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '10%',
          background: `
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.5) 0%, transparent 50%)
          `,
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Highlight reflection */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: '15%',
          left: '20%',
          width: '30%',
          height: '20%',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)',
          filter: 'blur(10px)',
          transform: 'rotate(-30deg)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting rings */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{
            border: `1px solid rgba(6, 182, 212, ${0.3 - index * 0.1})`,
            borderRadius: '50%',
            transform: `rotateX(${60 + index * 10}deg) rotateY(${index * 30}deg)`,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20 + index * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floating particles around orb */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = size * 0.6;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: i % 3 === 0 
                ? 'rgba(139, 92, 246, 0.8)' 
                : i % 3 === 1 
                  ? 'rgba(6, 182, 212, 0.8)' 
                  : 'rgba(236, 72, 153, 0.8)',
              boxShadow: `0 0 10px currentColor`,
            }}
            animate={{
              x: [x * 0.8, x, x * 0.8],
              y: [y * 0.8, y, y * 0.8],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        );
      })}

      {/* Center logo/icon placeholder */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div 
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
          }}
        >
          <img
            src="/favicon64.ico"
            alt="FortisArena"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumOrb;
