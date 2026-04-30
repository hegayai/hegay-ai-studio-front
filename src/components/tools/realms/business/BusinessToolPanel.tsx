"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function BusinessToolPanel() {
  const tools = [
    {
      title: "Business Modeler",
      description: "Generate business models and frameworks.",
      icon: "📈",
    },
    {
      title: "Feature Planner",
      description: "Define product features and roadmaps.",
      icon: "📝",
    },
    {
      title: "Revenue Engine",
      description: "Create pricing, tiers, and monetization.",
      icon: "💰",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Business Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
