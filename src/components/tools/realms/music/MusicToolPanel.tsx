"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function MusicToolPanel() {
  const tools = [
    {
      title: "Music Generator",
      description: "Compose AI‑generated tracks and melodies.",
      icon: "🎵",
    },
    {
      title: "Beat Engine",
      description: "Create drum patterns and rhythmic structures.",
      icon: "🥁",
    },
    {
      title: "Style Mixer",
      description: "Blend genres and musical influences.",
      icon: "🎧",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Music Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
