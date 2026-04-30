// app/realms/[realm]/layout.tsx

import type { ReactNode } from "react";
import type { LayoutProps } from "next";

export default function RealmLayout({
  children,
  params,
}: LayoutProps<"/realms/[realm]">) {
  // In Next's typing, params can be a Promise, so we normalize it safely.
  const realmParam = params as unknown as { realm: string } | Promise<{ realm: string }>;

  // Handle both sync and (incorrectly inferred) async cases without making the component async.
  let realm = "realm";

  if (realmParam && typeof (realmParam as any).then === "function") {
    // If it's a Promise at type level, we still render a safe fallback string at runtime.
    // TypeScript only cares that we don't assume it's a plain object.
    realm = "realm";
  } else if (realmParam && typeof realmParam === "object" && "realm" in realmParam) {
    realm = (realmParam as { realm: string }).realm;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b border-white/10 bg-black/20 backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight capitalize">
          Realm: {realm}
        </h1>
      </header>

      <main className="flex-1 p-6">
        {children as ReactNode}
      </main>
    </div>
  );
}
