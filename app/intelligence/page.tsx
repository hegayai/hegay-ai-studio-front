"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function IntelligenceHubPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Intelligence</h1>
          <p className="font-ui text-lg text-white/70">
            Access AI models, agents, reasoning tools, and cognitive engines.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cognitive Core</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Intelligence Hub is the neural center of Hegay OS Supreme.  
            Access reasoning engines, AI agents, model settings, memory tools,  
            and cognitive workflows that power the OS.  
            This is where intelligence becomes architecture.
          </p>
        </div>

        {/* INTELLIGENCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <IntelligenceCard
            title="Reasoning Engine"
            description="Use advanced reasoning tools for logic, planning, and analysis."
          />

          <IntelligenceCard
            title="Agents"
            description="Deploy autonomous agents for tasks, workflows, and automation."
          />

          <IntelligenceCard
            title="Models"
            description="Select and configure AI models powering the OS."
          />

          <IntelligenceCard
            title="Memory"
            description="Manage long‑term memory, context, and cognitive storage."
          />

          <IntelligenceCard
            title="Prompts"
            description="Create, save, and reuse prompt templates and instructions."
          />

          <IntelligenceCard
            title="Cognitive Tools"
            description="Access embeddings, vector search, and knowledge engines."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function IntelligenceCard({
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
