"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OsShellProps = {
  children: ReactNode;
};

// Minimal brand glyph
function BrandGlyph() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-sky-400" />
      <span className="text-xs tracking-wide opacity-70">Hegay OS</span>
    </div>
  );
}

// Updated premium navigation
const NAV_ITEMS = [
  { href: "/", label: "Origin" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/studio", label: "Hegay Studio" },
  { href: "/realms", label: "Realms" },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 p-4 text-sm">
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-lg transition-colors ${
              active
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function TopBar() {
  return (
    <div className="h-14 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4">
      <BrandGlyph />
      <div className="flex items-center gap-3 text-sm">
        <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          Search
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          Menu
        </button>
      </div>
    </div>
  );
}

export function OsShell({ children }: OsShellProps) {
  return (
    <div className="flex h-screen w-full bg-black text-white">
      {/* Sidebar */}
      <div className="w-56 bg-black/40 border-r border-white/10 backdrop-blur-xl">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="flex-1 overflow-auto p-10">{children}</main>
      </div>
    </div>
  );
}
