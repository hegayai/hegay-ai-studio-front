"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AppearanceSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Appearance</h1>
          <p className="font-ui text-lg text-white/70">
            Customize themes, colors, wallpapers, and UI density.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Visual Identity</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Appearance settings define the visual identity of  
            Hegay OS Supreme. Adjust themes, colors, wallpapers,  
            UI density, and motion preferences with cosmic‑minimal  
            precision and OS‑grade clarity.
          </p>
        </div>

        {/* APPEARANCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AppearanceCard
            title="Theme"
            description="Switch between light, dark, and cosmic‑minimal modes."
          />

          <AppearanceCard
            title="Accent Colors"
            description="Choose system accent colors and gradients."
          />

          <AppearanceCard
            title="Wallpapers"
            description="Set wallpapers for desktop, lock screen, and apps."
          />

          <AppearanceCard
            title="UI Density"
            description="Adjust spacing, padding, and compactness."
          />

          <AppearanceCard
            title="Motion"
            description="Enable or reduce animations and transitions."
          />

          <AppearanceCard
            title="Typography"
            description="Select system fonts and text rendering preferences."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AppearanceCard({
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
