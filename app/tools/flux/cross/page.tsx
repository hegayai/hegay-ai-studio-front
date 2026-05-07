"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CrossRealmFluxPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Cross‑Realm Flux</h1>
          <p className="font-ui text-lg text-white/70">
            Transform assets across Image, Video, Audio, and Text Realms with multidimensional evolution.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Multidimensional Transformation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Cross‑Realm Flux Engine enables creative assets to evolve across dimensions.  
            Convert images into videos, videos into audio, audio into visuals,  
            or merge multiple realms into hybrid creative forms.  
            This is the most powerful Flux system — the bridge between all realms.
          </p>
        </div>

        {/* FLUX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CrossFluxCard
            title="Image → Video"
            description="Animate still images into cinematic motion sequences."
          />

          <CrossFluxCard
            title="Video → Image"
            description="Extract keyframes, styles, or visual identities from motion."
          />

          <CrossFluxCard
            title="Audio → Visual"
            description="Transform sound into abstract or literal visual forms."
          />

          <CrossFluxCard
            title="Hybrid Fusion"
            description="Merge multiple realms into unified multi‑modal outputs."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CrossFluxCard({
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
