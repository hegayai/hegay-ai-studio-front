"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function DeveloperModeSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Developer Mode</h1>
          <p className="font-ui text-lg text-white/70">
            Enable advanced tools, logs, experiments, and system‑level controls.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Advanced Controls</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Developer Mode unlocks deeper access to Hegay OS Supreme —  
            including experimental features, system logs, debugging tools,  
            and internal architecture controls.  
            This is where creators, engineers, and architects shape the OS itself.
          </p>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <DeveloperCard
            title="Debug Tools"
            description="Enable console logs, error overlays, and diagnostic panels."
          />

          <DeveloperCard
            title="Experimental Features"
            description="Access beta modules, prototype engines, and hidden capabilities."
          />

          <DeveloperCard
            title="System Logs"
            description="View runtime logs, performance traces, and event streams."
          />

          <DeveloperCard
            title="Sandbox Mode"
            description="Test features in isolated environments without affecting the OS."
          />

          <DeveloperCard
            title="API Console"
            description="Send test requests to models, tools, and internal endpoints."
          />

          <DeveloperCard
            title="Developer Permissions"
            description="Control access to internal modules, realms, and system layers."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function DeveloperCard({
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
