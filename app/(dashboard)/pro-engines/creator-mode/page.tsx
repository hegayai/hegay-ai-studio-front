export default function CreatorMode() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Creator Mode
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-3xl">
          The unified creative cockpit of Hegay OS. Build universes, realms,
          characters, cultures, scripts, images, motion, voices, and music.
          Creator Mode integrates every Pro Engine into a single seamless
          workflow for world‑building and storytelling.
        </p>
      </div>
      {/* CREATION ZONES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Creation Zones</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Universe Builder",
            "Realm Builder",
            "Character Creator",
            "Culture Designer",
            "Timeline Designer",
            "Story Arc Designer",
          ].map((zone) => (
            <div
              key={zone}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{zone}</h3>
              <p className="opacity-70 text-sm mt-1">Open workspace</p>
            </div>
          ))}
        </div>
      </section>
      {/* PRO ENGINES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Pro Engines</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Chat Engine Pro",
            "Image Engine Pro",
            "Motion Engine Pro",
            "Script Engine Pro",
            "Music Engine Pro",
            "Voice Engine Pro",
          ].map((engine) => (
            <div
              key={engine}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{engine}</h3>
              <p className="opacity-70 text-sm mt-1">Open engine</p>
            </div>
          ))}
        </div>
      </section>
      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">Creator Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* LEFT: MAIN CREATION PANEL */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[360px]">
            <div className="opacity-70 text-sm">
              Main creation panel. This area will display outputs from any Pro
              Engine, creation zone, or context‑aware generator. It is the
              central canvas for Creator Mode.
            </div>
            <textarea
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-40"
              placeholder="Describe what you want to create — a scene, character, culture, realm, image, motion, voice, or music..."
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
              Creator Mode automatically routes outputs to the appropriate Pro
              Engine, attaches context, and syncs metadata across the OS.
            </p>
          </div>
          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="font-medium text-sm">Active Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Timeline: Diaspora Timeline</li>
              <li>• Arc: Diaspora Hero Arc</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Routing Targets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Script Engine Pro</li>
              <li>• Image Engine Pro</li>
              <li>• Motion Engine Pro</li>
              <li>• Music Engine Pro</li>
              <li>• Voice Engine Pro</li>
              <li>• Asset Pipeline Engine</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic creation</li>
              <li>• Culture‑driven creation</li>
              <li>• Character‑centric creation</li>
              <li>• System‑design creation</li>
            </ul>
          </div>
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Creator Mode Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Workflow Engine",
            "Context Engine",
            "Routing Engine",
            "Creation Archive",
            "Creator Analytics",
            "Creator Settings",
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
