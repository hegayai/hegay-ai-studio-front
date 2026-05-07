"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function ModelSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Model Settings</h1>
          <p className="font-ui text-lg text-white/70">
            Configure AI engines, behavior modes, creativity levels, and routing.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Intelligence Configuration</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Model Settings allow you to control how intelligence behaves across  
            Hegay OS Supreme — from creativity and reasoning depth to  
            provider selection, routing logic, and performance modes.  
            This is where you tune the brain of your OS.
          </p>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ModelSettingsCard
            title="Default Model"
            description="Choose the primary AI engine used across the OS."
          />

          <ModelSettingsCard
            title="Creativity & Temperature"
            description="Adjust creativity, randomness, and generative fluidity."
          />

          <ModelSettingsCard
            title="Reasoning Mode"
            description="Switch between fast, balanced, or deep reasoning modes."
          />

          <ModelSettingsCard
            title="Routing Logic"
            description="Define when the OS should use DeepSeek, OpenAI, Flux, or Luma."
          />

          <ModelSettingsCard
            title="Safety & Filters"
            description="Configure content filters, guardrails, and safety levels."
          />

          <ModelSettingsCard
            title="Model Permissions"
            description="Control which engines can access files, tools, or realms."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function ModelSettingsCard({
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
