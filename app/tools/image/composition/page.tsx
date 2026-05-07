"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CompositionLabPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Composition Lab</h1>
          <p className="font-ui text-lg text-white/70">
            Design layouts, framing, balance, and visual structure with precision.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Framing Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Composition Lab helps you craft visually balanced images.  
            Control framing, spacing, rule‑of‑thirds, symmetry, depth,  
            and layout structure to create compelling visual compositions.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CompositionCard
            title="Framing Tools"
            description="Adjust rule‑of‑thirds, center framing, symmetry, and focal points."
          />

          <CompositionCard
            title="Depth & Perspective"
            description="Control depth layers, vanishing points, and spatial relationships."
          />

          <CompositionCard
            title="Layout Designer"
            description="Arrange elements with spacing, alignment, and visual hierarchy."
          />

          <CompositionCard
            title="Balance Engine"
            description="Fine‑tune weight, contrast, and distribution across the frame."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CompositionCard({
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
