// src/components/os/OSDock.tsx
"use client";

import Link from "next/link";

const realms = [
  { label: "Image", href: "/studio/image-generator", emoji: "🖼️" },
  { label: "Video", href: "/studio/video-generator", emoji: "🎬" },
  { label: "Audio", href: "/studio/audio-lab", emoji: "🎧" },
  { label: "Model Lab", href: "/studio/model-lab", emoji: "🧬" },
  { label: "Pantheon", href: "/studio/pantheon", emoji: "🏛️" },
  { label: "Origin", href: "/studio/origin", emoji: "🌌" },
  { label: "Marketplace", href: "/studio/marketplace", emoji: "🛒" },
  { label: "Economy", href: "/studio/economy", emoji: "💱" },
  { label: "Analytics", href: "/studio/analytics", emoji: "📊" },
];

export default function OSDock() {
  return (
    <div className="w-full flex justify-center pb-6">
      <div className="px-4 py-2 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl flex gap-3">
        {realms.map((realm) => (
          <Link
            key={realm.href}
            href={realm.href}
            className="flex flex-col items-center gap-1 text-[10px] text-white/60 hover:text-white transition"
          >
            <div className="w-9 h-9 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
              {realm.emoji}
            </div>
            <span>{realm.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
