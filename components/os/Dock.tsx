"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  FolderKanban,
  Image,
  Sparkles,
  Globe,
  Rocket,
} from "lucide-react";

export default function Dock() {
  const pathname = usePathname();

  const dockItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    { name: "Vision", href: "/image-studio", icon: Image },
    { name: "Studio", href: "/studio", icon: Sparkles },
    { name: "Realms", href: "/realms", icon: Globe },
    { name: "Flux", href: "/flux", icon: Rocket },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center space-x-4 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center p-2 rounded-xl transition-all ${
                active
                  ? "bg-white/10 text-white shadow-lg shadow-blue-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[0.65rem] mt-1 font-ui tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
