import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Simple3DScene({ className = "" }) {
  const containerRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create floating particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-primary rounded-full opacity-60';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.animationDuration = `${3 + Math.random() * 2}s`;
      containerRef.current?.appendChild(particle);
      particles.push(particle);
    }
    particlesRef.current = particles;

    // Animate particles
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: -20,
        opacity: 0.3,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });
    });

    return () => {
      particles.forEach(particle => {
        containerRef.current?.removeChild(particle);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`} style={{ background: '#000000' }}>
      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/30 rounded-lg floating-3d" style={{ animationDelay: '0s' }}>
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-accent/30 rounded-full floating-3d" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent rounded-full"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-neon-green/30 transform rotate-45 floating-3d" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-br from-neon-green/20 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 w-14 h-14 border-2 border-neon-pink/30 rounded-lg floating-3d" style={{ animationDelay: '3s' }}>
        <div className="w-full h-full bg-gradient-to-br from-neon-pink/20 to-transparent rounded-lg"></div>
      </div>

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {[...Array(20)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#00d4ff"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}
      </svg>
    </div>
  );
}
