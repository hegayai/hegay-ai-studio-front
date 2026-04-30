export default function RealmMetadataEngine() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Realm Metadata Engine
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Manage realm attributes, tags, classifications, relationships, and metadata
          structures. This engine ensures realms remain searchable, indexable,
          linkable, and synchronized across your entire creative civilization.
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create Metadata Profile
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Metadata Library
        </button>
      </div>

      {/* METADATA MODULES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Core Metadata Modules</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Realm Attribute Designer",
            "Tag & Classification Engine",
            "Realm Relationship Mapper",
            "Metadata Sync Layer",
            "Realm Identity Grid",
            "Metadata Evolution Engine",
          ].map((mod) => (
            <div
              key={mod}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{mod}</h3>
              <p className="opacity-70 text-sm mt-1">Open module</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVE METADATA PROFILES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Metadata Profiles</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Realm Metadata",
            "Aruwa Realm Metadata",
            "NaijaMix Culture Realm Metadata",
          ].map((profile) => (
            <div
              key={profile}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{profile}</h3>
              <p className="opacity-70 text-sm mt-1">View profile</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Metadata Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Metadata Analytics",
            "Metadata Archive",
            "Cross‑Realm Metadata Sync",
            "Metadata Diagnostics",
            "Metadata Memory",
            "Metadata Settings",
          ].map((sys) => (
            <div
              key={sys}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{sys}</h3>
              <p className="opacity-70 text-sm mt-1">Open module</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
