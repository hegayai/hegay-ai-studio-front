"use client";

import { useState } from "react";

const apps = [
  { name: "Home", path: "/home", icon: "🏠" },
  { name: "Canvas", path: "/canvas", icon: "🎨" },
  { name: "Studio", path: "/studio", icon: "🖥️" },
  { name: "Video Lab", path: "/video-lab", icon: "🎬" },
  { name: "Audio Lab", path: "/audio-lab", icon: "🎧" },
  { name: "Reels", path: "/reels", icon: "📱" },
  { name: "Image Forge", path: "/image-forge", icon: "🖼️" },
  { name: "Motion", path: "/motion", icon: "🎞️" },
];

export default function OSDock() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99998]">
      <div className="glass-panel px-6 py-3 rounded-2xl flex gap-4 items-end backdrop-blur-2xl">
        {apps.map((app, i) => {
          const isHover = hoverIndex === i;
          const scale =
            isHover ? "scale-125" : hoverIndex !== null && Math.abs(hoverIndex - i) === 1
            ? "scale-110"
            : "scale-100";

          return (
            <a
              key={app.name}
              href={app.path}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`transition-transform duration-200 ${scale} flex flex-col items-center`}
            >
              <div className="text-3xl">{app.icon}</div>
              <div className="w-2 h-1 rounded-full bg-white/40 mt-1 opacity-0 group-hover:opacity-100 transition" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
