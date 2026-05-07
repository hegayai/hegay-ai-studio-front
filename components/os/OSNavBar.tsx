"use client";

import Link from "next/link";

export default function OSNavBar() {
  return (
    <nav className="w-full h-12 bg-black/30 backdrop-blur-xl border-b border-white/10 flex items-center px-6 justify-between z-[999] fixed top-0 left-0">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-white font-semibold tracking-tight">
          Hegay OS Supreme
        </Link>

        <Link href="/dashboard" className="text-white/70 hover:text-white transition text-sm">
          Dashboard
        </Link>

        <Link href="/creative/studio" className="text-white/70 hover:text-white transition text-sm">
          Studio
        </Link>

        <Link href="/about" className="text-white/70 hover:text-white transition text-sm">
          About
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 text-white/70 text-sm">
        <span className="hover:text-white transition cursor-pointer">Search</span>
        <span className="hover:text-white transition cursor-pointer">Account</span>
      </div>
    </nav>
  );
}
