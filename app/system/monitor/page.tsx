"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function SystemMonitorPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">System Monitor</h1>
          <p className="font-ui text-lg text-white/70">
            View performance metrics, resource usage, and runtime activity.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Live System Overview</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The System Monitor gives you a clear, real‑time view of how  
            Hegay OS Supreme is performing — CPU load, memory usage,  
            background processes, and system health indicators.  
            Designed with a cosmic‑minimal interface for instant clarity.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <MonitorCard
            title="CPU Usage"
            description="Track processor load, active threads, and performance spikes."
          />

          <MonitorCard
            title="Memory"
            description="View RAM usage, cache levels, and memory allocation."
          />

          <MonitorCard
            title="Disk Activity"
            description="Monitor read/write operations and storage performance."
          />

          <MonitorCard
            title="Network"
            description="See upload/download activity and model request traffic."
          />

          <MonitorCard
            title="Background Processes"
            description="Inspect indexing, caching, and async system tasks."
          />

          <MonitorCard
            title="System Health"
            description="Check temperature, stability, and runtime diagnostics."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function MonitorCard({
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
