export default function ImageEnginePro() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Image Engine Pro
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          High‑end image generation workspace for concept art, character sheets,
          realm maps, posters, covers, and cultural aesthetic systems. This engine
          integrates with your universes, realms, characters, and asset pipelines.
        </p>
      </div>
      {/* PRIMARY ACTIONS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Primary Modes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Concept Art Mode",
            "Character Sheet Mode",
            "Poster Mode",
            "Cover Art Mode",
            "Realm Map Mode",
            "Aesthetic Grid Mode",
          ].map((mode) => (
            <div
              key={mode}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{mode}</h3>
              <p className="opacity-70 text-sm mt-1">Switch to this mode</p>
            </div>
          ))}
        </div>
      </section>
      {/* CONTEXT LOADERS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Context Loaders</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Load Universe Context",
            "Load Realm Context",
            "Load Character Context",
            "Load Culture Context",
            "Load Timeline Context",
            "Load Story Arc Context",
          ].map((ctx) => (
            <div
              key={ctx}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{ctx}</h3>
              <p className="opacity-70 text-sm mt-1">Attach to engine</p>
            </div>
          ))}
        </div>
      </section>
      {/* WORKSPACE SHELL */}
      <section>
        <h2 className="text-xl font-medium mb-4">Image Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* LEFT: GENERATION PANEL */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[320px]">
            <div className="opacity-70 text-sm">
              Image preview area (connect to your generation backend). This panel
              will display generated images, variations, and refinements.
            </div>
            <div className="mt-auto">
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-28"
                placeholder="Describe the image you want to generate..."
              />
              <div className="flex gap-3 mt-3">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Generate
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Refine
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Save to Pipeline
                </button>
              </div>
              <p className="opacity-50 text-[11px] mt-2">
                Image Engine Pro supports multi‑step workflows, context‑aware
                generation, and routing outputs into your asset pipeline.
              </p>
            </div>
          </div>
          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="font-medium text-sm">Attached Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Aesthetic: Mythic‑Diaspora Fusion</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Output Routing</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Save to: Asset Pipeline</li>
              <li>• Save to: Character Genome Engine</li>
              <li>• Save to: Culture Grid Engine</li>
              <li>• Save to: Realm Builder</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic concept art</li>
              <li>• Diaspora aesthetic palette</li>
              <li>• Realm environmental style</li>
              <li>• Character portrait mode</li>
            </ul>
          </div>
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Image Engine Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Model Routing",
            "Style Presets",
            "Aesthetic Profiles",
            "Image Archive",
            "Generation Analytics",
            "Engine Settings",
          ].map((sys) => (
            <div
              key={sys}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
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
