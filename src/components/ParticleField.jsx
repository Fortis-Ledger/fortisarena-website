import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleField = ({ 
  count = 50, 
  className = '',
  colors = ['cyan', 'purple', 'pink'],
  minSize = 2,
  maxSize = 6,
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, [count, colors, minSize, maxSize]);

  const colorMap = {
    cyan: {
      bg: 'rgba(6, 182, 212, 0.6)',
      glow: 'rgba(6, 182, 212, 0.4)',
    },
    purple: {
      bg: 'rgba(139, 92, 246, 0.6)',
      glow: 'rgba(139, 92, 246, 0.4)',
    },
    pink: {
      bg: 'rgba(236, 72, 153, 0.6)',
      glow: 'rgba(236, 72, 153, 0.4)',
    },
    white: {
      bg: 'rgba(255, 255, 255, 0.6)',
      glow: 'rgba(255, 255, 255, 0.4)',
    },
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: colorMap[particle.color].bg,
            boxShadow: `0 0 ${particle.size * 2}px ${colorMap[particle.color].glow}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Floating geometric shapes
export const FloatingShapes = ({ count = 8, className = '' }) => {
  const shapes = useMemo(() => {
    const shapeTypes = ['circle', 'square', 'triangle', 'hexagon'];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      rotation: Math.random() * 360,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, [count]);

  const getShapeStyle = (type, size) => {
    const base = {
      width: size,
      height: size,
      border: '1px solid rgba(139, 92, 246, 0.2)',
      background: 'rgba(139, 92, 246, 0.05)',
      backdropFilter: 'blur(5px)',
    };

    switch (type) {
      case 'circle':
        return { ...base, borderRadius: '50%' };
      case 'square':
        return { ...base, borderRadius: '8px' };
      case 'hexagon':
        return { 
          ...base, 
          borderRadius: '8px',
          transform: 'rotate(30deg)',
        };
      default:
        return base;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            ...getShapeStyle(shape.type, shape.size),
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Gradient mesh background
export const GradientMesh = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Primary gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '10%',
          left: '20%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '20%',
          right: '10%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// Grid background
export const GridBackground = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
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
