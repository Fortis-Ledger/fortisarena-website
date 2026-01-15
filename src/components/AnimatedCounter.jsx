import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2,
  decimals = 0,
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });

  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
};

// Stats card with animated counter
export const StatsCard = ({ 
  icon: Icon, 
  value, 
  suffix = '', 
  prefix = '',
  label, 
  sublabel,
  color = 'cyan',
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div 
        className="relative p-6 rounded-2xl border border-white/10 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${colors[color].glow} 0%, transparent 70%)`,
          }}
        />

        {/* Animated border */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${colors[color].glow}, transparent, ${colors[color].glow})`,
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          {Icon && (
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[color].gradient} flex items-center justify-center mb-4`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                boxShadow: `0 0 20px ${colors[color].glow}`,
              }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          )}

          {/* Value */}
          <div className={`text-3xl sm:text-4xl font-bold ${colors[color].text} mb-2`}>
            <AnimatedCounter 
              value={value} 
              suffix={suffix} 
              prefix={prefix}
              duration={2}
            />
          </div>

          {/* Label */}
          <div className="text-white font-medium mb-1">{label}</div>
          
          {/* Sublabel */}
          {sublabel && (
            <div className="text-gray-400 text-sm">{sublabel}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Compact stats bar (like Cosmos)
export const StatsBar = ({ stats }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-center gap-8 sm:gap-12 py-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix || ''} 
                prefix={stat.prefix || ''}
                duration={2}
              />
            </span>
            {stat.highlight && (
              <span className="text-cyan-400 text-lg font-medium">{stat.highlight}</span>
            )}
          </div>
          <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedCounter;
