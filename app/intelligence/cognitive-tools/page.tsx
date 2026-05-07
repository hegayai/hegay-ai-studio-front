"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CognitiveToolsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Cognitive Tools</h1>
          <p className="font-ui text-lg text-white/70">
            Access embeddings, vector search, and knowledge engines.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Deep Intelligence Utilities</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Cognitive Tools provide the deep‑intelligence infrastructure  
            behind Hegay OS Supreme. Generate embeddings, run vector search,  
            build knowledge graphs, and access advanced cognitive utilities  
            that power reasoning, memory, and retrieval across the OS.
          </p>
        </div>

        {/* COGNITIVE TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CognitiveCard
            title="Embeddings"
            description="Generate vector embeddings for text, images, and audio."
          />

          <CognitiveCard
            title="Vector Search"
            description="Search knowledge using high‑dimensional similarity queries."
          />

          <CognitiveCard
            title="Knowledge Graph"
            description="Build and explore structured relationships between concepts."
          />

          <CognitiveCard
            title="Retrieval Engine"
            description="Retrieve relevant information from memory and datasets."
          />

          <CognitiveCard
            title="Cognitive Pipelines"
            description="Chain cognitive tools into multi‑step workflows."
          />

          <CognitiveCard
            title="Export & Integrate"
            description="Connect cognitive tools to other apps and system modules."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CognitiveCard({
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
