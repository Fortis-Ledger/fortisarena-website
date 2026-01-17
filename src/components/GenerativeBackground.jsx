import React, { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Generative Particle System
function ParticleSystem({ count = 200 }) {
  const containerRef = useRef();
  const particlesRef = useRef([]);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      direction: Math.random() * Math.PI * 2,
      color: ['#ffffff', '#cccccc', '#aaaaaa', '#888888'][Math.floor(Math.random() * 4)],
      opacity: Math.random() * 0.8 + 0.2
    }));
  }, [count]);

  useEffect(() => {
    const animateParticles = () => {
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          const p = particles[i];
          p.x += Math.cos(p.direction) * p.speed;
          p.y += Math.sin(p.direction) * p.speed;

          // Wrap around screen
          if (p.x > window.innerWidth) p.x = 0;
          if (p.x < 0) p.x = window.innerWidth;
          if (p.y > window.innerHeight) p.y = 0;
          if (p.y < 0) p.y = window.innerHeight;

          particle.style.transform = `translate(${p.x}px, ${p.y}px)`;
        }
      });
      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, [particles]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          ref={(el) => (particlesRef.current[particle.id] = el)}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
}

// Animated Geometric Shapes
function GeometricShapes() {
  const shapesRef = useRef();

  useEffect(() => {
    const shapes = shapesRef.current?.children;
    if (shapes && shapes.length > 0) {
      Array.from(shapes).forEach((shape, i) => {
        gsap.to(shape, {
          rotation: 360,
          duration: 10 + i * 2,
          repeat: -1,
          ease: "none"
        });

        gsap.to(shape, {
          scale: 1.2,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      });
    }
  }, []);

  return (
    <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
      {/* Triangle */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polygon
            points="30,5 55,50 5,50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </motion.div>

      {/* Hexagon */}
      <motion.div
        className="absolute top-1/3 right-1/4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <polygon
            points="40,5 70,25 70,55 40,75 10,55 10,25"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="8,4"
          />
        </svg>
      </motion.div>

      {/* Circle */}
      <motion.div
        className="absolute bottom-1/4 left-1/3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="10,5"
          />
        </svg>
      </motion.div>

      {/* Square */}
      <motion.div
        className="absolute bottom-1/3 right-1/3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <rect
            x="10"
            y="10"
            width="50"
            height="50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="6,6"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Neural Network Lines
function NeuralNetwork() {
  const linesRef = useRef();

  useEffect(() => {
    const canvas = linesRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={linesRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

// Main Generative Background Component
export default function GenerativeBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ background: '#000000' }}>
      {/* Pure Black Background */}
      <div className="absolute inset-0" style={{ background: '#000000' }} />
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          background: [
            `
              radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
            `,
            `
              radial-gradient(circle at 40% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
            `
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Particle System */}
      <ParticleSystem count={150} />
      
      {/* Geometric Shapes */}
      <GeometricShapes />
      
      {/* Neural Network */}
      <NeuralNetwork />
    </div>
  );
}
