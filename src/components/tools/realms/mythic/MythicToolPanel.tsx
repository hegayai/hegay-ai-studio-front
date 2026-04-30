"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function MythicToolPanel() {
  const tools = [
    {
      title: "Myth Generator",
      description: "Create ancient myths, legends, and divine lore.",
      icon: "🔥",
    },
    {
      title: "Pantheon Linker",
      description: "Connect myths to gods, realms, and histories.",
      icon: "🔗",
    },
    {
      title: "Epic Expander",
      description: "Expand myths into full sagas and epics.",
      icon: "📘",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Mythic Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
