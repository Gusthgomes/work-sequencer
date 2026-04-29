"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { StatusCarrinho, STATUS_CARRINHO_COLORS } from "@/app/lib/types";

interface CartModelProps {
  position: [number, number, number];
  status: StatusCarrinho;
  numeroObra: string;
  kit: "KIT_3B" | "KIT_3K";
  onClick?: () => void;
}

export default function CartModel({
  position,
  status,
  numeroObra,
  kit,
  onClick,
}: CartModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const colorHex = STATUS_CARRINHO_COLORS[status].hex;
  const color = new THREE.Color(colorHex);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group
        ref={groupRef}
        position={position}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Corpo do carrinho */}
        <RoundedBox args={[1.4, 1, 0.8]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color={color}
            metalness={0.5}
            roughness={0.3}
            emissive={color}
            emissiveIntensity={hovered ? 0.6 : 0.3}
            transparent
            opacity={0.9}
          />
        </RoundedBox>

        {/* Prateleira */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[1.3, 0.05, 0.7]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
        </mesh>

        {/* Rodas */}
        {[-0.5, 0.5].map((x) =>
          [-0.35, 0.35].map((z) => (
            <mesh key={`${x}-${z}`} position={[x, -0.55, z]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
          ))
        )}

        {/* Handle */}
        <mesh position={[0, 0.55, 0]}>
          <capsuleGeometry args={[0.04, 1.2, 8, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#9CA3AF" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Texto - número da obra */}
        <Text
          position={[0, 0.05, 0.42]}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
          font={undefined}
        >
          {numeroObra}
        </Text>

        {/* Texto - kit */}
        <Text
          position={[0, -0.18, 0.42]}
          fontSize={0.12}
          color="white"
          fillOpacity={0.7}
          anchorX="center"
          anchorY="middle"
        >
          {kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
        </Text>

        {/* Glow effect */}
        {hovered && (
          <mesh>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.08}
              side={THREE.BackSide}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
}
