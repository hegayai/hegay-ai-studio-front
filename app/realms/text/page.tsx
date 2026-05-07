"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function TextRealmPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Text Realm</h1>
          <p className="font-ui text-lg text-white/70">
            Explore the dimension of narrative creation, documents, and written intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Narrative Dimension</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Text Realm is a dedicated creative dimension for writing intelligence.  
            Generate stories, documents, scripts, templates, and structured text  
            with clarity, precision, and cosmic creative flow.
          </p>
        </div>

        {/* REALM TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TextRealmCard
            title="Story Engine"
            description="Craft narratives, arcs, characters, and world structures."
          />

          <TextRealmCard
            title="Dialogue Engine"
            description="Generate conversations, emotional exchanges, and character voices."
          />

          <TextRealmCard
            title="Script Engine"
            description="Write scenes, screenplays, and cinematic sequences."
          />

          <TextRealmCard
            title="Writing Templates"
            description="Use structured formats for essays, outlines, and documents."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function TextRealmCard({
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
