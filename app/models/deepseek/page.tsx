"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function DeepSeekEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">DeepSeek Engine</h1>
          <p className="font-ui text-lg text-white/70">
            High‑performance reasoning, coding, analysis, and structured intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Analytical Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The DeepSeek Engine powers advanced reasoning, coding workflows,  
            data analysis, and structured problem‑solving.  
            It excels at precision, logic, and high‑clarity output generation  
            across technical and analytical domains.
          </p>
        </div>

        {/* ENGINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <DeepSeekCard
            title="Reasoning Core"
            description="High‑clarity logic, structured analysis, and stepwise problem solving."
          />

          <DeepSeekCard
            title="Coding Engine"
            description="Advanced code generation, debugging, refactoring, and architecture design."
          />

          <DeepSeekCard
            title="Data Intelligence"
            description="Process datasets, extract insights, and generate analytical reports."
          />

          <DeepSeekCard
            title="Precision Mode"
            description="Low‑creativity, high‑accuracy responses for technical workflows."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function DeepSeekCard({
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
