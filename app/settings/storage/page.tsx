"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function StorageSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Storage</h1>
          <p className="font-ui text-lg text-white/70">
            View disk usage, clean space, and manage system files.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">System Storage</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Storage settings give you a clear overview of how space is used  
            across Hegay OS Supreme. Analyze disk usage, clean temporary files,  
            manage large assets, and optimize system performance with  
            cosmic‑minimal clarity.
          </p>
        </div>

        {/* STORAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <StorageCard
            title="Disk Usage"
            description="View how storage is distributed across apps and files."
          />

          <StorageCard
            title="Cleanup Tools"
            description="Remove temporary files, caches, and unused system data."
          />

          <StorageCard
            title="Large Files"
            description="Identify and manage large assets taking up space."
          />

          <StorageCard
            title="App Storage"
            description="See how much space each app consumes."
          />

          <StorageCard
            title="Cloud Sync"
            description="Manage cloud‑linked storage and sync preferences."
          />

          <StorageCard
            title="Backups"
            description="Configure system backups and restore points."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function StorageCard({
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
