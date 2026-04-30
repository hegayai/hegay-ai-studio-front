export default function WorldAgent() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          World Agent
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          The world‑building intelligence agent responsible for generating realms,
          cultures, metaphysics, cosmology, environmental lore, and structural
          world logic. The World Agent uses the Agent Kernel for context,
          reasoning, and routing.
        </p>
      </div>

      {/* WORLD MODES */}
      <section>
        <h2 className="text-xl font-medium mb-4">World‑Building Modes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Realm Mode",
            "Culture Mode",
            "Cosmology Mode",
            "Metaphysics Mode",
            "Environment Mode",
            "World‑Soul Mode",
          ].map((mode) => (
            <div
              key={mode}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{mode}</h3>
              <p className="opacity-70 text-sm mt-1">Switch mode</p>
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
            "Load Culture Context",
            "Load Timeline Context",
            "Load Cosmology Context",
            "Load World‑Soul Context",
          ].map((ctx) => (
            <div
              key={ctx}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{ctx}</h3>
              <p className="opacity-70 text-sm mt-1">Attach context</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">World‑Building Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">

          {/* LEFT: GENERATION PANEL */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[360px]">
            <div className="opacity-70 text-sm">
              World‑building preview area (connect to backend). Displays realms,
              cultures, metaphysics, cosmology, and environmental lore generated
              by the World Agent.
            </div>

            <textarea
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-40"
              placeholder="Describe the realm, culture, cosmology, or world‑building element you want the World Agent to generate..."
            />

            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Generate
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Refine
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Route to Pipeline
              </button>
            </div>

            <p className="opacity-50 text-[11px] mt-2">
              The World Agent uses the Agent Kernel for context, reasoning, and
              routing to other engines.
            </p>
          </div>

          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">

            <h3 className="font-medium text-sm">Active Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Timeline: Diaspora Timeline</li>
              <li>• Cosmology: Diaspora Cosmology</li>
              <li>• World‑Soul: Diaspora World‑Soul Layer</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Routing Targets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Realm Builder</li>
              <li>• Culture Grid Engine</li>
              <li>• Timeline Engine</li>
              <li>• Story Agent</li>
              <li>• Image Engine Pro</li>
              <li>• Asset Pipeline Engine</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic world‑building</li>
              <li>• Culture‑driven world logic</li>
              <li>• Realm‑centric expansion</li>
              <li>• System‑design metaphysics</li>
            </ul>

          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">World Agent Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "World‑Building Engine",
            "Context Engine",
            "Reasoning Engine",
            "World Archive",
            "World Analytics",
            "Agent Settings",
          ].map((sys) => (
            <div
              key={sys}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{sys}</h3>
              <p className="opacity-70 text-sm mt-1">Open system</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
