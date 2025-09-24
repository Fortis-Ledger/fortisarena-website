import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;
    const colors = [
      { r: 0, g: 245, b: 255 },    // Electric blue
      { r: 176, g: 38, b: 255 },   // Neon purple
      { r: 255, g: 0, b: 110 },    // Neon pink
      { r: 57, g: 255, b: 20 },    // Neon green
    ];

    // Create enhanced particles
    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles?.push({
        x: Math.random() * canvas?.width,
        y: Math.random() * canvas?.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        color: color,
        pulse: Math.random() * Math.PI * 2,
        connections: []
      });
    }

    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      
      // Update and draw particles
      particles?.forEach((particle, i) => {
        particle.x += particle?.vx;
        particle.y += particle?.vy;
        particle.pulse += 0.02;

        if (particle?.x < 0 || particle?.x > canvas?.width) particle.vx *= -1;
        if (particle?.y < 0 || particle?.y > canvas?.height) particle.vy *= -1;

        // Dynamic size based on pulse
        const dynamicSize = particle.size + Math.sin(particle.pulse) * 0.5;
        const dynamicOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;

        // Draw particle with glow effect
        ctx?.beginPath();
        ctx?.arc(particle?.x, particle?.y, dynamicSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${dynamicOpacity})`;
        ctx?.fill();

        // Add glow effect
        ctx?.beginPath();
        ctx?.arc(particle?.x, particle?.y, dynamicSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${dynamicOpacity * 0.1})`;
        ctx?.fill();

        // Draw connections between nearby particles
        particles?.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (150 - distance) / 150 * 0.3;
              ctx?.beginPath();
              ctx?.moveTo(particle.x, particle.y);
              ctx?.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx?.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gaming-dark">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      {/* Enhanced Neural Network Background */}
      <div className="absolute inset-0 neural-network" style={{ zIndex: 2 }}></div>
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" style={{ zIndex: 3 }}></div>
      {/* Matrix Background Animation */}
      <div className="absolute inset-0 matrix-bg" style={{ zIndex: 4 }}></div>
      {/* Holographic Overlay */}
      <div className="absolute inset-0 holographic opacity-30" style={{ zIndex: 5 }}></div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-44">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Enhanced 3D Logo Animation */}
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-electric-blue via-neon-purple to-neon-pink rounded-3xl flex items-center justify-center gaming-glow electric-pulse neon-border">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-2xl"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="12" r="4" fill="rgba(0,0,0,0.3)" />
                  <circle cx="12" cy="12" r="2" fill="rgba(255,255,255,0.8)" />
                </svg>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border-2 border-electric-blue/40 rounded-[2rem] cyber-pulse"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-neon-purple/30 rounded-[2.5rem]"
              ></motion.div>
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block text-white drop-shadow-lg">The Future of</span>
            <span className="block bg-gradient-to-r from-electric-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-neon-flicker drop-shadow-2xl">
              Web3 Gaming
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl font-medium text-electric-blue/80 mt-3">
              is Here
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Where <span className="text-electric-blue font-semibold">skill meets ownership</span>, and 
            <span className="text-neon-purple font-semibold"> community drives innovation</span>. 
            Join the <span className="text-neon-pink font-semibold">decentralized gaming revolution</span> that puts players first.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-bold text-lg px-10 py-4 rounded-xl gaming-glow electric-pulse transition-all duration-300 transform hover:scale-105"
              iconName="Rocket"
              iconPosition="right"
            >
              Enter the Arena
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:border-neon-purple hover:text-neon-purple font-semibold text-lg px-10 py-4 rounded-xl glassmorphism-card transition-all duration-300 transform hover:scale-105"
              iconName="FileText"
              iconPosition="left"
            >
              Explore Ecosystem
            </Button>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;