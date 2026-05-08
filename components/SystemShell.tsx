"use client";

import React from "react";

import CosmicNebulaLayers from "@/app/components/CosmicNebulaLayers";
import CosmicParticleField from "@/app/components/CosmicParticleField";
import CosmicCursor from "@/app/components/CosmicCursor";
import CosmicWarpTransition from "@/app/components/CosmicWarpTransition";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/os/Topbar";
import Dock from "@/components/os/Dock";

import ScreenDimmer from "@/app/components/ScreenDimmer";
import IdleFade from "@/app/components/IdleFade";

import { MinimalMotionProvider } from "@/app/components/motion/MinimalMotionProvider";

export default function SystemShell({ children }: { children: React.ReactNode }) {
  return (
    <MinimalMotionProvider>
      <CosmicNebulaLayers />
      <CosmicParticleField />

      <CosmicCursor />
      <CosmicWarpTransition />

      <div className="relative flex min-h-screen w-full overflow-hidden font-ui text-platinum">
        <Sidebar />

        <div className="flex flex-col flex-1 min-h-screen relative">
          <Topbar />

          <main className="flex-1 relative z-10 p-6 md:p-10">
            {children}
          </main>

          <Dock />
        </div>
      </div>

      <ScreenDimmer><></></ScreenDimmer>
      <IdleFade />
    </MinimalMotionProvider>
  );
}
