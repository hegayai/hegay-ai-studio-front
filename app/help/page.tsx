"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function HelpCenterPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Help Center</h1>
          <p className="font-ui text-lg text-white/70">
            Access guides, tutorials, troubleshooting, and OS support.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Support & Guidance</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            The Help Center provides everything you need to navigate  
            Hegay OS Supreme. Explore tutorials, FAQs, troubleshooting  
            tools, and system guides — all designed with cosmic‑minimal  
            clarity and OS‑grade precision.
          </p>
        </div>

        {/* HELP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <HelpCard
            title="Getting Started"
            description="Learn the basics of navigating and using the OS."
          />

          <HelpCard
            title="Tutorials"
            description="Step‑by‑step guides for apps, tools, and workflows."
          />

          <HelpCard
            title="Troubleshooting"
            description="Fix common issues and optimize system performance."
          />

          <HelpCard
            title="FAQ"
            description="Find answers to frequently asked questions."
          />

          <HelpCard
            title="Contact Support"
            description="Reach out for help with technical or account issues."
          />

          <HelpCard
            title="System Guides"
            description="Explore in‑depth documentation for OS features."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function HelpCard({
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
