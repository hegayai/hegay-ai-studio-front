"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function PantheonToolPanel() {
  const tools = [
    {
      title: "Entity Builder",
      description: "Create gods, archetypes, guardians, and AI deities.",
      icon: "⚡",
    },
    {
      title: "Trait Engine",
      description: "Define personality traits and divine attributes.",
      icon: "✨",
    },
    {
      title: "Memory Forge",
      description: "Imprint memories and lore into Pantheon entities.",
      icon: "🧠",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Pantheon Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
