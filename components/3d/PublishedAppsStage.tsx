"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface AndroidPhoneProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  title: string;
  category: string;
  accentColor: string;
  isMain?: boolean;
}

const AndroidPhoneMesh: React.FC<AndroidPhoneProps> = ({
  position,
  rotation,
  scale = 1,
  title,
  category,
  accentColor,
  isMain = false,
}) => {
  const phoneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!phoneRef.current) return;
    const t = state.clock.getElapsedTime();
    const offset = position[0] * 0.5;

    // Gentle floating breathing motion
    phoneRef.current.position.y =
      position[1] + Math.sin(t * 1.2 + offset) * (isMain ? 0.08 : 0.05);

    // Subtle gentle yaw rotation
    phoneRef.current.rotation.y =
      rotation[1] + Math.sin(t * 0.7 + offset) * 0.04;
  });

  return (
    <group ref={phoneRef} position={position} rotation={rotation} scale={scale}>
      {/* Phone Body Chassis */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 3.1, 0.12]} />
        <meshStandardMaterial
          color="#0B0F12"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Screen Glass Face */}
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[1.4, 3.0]} />
        <meshStandardMaterial
          color="#050708"
          emissive={accentColor}
          emissiveIntensity={isMain ? 0.35 : 0.18}
          roughness={0.2}
          metalness={0.2}
        />
      </mesh>

      {/* Center Camera Punch-hole */}
      <mesh position={[0, 1.35, 0.07]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Screen UI Mockup Shapes */}
      {isMain ? (
        /* Detailed QuickBoom HRM Mockup Layout */
        <group position={[0, 0, 0.07]}>
          {/* App Header Bar */}
          <mesh position={[0, 1.15, 0]}>
            <planeGeometry args={[1.2, 0.22]} />
            <meshBasicMaterial color="#0D1418" />
          </mesh>
          <mesh position={[-0.35, 1.15, 0.005]}>
            <planeGeometry args={[0.3, 0.04]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>

          {/* Quick Stats Card */}
          <mesh position={[0, 0.75, 0]}>
            <planeGeometry args={[1.2, 0.45]} />
            <meshBasicMaterial color={accentColor} transparent opacity={0.25} />
          </mesh>

          {/* Geo Punch In Button */}
          <mesh position={[0, 0.3, 0]}>
            <circleGeometry args={[0.22, 32]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>

          {/* Timesheet List Cards */}
          {[-0.2, -0.6, -1.0].map((y, i) => (
            <mesh key={i} position={[0, y, 0]}>
              <planeGeometry args={[1.2, 0.28]} />
              <meshBasicMaterial color="#0E171B" />
            </mesh>
          ))}
        </group>
      ) : (
        /* Minimalist secondary app layout */
        <group position={[0, 0, 0.07]}>
          <mesh position={[0, 0.8, 0]}>
            <planeGeometry args={[1.1, 0.4]} />
            <meshBasicMaterial color={accentColor} transparent opacity={0.3} />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <planeGeometry args={[1.1, 0.7]} />
            <meshBasicMaterial color="#0D1418" />
          </mesh>
          <mesh position={[0, -0.7, 0]}>
            <planeGeometry args={[1.1, 0.5]} />
            <meshBasicMaterial color="#0A0E11" />
          </mesh>
        </group>
      )}

      {/* Floating HTML Badge on Screen Bottom */}
      <Html center distanceFactor={8} position={[0, isMain ? -1.9 : -1.75, 0]}>
        <div
          className={`pointer-events-none select-none text-center px-2.5 py-1.5 rounded-xl backdrop-blur-md border transition-all whitespace-nowrap ${
            isMain
              ? "bg-[#050708]/95 border-teal-primary/60 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
              : "bg-[#050708]/80 border-white/10"
          }`}
        >
          <div
            className="text-[9px] font-mono uppercase tracking-widest font-bold"
            style={{ color: accentColor }}
          >
            {category}
          </div>
          <div className="text-xs font-bold text-white mt-0.5">{title}</div>
        </div>
      </Html>
    </group>
  );
};

export const PublishedAppsStage: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Atmospheric Lighting */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} />
      <pointLight position={[0, 1, 3]} intensity={2.5} color="#14B8A6" distance={9} />
      <pointLight position={[-3, 2, -1]} intensity={1.5} color="#A855F7" distance={8} />
      <pointLight position={[3, 2, -1]} intensity={1.5} color="#38BDF8" distance={8} />
      <pointLight position={[0, -2, 2]} intensity={1.2} color="#F97316" distance={7} />

      {/* 1. FOREGROUND MAIN STAR: QuickBoom HRM */}
      <AndroidPhoneMesh
        position={[0, 0, 0.8]}
        rotation={[0.08, 0, 0]}
        scale={1.15}
        title="QuickBoom HRM"
        category="Enterprise HRMS"
        accentColor="#14B8A6"
        isMain={true}
      />

      {/* 2. LEFT INNER: Thought Vault */}
      <AndroidPhoneMesh
        position={[-1.7, 0.25, -0.4]}
        rotation={[0.06, 0.3, -0.05]}
        scale={0.88}
        title="Thought Vault"
        category="Productivity"
        accentColor="#A855F7"
      />

      {/* 3. LEFT OUTER: Hard Mode Restart */}
      <AndroidPhoneMesh
        position={[-3.1, -0.15, -1.2]}
        rotation={[0.04, 0.45, -0.08]}
        scale={0.78}
        title="Hard Mode Restart"
        category="Mobile Game"
        accentColor="#F97316"
      />

      {/* 4. RIGHT INNER: Calculator */}
      <AndroidPhoneMesh
        position={[1.7, 0.25, -0.4]}
        rotation={[0.06, -0.3, 0.05]}
        scale={0.88}
        title="Calculator"
        category="Utility"
        accentColor="#38BDF8"
      />

      {/* 5. RIGHT OUTER: BMI Calculator */}
      <AndroidPhoneMesh
        position={[3.1, -0.15, -1.2]}
        rotation={[0.04, -0.45, 0.08]}
        scale={0.78}
        title="BMI Calculator"
        category="Health Utility"
        accentColor="#10B981"
      />

      {/* 6. CENTER TOP BACKGROUND: Do Now */}
      <AndroidPhoneMesh
        position={[0, 1.45, -1.5]}
        rotation={[-0.1, 0, 0]}
        scale={0.72}
        title="Do Now"
        category="Task Manager"
        accentColor="#06B6D4"
      />
    </group>
  );
};
