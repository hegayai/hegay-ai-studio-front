"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function OpenAIEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">OpenAI Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Multi‑modal creativity, flexible generation, and high‑level intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Creative Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The OpenAI Engine powers expressive creativity, multi‑modal generation,  
            natural language understanding, and flexible reasoning.  
            It excels at storytelling, ideation, visual generation,  
            and adaptive creative workflows across all realms.
          </p>
        </div>

        {/* ENGINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <OpenAICard
            title="Creative Core"
            description="High‑flexibility generation for stories, ideas, and conceptual work."
          />

          <OpenAICard
            title="Multi‑Modal Engine"
            description="Generate or interpret images, audio, and structured content."
          />

          <OpenAICard
            title="Conversational Intelligence"
            description="Natural dialogue, emotional tone control, and adaptive responses."
          />

          <OpenAICard
            title="Imagination Mode"
            description="High‑creativity, high‑fluidity output for artistic workflows."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function OpenAICard({
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
