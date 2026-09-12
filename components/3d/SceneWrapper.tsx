"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { FallbackGraphic } from "./FallbackGraphic";

interface SceneWrapperProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  className?: string;
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  cameraPosition = [0, 0, 5],
  cameraFov = 45,
  className = "w-full h-full",
}) => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasWebGL(checkWebGL());
  }, []);

  if (hasWebGL === false || hasError) {
    return <FallbackGraphic className={className} />;
  }

  // Still checking on client or server-side render
  if (hasWebGL === null) {
    return <div className={`bg-transparent ${className}`} />;
  }

  return (
    <div className={`relative ${className}`} style={{ touchAction: "pan-y" }} data-3d-interactive="true">
      <Suspense fallback={<FallbackGraphic className="w-full h-full" />}>
        <Canvas
          camera={{ position: cameraPosition, fov: cameraFov }}
          dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onError={() => setHasError(true)}
          style={{ pointerEvents: "auto", touchAction: "pan-y" }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
};
