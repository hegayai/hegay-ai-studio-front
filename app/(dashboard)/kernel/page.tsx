export default function OSKernel() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">
          OS Kernel
        </h1>
        <p className="opacity-70 mt-3 leading-relaxed max-w-3xl">
          The deepest root layer of Hegay OS Supreme. Manages global system
          state, core routing, permissions, policies, orchestration, lifecycle,
          and system identity. All agents, engines, pipelines, and intelligence
          modules ultimately depend on the Kernel.
        </p>
      </div>

      {/* KERNEL DOMAINS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Kernel Domains</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Global State",
            "Core Routing",
            "Core Permissions",
            "Core Policies",
            "System Identity",
            "Lifecycle Control",
            "Heartbeat Monitor",
            "Kernel Logs",
            "Kernel Safety",
          ].map((domain) => (
            <div
              key={domain}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium text-lg">{domain}</h3>
              <p className="opacity-70 text-sm mt-1">Open domain</p>
            </div>
          ))}
        </div>
      </section>

      {/* KERNEL OPERATIONS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Kernel Operations</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Update Global State",
            "Apply Kernel Policy",
            "Run Kernel Check",
            "Restart Subsystems",
            "Flush Kernel Cache",
            "Optimize Kernel",
          ].map((op) => (
            <div
              key={op}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
            >
              <h3 className="font-medium">{op}</h3>
              <p className="opacity-70 text-sm mt-1">Execute</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">Kernel Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">

          {/* LEFT PANEL */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[360px]">
            <div className="opacity-70 text-sm">
              Kernel command panel (connect to backend). Executes global state
              updates, policy changes, subsystem restarts, and kernel‑level
              operations.
            </div>

            <textarea
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-40"
              placeholder="Enter a kernel‑level command..."
            />

            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Execute
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Apply Policy
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Restart
              </button>
            </div>

            <p className="opacity-50 text-[11px] mt-2">
              The OS Kernel governs the deepest system operations.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">
            <h3 className="font-medium text-sm">Active Kernel State</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Global State: Stable</li>
              <li>• Routing: Active</li>
              <li>• Permissions: Valid</li>
              <li>• Policies: Applied</li>
              <li>• Lifecycle: Healthy</li>
              <li>• Heartbeat: Normal</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Kernel Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic kernel</li>
              <li>• Culture‑driven kernel</li>
              <li>• Character‑centric kernel</li>
              <li>• System‑design kernel</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
