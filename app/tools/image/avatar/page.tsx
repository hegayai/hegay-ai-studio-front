"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AvatarEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Avatar Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Generate character portraits, identity visuals, and stylized avatars.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Identity Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Avatar Engine creates expressive character portraits and identity visuals.  
            Define personality, style, ethnicity, mood, and artistic direction  
            to generate avatars for stories, profiles, worlds, and creative universes.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AvatarCard
            title="Portrait Generator"
            description="Create realistic or stylized character portraits from prompts."
          />

          <AvatarCard
            title="Style Selector"
            description="Choose artistic styles, rendering modes, and visual identities."
          />

          <AvatarCard
            title="Character Identity"
            description="Define personality traits, backstory, and emotional tone."
          />

          <AvatarCard
            title="Variation Engine"
            description="Generate alternate looks, outfits, and expressive variations."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AvatarCard({
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
