"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../providers/ThemeProvider";

interface DeveloperWorkspaceProps {
  reducedMotion?: boolean;
}

export const DeveloperWorkspace: React.FC<DeveloperWorkspaceProps> = ({ reducedMotion = false }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const groupRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const dbRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  const codePanelRef = useRef<THREE.Group>(null);
  const apiNodesRef = useRef<THREE.Group>(null);

  // Optimized procedural particles
  const particleCount = 40;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.3;

    if (groupRef.current) {
      // Smooth camera/workspace mouse parallax
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.4,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseY * 0.3,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        Math.sin(t * 0.8) * 0.1,
        0.05
      );
    }

    if (laptopRef.current) {
      laptopRef.current.position.y = Math.sin(t * 1.2) * 0.05;
    }

    if (dbRef.current) {
      dbRef.current.rotation.y = t * 0.3;
      dbRef.current.position.y = 1.0 + Math.sin(t * 1.0 + 1) * 0.08;
    }

    if (phoneRef.current) {
      phoneRef.current.rotation.y = -0.3 + Math.sin(t * 0.9) * 0.1;
      phoneRef.current.position.y = -0.6 + Math.sin(t * 1.1 + 2) * 0.07;
    }

    if (codePanelRef.current) {
      codePanelRef.current.position.y = 0.8 + Math.sin(t * 0.7 + 0.5) * 0.06;
      codePanelRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
    }

    if (apiNodesRef.current) {
      apiNodesRef.current.rotation.y = -t * 0.2;
    }
  });

  const laptopChassisColor = isLight ? "#1E293B" : "#0B0F12";
  const keyboardRecessColor = isLight ? "#0F172A" : "#050708";
  const primaryAccent = isLight ? "#0F766E" : "#14B8A6";
  const secondaryAccent = isLight ? "#0D9488" : "#2DD4BF";

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Ambient & Directional Lighting */}
      <ambientLight intensity={isLight ? 0.7 : 0.4} />
      <directionalLight position={[5, 8, 6]} intensity={isLight ? 1.4 : 1.2} color="#F8FAFC" />
      <pointLight position={[-3, 2, 2]} intensity={isLight ? 1.8 : 2.5} color={primaryAccent} distance={8} />
      <pointLight position={[3, -2, 3]} intensity={isLight ? 1.4 : 1.8} color={secondaryAccent} distance={7} />
      <pointLight position={[0, 4, -2]} intensity={0.9} color="#38BDF8" distance={9} />

      {/* 1. CENTRAL WORKSTATION: LAPTOP */}
      <group ref={laptopRef} position={[0, -0.4, 0]}>
        {/* Base Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.1, 2.0]} />
          <meshStandardMaterial color={laptopChassisColor} roughness={0.3} metalness={isLight ? 0.5 : 0.8} />
        </mesh>
        {/* Keyboard recess */}
        <mesh position={[0, 0.055, -0.2]}>
          <boxGeometry args={[2.4, 0.02, 1.2]} />
          <meshStandardMaterial color={keyboardRecessColor} roughness={0.6} metalness={0.4} />
        </mesh>
        {/* Glowing Trackpad */}
        <mesh position={[0, 0.055, 0.6]}>
          <boxGeometry args={[0.9, 0.015, 0.55]} />
          <meshStandardMaterial
            color="#14B8A6"
            emissive="#14B8A6"
            emissiveIntensity={0.2}
            roughness={0.4}
          />
        </mesh>
        {/* Screen Hinge & Lid (Tilted back ~110 degrees) */}
        <group position={[0, 0.05, -0.95]} rotation={[-1.9, 0, 0]}>
          {/* Lid back */}
          <mesh position={[0, 1.0, 0]}>
            <boxGeometry args={[2.8, 2.0, 0.08]} />
            <meshStandardMaterial color={laptopChassisColor} roughness={0.3} metalness={isLight ? 0.6 : 0.8} />
          </mesh>
          {/* Screen Inner Display */}
          <mesh position={[0, 1.0, 0.045]}>
            <planeGeometry args={[2.6, 1.8]} />
            <meshStandardMaterial
              color="#040D12"
              emissive="#14B8A6"
              emissiveIntensity={0.35}
              roughness={0.2}
            />
          </mesh>
          {/* Code Accent Lines on Screen */}
          {[-0.5, -0.25, 0, 0.25, 0.5, 0.7].map((y, idx) => (
            <mesh key={idx} position={[-0.4 + (idx % 2) * 0.2, 1.0 + y * 0.7, 0.05]}>
              <planeGeometry args={[0.8 + (idx % 3) * 0.35, 0.04]} />
              <meshBasicMaterial
                color={idx % 2 === 0 ? "#2DD4BF" : idx % 3 === 0 ? "#94A3B8" : "#14B8A6"}
              />
            </mesh>
          ))}
          {/* Subtle Apple / Minimal Logo Dot */}
          <mesh position={[0, 1.0, -0.045]}>
            <circleGeometry args={[0.1, 24]} />
            <meshBasicMaterial color="#14B8A6" />
          </mesh>
        </group>
      </group>

      {/* 2. FLOATING CODE PANELS (Curved Left) */}
      <group ref={codePanelRef} position={[-2.4, 0.7, -0.3]} rotation={[0.2, 0.6, -0.05]}>
        {/* Glass Card Panel */}
        <mesh>
          <boxGeometry args={[1.8, 1.3, 0.02]} />
          <meshPhysicalMaterial
            color={isLight ? "#0F172A" : "#0D1418"}
            transparent
            opacity={isLight ? 0.85 : 0.7}
            roughness={0.15}
            metalness={0.2}
            transmission={isLight ? 0.3 : 0.6}
            ior={1.3}
          />
        </mesh>
        {/* Panel Border Wireframe */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1.8, 1.3, 0.02)]} />
          <lineBasicMaterial color={isLight ? "#0F766E" : "#14B8A6"} transparent opacity={0.6} />
        </lineSegments>
        {/* Code Snippets Lines */}
        {[-0.35, -0.15, 0.05, 0.25, 0.4].map((y, i) => (
          <mesh key={i} position={[-0.2 + (i % 2) * 0.15, y, 0.02]}>
            <planeGeometry args={[1.1 - (i % 2) * 0.3, 0.04]} />
            <meshBasicMaterial color={i === 0 ? "#2DD4BF" : i === 2 ? "#38BDF8" : "#94A3B8"} />
          </mesh>
        ))}
      </group>

      {/* 3. FLOATING DATABASE CYLINDER (Right Upper) */}
      <group ref={dbRef} position={[2.6, 1.0, -0.6]}>
        {[0.4, 0, -0.4].map((y, i) => (
          <group key={i} position={[0, y, 0]}>
            <mesh>
              <cylinderGeometry args={[0.5, 0.5, 0.25, 24]} />
              <meshStandardMaterial
                color={isLight ? "#1E293B" : "#0D1418"}
                metalness={0.8}
                roughness={0.3}
                emissive={primaryAccent}
                emissiveIntensity={0.15}
              />
            </mesh>
            {/* Glowing Accent Ring */}
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[0.52, 0.02, 12, 32]} />
              <meshStandardMaterial
                color="#2DD4BF"
                emissive="#2DD4BF"
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>
        ))}
        {/* Vertical Data Flow Beam */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 1.4, 12]} />
          <meshStandardMaterial
            color="#2DD4BF"
            emissive="#2DD4BF"
            emissiveIntensity={1.0}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>

      {/* 4. FLOATING MOBILE PHONE (Right Foreground) */}
      <group ref={phoneRef} position={[2.2, -0.7, 0.8]} rotation={[-0.2, -0.4, 0.15]}>
        {/* Phone Body */}
        <mesh>
          <boxGeometry args={[0.75, 1.4, 0.06]} />
          <meshStandardMaterial color={isLight ? "#1E293B" : "#0B0F12"} roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[0.68, 1.32]} />
          <meshStandardMaterial
            color="#080C0E"
            emissive="#14B8A6"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Screen UI Elements */}
        <mesh position={[0, 0.45, 0.04]}>
          <planeGeometry args={[0.45, 0.08]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
        <mesh position={[0, 0.1, 0.04]}>
          <planeGeometry args={[0.55, 0.35]} />
          <meshBasicMaterial color="#111B21" />
        </mesh>
        <mesh position={[0, -0.3, 0.04]}>
          <planeGeometry args={[0.55, 0.25]} />
          <meshBasicMaterial color="#14B8A6" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* 5. API NODES NETWORK (Bottom Left) */}
      <group ref={apiNodesRef} position={[-2.2, -0.8, 0.5]}>
        {[
          { pos: [0, 0, 0], r: 0.18, col: "#2DD4BF" },
          { pos: [0.6, 0.4, -0.3], r: 0.12, col: "#14B8A6" },
          { pos: [-0.5, 0.5, 0.2], r: 0.14, col: "#38BDF8" },
          { pos: [0.3, -0.5, 0.4], r: 0.13, col: "#2DD4BF" },
        ].map((node, i) => (
          <mesh key={i} position={node.pos as [number, number, number]}>
            <sphereGeometry args={[node.r, 20, 20]} />
            <meshStandardMaterial
              color={node.col}
              emissive={node.col}
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* 6. SUBTLE FLOATING PARTICLES */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#2DD4BF"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  );
};
