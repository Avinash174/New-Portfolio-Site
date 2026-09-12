"use client";

import React from "react";
import { SceneWrapper } from "./SceneWrapper";
import { DeveloperWorkspace } from "./DeveloperWorkspace";

export const HeroScene: React.FC = () => {
  return (
    <SceneWrapper cameraPosition={[0, 0.5, 4.8]} cameraFov={45}>
      <DeveloperWorkspace />
    </SceneWrapper>
  );
};
