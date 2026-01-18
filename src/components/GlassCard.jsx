import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

// Simplified Glass card - no 3D tilt on mobile
const GlassCard = ({ 
  children, 
  className = '',
  glowColor = 'purple',
  ...props 
}) => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (isMobile || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const glowColors = {
    purple: 'rgba(139, 92, 246, 0.1)',
    cyan: 'rgba(6, 182, 212, 0.1)',
    pink: 'rgba(236, 72, 153, 0.1)',
    green: 'rgba(16, 185, 129, 0.1)',
    orange: 'rgba(249, 115, 22, 0.1)',
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isMobile ? 'none' : `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -8}deg) rotateY(${(mousePos.x - 0.5) * 8}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      {...props}
    >
      {/* Glass background */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
      
      {/* Hover glow - only on desktop */}
      {!isMobile && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${glowColors[glowColor]} 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Feature card with icon - optimized
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  color = 'cyan',
  delay = 0,
}) => {
  const colors = {
    cyan: { gradient: 'from-cyan-500 to-blue-500', glow: 'rgba(6, 182, 212, 0.3)', text: 'text-cyan-400' },
    purple: { gradient: 'from-purple-500 to-pink-500', glow: 'rgba(168, 85, 247, 0.3)', text: 'text-purple-400' },
    green: { gradient: 'from-green-500 to-emerald-500', glow: 'rgba(16, 185, 129, 0.3)', text: 'text-green-400' },
    orange: { gradient: 'from-orange-500 to-amber-500', glow: 'rgba(249, 115, 22, 0.3)', text: 'text-orange-400' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <GlassCard className="h-full p-6 sm:p-8 group cursor-pointer" glowColor={color}>
        {/* Icon */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${colors[color].gradient} flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-105`}
          style={{ boxShadow: `0 0 20px ${colors[color].glow}` }}
        >
          {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors[color].gradient}`} />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.div>
  );
};

// Stats card with animated border - CSS only
export const AnimatedBorderCard = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <style>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
      
      {/* Animated gradient border */}
      <div 
        className="absolute -inset-[1px] rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
          backgroundSize: '300% 100%',
          animation: 'gradient-border 4s linear infinite',
        }}
      />
      
      {/* Inner content */}
      <div 
        className="relative rounded-2xl p-4 sm:p-6"
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
