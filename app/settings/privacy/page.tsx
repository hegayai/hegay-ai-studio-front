"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function PrivacySettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Privacy</h1>
          <p className="font-ui text-lg text-white/70">
            Manage permissions, data access, and OS‑level privacy controls.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Security & Control</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Privacy settings give you full control over how apps and system  
            modules access your data. Manage permissions, visibility, tracking,  
            and OS‑level protections with cosmic‑minimal clarity and precision.
          </p>
        </div>

        {/* PRIVACY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <PrivacyCard
            title="Permissions"
            description="Control which apps can access camera, mic, files, and more."
          />

          <PrivacyCard
            title="Data Access"
            description="Manage how system modules read or store your information."
          />

          <PrivacyCard
            title="Tracking Protection"
            description="Enable anti‑tracking and limit background data collection."
          />

          <PrivacyCard
            title="Visibility"
            description="Control what information is visible to other users or apps."
          />

          <PrivacyCard
            title="Security Logs"
            description="Review access history and permission usage."
          />

          <PrivacyCard
            title="Encryption"
            description="Configure encryption for files, memory, and system data."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function PrivacyCard({
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
