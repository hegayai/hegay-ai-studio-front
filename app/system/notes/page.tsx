"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function NotesAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Notes</h1>
          <p className="font-ui text-lg text-white/70">
            Capture ideas, drafts, thoughts, and structured knowledge.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Your Thinking Space</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Notes App is designed for clarity, speed, and creative flow.  
            Capture ideas, write drafts, build outlines, and store structured  
            knowledge across realms — all with a clean, cosmic‑minimal interface  
            aligned with the identity of Hegay OS Supreme.
          </p>
        </div>

        {/* NOTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <NotesCard
            title="Quick Notes"
            description="Capture fast thoughts, ideas, and fragments instantly."
          />

          <NotesCard
            title="Documents"
            description="Write long‑form drafts, essays, scripts, and structured content."
          />

          <NotesCard
            title="Outlines"
            description="Build hierarchical outlines for projects and creative systems."
          />

          <NotesCard
            title="Realm Notes"
            description="Store notes linked to specific realms or OS modules."
          />

          <NotesCard
            title="Pinned Notes"
            description="Keep important notes at the top for quick access."
          />

          <NotesCard
            title="Archive"
            description="Organize older notes without deleting them."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function NotesCard({
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
