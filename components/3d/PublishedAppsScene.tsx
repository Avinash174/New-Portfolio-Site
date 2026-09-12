"use client";

import React from "react";
import { SceneWrapper } from "./SceneWrapper";
import { PublishedAppsStage } from "./PublishedAppsStage";

export const PublishedAppsScene: React.FC = () => {
  return (
    <SceneWrapper cameraPosition={[0, 0.2, 5.2]} cameraFov={45}>
      <PublishedAppsStage />
    </SceneWrapper>
  );
};
