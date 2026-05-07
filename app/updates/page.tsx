"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function UpdatesPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Updates</h1>
          <p className="font-ui text-lg text-white/70">
            Manage OS updates, patches, and feature releases.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">System Evolution</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Updates keep Hegay OS Supreme evolving. Install new features,  
            apply patches, review changelogs, and manage update preferences  
            with cosmic‑minimal clarity and OS‑grade precision.
          </p>
        </div>

        {/* UPDATES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <UpdatesCard
            title="Check for Updates"
            description="Scan for new OS versions, patches, and improvements."
          />

          <UpdatesCard
            title="Install Updates"
            description="Download and apply system updates with one click."
          />

          <UpdatesCard
            title="Changelog"
            description="View detailed logs of new features and fixes."
          />

          <UpdatesCard
            title="Update Preferences"
            description="Choose automatic or manual update behavior."
          />

          <UpdatesCard
            title="Rollback"
            description="Revert to a previous version if needed."
          />

          <UpdatesCard
            title="System Stability"
            description="Monitor update health, compatibility, and performance."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function UpdatesCard({
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
