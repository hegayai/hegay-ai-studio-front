"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FluxPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Flux Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Visualize, orchestrate, and optimize system flows across your creative universe.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Flow Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Flux Engine reveals how processes move through your system —  
            from AI workflows to creative pipelines, from realm interactions  
            to universe‑level transitions.  
            This is where you understand motion, energy, and flow.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <FluxCard
            title="Pipelines"
            description="Define and manage automated creative workflows."
          />

          <FluxCard
            title="Transitions"
            description="Visualize how data and ideas move across realms."
          />

          <FluxCard
            title="System Events"
            description="Monitor triggers, signals, and flow‑based intelligence."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FluxCard
            title="Flow Graph"
            description="A visual map of your system’s dynamic interactions."
          />

          <FluxCard
            title="Performance Metrics"
            description="Track flow efficiency, bottlenecks, and system health."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FluxCard({
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
