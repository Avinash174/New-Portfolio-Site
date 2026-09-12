"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { orbitSkills } from "@/data/skills";
import { useTheme } from "../providers/ThemeProvider";

interface TechOrbitProps {
  reducedMotion?: boolean;
}

export const TechOrbit: React.FC<TechOrbitProps> = ({ reducedMotion = false }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Compute circular orbital positions
  const orbitRadius = 3.5;
  const nodes = useMemo(() => {
    return orbitSkills.map((skill, index) => {
      const angle = (index / orbitSkills.length) * Math.PI * 2;
      return {
        ...skill,
        baseAngle: angle,
      };
    });
  }, []);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    const speed = hoveredSkill ? 0.05 : 0.25;
    groupRef.current.rotation.y += speed * 0.01;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.05;
  });

  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={isLight ? 0.9 : 0.5} />
      <pointLight position={[0, 0, 4]} intensity={isLight ? 1.5 : 2} color={isLight ? "#0F766E" : "#14B8A6"} distance={10} />

      {/* Central Core: AVINASH */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color={isLight ? "#F8FAFC" : "#0B0F12"}
          roughness={0.2}
          metalness={isLight ? 0.4 : 0.9}
          emissive={isLight ? "#0F766E" : "#14B8A6"}
          emissiveIntensity={isLight ? 0.2 : 0.3}
        />
      </mesh>
      {/* Central Glowing Wireframe / Halo */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.02, 16, 16]} />
        <meshBasicMaterial color={isLight ? "#0D9488" : "#2DD4BF"} wireframe transparent opacity={isLight ? 0.2 : 0.3} />
      </mesh>
      {/* Central HTML Badge */}
      <Html center distanceFactor={10} position={[0, 0, 1.1]}>
        <div className="pointer-events-none select-none px-2.5 py-1 rounded-md bg-surface border border-teal-primary/40 text-teal-primary dark:text-teal-secondary font-mono text-xs font-bold tracking-widest uppercase shadow-md">
          AVINASH
        </div>
      </Html>

      {/* Outer Orbit Path Guide Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
        <meshBasicMaterial color={isLight ? "#0F766E" : "#14B8A6"} transparent opacity={isLight ? 0.15 : 0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Revolving Orbit Group */}
      <group ref={groupRef}>
        {nodes.map((node) => {
          const x = Math.cos(node.baseAngle) * orbitRadius;
          const z = Math.sin(node.baseAngle) * orbitRadius;
          const isHovered = hoveredSkill === node.name;

          return (
            <group key={node.name} position={[x, 0, z]}>
              {/* Tech Node Sphere */}
              <mesh
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHoveredSkill(node.name);
                }}
                onPointerOut={() => setHoveredSkill(null)}
              >
                <sphereGeometry args={[isHovered ? 0.35 : 0.26, 20, 20]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={isHovered ? 1.0 : isLight ? 0.25 : 0.4}
                  roughness={0.2}
                  metalness={0.5}
                />
              </mesh>

              {/* HTML Overlay on Node */}
              <Html center distanceFactor={10} position={[0, 0.45, 0]}>
                <div
                  onMouseEnter={() => setHoveredSkill(node.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`cursor-pointer transition-all duration-300 select-none px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap shadow-sm ${
                    isHovered
                      ? "bg-surface border border-teal-primary text-teal-primary dark:text-teal-secondary shadow-lg scale-110"
                      : "bg-surface/85 border border-border-subtle text-text-primary hover:text-teal-primary"
                  }`}
                >
                  <span className="font-semibold">{node.name}</span>
                  {isHovered && (
                    <span className="block text-[9px] text-teal-primary dark:text-teal-secondary uppercase">
                      {node.domain}
                    </span>
                  )}
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};
