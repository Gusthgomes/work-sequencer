"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Grid } from "@react-three/drei";
import * as THREE from "three";
import CartModel from "./CartModel";
import { Carrinho } from "@/app/store/obras";
import { StatusCarrinho } from "@/app/lib/types";

interface ObraCarrinho extends Carrinho {
  numeroObra: string;
}

function FloorGrid() {
  return (
    <Grid
      position={[0, -1.5, 0]}
      args={[30, 30]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#1f2937"
      sectionSize={5}
      sectionThickness={1}
      sectionColor="#374151"
      fadeDistance={25}
      fadeStrength={1}
      followCamera={false}
      infiniteGrid
    />
  );
}

function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3B82F6" transparent opacity={0.6} />
    </points>
  );
}

interface DashboardSceneProps {
  carrinhos: ObraCarrinho[];
  onSelectCarrinho?: (id: string) => void;
}

export default function DashboardScene({ carrinhos, onSelectCarrinho }: DashboardSceneProps) {
  const cols = Math.min(carrinhos.length, 5);
  const spacing = 2.2;

  return (
    <Canvas
      camera={{ position: [0, 4, 12], fov: 55 }}
      style={{ background: "transparent" }}
      shadows="percentage"
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
      }}
    >
      <color attach="background" args={["#030712"]} />
      <fog attach="fog" args={["#030712", 15, 35]} />

      <Stars radius={100} depth={50} count={2000} factor={3} fade speed={0.5} />
      <AmbientParticles />
      <FloorGrid />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#3B82F6" />

      {carrinhos.map((carrinho, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = (col - (cols - 1) / 2) * spacing;
        const z = row * spacing * -1;

        return (
          <CartModel
            key={carrinho.id}
            position={[x, 0, z]}
            status={carrinho.status as StatusCarrinho}
            numeroObra={carrinho.numeroObra}
            kit={carrinho.kit}
            onClick={() => onSelectCarrinho?.(carrinho.id)}
          />
        );
      })}

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.2}
        makeDefault
      />
    </Canvas>
  );
}
