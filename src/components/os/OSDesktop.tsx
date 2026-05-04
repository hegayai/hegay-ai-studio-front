"use client";

import CreatorPanel from "./CreatorPanel";
import OSPanel from "./OSPanel";
import OSWindow from "./OSWindow";
import OSDock from "./OSDock";
import { Brand } from "@/brand/brand.config";

export default function OSDesktop() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,215,128,0.12), transparent 55%)," +
          "radial-gradient(circle at bottom, rgba(0,180,255,0.18), transparent 60%)," +
          Brand.colors.black,
      }}
    >
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <div
          className="text-[11px] uppercase tracking-[0.25em]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Hegay OS Supreme · Creator Dashboard
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 grid grid-cols-12 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <CreatorPanel />
          <OSPanel title="Universe Pulse">
            <div className="h-20 rounded-lg bg-gradient-to-r from-cyan-500/20 via-cosmic-gold/10 to-purple-500/20 border border-white/10" />
          </OSPanel>
        </div>

        <div className="col-span-6 flex flex-col gap-4">
          <OSWindow title="Creator Console">
            <p className="text-sm text-white/70">
              Welcome to the Creator Dashboard.
            </p>
          </OSWindow>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <OSPanel title="Recent Activity">
            <p className="text-xs text-white/50">
              Activity feed will appear here.
            </p>
          </OSPanel>

          <OSPanel title="System Status">
            <ul className="text-xs text-white/60 space-y-1">
              <li>Core: Online</li>
              <li>Realms: Ready</li>
              <li>Ascension Engine: Idle</li>
              <li>Economy: Standby</li>
            </ul>
          </OSPanel>
        </div>
      </div>

      <OSDock />
    </div>
  );
}
