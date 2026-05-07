"use client";

import React from "react";
import CosmicNebulaLayers from "./CosmicNebulaLayers";
import CosmicParticleField from "./CosmicParticleField";
import CosmicCursor from "./CosmicCursor";
import CosmicWarpTransition from "./CosmicWarpTransition";
import WorldSoulAura from "../worldsoul/WorldSoulAura";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dock from "./Dock";
import ScreenDimmer from "./ScreenDimmer";
import IdleFade from "./IdleFade";
import MotionProvider from "./motion/MinimalMotionProvider";

export default function SystemShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      {/* Cosmic Background Layers */}
      <CosmicNebulaLayers />
      <CosmicParticleField />
      <WorldSoulAura />

      {/* Cursor + Warp Engine */}
      <CosmicCursor />
      <CosmicWarpTransition />

      {/* UI Shell */}
      <div className="relative flex min-h-screen w-full overflow-hidden font-ui text-platinum">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-h-screen relative">
          {/* Topbar */}
          <Topbar />

          {/* Page Content */}
          <main className="flex-1 relative z-10 p-6 md:p-10">
            {children}
          </main>

          {/* Dock */}
          <Dock />
        </div>
      </div>

      {/* Ambient Systems */}
      <ScreenDimmer />
      <IdleFade />
    </MotionProvider>
  );
}
