"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ModelsHubPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Models Hub</h1>
          <p className="font-ui text-lg text-white/70">
            Manage AI models, engines, and intelligence systems across your OS.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Intelligence Systems</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Models Hub is the central control space for all AI engines powering  
            Hegay OS Supreme. Configure model preferences, switch providers,  
            manage capabilities, and explore advanced intelligence modules.
          </p>
        </div>

        {/* MODELS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ModelCard
            title="DeepSeek Engine"
            description="High‑performance reasoning, coding, and analytical intelligence."
          />

          <ModelCard
            title="OpenAI Engine"
            description="Creative generation, multi‑modal intelligence, and flexible workflows."
          />

          <ModelCard
            title="Flux Engine"
            description="Visual transformation, diffusion models, and image evolution."
          />

          <ModelCard
            title="Luma Engine"
            description="Video generation, motion synthesis, and cinematic intelligence."
          />

          <ModelCard
            title="Custom Models"
            description="Integrate your own fine‑tuned or private intelligence systems."
          />

          <ModelCard
            title="Model Settings"
            description="Control temperature, creativity, safety, and performance modes."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ModelCard({
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
