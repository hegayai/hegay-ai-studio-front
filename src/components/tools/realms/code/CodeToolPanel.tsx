"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function CodeToolPanel() {
  const tools = [
    {
      title: "Code Generator",
      description: "Generate scripts, functions, and utilities.",
      icon: "💻",
    },
    {
      title: "Refactor Engine",
      description: "Improve, optimize, and restructure code.",
      icon: "🛠️",
    },
    {
      title: "Debug Assistant",
      description: "Analyze and fix code issues.",
      icon: "🐞",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Code Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
