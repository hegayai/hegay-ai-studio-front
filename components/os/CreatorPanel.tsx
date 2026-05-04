"use client";

import { Brand } from "@/brand/brand.config";

export default function CreatorPanel() {
  return (
    <div
      className="rounded-2xl p-4 border border-white/10 bg-black/40 backdrop-blur-2xl"
      style={{
        boxShadow: Brand.ui.windowGlow,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Creator Profile
        </div>

        {/* Notification dot */}
        <div className="relative">
          <div className="w-2 h-2 bg-cosmic-gold rounded-full absolute -top-1 -right-1 animate-pulse" />
          <div className="text-white/70 text-lg">🔔</div>
        </div>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20" />
        <div>
          <div className="text-white font-semibold text-sm">Creator</div>
          <div className="text-white/40 text-xs">Hegay OS Supreme</div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 text-sm text-white/70">
        <div className="flex items-center justify-between">
          <span>Credits</span>
          <span className="text-cosmic-gold font-semibold">0</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Energy</span>
          <span>100%</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Signal</span>
          <span className="text-cosmic-gold">Stable · Expanding</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 hover:bg-white/10 transition">
          New Project
        </button>
        <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 hover:bg-white/10 transition">
          Upload Asset
        </button>
      </div>
    </div>
  );
}
