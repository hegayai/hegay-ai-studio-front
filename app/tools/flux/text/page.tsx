"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FluxTextEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Text‑to‑Anything Flux</h1>
          <p className="font-ui text-lg text-white/70">
            Convert text prompts into images, audio, video, or hybrid creative forms.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Universal Conversion</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Text‑to‑Anything Flux Engine transforms written prompts into  
            visuals, sound, motion, or multi‑modal hybrids.  
            It is the most flexible Flux system — capable of generating  
            cross‑realm outputs from pure language.
          </p>
        </div>

        {/* FLUX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FluxTextCard
            title="Text‑to‑Image"
            description="Generate visuals from descriptive or abstract prompts."
          />

          <FluxTextCard
            title="Text‑to‑Audio"
            description="Create soundscapes, voices, or music from written descriptions."
          />

          <FluxTextCard
            title="Text‑to‑Video"
            description="Produce short cinematic sequences from narrative prompts."
          />

          <FluxTextCard
            title="Hybrid Flux"
            description="Generate multi‑modal outputs combining image, audio, and motion."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FluxTextCard({
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
