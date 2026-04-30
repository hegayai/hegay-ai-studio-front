// app/realms/[realm]/page.tsx

import type { ReactNode } from "react";

interface RealmPageProps {
  params: {
    realm: string;   // dynamic segment
  };
}

export default function RealmPage({ params }: RealmPageProps) {
  const realm = params.realm;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight capitalize">
          {realm} Realm
        </h1>
        <p className="opacity-70 mt-2">
          Explore the systems, engines, and intelligence layers inside the {realm} realm.
        </p>
      </div>

      {/* Content */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="opacity-80 text-sm">
          This is the dynamic realm page.  
          You can now render realm‑specific UI, tools, engines, metadata, or dashboards here.
        </p>
      </div>
    </div>
  );
}
