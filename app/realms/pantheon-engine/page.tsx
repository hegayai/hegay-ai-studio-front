export default function PantheonEngine() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Pantheon Engine
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Architect archetypal intelligences. Define deities, forces, mythic
          patterns, and cultural spirits that shape your universes and realms.
          Each archetype influences timelines, story arcs, and world‑soul
          resonance.
        </p>
      </div>
      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create Archetype
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Archetype Library
        </button>
      </div>
      {/* ARCHETYPE CATEGORIES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Archetype Categories</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Creator Archetypes",
            "Warrior Archetypes",
            "Healer Archetypes",
            "Trickster Archetypes",
            "Ancestor Spirits",
            "Cultural Deities",
          ].map((cat) => (
            <div
              key={cat}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{cat}</h3>
              <p className="opacity-70 text-sm mt-1">Explore</p>
            </div>
          ))}
        </div>
      </section>
      {/* ACTIVE ARCHETYPES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Archetypes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Aruwa — The Dawn Mother",
            "Olorun — Sky Architect",
            "Eshu — Path Opener",
            "Aganju — Fire of Becoming",
          ].map((arch) => (
            <div
              key={arch}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{arch}</h3>
              <p className="opacity-70 text-sm mt-1">Continue</p>
            </div>
          ))}
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Pantheon Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Archetype Analytics",
            "Influence Mapping",
            "Resonance Tracking",
            "Pantheon Memory",
            "Pantheon Sync",
            "Pantheon Settings",
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
