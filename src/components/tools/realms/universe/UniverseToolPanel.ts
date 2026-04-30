"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function UniverseToolPanel() {
  const tools = [
    {
      title: "Map Generator",
      description: "Generate cosmic maps, regions, and star systems.",
      icon: "🗺️",
    },
    {
      title: "Faction Builder",
      description: "Create civilizations, species, and cosmic powers.",
      icon: "👽",
    },
    {
      title: "Cosmic Timeline",
      description: "Build universal timelines and epochs.",
      icon: "⏳",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Universe Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
