"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function MediaMixerAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Media Mixer</h1>
          <p className="font-ui text-lg text-white/70">
            Blend images, audio, and video into hybrid creative outputs.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Hybrid Creation</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Media Mixer is your OS‑grade hybrid media environment.  
            Combine images, audio, and video into unified creative outputs.  
            Build mixed‑media compositions, animate stills, sync sound,  
            and generate multi‑layered content with cosmic‑minimal clarity.
          </p>
        </div>

        {/* MEDIA MIXER FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <MediaMixerCard
            title="Image + Audio Fusion"
            description="Blend visuals with soundscapes to create hybrid media pieces."
          />

          <MediaMixerCard
            title="Video Overlays"
            description="Layer images, effects, and audio over video clips."
          />

          <MediaMixerCard
            title="Transitions"
            description="Apply cinematic transitions between media layers."
          />

          <MediaMixerCard
            title="Effects"
            description="Add filters, glows, distortions, and motion effects."
          />

          <MediaMixerCard
            title="Timeline Editor"
            description="Arrange media layers on a clean, OS‑grade timeline."
          />

          <MediaMixerCard
            title="Export"
            description="Render hybrid media outputs and save to the Asset Library."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function MediaMixerCard({
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
