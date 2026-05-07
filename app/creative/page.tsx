"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function CreativeSuiteHubPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Creative Suite</h1>
          <p className="font-ui text-lg text-white/70">
            Access OS‑grade creative tools for design, media, and imagination.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Creative Tools</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Creative Suite brings together your visual, audio, and generative
            tools into one unified OS environment. From image generation to video,
            audio, and mixed‑media creation — this is where imagination becomes
            production.
          </p>
        </div>

        {/* CREATIVE APPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CreativeCard
            title="Canvas"
            description="Draw, sketch, and design with OS‑grade precision tools."
          />

          <CreativeCard
            title="Studio"
            description="Generate images, concepts, and visual assets using AI engines."
          />

          <CreativeCard
            title="Video Lab"
            description="Create, edit, and generate videos with cinematic tools."
          />

          <CreativeCard
            title="Audio Lab"
            description="Record, edit, and generate soundscapes and voice assets."
          />

          <CreativeCard
            title="Media Mixer"
            description="Blend images, audio, and video into hybrid creative outputs."
          />

          <CreativeCard
            title="Asset Library"
            description="Browse and manage all creative assets across the OS."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function CreativeCard({
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
