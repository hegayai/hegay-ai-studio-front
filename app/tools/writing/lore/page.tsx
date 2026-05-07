"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function LoreBuilderPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Lore Builder</h1>
          <p className="font-ui text-lg text-white/70">
            Expand worlds, civilizations, mythologies, and cosmic histories.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Worldbuilding Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Lore Builder helps you construct deep, interconnected worlds —  
            from ancient mythologies to futuristic civilizations.  
            Define timelines, cultures, cosmic events, and the underlying forces  
            that shape your narrative universe.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <LoreCard
            title="World Origins"
            description="Generate creation myths, cosmic beginnings, and foundational events."
          />

          <LoreCard
            title="Civilizations"
            description="Define societies, cultures, hierarchies, and world systems."
          />

          <LoreCard
            title="Historical Timelines"
            description="Build eras, epochs, wars, revolutions, and turning points."
          />

          <LoreCard
            title="Cosmic Forces"
            description="Shape magic systems, technologies, energies, and metaphysical laws."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function LoreCard({
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
