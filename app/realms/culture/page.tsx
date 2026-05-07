"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CultureRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Culture Realm</h1>
          <p className="font-ui text-lg text-white/70">
            The soul of your civilization — art, language, rituals, and identity.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cultural Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Culture Realm defines how your civilization expresses itself.  
            Here you shape aesthetics, language systems, rituals, values,  
            and the emotional identity that binds your worlds together.  
            This is the realm of meaning, symbolism, and collective memory.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <CultureCard
            title="Aesthetics"
            description="Visual identity, design language, symbols, and artistic style."
          />

          <CultureCard
            title="Language Systems"
            description="Construct alphabets, scripts, dialects, and communication forms."
          />

          <CultureCard
            title="Rituals & Traditions"
            description="Define ceremonies, customs, and cultural practices."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CultureCard
            title="Values & Philosophy"
            description="Core beliefs, ethics, and worldview of your civilization."
          />

          <CultureCard
            title="Cultural Lore"
            description="Stories, myths, heroes, and collective memory."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CultureCard({
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
