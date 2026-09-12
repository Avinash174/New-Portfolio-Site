"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface PhoneDeviceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  tech: string;
  category: string;
  accentColor: string;
  reducedMotion?: boolean;
}

const PhoneDevice: React.FC<PhoneDeviceProps> = ({
  position,
  rotation,
  title,
  tech,
  category,
  accentColor,
  reducedMotion = false,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (reducedMotion || !meshRef.current) return;
    const t = state.clock.getElapsedTime();
    if (!hovered) {
      meshRef.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.08;
      meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.8) * 0.08;
    } else {
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, position[1] + 0.15, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1);
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Phone Body Chassis */}
      <mesh>
        <boxGeometry args={[1.5, 3.0, 0.12]} />
        <meshStandardMaterial
          color="#0B0F12"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Screen Front Face */}
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[1.4, 2.85]} />
        <meshStandardMaterial
          color="#050708"
          emissive={accentColor}
          emissiveIntensity={hovered ? 0.35 : 0.15}
          roughness={0.3}
        />
      </mesh>

      {/* Dynamic Island / Speaker */}
      <mesh position={[0, 1.3, 0.07]}>
        <planeGeometry args={[0.35, 0.07]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* UI Mockup Blocks on Screen */}
      <mesh position={[0, 0.85, 0.07]}>
        <planeGeometry args={[1.1, 0.4]} />
        <meshBasicMaterial color="#0D1418" />
      </mesh>
      <mesh position={[0, 0.15, 0.07]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, -0.65, 0.07]}>
        <planeGeometry args={[1.1, 0.5]} />
        <meshBasicMaterial color="#0D1418" />
      </mesh>

      {/* Interactive HTML Card */}
      <Html center distanceFactor={8} position={[0, -1.8, 0]}>
        <div
          className={`transition-all duration-300 pointer-events-none select-none text-center px-3 py-2 rounded-xl backdrop-blur-md border ${
            hovered
              ? "bg-[#0B0F12]/95 border-teal-secondary shadow-tealGlow scale-105"
              : "bg-[#0B0F12]/70 border-white/10"
          }`}
        >
          <div className="text-[10px] font-mono text-teal-secondary uppercase tracking-wider">
            {category}
          </div>
          <div className="text-xs font-bold text-white whitespace-nowrap mt-0.5">
            {title}
          </div>
          <div className="text-[10px] font-mono text-text-muted mt-0.5">
            {tech}
          </div>
        </div>
      </Html>
    </group>
  );
};

export const PhoneShowcase: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} />
      <pointLight position={[0, 1, 3]} intensity={1.8} color="#14B8A6" distance={8} />

      {/* Left Phone: Native Android / Flutter Enterprise */}
      <PhoneDevice
        position={[-1.9, 0, -0.4]}
        rotation={[0.1, 0.35, -0.05]}
        title="Enterprise Mobile App"
        category="HRMS & Field Staff"
        tech="Flutter • Riverpod • REST"
        accentColor="#14B8A6"
        reducedMotion={reducedMotion}
      />

      {/* Center Phone: E-Commerce Storefront */}
      <PhoneDevice
        position={[0, 0.2, 0.2]}
        rotation={[0, 0, 0]}
        title="Commerce Consumer App"
        category="Cross-Platform E-Com"
        tech="Flutter • Dart • Cloudinary"
        accentColor="#2DD4BF"
        reducedMotion={reducedMotion}
      />

      {/* Right Phone: Native iOS / Operations App */}
      <PhoneDevice
        position={[1.9, -0.1, -0.4]}
        rotation={[0.1, -0.35, 0.05]}
        title="Operations & Geo App"
        category="Offline Native & iOS"
        tech="Android Java • iOS • SQLite"
        accentColor="#38BDF8"
        reducedMotion={reducedMotion}
      />
    </group>
  );
};
