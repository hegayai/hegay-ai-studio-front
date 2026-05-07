"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function VideoLabAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Video Lab</h1>
          <p className="font-ui text-lg text-white/70">
            Create, edit, and generate videos with cinematic AI tools.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cinematic Creation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Video Lab is your AI‑powered video creation environment inside  
            Hegay OS Supreme. Generate scenes, animate concepts, edit footage,  
            and produce cinematic sequences using integrated engines like Luma,  
            Flux Motion, and OS‑level video tools.
          </p>
        </div>

        {/* VIDEO LAB FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <VideoLabCard
            title="Video Generation"
            description="Generate short clips, scenes, and animations using AI engines."
          />

          <VideoLabCard
            title="Storyboard"
            description="Plan sequences, frames, and visual narratives."
          />

          <VideoLabCard
            title="Editing Tools"
            description="Trim, cut, merge, and enhance video clips with OS‑grade tools."
          />

          <VideoLabCard
            title="Motion Control"
            description="Adjust camera movement, pacing, and cinematic transitions."
          />

          <VideoLabCard
            title="Audio Sync"
            description="Add music, sound effects, and voice tracks to your videos."
          />

          <VideoLabCard
            title="Export & Render"
            description="Render final videos and save them to the Asset Library."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function VideoLabCard({
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
