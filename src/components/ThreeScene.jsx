import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animated 3D Particles Component
function FloatingParticles({ count = 100 }) {
  const meshRef = useRef();
  const particlesRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += particles[i].speed;
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
        
        if (particle.position.y > 10) {
          particle.position.y = -10;
        }
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={particle.position}
          scale={particle.scale}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Animated Geometric Shapes
function AnimatedShapes() {
  const groupRef = useRef();
  const torusRef = useRef();
  const boxRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.008;
      boxRef.current.rotation.z += 0.012;
    }
  });

  useEffect(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.scale, {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <group ref={groupRef}>
      {/* Rotating Torus */}
      <mesh
        ref={torusRef}
        position={[3, 0, -2]}
      >
        <torusGeometry args={[2, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#8a2be2"
          emissive="#8a2be2"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>

      {/* Rotating Box */}
      <mesh
        ref={boxRef}
        position={[-3, 0, -1]}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#ff6b6b"
          emissive="#ff6b6b"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>

      {/* Central Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

// Neural Network Lines
function NeuralNetwork() {
  const linesRef = useRef();
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ));
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={linesRef}>
      {points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
        const positions = new Float32Array([
          point.x, point.y, point.z,
          nextPoint.x, nextPoint.y, nextPoint.z
        ]);
        
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
          </line>
        );
      })}
    </group>
  );
}

// Main 3D Scene Component
function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 10);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8a2be2" intensity={0.5} />
      
      <FloatingParticles count={150} />
      <AnimatedShapes />
      <NeuralNetwork />
    </>
  );
}

// Main ThreeScene Component
export default function ThreeScene({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
