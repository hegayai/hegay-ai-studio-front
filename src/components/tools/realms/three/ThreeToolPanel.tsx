"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function ThreeToolPanel() {
  const tools = [
    {
      title: "3D Generator",
      description: "Generate 3D models and structures.",
      icon: "🧊",
    },
    {
      title: "Material Engine",
      description: "Apply textures, shaders, and materials.",
      icon: "🎨",
    },
    {
      title: "Scene Builder",
      description: "Assemble 3D scenes and environments.",
      icon: "🌌",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">3D Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
