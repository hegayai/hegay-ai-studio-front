"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function WritingEnginePage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Writing Engine</h1>
          <p className="font-ui text-lg text-white/70">
            Generate scripts, lore, dialogue, and narrative structures with creative intelligence.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Narrative Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Writing Engine is your literary command center.  
            Craft stories, build worlds, generate dialogue, and shape narrative arcs  
            with precision and cosmic creativity.  
            This is where ideas become language — and language becomes reality.
          </p>
        </div>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <WritingCard
            title="Story Generator"
            description="Create plots, arcs, and narrative structures."
            href="/tools/writing/story"
          />

          <WritingCard
            title="Dialogue Engine"
            description="Generate character conversations and emotional exchanges."
            href="/tools/writing/dialogue"
          />

          <WritingCard
            title="Lore Builder"
            description="Expand worlds, histories, mythologies, and civilizations."
            href="/tools/writing/lore"
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <WritingCard
            title="Script Engine"
            description="Write scenes, screenplays, and cinematic sequences."
            href="/tools/writing/script"
          />

          <WritingCard
            title="Writing Templates"
            description="Use structured formats for essays, outlines, and documents."
            href="/tools/writing/templates"
          />
        </div>
      </div>
    </SystemShell>
  );
}

function WritingCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    >
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60 group-hover:text-white/80 transition">
        {description}
      </p>
    </a>
  );
}
