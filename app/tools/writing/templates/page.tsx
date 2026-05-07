"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function WritingTemplatesPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Writing Templates</h1>
          <p className="font-ui text-lg text-white/70">
            Use structured formats for essays, outlines, documents, and creative frameworks.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Template Intelligence</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Writing Templates provide ready‑made structures for any type of writing —  
            from academic essays to creative outlines.  
            Generate clean, organized frameworks that accelerate your writing process  
            while maintaining clarity and cosmic precision.
          </p>
        </div>

        {/* TEMPLATE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TemplateCard
            title="Essay Template"
            description="Generate structured essays with introduction, body, and conclusion."
          />

          <TemplateCard
            title="Outline Template"
            description="Create hierarchical outlines for stories, scripts, or documents."
          />

          <TemplateCard
            title="Document Template"
            description="Produce formatted documents for reports, briefs, and proposals."
          />

          <TemplateCard
            title="Creative Frameworks"
            description="Use narrative scaffolds for stories, arcs, and worldbuilding."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function TemplateCard({
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
