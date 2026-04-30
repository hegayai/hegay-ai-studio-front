export default function UniverseTemplates() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Universe Templates
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Jumpstart new universes with pre‑built cosmology, archetypes, timelines,
          cultures, resonance fields, and realm structures. Templates accelerate
          world‑building while keeping your creative civilization coherent.
        </p>
      </div>
      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Create Universe from Template
        </button>
        <button className="p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Build Custom Template
        </button>
      </div>
      {/* TEMPLATE CATEGORIES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Template Categories</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Mythic Universe Templates",
            "Sci‑Fantasy Templates",
            "Diaspora Templates",
            "Cultural Templates",
            "Minimal Starter Templates",
            "Experimental Templates",
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
      {/* FEATURED TEMPLATES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Featured Templates</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld Base",
            "Aruwa Mythos Core",
            "NaijaMix Multiverse Starter",
            "World‑Soul Harmonic Universe",
            "Minimal Universe Seed",
            "Mythic‑Sci Hybrid Universe",
          ].map((template) => (
            <div
              key={template}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{template}</h3>
              <p className="opacity-70 text-sm mt-1">Use template</p>
            </div>
          ))}
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Template Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Template Analytics",
            "Template Archive",
            "Template Sync",
            "Template Metadata",
            "Template Evolution Engine",
            "Template Settings",
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
