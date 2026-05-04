"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function CosmicSidebar() {
  const pathname = usePathname();

  const links = [
    { label: "Creator Dashboard", href: "/dashboard/personal" },
    { label: "User Dashboard", href: "/dashboard/user" },
    { label: "Realms", href: "/realms" },
    { label: "Universes", href: "/universes" },
    { label: "Engines", href: "/engines" },
    { label: "Assets", href: "/admin/tools/assets" },
    { label: "Prompt Studio", href: "/admin/tools/prompt-studio" },
    { label: "Playground", href: "/admin/tools/playground" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col gap-8 z-[50]">
      <h1 className="text-xl font-bold tracking-tight">Hegay OS</h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={link.href}
                className={`
                  block px-4 py-2 rounded-lg transition
                  ${active ? "bg-white/10 border border-white/20" : "opacity-70 hover:opacity-100"}
                `}
              >
                {link.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
}
