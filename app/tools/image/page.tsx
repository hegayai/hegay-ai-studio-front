"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ImageStudioPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Image Studio</h1>
          <p className="font-ui text-lg text-white/70">
            Generate, enhance, transform, and evolve images with cosmic precision.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Visual Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Image Studio is your command center for visual creation.  
            Generate new images, enhance existing ones, apply styles,  
            and explore advanced visual tools powered by your creative OS.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ImageCard
            title="Image Generator"
            description="Create images from prompts with high‑fidelity rendering."
          />

          <ImageCard
            title="Aesthetic Engine"
            description="Apply styles, moods, and artistic transformations."
          />

          <ImageCard
            title="Avatar Engine"
            description="Generate character portraits, avatars, and identity visuals."
          />

          <ImageCard
            title="Composition Lab"
            description="Design layouts, framing, and visual compositions."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ImageCard({
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
