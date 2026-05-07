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

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Origin Engine", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    { name: "Vision Studio", href: "/image-studio", icon: Image },
    { name: "Hegay Studio", href: "/studio", icon: Sparkles },
    { name: "Realms", href: "/realms", icon: Globe },
    { name: "Flux", href: "/flux", icon: Rocket },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-full w-20 border-r border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center py-6 space-y-6">
      {/* Logo */}
      <div className="text-center">
        <div className="brand-title text-xl leading-none">H</div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center p-3 rounded-xl transition-all ${
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
      </nav>
    </aside>
  );
}
