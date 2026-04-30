"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function OriginToolPanel() {
  const tools = [
    {
      title: "Origin Generator",
      description: "Create world seeds, genesis stories, and creation myths.",
      icon: "🌱",
    },
    {
      title: "Seed Randomizer",
      description: "Generate deterministic or chaotic origin seeds.",
      icon: "🎲",
    },
    {
      title: "Lore Expander",
      description: "Expand origins into full narrative arcs.",
      icon: "📜",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Origin Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
