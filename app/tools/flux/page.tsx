"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FluxEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Flux Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Transform, evolve, remix, and reshape creative assets across all realms.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Transformation Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Flux Engine is your universal transformation system.  
            Convert images, videos, audio, and text into new forms.  
            Apply remixes, evolutions, cross‑realm transformations,  
            and dynamic creative mutations with cosmic precision.
          </p>
        </div>

        {/* FLUX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FluxCard
            title="Image‑to‑Image"
            description="Transform existing images into new styles, forms, or variations."
          />

          <FluxCard
            title="Text‑to‑Anything"
            description="Convert text prompts into images, audio, video, or hybrids."
          />

          <FluxCard
            title="Cross‑Realm Flux"
            description="Move assets between realms and evolve them across dimensions."
          />

          <FluxCard
            title="Remix Engine"
            description="Apply mutations, evolutions, and creative remixes."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FluxCard({
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
