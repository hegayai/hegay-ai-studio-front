"use client";

import React from "react";
import { ToolCard } from "../ToolCard";

export function MarketplaceToolPanel() {
  const tools = [
    {
      title: "Product Builder",
      description: "Create digital products, assets, and listings.",
      icon: "🛒",
    },
    {
      title: "Pricing Engine",
      description: "Generate pricing models and value tiers.",
      icon: "💲",
    },
    {
      title: "Metadata Designer",
      description: "Define product metadata and attributes.",
      icon: "🏷️",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Marketplace Tools</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
