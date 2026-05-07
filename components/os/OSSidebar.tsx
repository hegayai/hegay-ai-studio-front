"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OSSidebar() {
  const pathname = usePathname();

  const nav = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Personal", href: "/dashboard/personal" },
    { label: "User", href: "/dashboard/user" },

    { label: "—", href: null },

    { label: "Studio", href: "/creative/studio" },
    { label: "Canvas", href: "/creative/canvas" },
    { label: "Video Lab", href: "/creative/video-lab" },
    { label: "Audio Lab", href: "/creative/audio-lab" },
    { label: "Reels", href: "/creative/reels" },
    { label: "Image Forge", href: "/creative/image-forge" },
    { label: "Motion", href: "/creative/motion" },

    { label: "—", href: null },

    { label: "About", href: "/about" },
  ];

  return (
    <aside className="w-60 h-screen bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 space-y-2">
      {nav.map((item, i) =>
        item.href ? (
          <Link
            key={i}
            href={item.href}
            className={`block px-3 py-2 rounded-lg text-sm transition ${
              pathname === item.href
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <div key={i} className="opacity-20 my-2 border-b border-white/10" />
        )
      )}
    </aside>
  );
}
