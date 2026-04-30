export default function UniverseBuilderHome() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Universe Builder
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Architect entire creative universes. Define cosmology, timelines,
          pantheons, cultures, and world‑soul dynamics. Each universe becomes a
          living system connected to your Studio, Realms, and Dashboard.
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create New Universe
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Universe Templates
        </button>
      </div>

      {/* UNIVERSE MODULES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Core Modules</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Cosmology Engine",
            "Pantheon Designer",
            "Timeline Architect",
            "Culture Grid",
            "World‑Soul Engine",
            "Origin Matrix",
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

      {/* ACTIVE UNIVERSES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Universes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld v3",
            "Aruwa Mythos",
            "NaijaMix Multiverse",
            "World‑Soul Resonance Grid",
          ].map((uni) => (
            <div
              key={uni}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{uni}</h3>
              <p className="opacity-70 text-sm mt-1">Continue</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Universe Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Universe Analytics",
            "Memory Field",
            "Resonance Engine",
            "Archive Core",
            "Sync Layer",
            "Universe Settings",
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
