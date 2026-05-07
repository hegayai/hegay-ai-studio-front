"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FluxModelEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Flux Model Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Visual generation, diffusion intelligence, and image evolution models.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Diffusion Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Flux Model Engine powers high‑fidelity image generation,  
            diffusion workflows, and visual evolution.  
            It specializes in style control, structural consistency,  
            and multi‑stage transformation pipelines.
          </p>
        </div>

        {/* ENGINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FluxModelCard
            title="Diffusion Core"
            description="High‑resolution image generation with precise style control."
          />

          <FluxModelCard
            title="Evolution Engine"
            description="Iterative image refinement and multi‑stage visual evolution."
          />

          <FluxModelCard
            title="Style Models"
            description="Model presets for cinematic, artistic, and aesthetic outputs."
          />

          <FluxModelCard
            title="Control Systems"
            description="Use depth, pose, edge, and structure guidance for accuracy."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FluxModelCard({
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
