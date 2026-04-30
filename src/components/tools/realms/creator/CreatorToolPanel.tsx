"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function CreatorToolPanel() {
  const tools = [
    {
      title: "Creator Profile",
      description: "Manage your identity, avatar, and creative signature.",
      icon: "👤",
    },
    {
      title: "Creator Stats",
      description: "Track your creative output and performance.",
      icon: "📊",
    },
    {
      title: "Creator Passport",
      description: "Your universal identity across all realms.",
      icon: "🛂",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Creator Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
