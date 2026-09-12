"use client";

import React from "react";
import { SceneWrapper } from "./SceneWrapper";
import { PhoneShowcase } from "./PhoneShowcase";

export const PhoneShowcaseScene: React.FC = () => {
  return (
    <SceneWrapper cameraPosition={[0, 0, 5]} cameraFov={45}>
      <PhoneShowcase />
    </SceneWrapper>
  );
};
