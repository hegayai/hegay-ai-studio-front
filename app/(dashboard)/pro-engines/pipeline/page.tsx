export default function AssetPipelineEngine() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Asset Pipeline Engine
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Centralized pipeline for storing, tagging, organizing, and routing all
          generated assets across Hegay OS. Integrates with every Pro Engine,
          universe, realm, character, culture, and timeline system.
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Primary Actions</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Upload Asset",
            "Create Asset Folder",
            "Open Asset Library",
            "Search Assets",
            "Tag Assets",
            "Sync Metadata",
          ].map((action) => (
            <div
              key={action}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{action}</h3>
              <p className="opacity-70 text-sm mt-1">Open</p>
            </div>
          ))}
        </div>
      </section>

      {/* ASSET TYPES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Asset Types</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Scripts",
            "Images",
            "Motion",
            "Voices",
            "Music",
            "Metadata",
          ].map((type) => (
            <div
              key={type}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{type}</h3>
              <p className="opacity-70 text-sm mt-1">View assets</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">Pipeline Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">

          {/* LEFT: ASSET PANEL */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[320px]">
            <div className="opacity-70 text-sm">
              Asset preview area (connect to your storage backend). This panel
              will display selected assets, metadata, and routing options.
            </div>

            <div className="mt-auto">
              <textarea
                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-28"
                placeholder="Add notes, tags, or routing instructions for this asset..."
              />

              <div className="flex gap-3 mt-3">
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Save Notes
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Apply Tags
                </button>
                <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                  Route Asset
                </button>
              </div>

              <p className="opacity-50 text-[11px] mt-2">
                The Asset Pipeline Engine connects all Pro Engines and ensures
                assets remain organized, searchable, and synchronized across the
                entire OS.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTEXT + ROUTING */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">

            <h3 className="font-medium text-sm">Attached Metadata</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Asset Type: Script / Image / Motion / Voice / Music</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Routing Targets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Script Engine Pro</li>
              <li>• Image Engine Pro</li>
              <li>• Motion Engine Pro</li>
              <li>• Music Engine Pro</li>
              <li>• Voice Engine Pro</li>
              <li>• Realm Builder</li>
              <li>• Story Arc Engine</li>
              <li>• Character Genome Engine</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Auto‑tag assets</li>
              <li>• Auto‑sync metadata</li>
              <li>• Auto‑route to engines</li>
              <li>• Auto‑archive completed assets</li>
            </ul>

          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Pipeline Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Tagging Engine",
            "Metadata Engine",
            "Routing Engine",
            "Asset Archive",
            "Pipeline Analytics",
            "Pipeline Settings",
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
