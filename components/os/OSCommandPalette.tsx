"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OSCommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const actions = [
    { name: "Open Dashboard", action: () => router.push("/dashboard") },
    { name: "Open Studio", action: () => router.push("/creative/studio") },
    { name: "Open Canvas", action: () => router.push("/creative/canvas") },
    { name: "Open Video Lab", action: () => router.push("/creative/video-lab") },
    { name: "Open Audio Lab", action: () => router.push("/creative/audio-lab") },
    { name: "Open Reels", action: () => router.push("/creative/reels") },
    { name: "Open Image Forge", action: () => router.push("/creative/image-forge") },
    { name: "Open Motion", action: () => router.push("/creative/motion") },
    { name: "Open About", action: () => router.push("/about") },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-[99999]"
        style={{ display: open ? "block" : "none" }}
        onClick={() => setOpen(false)}
      >
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
          {actions.map((a, i) => (
            <button
              key={i}
              onClick={() => {
                a.action();
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard shortcut: CMD+K */}
      <div
        className="hidden"
        onKeyDown={(e) => {
          if (e.metaKey && e.key === "k") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      />
    </>
  );
}
