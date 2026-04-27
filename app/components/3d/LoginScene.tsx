"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, speed = 1, distort = 0.4 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function RotatingRing({ position, color }: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.5, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} metalness={1} roughness={0} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function LoginScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
    >
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#3B82F6" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[0, 5, -5]} intensity={0.8} color="#22C55E" />

      <FloatingOrb position={[-3, 1, -2]} color="#3B82F6" speed={0.8} distort={0.5} />
      <FloatingOrb position={[3, -1, -3]} color="#8B5CF6" speed={1.2} distort={0.3} />
      <FloatingOrb position={[0, 2, -4]} color="#22C55E" speed={0.6} distort={0.6} />
      <FloatingOrb position={[-2, -2, -1]} color="#F97316" speed={1} distort={0.4} />

      <RotatingRing position={[-3, 0, -2]} color="#3B82F6" />
      <RotatingRing position={[3, 1, -3]} color="#8B5CF6" />
    </Canvas>
  );
}
