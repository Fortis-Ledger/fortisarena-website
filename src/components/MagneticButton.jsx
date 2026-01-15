import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
  children, 
  className = '', 
  onClick,
  strength = 0.3,
  ...props 
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Premium CTA button with glow
export const GlowButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  onClick,
  ...props 
}) => {
  const variants = {
    primary: {
      bg: 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500',
      glow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)',
      hoverGlow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.3)',
    },
    secondary: {
      bg: 'bg-white/10 border border-white/20',
      glow: '0 0 10px rgba(255, 255, 255, 0.1)',
      hoverGlow: '0 0 20px rgba(255, 255, 255, 0.2)',
    },
    outline: {
      bg: 'bg-transparent border-2 border-cyan-500',
      glow: '0 0 10px rgba(6, 182, 212, 0.2)',
      hoverGlow: '0 0 20px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.1)',
    },
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <MagneticButton
      className={`
        relative overflow-hidden rounded-xl font-semibold text-white
        transition-all duration-300 ease-out
        ${variants[variant].bg}
        ${sizes[size]}
        ${className}
      `}
      onClick={onClick}
      style={{
        boxShadow: variants[variant].glow,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: variants[variant].hoverGlow,
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        }}
        whileHover={{
          opacity: 1,
          x: ['-100%', '100%'],
        }}
        transition={{
          x: { duration: 0.6, ease: 'easeInOut' },
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </MagneticButton>
  );
};

// Animated border button
export const AnimatedBorderButton = ({ 
  children, 
  className = '', 
  onClick,
  ...props 
}) => {
  return (
    <motion.button
      className={`relative group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-xl p-[2px] overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
          backgroundSize: '300% 100%',
          animation: 'gradient-shift 3s linear infinite',
        }}
      >
        <div className="absolute inset-[2px] bg-black rounded-[10px]" />
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold">
        {children}
      </span>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </motion.button>
  );
};

// Ripple button
export const RippleButton = ({ 
  children, 
  className = '', 
  onClick,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
    
    onClick?.(e);
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ width: 0, height: 0, opacity: 0.5, x: 0, y: 0 }}
          animate={{ 
            width: 500, 
            height: 500, 
            opacity: 0,
            x: -250,
            y: -250,
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
      {children}
    </motion.button>
  );
};

export default MagneticButton;
