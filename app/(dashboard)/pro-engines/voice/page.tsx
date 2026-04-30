export default function VoiceEnginePro() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Voice Engine Pro
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Advanced voice synthesis engine for character voices, narrator voices,
          cultural accents, emotional tone layers, and world‑aware vocal design.
          Integrates with characters, cultures, scripts, scenes, and your asset
          pipeline.
        </p>
      </div>
      {/* PRIMARY MODES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Primary Modes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Character Voice Mode",
            "Narrator Mode",
            "Accent Mode",
            "Emotion Mode",
            "Scene Voice Mode",
            "Lore Voice Mode",
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
            "Load Character Context",
            "Load Culture Context",
            "Load Universe Context",
            "Load Realm Context",
            "Load Script Context",
            "Load Scene Context",
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
        <h2 className="text-xl font-medium mb-4">Voice Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          {/* LEFT: VOICE PANEL */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[320px]">
            <div className="opacity-70 text-sm">
              Voice preview area (connect to your voice synthesis backend). This
              panel will play generated voices, emotional variations, accents, and
              scene‑specific vocal performances.
            </div>
            <div className="mt-auto">
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-32"
                placeholder="Describe the voice, tone, or performance you want to generate..."
              />
              <div className="flex gap-3 mt-3">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Generate Voice
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Refine
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Save to Pipeline
                </button>
              </div>
              <p className="opacity-50 text-[11px] mt-2">
                Voice Engine Pro supports multi‑layer vocal workflows, character
                voice DNA, cultural accents, emotional tone shaping, and routing
                outputs into your asset pipeline.
              </p>
            </div>
          </div>
          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="font-medium text-sm">Attached Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Scene: Dawn Arrival Sequence</li>
              <li>• Emotional Tone: Mythic‑Resolve</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Output Routing</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Save to: Asset Pipeline</li>
              <li>• Save to: Motion Engine Pro</li>
              <li>• Save to: Script Engine Pro</li>
              <li>• Save to: Culture Grid Engine</li>
            </ul>
            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Mythic narrator voice</li>
              <li>• Diaspora accent palette</li>
              <li>• Character emotional variants</li>
              <li>• Realm environmental vocal tone</li>
            </ul>
          </div>
        </div>
      </section>
      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Voice Engine Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Model Routing",
            "Voice DNA Profiles",
            "Accent Libraries",
            "Voice Archive",
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
