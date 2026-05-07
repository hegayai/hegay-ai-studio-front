"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function GovernanceRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Governance Realm</h1>
          <p className="font-ui text-lg text-white/70">
            The structural backbone of your civilization — power, law, order, and leadership.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Governance Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Governance Realm defines how your civilization organizes itself.  
            Here you shape political systems, leadership structures, laws,  
            justice frameworks, and the mechanisms that maintain order and stability.  
            This is the realm of authority, structure, and societal architecture.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <GovernanceCard
            title="Political Systems"
            description="Define leadership models, hierarchies, and power structures."
          />

          <GovernanceCard
            title="Law & Justice"
            description="Create legal frameworks, rights, ethics, and enforcement systems."
          />

          <GovernanceCard
            title="Societal Structure"
            description="Design classes, roles, institutions, and civic organization."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <GovernanceCard
            title="Conflict Resolution"
            description="Mechanisms for diplomacy, negotiation, and internal stability."
          />

          <GovernanceCard
            title="Governance Lore"
            description="Historical rulers, political events, and foundational documents."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function GovernanceCard({
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
