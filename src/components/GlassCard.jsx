import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// 3D Tilt card with glassmorphism
const GlassCard = ({ 
  children, 
  className = '',
  glowColor = 'purple',
  tiltStrength = 10,
  ...props 
}) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColors = {
    purple: 'rgba(139, 92, 246, 0.15)',
    cyan: 'rgba(6, 182, 212, 0.15)',
    pink: 'rgba(236, 72, 153, 0.15)',
    mixed: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {/* Glass background */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
      
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: typeof glowColors[glowColor] === 'string' && glowColors[glowColor].includes('gradient')
            ? glowColors[glowColor]
            : `radial-gradient(circle at center, ${glowColors[glowColor]} 0%, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([latestX, latestY]) => 
              `radial-gradient(circle at ${50 + latestX * 100}% ${50 + latestY * 100}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          ),
        }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

// Feature card with icon
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  color = 'cyan',
  delay = 0,
}) => {
  const colors = {
    cyan: {
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'rgba(6, 182, 212, 0.3)',
      text: 'text-cyan-400',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      glow: 'rgba(168, 85, 247, 0.3)',
      text: 'text-purple-400',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      glow: 'rgba(16, 185, 129, 0.3)',
      text: 'text-green-400',
    },
    orange: {
      gradient: 'from-orange-500 to-amber-500',
      glow: 'rgba(249, 115, 22, 0.3)',
      text: 'text-orange-400',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlassCard className="h-full p-8 group cursor-pointer" glowColor={color}>
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[color].gradient} flex items-center justify-center mb-6`}
          style={{
            boxShadow: `0 0 30px ${colors[color].glow}`,
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            boxShadow: `0 0 50px ${colors[color].glow}`,
          }}
          transition={{ duration: 0.3 }}
        >
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors[color].gradient}`} />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.div>
  );
};

// Stats card with animated border
export const AnimatedBorderCard = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient border */}
      <div 
        className="absolute -inset-[1px] rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
          backgroundSize: '300% 100%',
          animation: 'gradient-border 4s linear infinite',
        }}
      />
      
      {/* Inner content */}
      <div 
        className="relative rounded-2xl p-6"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </div>
  );
};

export default GlassCard;
