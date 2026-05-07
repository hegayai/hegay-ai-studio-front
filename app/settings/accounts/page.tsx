"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function AccountsSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Accounts</h1>
          <p className="font-ui text-lg text-white/70">
            Manage user profiles, authentication, and linked services.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Identity & Access</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Accounts settings control identity, authentication, and linked  
            services across Hegay OS Supreme. Manage profiles, security  
            credentials, connected apps, and multi‑device sync with  
            cosmic‑minimal clarity and OS‑grade precision.
          </p>
        </div>

        {/* ACCOUNTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <AccountsCard
            title="User Profile"
            description="Edit your name, avatar, and personal information."
          />

          <AccountsCard
            title="Authentication"
            description="Manage passwords, PINs, biometrics, and login methods."
          />

          <AccountsCard
            title="Linked Services"
            description="Connect external accounts and third‑party integrations."
          />

          <AccountsCard
            title="Sync"
            description="Control cross‑device sync for settings and data."
          />

          <AccountsCard
            title="Access Control"
            description="Manage permissions for shared devices or multi‑user setups."
          />

          <AccountsCard
            title="Security Logs"
            description="Review login history and authentication events."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function AccountsCard({
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
