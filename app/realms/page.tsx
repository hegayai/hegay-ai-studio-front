export default function RealmsHome() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Realms
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          The world‑building layer of Hegay OS. Shape cultures, timelines,
          archetypes, and universes. Each realm is a living system connected to
          your Studio and Dashboard.
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create New Realm
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Realm Builder
        </button>
      </div>

      {/* REALM TYPES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Core Realms</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Culture Realm",
            "Pantheon Realm",
            "Timeline Realm",
            "Origin Realm",
            "Universe Realm",
            "Archive Realm",
          ].map((realm) => (
            <div
              key={realm}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{realm}</h3>
              <p className="opacity-70 text-sm mt-1">Open realm</p>
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
            "Aruwa Pantheon",
            "NaijaMix Culture Grid",
            "World‑Soul Resonance",
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
            "Realm Insights",
            "Realm Analytics",
            "Realm Archive",
            "Realm Sync",
            "Realm Memory",
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
