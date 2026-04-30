export default function ScriptEnginePro() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Script Engine Pro
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Advanced narrative engine for scenes, episodes, arcs, beat sheets,
          treatments, and world‑aware storytelling. Integrates with characters,
          cultures, timelines, realms, and your entire creative OS.
        </p>
      </div>
      {/* PRIMARY MODES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Primary Modes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Scene Mode",
            "Episode Mode",
            "Arc Mode",
            "Beat Sheet Mode",
            "Treatment Mode",
            "Lore Mode",
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
            "Load Timeline Context",
            "Load Character Context",
            "Load Culture Context",
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
      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">Script Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* LEFT: SCRIPT PANEL */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[320px]">
            <div className="opacity-70 text-sm">
              Script preview area (connect to your narrative backend). This panel
              will display scenes, beats, arcs, and structured narrative outputs.
            </div>
            <div className="mt-auto">
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-32"
                placeholder="Describe the scene, episode, or narrative you want to generate..."
              />
              <div className="flex gap-3 mt-3">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Generate Script
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Refine
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Save to Pipeline
                </button>
              </div>
              <p className="opacity-50 text-[11px] mt-2">
                Script Engine Pro supports multi‑step narrative workflows,
                character‑aware writing, and routing outputs into your asset
                pipeline and story engines.
              </p>
            </div>
          </div>
          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="font-medium text-sm">Attached Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Timeline: Diaspora Timeline</li>
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Arc: Diaspora Hero Arc</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Output Routing</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Save to: Asset Pipeline</li>
              <li>• Save to: Story Arc Engine</li>
              <li>• Save to: Character Genome Engine</li>
              <li>• Save to: Timeline Engine</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic tone</li>
              <li>• Culture‑driven storytelling</li>
              <li>• Character‑centric scenes</li>
              <li>• System‑design exposition</li>
            </ul>
          </div>
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Script Engine Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Model Routing",
            "Narrative Templates",
            "Context Profiles",
            "Script Archive",
            "Narrative Analytics",
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
