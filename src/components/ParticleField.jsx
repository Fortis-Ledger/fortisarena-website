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

// Optimized ParticleField - uses CSS animations instead of Framer Motion
const ParticleField = ({ 
  count = 30, 
  className = '',
  colors = ['cyan', 'purple', 'pink'],
  minSize = 2,
  maxSize = 4,
}) => {
  const isMobile = useIsMobile();
  
  // Reduce particles on mobile
  const particleCount = isMobile ? Math.min(count, 10) : count;
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
  }, [particleCount, colors, minSize, maxSize]);

  const colorMap = {
    cyan: 'rgba(6, 182, 212, 0.5)',
    purple: 'rgba(139, 92, 246, 0.5)',
    pink: 'rgba(236, 72, 153, 0.5)',
    white: 'rgba(255, 255, 255, 0.5)',
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <style>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(5px); opacity: 0.6; }
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: colorMap[particle.color],
            animation: `particle-float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Simplified floating shapes - CSS only
export const FloatingShapes = ({ count = 5, className = '' }) => {
  const isMobile = useIsMobile();
  
  // Disable on mobile for performance
  if (isMobile) return null;
  
  const shapes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 25 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <style>{`
        @keyframes shape-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.2; }
        }
      `}</style>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-lg will-change-transform"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            border: '1px solid rgba(139, 92, 246, 0.15)',
            background: 'rgba(139, 92, 246, 0.03)',
            animation: `shape-float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Simplified gradient mesh - static on mobile
export const GradientMesh = ({ className = '' }) => {
  const isMobile = useIsMobile();
  
  // Static gradient on mobile
  if (isMobile) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    );
  }
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <style>{`
        @keyframes gradient-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 25px) scale(1.1); }
        }
        @keyframes gradient-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.15); }
        }
      `}</style>
      
      {/* Primary gradient blobs - CSS animations */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '10%',
          left: '20%',
          animation: 'gradient-move-1 25s ease-in-out infinite',
        }}
      />
      
      <div
        className="absolute w-[400px] h-[400px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '20%',
          right: '10%',
          animation: 'gradient-move-2 30s ease-in-out infinite',
        }}
      />
    </div>
  );
};

// Grid background - static, no animation
export const GridBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Fade edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, black 70%)',
        }}
      />
    </div>
  );
};

export default ParticleField;
