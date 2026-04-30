// app/realms/[realm]/layout.tsx

import type { ReactNode } from "react";

type RealmLayoutProps = {
  children: ReactNode;
  params: {
    realm: string;   // MUST be a plain string
  };
};

// ❗ IMPORTANT: This layout MUST NOT be async.
// ❗ MUST NOT use await.
// ❗ MUST NOT call any async functions.
// ❗ MUST NOT export metadata from here.

export default function RealmLayout({ children, params }: RealmLayoutProps) {
  const realm = params.realm; // ensure direct sync access

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 border-b border-white/10 bg-black/20 backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight capitalize">
          Realm: {realm}
        </h1>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
