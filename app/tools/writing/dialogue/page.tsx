"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function DialogueEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Dialogue Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Generate character conversations, emotional exchanges, and interactive dialogue flows.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Conversational Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Dialogue Engine helps you craft dynamic conversations between characters —  
            from subtle emotional exchanges to intense confrontations.  
            Build personality‑driven dialogue, branching interactions,  
            and cinematic exchanges with precision and cosmic clarity.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <DialogueCard
            title="Character Voices"
            description="Define tone, personality, and linguistic style for each character."
          />

          <DialogueCard
            title="Conversation Builder"
            description="Generate multi‑turn dialogue sequences and emotional beats."
          />

          <DialogueCard
            title="Branching Dialogue"
            description="Create interactive dialogue trees and narrative choices."
          />

          <DialogueCard
            title="Emotional Dynamics"
            description="Shape tension, subtext, and emotional progression."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function DialogueCard({
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
