"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CosmicRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Cosmic Realm</h1>
          <p className="font-ui text-lg text-white/70">
            Enter the meta‑dimension that connects all realms, engines, and creative systems.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Meta‑Dimension</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Cosmic Realm is the highest layer of your OS —  
            a space where all creative dimensions converge.  
            Navigate between realms, access cosmic tools,  
            and explore the architecture that powers your universe.
          </p>
        </div>

        {/* COSMIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CosmicCard
            title="Realm Navigator"
            description="Travel between Image, Video, Audio, and Text Realms seamlessly."
          />

          <CosmicCard
            title="Cosmic Map"
            description="Visualize the structure of your creative universe."
          />

          <CosmicCard
            title="Energy Systems"
            description="Explore the forces that power engines, tools, and workflows."
          />

          <CosmicCard
            title="Meta Tools"
            description="Access high‑level utilities that operate across all realms."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CosmicCard({
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
