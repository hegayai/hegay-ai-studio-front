"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function PerformanceSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Performance</h1>
          <p className="font-ui text-lg text-white/70">
            Control system load, caching, optimization modes, and runtime behavior.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">System Optimization</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Performance Settings allow you to fine‑tune how Hegay OS Supreme  
            allocates resources, handles caching, and balances speed with quality.  
            This is where you optimize the heartbeat of your OS.
          </p>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <PerformanceCard
            title="Optimization Mode"
            description="Switch between Balanced, High Performance, or Energy Saver modes."
          />

          <PerformanceCard
            title="Cache Control"
            description="Manage asset caching, model caching, and memory persistence."
          />

          <PerformanceCard
            title="Rendering Engine"
            description="Choose rendering quality, resolution scaling, and GPU usage."
          />

          <PerformanceCard
            title="Background Processes"
            description="Control background tasks, indexing, and async operations."
          />

          <PerformanceCard
            title="Network Priority"
            description="Adjust bandwidth allocation and model request priority."
          />

          <PerformanceCard
            title="System Diagnostics"
            description="Monitor performance metrics, logs, and runtime health."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function PerformanceCard({
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
