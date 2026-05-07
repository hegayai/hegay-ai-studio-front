"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ModelsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Models</h1>
          <p className="font-ui text-lg text-white/70">
            Select and configure AI models powering the OS.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Model Control Center</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Models module lets you choose which AI engines power  
            reasoning, creativity, generation, and system intelligence.  
            Configure model settings, switch engines, and manage performance  
            with cosmic‑minimal clarity and OS‑grade precision.
          </p>
        </div>

        {/* MODELS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ModelsCard
            title="Model Selection"
            description="Choose from available AI engines for different tasks."
          />

          <ModelsCard
            title="Performance Modes"
            description="Switch between speed, balance, and high‑quality modes."
          />

          <ModelsCard
            title="Fine‑Tuning"
            description="Adjust model behavior with custom preferences and data."
          />

          <ModelsCard
            title="Model Settings"
            description="Control temperature, creativity, and reasoning depth."
          />

          <ModelsCard
            title="Model Logs"
            description="View usage history, performance stats, and system load."
          />

          <ModelsCard
            title="Model Updates"
            description="Install new models or upgrade existing ones."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ModelsCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
      <h3 className="h2 mb-2">{title}</h3>
      <p className="font-ui text-white/60">{description}</p>
    </div>
  );
}
