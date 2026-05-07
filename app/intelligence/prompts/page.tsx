"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function PromptsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Prompts</h1>
          <p className="font-ui text-lg text-white/70">
            Create, save, and reuse prompt templates and instructions.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Instruction Engineering</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Prompts are the instruction layer of Hegay OS Supreme.  
            Craft reusable templates, define system behaviors,  
            store creative instructions, and build cognitive workflows  
            with precision and cosmic‑minimal clarity.
          </p>
        </div>

        {/* PROMPTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <PromptsCard
            title="Prompt Templates"
            description="Create reusable templates for reasoning, creativity, and tasks."
          />

          <PromptsCard
            title="Creative Prompts"
            description="Store prompts for image, audio, and video generation."
          />

          <PromptsCard
            title="System Prompts"
            description="Define OS‑level behaviors and cognitive instructions."
          />

          <PromptsCard
            title="Prompt Library"
            description="Organize prompts into categories and collections."
          />

          <PromptsCard
            title="Prompt History"
            description="View previously used prompts and refine them."
          />

          <PromptsCard
            title="Export & Sync"
            description="Sync prompts across realms or export for backups."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function PromptsCard({
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
