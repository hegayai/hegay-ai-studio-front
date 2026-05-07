"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AudioRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Audio Realm</h1>
          <p className="font-ui text-lg text-white/70">
            Explore the dimension of sound creation, transformation, and sonic design.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Sonic Dimension</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Audio Realm is a dedicated creative dimension for sound intelligence.  
            Generate voices, music, soundscapes, and audio effects —  
            or transform existing audio with clarity and cosmic precision.
          </p>
        </div>

        {/* REALM TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AudioRealmCard
            title="Voice Generator"
            description="Create synthetic voices, narrations, and character speech."
          />

          <AudioRealmCard
            title="Music Engine"
            description="Generate melodies, harmonies, rhythms, and full compositions."
          />

          <AudioRealmCard
            title="Soundscape Builder"
            description="Design ambient environments, atmospheres, and spatial audio."
          />

          <AudioRealmCard
            title="Audio Effects Lab"
            description="Apply filters, transformations, and sonic enhancements."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AudioRealmCard({
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
