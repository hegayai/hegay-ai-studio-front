"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CanvasAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Canvas</h1>
          <p className="font-ui text-lg text-white/70">
            Draw, sketch, design, and create with OS‑grade precision tools.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Creative Surface</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Canvas App is your infinite creative surface inside  
            Hegay OS Supreme. Draw, sketch, design interfaces,  
            storyboard ideas, or create visual concepts with  
            cosmic‑minimal clarity and fluid OS‑grade tools.
          </p>
        </div>

        {/* CANVAS FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CanvasCard
            title="Drawing Tools"
            description="Pencil, brush, marker, shapes, and precision vector tools."
          />

          <CanvasCard
            title="Layers"
            description="Organize artwork with layers, blending, and opacity control."
          />

          <CanvasCard
            title="Color System"
            description="Access palettes, gradients, cosmic glows, and custom swatches."
          />

          <CanvasCard
            title="Assets"
            description="Import images, icons, and components directly into the canvas."
          />

          <CanvasCard
            title="AI Assist"
            description="Generate shapes, refine sketches, or expand concepts with AI."
          />

          <CanvasCard
            title="Export"
            description="Save artwork to your Asset Library or export to other apps."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CanvasCard({
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
