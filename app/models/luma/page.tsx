"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function LumaEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Luma Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Video generation, motion synthesis, and cinematic intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cinematic Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Luma Engine powers high‑fidelity video generation,  
            motion synthesis, and cinematic transformations.  
            It specializes in dynamic scenes, realistic movement,  
            and expressive visual storytelling across your OS.
          </p>
        </div>

        {/* ENGINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <LumaCard
            title="Motion Core"
            description="Generate realistic movement, camera motion, and dynamic scenes."
          />

          <LumaCard
            title="Video Generator"
            description="Create cinematic clips from prompts, images, or hybrid inputs."
          />

          <LumaCard
            title="Scene Engine"
            description="Build environments, lighting, and atmospheric motion."
          />

          <LumaCard
            title="Cinematic Styles"
            description="Apply film looks, color grading, and motion aesthetics."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function LumaCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60">{description}</p>
    </div>
  );
}
