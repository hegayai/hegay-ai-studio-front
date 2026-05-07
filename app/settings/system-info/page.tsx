"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function SystemInfoPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">System Info</h1>
          <p className="font-ui text-lg text-white/70">
            View OS version, hardware details, and diagnostics.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">System Identity</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            System Info provides a complete overview of Hegay OS Supreme.  
            View OS version, hardware specifications, diagnostics, uptime,  
            and system health with cosmic‑minimal clarity and OS‑grade precision.
          </p>
        </div>

        {/* SYSTEM INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <SystemInfoCard
            title="OS Version"
            description="View the current version of Hegay OS Supreme."
          />

          <SystemInfoCard
            title="Hardware"
            description="See CPU, GPU, RAM, and device specifications."
          />

          <SystemInfoCard
            title="Diagnostics"
            description="Run system checks and view diagnostic reports."
          />

          <SystemInfoCard
            title="Uptime"
            description="Track how long the system has been running."
          />

          <SystemInfoCard
            title="System Health"
            description="Monitor performance, temperature, and stability."
          />

          <SystemInfoCard
            title="Legal & Licenses"
            description="View licenses, acknowledgements, and legal information."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function SystemInfoCard({
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
