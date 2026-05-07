"use client";

import React from "react";
import SystemShell from "@/components/os/SystemShell";

export default function NotificationsSettingsPage() {
  return (
    <SystemShell>
      <div className="space-y-10">

        {/* PAGE TITLE */}
        <div>
          <h1 className="brand-title text-4xl mb-2">Notifications</h1>
          <p className="font-ui text-lg text-white/70">
            Control alerts, banners, sounds, and system messages.
          </p>
        </div>

        {/* INTRO PANEL */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="h2 mb-4">Alert Management</h2>
          <p className="font-ui text-white/70 leading-relaxed">
            Notifications keep you informed across Hegay OS Supreme.  
            Customize alert styles, sounds, banners, priorities,  
            and do‑not‑disturb modes with cosmic‑minimal clarity  
            and OS‑grade precision.
          </p>
        </div>

        {/* NOTIFICATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <NotificationsCard
            title="Alert Styles"
            description="Choose between banners, modals, and silent alerts."
          />

          <NotificationsCard
            title="Sounds"
            description="Select notification tones or disable sound entirely."
          />

          <NotificationsCard
            title="Priority Levels"
            description="Control which apps can interrupt or bypass DND."
          />

          <NotificationsCard
            title="Do Not Disturb"
            description="Schedule quiet hours or enable focus modes."
          />

          <NotificationsCard
            title="App Notifications"
            description="Manage alert settings for individual apps."
          />

          <NotificationsCard
            title="System Messages"
            description="Configure OS‑level alerts and background notifications."
          />
        </div>
      </div>
    </SystemShell>
  );
}

function NotificationsCard({
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
