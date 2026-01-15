import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100000] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
        boxShadow: '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
      }}
    />
  );
};

export default ScrollProgress;
