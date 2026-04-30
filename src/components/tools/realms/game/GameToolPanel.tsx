"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function GameToolPanel() {
  const tools = [
    {
      title: "Game Concept Engine",
      description: "Generate game ideas, mechanics, and worlds.",
      icon: "🎮",
    },
    {
      title: "Character Builder",
      description: "Create heroes, villains, and NPCs.",
      icon: "🧝",
    },
    {
      title: "Level Designer",
      description: "Generate maps, levels, and environments.",
      icon: "🗺️",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Game Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
