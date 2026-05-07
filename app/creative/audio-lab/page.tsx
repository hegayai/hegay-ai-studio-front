"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AudioLabAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Audio Lab</h1>
          <p className="font-ui text-lg text-white/70">
            Record, edit, and generate soundscapes, music, and voice assets.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Sound Creation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Audio Lab is your OS‑grade environment for sound design,  
            voice generation, music creation, and audio editing.  
            Powered by integrated AI engines and cosmic‑minimal tools,  
            it gives you full control over the sonic dimension of  
            Hegay OS Supreme.
          </p>
        </div>

        {/* AUDIO LAB FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AudioLabCard
            title="Voice Generation"
            description="Generate voices, narrations, and character audio using AI."
          />

          <AudioLabCard
            title="Music Creation"
            description="Compose tracks, loops, and ambient soundscapes."
          />

          <AudioLabCard
            title="Audio Editing"
            description="Cut, trim, mix, and enhance audio clips with OS‑grade tools."
          />

          <AudioLabCard
            title="Sound Effects"
            description="Generate or import SFX for video, games, and creative projects."
          />

          <AudioLabCard
            title="Recording"
            description="Record voice or instruments directly into the OS."
          />

          <AudioLabCard
            title="Export & Mixdown"
            description="Render final audio files and save them to the Asset Library."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AudioLabCard({
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
