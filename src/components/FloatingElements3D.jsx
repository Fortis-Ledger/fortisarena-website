import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingElements3D = () => {
  const containerRef = useRef(null);

  // 3D floating elements data
  const elements = [
    {
      id: 1,
      type: 'cube',
      size: 'w-8 h-8',
      color: 'border-electric-blue/40',
      position: { x: 10, y: 20 },
      animation: {
        rotate: [0, 360, 0],
        scale: [1, 1.2, 1],
        y: [0, -20, 0]
      },
      duration: 6
    },
    {
      id: 2,
      type: 'sphere',
      size: 'w-6 h-6',
      color: 'border-neon-purple/50',
      position: { x: 85, y: 15 },
      animation: {
        rotate: [0, -180, 0],
        scale: [1, 0.8, 1],
        y: [0, 15, 0]
      },
      duration: 8
    },
    {
      id: 3,
      type: 'pyramid',
      size: 'w-10 h-10',
      color: 'border-neon-pink/30',
      position: { x: 15, y: 70 },
      animation: {
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 0.9, 1.1, 1],
        y: [0, -10, 5, -5, 0]
      },
      duration: 10
    },
    {
      id: 4,
      type: 'hexagon',
      size: 'w-7 h-7',
      color: 'border-cyber-orange/40',
      position: { x: 80, y: 75 },
      animation: {
        rotate: [0, 120, 240, 360],
        scale: [1, 1.3, 0.7, 1],
        x: [0, 10, -5, 0]
      },
      duration: 7
    },
    {
      id: 5,
      type: 'diamond',
      size: 'w-5 h-5',
      color: 'border-matrix-green/60',
      position: { x: 50, y: 10 },
      animation: {
        rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
        scale: [1, 1.4, 0.6, 1.2, 0.8, 1.1, 0.9, 1.3, 1],
        y: [0, -15, 8, -12, 5, -8, 12, -5, 0]
      },
      duration: 12
    },
    {
      id: 6,
      type: 'triangle',
      size: 'w-9 h-9',
      color: 'border-golden-cta/35',
      position: { x: 5, y: 50 },
      animation: {
        rotate: [0, 60, 120, 180, 240, 300, 360],
        scale: [1, 0.9, 1.1, 0.8, 1.2, 0.7, 1],
        x: [0, 8, -3, 6, -4, 7, 0]
      },
      duration: 9
    }
  ];

  // Mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Update CSS custom properties for mouse position
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getElementShape = (type, size, color) => {
    const baseClasses = `${size} ${color} border-2`;
    
    switch (type) {
      case 'cube':
        return (
          <div className={`${baseClasses} rounded-lg bg-gradient-to-br from-electric-blue/20 to-transparent`}>
            <div className="w-full h-full bg-gradient-to-br from-electric-blue/30 to-transparent rounded-lg"></div>
          </div>
        );
      case 'sphere':
        return (
          <div className={`${baseClasses} rounded-full bg-gradient-to-br from-neon-purple/20 to-transparent`}>
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/30 to-transparent rounded-full"></div>
          </div>
        );
      case 'pyramid':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-neon-pink/20 to-transparent`} 
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-br from-neon-pink/30 to-transparent" 
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </div>
        );
      case 'hexagon':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-cyber-orange/20 to-transparent`}
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
            <div className="w-full h-full bg-gradient-to-br from-cyber-orange/30 to-transparent"
                 style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
          </div>
        );
      case 'diamond':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-matrix-green/20 to-transparent`}
               style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
            <div className="w-full h-full bg-gradient-to-br from-matrix-green/30 to-transparent"
                 style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          </div>
        );
      case 'triangle':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-golden-cta/20 to-transparent`}
               style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-br from-golden-cta/30 to-transparent"
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </div>
        );
      default:
        return <div className={`${baseClasses} rounded-lg`}></div>;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 6 }}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={element.animation}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.id * 0.5
          }}
          whileHover={{
            scale: 1.5,
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        >
          {getElementShape(element.type, element.size, element.color)}
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.5, 2, 1.5, 1],
              opacity: [0.3, 0.6, 0.1, 0.6, 0.3]
            }}
            transition={{
              duration: element.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.id * 0.3
            }}
            style={{
              background: `radial-gradient(circle, ${element.color.split('/')[0].replace('border-', '')} 0%, transparent 70%)`,
              filter: 'blur(8px)',
              zIndex: -1
            }}
          />
        </motion.div>
      ))}

      {/* Neural network connections */}
      {elements.map((element, index) => {
        const nextElement = elements[(index + 1) % elements.length];
        return (
          <motion.div
            key={`connection-${element.id}`}
            className="absolute h-px bg-gradient-to-r from-electric-blue/20 via-neon-purple/30 to-neon-pink/20"
            style={{
              left: `${element.position.x}%`,
              top: `${element.position.y}%`,
              width: `${Math.sqrt(
                Math.pow(nextElement.position.x - element.position.x, 2) + 
                Math.pow(nextElement.position.y - element.position.y, 2)
              )}%`,
              transformOrigin: 'left center',
              transform: `rotate(${Math.atan2(
                nextElement.position.y - element.position.y,
                nextElement.position.x - element.position.x
              ) * 180 / Math.PI}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8
            }}
          />
        );
      })}

      {/* Floating data particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-electric-blue rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements3D;
