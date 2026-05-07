"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function VideoRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Video Realm</h1>
          <p className="font-ui text-lg text-white/70">
            Explore the dimension of cinematic creation, editing, and motion design.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cinematic Dimension</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Video Realm is a dedicated creative dimension for motion intelligence.  
            Generate clips, edit sequences, apply cinematic styles,  
            and explore advanced video workflows — all within a unified realm.
          </p>
        </div>

        {/* REALM TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <VideoRealmCard
            title="Video Generator"
            description="Create short cinematic clips from prompts and concepts."
          />

          <VideoRealmCard
            title="Motion Editor"
            description="Edit sequences, transitions, pacing, and visual rhythm."
          />

          <VideoRealmCard
            title="Cinematic Styles"
            description="Apply film looks, color grading, and motion aesthetics."
          />

          <VideoRealmCard
            title="Storyboard Engine"
            description="Design shot sequences, scene flow, and visual narratives."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function VideoRealmCard({
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
