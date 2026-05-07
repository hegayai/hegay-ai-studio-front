"use client";

import { useState } from "react";

export default function OSShortcutsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition text-sm"
      >
        Shortcuts
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center p-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 w-full max-w-lg space-y-6">
            <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between opacity-80">
                <span>Open Command Palette</span>
                <span className="font-mono">Ctrl + K</span>
              </div>

              <div className="flex justify-between opacity-80">
                <span>Open Settings</span>
                <span className="font-mono">Ctrl + ,</span>
              </div>

              <div className="flex justify-between opacity-80">
                <span>Open App Launcher</span>
                <span className="font-mono">Ctrl + Space</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-full px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
