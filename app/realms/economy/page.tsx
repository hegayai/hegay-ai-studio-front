"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function EconomyRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Economy Realm</h1>
          <p className="font-ui text-lg text-white/70">
            The engine of value — trade, resources, production, and prosperity.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Economic Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Economy Realm defines how your civilization creates, distributes,  
            and sustains value.  
            Here you shape currencies, trade networks, production systems,  
            resource flows, and the mechanisms that support growth and stability.  
            This is the realm of prosperity, exchange, and systemic balance.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <EconomyCard
            title="Currency Systems"
            description="Define money, value units, exchange models, and economic identity."
          />

          <EconomyCard
            title="Trade Networks"
            description="Design routes, markets, exchanges, and inter‑realm commerce."
          />

          <EconomyCard
            title="Production Chains"
            description="Map how goods, services, and resources are created."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <EconomyCard
            title="Resource Systems"
            description="Track energy, materials, scarcity, and abundance."
          />

          <EconomyCard
            title="Economic Lore"
            description="Historical booms, collapses, trade wars, and prosperity cycles."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function EconomyCard({
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
