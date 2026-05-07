"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const apps = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Studio", path: "/creative/studio" },
  { name: "Canvas", path: "/creative/canvas" },
  { name: "Video Lab", path: "/creative/video-lab" },
  { name: "Audio Lab", path: "/creative/audio-lab" },
  { name: "Reels", path: "/creative/reels" },
  { name: "Image Forge", path: "/creative/image-forge" },
  { name: "Motion", path: "/creative/motion" },
];

export default function OSDock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel px-4 py-3 rounded-2xl flex gap-4 shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-[999]">
      {apps.map((app) => {
        const active = pathname.startsWith(app.path);

        return (
          <Link
            key={app.path}
            href={app.path}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
              active
                ? "bg-white/20 text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            <span className="text-[11px] font-medium">{app.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
