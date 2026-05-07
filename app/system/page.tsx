"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function SystemAppsHubPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">System Apps</h1>
          <p className="font-ui text-lg text-white/70">
            Access core applications that power Hegay OS Supreme.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Core OS Applications</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The System Apps Hub provides quick access to essential built‑in apps  
            that form the backbone of your OS — from file management and notes  
            to system monitoring and creative utilities.  
            These apps are optimized for speed, clarity, and cosmic‑minimal design.
          </p>
        </div>

        {/* APPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <SystemAppCard
            title="Files"
            description="Browse, organize, and manage your documents and creative assets."
          />

          <SystemAppCard
            title="Notes"
            description="Capture ideas, drafts, and structured thoughts with OS‑grade clarity."
          />

          <SystemAppCard
            title="System Monitor"
            description="View performance metrics, resource usage, and runtime activity."
          />

          <SystemAppCard
            title="Clipboard"
            description="Access your clipboard history and manage copied content."
          />

          <SystemAppCard
            title="Tasks"
            description="Track goals, to‑dos, and creative workflows across realms."
          />

          <SystemAppCard
            title="Terminal"
            description="Use command‑line tools and developer utilities inside your OS."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function SystemAppCard({
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
