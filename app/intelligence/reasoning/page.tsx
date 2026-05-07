"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ReasoningEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Reasoning Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Advanced logic, planning, and cognitive processing tools.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cognitive Processing</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Reasoning Engine is the core of structured thinking inside  
            Hegay OS Supreme. Use it for logic chains, planning, analysis,  
            decision‑making, and multi‑step cognitive workflows.  
            Designed for clarity, precision, and cosmic‑minimal intelligence.
          </p>
        </div>

        {/* REASONING FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ReasoningCard
            title="Logic Chains"
            description="Build multi‑step reasoning sequences with clarity."
          />

          <ReasoningCard
            title="Planning"
            description="Generate structured plans, timelines, and execution paths."
          />

          <ReasoningCard
            title="Analysis"
            description="Break down problems, compare options, and evaluate outcomes."
          />

          <ReasoningCard
            title="Simulations"
            description="Run hypothetical scenarios and cognitive simulations."
          />

          <ReasoningCard
            title="Explainability"
            description="View reasoning traces and cognitive breakdowns."
          />

          <ReasoningCard
            title="Export"
            description="Save reasoning outputs to Notes, Tasks, or Projects."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ReasoningCard({
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
