import React from 'react';
import { motion } from 'framer-motion';

// Fade up reveal
export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Fade in from sides
export const FadeIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) => {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Scale up reveal
export const ScaleUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Blur reveal
export const BlurReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Staggered children reveal
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax wrapper
export const Parallax = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      style={{
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal line by line
export const TextReveal = ({
  text,
  className = '',
  delay = 0,
  once = true,
}) => {
  const lines = text.split('\n');

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            variants={{
              hidden: { y: '100%' },
              visible: {
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: delay + index * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }
              }
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

// Clip path reveal
export const ClipReveal = ({
  children,
  delay = 0,
  duration = 1,
  className = '',
  direction = 'up',
  once = true,
}) => {
  const clipPaths = {
    up: {
      initial: 'inset(100% 0 0 0)',
      animate: 'inset(0 0 0 0)',
    },
    down: {
      initial: 'inset(0 0 100% 0)',
      animate: 'inset(0 0 0 0)',
    },
    left: {
      initial: 'inset(0 100% 0 0)',
      animate: 'inset(0 0 0 0)',
    },
    right: {
      initial: 'inset(0 0 0 100%)',
      animate: 'inset(0 0 0 0)',
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipPaths[direction].initial }}
      whileInView={{ clipPath: clipPaths[direction].animate }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
