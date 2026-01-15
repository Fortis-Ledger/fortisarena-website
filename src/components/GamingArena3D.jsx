import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Glowing Ring Component
const GlowingRing = ({ radius, color, speed, rotationAxis, thickness = 0.02 }) => {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.getElapsedTime() * speed;
      if (rotationAxis === 'x') {
        ringRef.current.rotation.x = t;
      } else if (rotationAxis === 'y') {
        ringRef.current.rotation.y = t;
      } else {
        ringRef.current.rotation.z = t;
      }
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Orbiting Particle (without Trail for compatibility)
const OrbitingParticle = ({ radius, speed, offset, color, size = 0.08 }) => {
  const particleRef = useRef();
  const trailRef = useRef();
  
  useFrame((state) => {
    if (particleRef.current) {
      const t = state.clock.getElapsedTime() * speed + offset;
      particleRef.current.position.x = Math.cos(t) * radius;
      particleRef.current.position.z = Math.sin(t) * radius;
      particleRef.current.position.y = Math.sin(t * 2) * 0.3;
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={3}
      />
    </mesh>
  );
};

// Gaming Icon (Trophy, Controller shapes)
const GamingIcon = ({ position, rotation, type, color }) => {
  const iconRef = useRef();
  
  useFrame((state) => {
    if (iconRef.current) {
      iconRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      iconRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  if (type === 'trophy') {
    return (
      <group ref={iconRef} position={position} rotation={rotation} scale={0.15}>
        {/* Trophy cup */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.4, 0.3, 0.6, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Trophy base */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.15, 0.25, 0.3, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Trophy handles */}
        <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.5, 0.3, 0]} rotation={[0, Math.PI, Math.PI / 4]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    );
  }

  if (type === 'diamond') {
    return (
      <group ref={iconRef} position={position} rotation={rotation} scale={0.2}>
        <mesh>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    );
  }

  if (type === 'star') {
    return (
      <group ref={iconRef} position={position} rotation={rotation} scale={0.15}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 5]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={1}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    );
  }

  return null;
};

// Main Core Sphere
const CoreSphere = () => {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#4a00e0"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
};

// Energy Field
const EnergyField = () => {
  const fieldRef = useRef();
  
  useFrame((state) => {
    if (fieldRef.current) {
      fieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      fieldRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={fieldRef}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshStandardMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.15}
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Hexagon Grid Background
const HexGrid = () => {
  const gridRef = useRef();
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -3]} rotation={[0, 0, 0]}>
      <planeGeometry args={[15, 15, 20, 20]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
};

// Main Scene
const Scene = () => {
  return (
    <>
      {/* Ambient and point lights */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ec4899" />
      
      {/* Stars background */}
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      {/* Hex grid background */}
      <HexGrid />
      
      {/* Main core sphere */}
      <CoreSphere />
      
      {/* Energy field */}
      <EnergyField />
      
      {/* Glowing rings */}
      <GlowingRing radius={1.5} color="#8b5cf6" speed={0.5} rotationAxis="x" thickness={0.015} />
      <GlowingRing radius={1.7} color="#06b6d4" speed={0.3} rotationAxis="y" thickness={0.01} />
      <GlowingRing radius={1.9} color="#ec4899" speed={0.4} rotationAxis="z" thickness={0.012} />
      
      {/* Orbiting particles */}
      <OrbitingParticle radius={2.2} speed={0.8} offset={0} color="#8b5cf6" size={0.06} />
      <OrbitingParticle radius={2.4} speed={0.6} offset={Math.PI / 2} color="#06b6d4" size={0.05} />
      <OrbitingParticle radius={2.0} speed={1} offset={Math.PI} color="#ec4899" size={0.07} />
      <OrbitingParticle radius={2.3} speed={0.7} offset={Math.PI * 1.5} color="#f59e0b" size={0.05} />
      
      {/* Gaming icons */}
      <GamingIcon position={[2.5, 0.5, 0]} rotation={[0, 0, 0]} type="trophy" color="#f59e0b" />
      <GamingIcon position={[-2.5, -0.3, 0.5]} rotation={[0, 0, 0]} type="diamond" color="#8b5cf6" />
      <GamingIcon position={[0, 2.5, 0]} rotation={[0, 0, 0]} type="star" color="#06b6d4" />
      <GamingIcon position={[1.5, -2, 1]} rotation={[0, 0, 0]} type="diamond" color="#ec4899" />
    </>
  );
};

// Loading fallback
const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  );
};

// Main Component
const GamingArena3D = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      {/* Glow overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
};

export default GamingArena3D;
