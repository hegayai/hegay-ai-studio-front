"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ImageGeneratorPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Image Generator</h1>
          <p className="font-ui text-lg text-white/70">
            Generate high‑fidelity images from prompts with cosmic precision.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Generation Engine</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Image Generator transforms your ideas into visuals.  
            Craft detailed prompts, control styles, adjust composition,  
            and generate images with clarity and creative intelligence.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <GeneratorCard
            title="Prompt Builder"
            description="Craft detailed prompts with style, mood, and composition controls."
          />

          <GeneratorCard
            title="Style Controls"
            description="Apply artistic styles, lighting, textures, and visual aesthetics."
          />

          <GeneratorCard
            title="Resolution Engine"
            description="Generate images in multiple resolutions and aspect ratios."
          />

          <GeneratorCard
            title="Variation Engine"
            description="Create alternate versions, remixes, and iterative evolutions."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function GeneratorCard({
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
