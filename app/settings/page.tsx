"use client";

import OSThemeToggle from "@/components/os/OSThemeToggle";

export default function SettingsPage() {
  return (
    <div className="p-10 text-white space-y-10">
      <h1 className="text-3xl font-bold">System Settings</h1>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Appearance</h2>
        <OSThemeToggle />
      </section>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Account</h2>
        <p className="opacity-70">Manage your profile, subscription, and billing.</p>
        <a
          href="/account"
          className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition inline-block"
        >
          Open Account Settings
        </a>
      </section>

      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">System</h2>
        <p className="opacity-70">OS version: Hegay OS Supreme v1.0</p>
        <p className="opacity-70">Engine Layer: DeepSeek + Groq + Fal.ai</p>
      </section>
    </div>
  );
}
