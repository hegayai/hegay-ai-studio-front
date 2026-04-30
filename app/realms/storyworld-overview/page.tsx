export default function StoryworldOverview() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Storyworld Overview
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          A unified overview of your entire creative civilization. Explore active
          universes, realms, timelines, cultures, characters, and resonance fields.
          This is the meta‑navigation layer that connects all engines and systems.
        </p>
      </div>
      {/* UNIVERSE SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Universes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld v3",
            "Aruwa Mythos",
            "NaijaMix Multiverse",
          ].map((uni) => (
            <div
              key={uni}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{uni}</h3>
              <p className="opacity-70 text-sm mt-1">Open universe</p>
            </div>
          ))}
        </div>
      </section>
      {/* REALM SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Active Realms</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Realm",
            "Aruwa Realm",
            "NaijaMix Culture Realm",
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
      {/* TIMELINE SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Timelines</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Timeline",
            "Aruwa Epochs",
            "NaijaMix Cultural Timeline",
          ].map((tl) => (
            <div
              key={tl}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{tl}</h3>
              <p className="opacity-70 text-sm mt-1">View timeline</p>
            </div>
          ))}
        </div>
      </section>
      {/* CULTURE SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Cultures</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Culture Grid",
            "Aruwa Mythic Culture",
            "NaijaMix Cultural Matrix",
          ].map((culture) => (
            <div
              key={culture}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{culture}</h3>
              <p className="opacity-70 text-sm mt-1">Explore culture</p>
            </div>
          ))}
        </div>
      </section>
      {/* CHARACTER SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Characters</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Aruwa — Dawn Incarnate",
            "Kehinde — Twin Walker",
            "Zara — Frequency Weaver",
          ].map((char) => (
            <div
              key={char}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{char}</h3>
              <p className="opacity-70 text-sm mt-1">View profile</p>
            </div>
          ))}
        </div>
      </section>
      {/* RESONANCE SNAPSHOTS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Resonance Fields</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Resonance",
            "Aruwa Mythic Pulse",
            "World‑Soul Harmonic Grid",
          ].map((field) => (
            <div
              key={field}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{field}</h3>
              <p className="opacity-70 text-sm mt-1">Open field</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
