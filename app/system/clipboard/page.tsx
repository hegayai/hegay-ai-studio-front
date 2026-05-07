"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ClipboardAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Clipboard</h1>
          <p className="font-ui text-lg text-white/70">
            Access your clipboard history and manage copied content.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Memory Stream</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Clipboard App stores your copied text, media, and snippets  
            in a clean, organized, OS‑grade interface.  
            Quickly retrieve past items, pin important content,  
            and manage your creative memory with cosmic clarity.
          </p>
        </div>

        {/* CLIPBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ClipboardCard
            title="History"
            description="Browse your full clipboard history with timestamps."
          />

          <ClipboardCard
            title="Pinned Items"
            description="Keep essential snippets always accessible."
          />

          <ClipboardCard
            title="Media Clips"
            description="View copied images, thumbnails, and visual snippets."
          />

          <ClipboardCard
            title="Text Snippets"
            description="Access copied text, prompts, and structured fragments."
          />

          <ClipboardCard
            title="Clear Clipboard"
            description="Erase history or reset the clipboard memory."
          />

          <ClipboardCard
            title="Sync"
            description="Enable cross‑realm clipboard syncing across the OS."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ClipboardCard({
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
