"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function MemoryPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Memory</h1>
          <p className="font-ui text-lg text-white/70">
            Manage long‑term memory, context, and cognitive storage.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Cognitive Storage</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Memory is the persistent cognitive layer of Hegay OS Supreme.  
            Store long‑term knowledge, retrieve context, manage embeddings,  
            and control how the OS remembers and reasons over time.  
            Designed for clarity, precision, and cosmic‑minimal intelligence.
          </p>
        </div>

        {/* MEMORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <MemoryCard
            title="Long‑Term Memory"
            description="Store persistent knowledge and OS‑level context."
          />

          <MemoryCard
            title="Short‑Term Memory"
            description="Manage session‑based context and temporary reasoning."
          />

          <MemoryCard
            title="Embeddings"
            description="Generate and store vector embeddings for fast retrieval."
          />

          <MemoryCard
            title="Knowledge Base"
            description="Organize structured information for cognitive workflows."
          />

          <MemoryCard
            title="Memory Inspector"
            description="View, edit, and delete stored memory entries."
          />

          <MemoryCard
            title="Export & Sync"
            description="Sync memory across realms or export for backups."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function MemoryCard({
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
