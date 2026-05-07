"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FluxImageEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Image‑to‑Image Flux</h1>
          <p className="font-ui text-lg text-white/70">
            Transform existing images into new styles, forms, and creative evolutions.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Visual Transformation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Image‑to‑Image Flux Engine allows you to reshape visuals with precision.  
            Apply stylistic transformations, structural changes, remixes, and  
            evolutionary mutations — all while preserving core identity.
          </p>
        </div>

        {/* FLUX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FluxImageCard
            title="Style Flux"
            description="Transform the image into new artistic styles and aesthetics."
          />

          <FluxImageCard
            title="Structural Flux"
            description="Modify shapes, forms, proportions, and visual geometry."
          />

          <FluxImageCard
            title="Remix Variations"
            description="Generate alternate versions, mutations, and creative remixes."
          />

          <FluxImageCard
            title="Evolution Engine"
            description="Iteratively evolve the image across multiple transformation stages."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FluxImageCard({
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
