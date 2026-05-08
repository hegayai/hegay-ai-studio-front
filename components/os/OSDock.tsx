"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OSDock() {
  const pathname = usePathname();

  const apps = [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/studio" },
    { name: "Creator", path: "/creator" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-panel px-4 py-3 rounded-xl flex gap-4">
      {apps.map((app) => {
        const active = pathname?.startsWith(app.path) ?? false;

        return (
          <Link
            key={app.path}
            href={app.path}
            className={`px-3 py-2 rounded-md transition ${
              active ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {app.name}
          </Link>
        );
      })}
    </div>
  );
}
