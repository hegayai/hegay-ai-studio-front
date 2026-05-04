"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SidebarProps {
  nav: NavItem[];
}

export default function Sidebar({ nav }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-6 border-r border-white/10 bg-white/5">
      <nav className="flex flex-col gap-1">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname?.startsWith(href) ?? false;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                active
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              {Icon && <Icon className="w-5 h-5" />}
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
