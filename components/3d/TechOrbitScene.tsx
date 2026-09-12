"use client";

import React from "react";
import { SceneWrapper } from "./SceneWrapper";
import { TechOrbit } from "./TechOrbit";

export const TechOrbitScene: React.FC = () => {
  return (
    <SceneWrapper cameraPosition={[0, 0, 7]} cameraFov={45}>
      <TechOrbit />
    </SceneWrapper>
  );
};
