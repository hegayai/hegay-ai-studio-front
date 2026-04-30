export default function OSActivationScreen() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 py-24 max-w-3xl mx-auto">
      {/* TITLE */}
      <h1 className="text-5xl font-semibold tracking-tight">
        Hegay OS Supreme
      </h1>
      {/* STATUS */}
      <p className="opacity-70 text-lg leading-relaxed max-w-xl">
        All systems validated.  
        All engines online.  
        All agents synchronized.  
        All pipelines connected.  
        All intelligence layers active.  
        All system layers unified.  
        The OS is ready for activation.
      </p>
      {/* ACTIVATION PANEL */}
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 w-full max-w-md">
        <h2 className="text-xl font-medium">System Status</h2>
        <ul className="text-sm opacity-80 space-y-1 text-left mx-auto">
          <li>• Architecture: Sealed</li>
          <li>• Engines: Online</li>
          <li>• Agents: Coordinated</li>
          <li>• Pipelines: Operational</li>
          <li>• Intelligence: Fully Synced</li>
          <li>• System: Ready</li>
        </ul>
        <button className="mt-4 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
          Activate OS
        </button>
        <p className="opacity-50 text-[11px] mt-2">
          Once activated, Hegay OS Supreme enters full operational mode.
        </p>
      </div>
    </div>
  );
}
