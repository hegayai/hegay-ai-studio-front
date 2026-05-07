"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CustomModelsEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Custom Models</h1>
          <p className="font-ui text-lg text-white/70">
            Integrate private, fine‑tuned, and proprietary intelligence systems.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Private Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Custom Models Engine allows you to connect your own AI systems —  
            fine‑tuned models, private endpoints, enterprise intelligence,  
            or experimental architectures.  
            This is where Hegay OS Supreme becomes uniquely yours.
          </p>
        </div>

        {/* ENGINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CustomModelCard
            title="Fine‑Tuned Models"
            description="Integrate models trained on your own datasets and creative archives."
          />

          <CustomModelCard
            title="Private Endpoints"
            description="Connect secure API endpoints for enterprise or personal intelligence."
          />

          <CustomModelCard
            title="Experimental Models"
            description="Test new architectures, prototypes, and research systems."
          />

          <CustomModelCard
            title="Model Manager"
            description="Configure settings, priorities, and routing for custom intelligence."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CustomModelCard({
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
