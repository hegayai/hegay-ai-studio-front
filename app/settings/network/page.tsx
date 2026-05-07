"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function NetworkSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Network</h1>
          <p className="font-ui text-lg text-white/70">
            Configure Wi‑Fi, connections, and network preferences.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Connectivity Control</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Network settings manage how Hegay OS Supreme connects to the world.  
            Configure Wi‑Fi, VPN, hotspots, data usage, and advanced network  
            preferences with cosmic‑minimal clarity and OS‑grade precision.
          </p>
        </div>

        {/* NETWORK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <NetworkCard
            title="Wi‑Fi"
            description="Connect to networks, manage saved networks, and set priorities."
          />

          <NetworkCard
            title="Hotspot"
            description="Share your connection with other devices."
          />

          <NetworkCard
            title="VPN"
            description="Configure secure tunnels and encrypted connections."
          />

          <NetworkCard
            title="Data Usage"
            description="Monitor bandwidth and set data limits."
          />

          <NetworkCard
            title="Advanced Settings"
            description="DNS, proxies, IP settings, and developer networking tools."
          />

          <NetworkCard
            title="Connection Logs"
            description="View connection history and diagnostic information."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function NetworkCard({
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
