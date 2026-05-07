"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function StoryGeneratorPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Story Generator</h1>
          <p className="font-ui text-lg text-white/70">
            Generate plots, arcs, and narrative structures with cosmic intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Narrative Engine</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Story Generator helps you craft compelling narratives —  
            from short stories to epic sagas.  
            Define characters, settings, conflicts, and arcs with precision  
            and cosmic creativity.
          </p>
        </div>

        {/* TOOL SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <StoryCard
            title="Plot Generator"
            description="Create story structures, arcs, and narrative blueprints."
          />

          <StoryCard
            title="Character Builder"
            description="Define personalities, motivations, and character evolution."
          />

          <StoryCard
            title="World Context"
            description="Generate settings, cultures, and environmental details."
          />

          <StoryCard
            title="Conflict Engine"
            description="Design tension, stakes, and narrative challenges."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function StoryCard({
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
