"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function RadioToolPanel() {
  const tools = [
    {
      title: "Voice Synth",
      description: "Generate radio voices, hosts, and narrators.",
      icon: "🎙️",
    },
    {
      title: "Atmosphere Mixer",
      description: "Blend ambience, effects, and broadcast textures.",
      icon: "🎚️",
    },
    {
      title: "Show Builder",
      description: "Create full radio shows and segments.",
      icon: "📻",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Radio Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
