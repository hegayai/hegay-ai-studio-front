export default function RealmBuilder() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Realm Builder
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Construct new realms from the ground up. Define structure, geography,
          metaphysics, culture, and system logic. Realms connect directly to
          universes, timelines, pantheons, and resonance fields.
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create New Realm
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Realm Templates
        </button>
      </div>

      {/* REALM MODULES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Core Modules</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Geography Designer",
            "Culture Architect",
            "Mythic Structure Engine",
            "Realm Logic System",
            "Ecosystem Builder",
            "Realm Sync Layer",
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

      {/* ACTIVE REALMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Realms</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld",
            "Aruwa Realm",
            "NaijaMix Culture Grid",
            "World‑Soul Resonance Realm",
          ].map((realm) => (
            <div
              key={realm}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{realm}</h3>
              <p className="opacity-70 text-sm mt-1">Continue</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Realm Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Realm Analytics",
            "Memory Grid",
            "Realm Archive",
            "Realm Sync",
            "Realm Metadata",
            "Realm Settings",
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
