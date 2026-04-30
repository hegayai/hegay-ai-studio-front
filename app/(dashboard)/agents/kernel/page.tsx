export default function AgentKernel() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Agent Kernel
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          The shared intelligence layer for all AI Agents. Provides context
          loading, memory access, routing logic, and universe‑aware reasoning.
          Every agent in Hegay OS connects to the kernel.
        </p>
      </div>

      {/* CORE SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Kernel Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Context Engine",
            "Memory Engine",
            "Routing Engine",
            "Reasoning Engine",
            "Sync Engine",
            "Agent Registry",
          ].map((sys) => (
            <div
              key={sys}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{sys}</h3>
              <p className="opacity-70 text-sm mt-1">Open system</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXT LOADERS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Context Loaders</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Universe Context",
            "Realm Context",
            "Character Context",
            "Culture Context",
            "Timeline Context",
            "Story Arc Context",
          ].map((ctx) => (
            <div
              key={ctx}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{ctx}</h3>
              <p className="opacity-70 text-sm mt-1">Load context</p>
            </div>
          ))}
        </div>
      </section>

      {/* AGENT REGISTRY */}
      <section>
        <h2 className="text-xl font-medium mb-4">Registered Agents</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Story Agent",
            "World Agent",
            "Character Agent",
            "Visual Agent",
            "Audio Agent",
            "Pipeline Agent",
          ].map((agent) => (
            <div
              key={agent}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{agent}</h3>
              <p className="opacity-70 text-sm mt-1">View agent</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
