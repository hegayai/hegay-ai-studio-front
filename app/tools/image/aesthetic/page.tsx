"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AestheticEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Aesthetic Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Apply styles, moods, lighting, and artistic transformations to images.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Style Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Aesthetic Engine enhances and transforms images with artistic precision.  
            Adjust lighting, color grading, mood, texture, and stylistic identity  
            to create visuals that match your creative vision.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AestheticCard
            title="Style Transfer"
            description="Apply artistic styles, textures, and visual identities."
          />

          <AestheticCard
            title="Color Grading"
            description="Control tones, palettes, contrast, and cinematic color profiles."
          />

          <AestheticCard
            title="Lighting Engine"
            description="Adjust lighting direction, intensity, shadows, and highlights."
          />

          <AestheticCard
            title="Mood Designer"
            description="Create emotional atmospheres through tone and visual energy."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AestheticCard({
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
