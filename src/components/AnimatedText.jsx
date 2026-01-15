import React, { useState, useEffect } from 'react';
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

// Simplified character reveal - simpler on mobile
export const AnimatedTitle = ({ text, className = '', delay = 0 }) => {
  const isMobile = useIsMobile();
  
  // On mobile, just fade in the whole text
  if (isMobile) {
    return (
      <motion.h1
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{
          textShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
        }}
      >
        {text}
      </motion.h1>
    );
  }
  
  const characters = text.split('');
  
  return (
    <motion.h1
      className={`${className} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.025,
            ease: 'easeOut',
          }}
          style={{
            textShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Word by word reveal - simplified
export const AnimatedWords = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.08,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

// Gradient text - CSS animation instead of JS
export const GradientText = ({ children, className = '', animate = true }) => {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text-animated {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
      `}</style>
      <span
        className={`bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${animate ? 'gradient-text-animated' : ''} ${className}`}
      >
        {children}
      </span>
    </>
  );
};

// Typewriter effect - optimized
export const TypewriterText = ({ text, className = '', speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span
        className={`inline-block w-0.5 h-[1em] bg-cyan-400 ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
      />
    </span>
  );
};

// Glowing text - CSS only
export const GlowingText = ({ children, className = '', color = 'cyan' }) => {
  const colors = {
    cyan: { text: 'text-cyan-400', shadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)' },
    purple: { text: 'text-purple-400', shadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)' },
    pink: { text: 'text-pink-400', shadow: '0 0 10px rgba(236, 72, 153, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)' },
  };

  return (
    <span
      className={`${colors[color].text} ${className}`}
      style={{ textShadow: colors[color].shadow }}
    >
      {children}
    </span>
  );
};

export default AnimatedTitle;
