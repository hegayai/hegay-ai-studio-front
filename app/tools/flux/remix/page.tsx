"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function RemixEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Remix Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Mutate, evolve, and creatively remix assets across all realms.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Creative Mutation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Remix Engine is your playground for creative evolution.  
            Apply mutations, generate alternate versions, merge styles,  
            and explore unexpected creative directions.  
            This engine thrives on experimentation and discovery.
          </p>
        </div>

        {/* REMIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <RemixCard
            title="Mutation Engine"
            description="Apply controlled or chaotic mutations to any creative asset."
          />

          <RemixCard
            title="Style Fusion"
            description="Blend multiple styles, aesthetics, or identities into one output."
          />

          <RemixCard
            title="Variant Generator"
            description="Produce rapid alternate versions with unique creative twists."
          />

          <RemixCard
            title="Evolution Chains"
            description="Iteratively evolve an asset across multiple remix stages."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function RemixCard({
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
