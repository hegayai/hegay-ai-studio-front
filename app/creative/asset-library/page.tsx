"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AssetLibraryPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Asset Library</h1>
          <p className="font-ui text-lg text-white/70">
            Browse and manage all creative assets across the OS.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Creative Vault</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Asset Library is your unified vault for every creative output  
            inside Hegay OS Supreme — images, videos, audio files, mixed‑media  
            compositions, canvas exports, and system‑generated assets.  
            Organized, searchable, and cosmic‑minimal.
          </p>
        </div>

        {/* ASSET LIBRARY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AssetCard
            title="Images"
            description="Browse generated images, artwork, and visual assets."
          />

          <AssetCard
            title="Videos"
            description="Access rendered clips, animations, and cinematic outputs."
          />

          <AssetCard
            title="Audio"
            description="Manage music, voice assets, and sound effects."
          />

          <AssetCard
            title="Mixed Media"
            description="View hybrid outputs created in Media Mixer."
          />

          <AssetCard
            title="Canvas Exports"
            description="Find artwork and designs exported from Canvas."
          />

          <AssetCard
            title="Collections"
            description="Organize assets into folders, sets, and creative groups."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AssetCard({
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
