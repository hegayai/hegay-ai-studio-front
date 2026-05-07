"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function FilesAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Files</h1>
          <p className="font-ui text-lg text-white/70">
            Browse, organize, and manage your documents and creative assets.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">File Management</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Files App is your central hub for navigating the creative universe  
            inside Hegay OS Supreme. Access documents, assets, system files,  
            and realm‑specific directories with a clean, cosmic‑minimal interface.
          </p>
        </div>

        {/* FILE SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FilesCard
            title="Documents"
            description="Access text files, notes, drafts, and structured content."
          />

          <FilesCard
            title="Media"
            description="Browse images, videos, audio, and creative assets."
          />

          <FilesCard
            title="Projects"
            description="Open project folders, realm files, and OS‑level workspaces."
          />

          <FilesCard
            title="System"
            description="View internal OS files, logs, and configuration layers."
          />

          <FilesCard
            title="Recent"
            description="Quickly access your most recently opened files."
          />

          <FilesCard
            title="Favorites"
            description="Pin important files and directories for fast access."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function FilesCard({
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
