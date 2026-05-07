"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ImageRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Image Realm</h1>
          <p className="font-ui text-lg text-white/70">
            Explore the dimension of visual creation, transformation, and evolution.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Visual Dimension</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Image Realm is a dedicated creative dimension for visual intelligence.  
            Navigate between generation, enhancement, style transformation,  
            avatar creation, and compositional design — all within a unified realm.
          </p>
        </div>

        {/* REALM TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <RealmToolCard
            title="Image Generator"
            description="Create visuals from prompts with high‑fidelity rendering."
          />

          <RealmToolCard
            title="Aesthetic Engine"
            description="Apply styles, moods, lighting, and artistic transformations."
          />

          <RealmToolCard
            title="Avatar Engine"
            description="Generate character portraits and identity visuals."
          />

          <RealmToolCard
            title="Composition Lab"
            description="Design framing, balance, and visual structure."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function RealmToolCard({
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
