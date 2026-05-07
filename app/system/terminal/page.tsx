"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function TerminalAppPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Terminal</h1>
          <p className="font-ui text-lg text-white/70">
            Execute commands, run tools, and access developer utilities.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Command‑Line Interface</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Terminal App provides a clean, OS‑grade command‑line environment  
            for running scripts, interacting with system tools, and executing  
            developer commands.  
            Designed with cosmic‑minimal clarity and deep system integration.
          </p>
        </div>

        {/* TERMINAL FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TerminalCard
            title="Command Runner"
            description="Execute commands with real‑time output and system integration."
          />

          <TerminalCard
            title="Scripts"
            description="Run saved scripts, utilities, and automation workflows."
          />

          <TerminalCard
            title="Environment"
            description="Manage environment variables, paths, and runtime settings."
          />

          <TerminalCard
            title="History"
            description="Access previously executed commands with timestamps."
          />

          <TerminalCard
            title="Themes"
            description="Customize terminal colors, fonts, and visual styles."
          />

          <TerminalCard
            title="Developer Tools"
            description="Access debugging utilities, logs, and internal commands."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function TerminalCard({
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
