"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ScriptEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Script Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Write scenes, screenplays, and cinematic sequences with precision and creative flow.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cinematic Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Script Engine helps you craft film‑grade scenes, dialogue,  
            and visual storytelling moments.  
            Build screenplay structures, shot descriptions, pacing,  
            and cinematic rhythm with cosmic clarity.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ScriptCard
            title="Scene Builder"
            description="Generate structured scenes with action, dialogue, and beats."
          />

          <ScriptCard
            title="Screenplay Format"
            description="Produce industry‑standard screenplay formatting and layout."
          />

          <ScriptCard
            title="Shot Designer"
            description="Create camera angles, movements, and visual compositions."
          />

          <ScriptCard
            title="Cinematic Pacing"
            description="Shape tension, rhythm, and emotional flow across scenes."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ScriptCard({
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
