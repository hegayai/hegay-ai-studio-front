// app/realms/[realm]/layout.tsx

import { ReactNode } from "react";

interface RealmLayoutProps {
  children: ReactNode;
  params: {
    realm: string;   // MUST be a plain string, not a Promise
  };
}

export default function RealmLayout({ children, params }: RealmLayoutProps) {
  const { realm } = params;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="p-4 border-b border-white/10 bg-black/20 backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight capitalize">
          Realm: {realm}
        </h1>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
