"use client";

import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[260px] bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
      <nav className="space-y-4">
        <Link href="/" className="block text-white/80 hover:text-white">Home</Link>
        <Link href="/dashboard" className="block text-white/80 hover:text-white">Dashboard</Link>
        <Link href="/projects" className="block text-white/80 hover:text-white">Projects</Link>
        <Link href="/studio" className="block text-white/80 hover:text-white">Studio</Link>
        <Link href="/image-studio" className="block text-white/80 hover:text-white">Vision Studio</Link>
        <Link href="/realms" className="block text-white/80 hover:text-white">Realms</Link>
        <Link href="/flux" className="block text-white/80 hover:text-white">Flux Engine</Link>
      </nav>
    </aside>
  );
}
