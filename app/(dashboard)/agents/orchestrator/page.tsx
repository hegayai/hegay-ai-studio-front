export default function AgentOrchestrator() {
  return (
    <div className="flex flex-col gap-12 max-w-7xl">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Agent Orchestrator
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-3xl">
          The master controller that coordinates all AI Agents across Hegay OS.
          The Orchestrator manages workflows, routes tasks, merges outputs,
          resolves conflicts, and maintains global creative coherence across
          universes, realms, characters, cultures, timelines, and assets.
        </p>
      </div>

      {/* AGENT GRID */}
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

      {/* WORKFLOW MODES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Workflow Modes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Single‑Agent Mode",
            "Multi‑Agent Mode",
            "Pipeline Mode",
            "Background Mode",
            "Synchronized Mode",
            "Autonomous Mode",
          ].map((mode) => (
            <div
              key={mode}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{mode}</h3>
              <p className="opacity-70 text-sm mt-1">Activate</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACE */}
      <section>
        <h2 className="text-xl font-medium mb-4">Orchestrator Workspace</h2>
        <div className="grid grid-cols-[2fr,1fr] gap-6">

          {/* LEFT: COMMAND PANEL */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4 min-h-[360px]">
            <div className="opacity-70 text-sm">
              Orchestrator command panel. Enter a task and the Orchestrator will
              determine which agents to activate, how to route the task, and how
              to merge outputs into a coherent result.
            </div>

            <textarea
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm outline-none resize-none h-40"
              placeholder="Describe a complex task — the Orchestrator will coordinate multiple agents to complete it..."
            />

            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Execute
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Analyze Workflow
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition">
                Route to Pipeline
              </button>
            </div>

            <p className="opacity-50 text-[11px] mt-2">
              The Orchestrator uses the Agent Kernel to coordinate reasoning,
              context, and routing across all agents.
            </p>
          </div>

          {/* RIGHT: ACTIVE CONTEXT */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-4">

            <h3 className="font-medium text-sm">Global Context</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Universe: Diaspora Storyworld v3</li>
              <li>• Realm: Diaspora Realm</li>
              <li>• Character: Aruwa — Dawn Incarnate</li>
              <li>• Culture: Diaspora Culture Grid</li>
              <li>• Timeline: Diaspora Timeline</li>
              <li>• Arc: Diaspora Hero Arc</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Active Agents</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Story Agent</li>
              <li>• World Agent</li>
              <li>• Character Agent</li>
              <li>• Visual Agent</li>
              <li>• Audio Agent</li>
              <li>• Pipeline Agent</li>
            </ul>

            <h3 className="font-medium text-sm mt-4">Workflow Presets</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• High‑mythic workflow</li>
              <li>• Culture‑driven workflow</li>
              <li>• Character‑centric workflow</li>
              <li>• System‑design workflow</li>
            </ul>

          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Orchestrator Systems</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Workflow Engine",
            "Multi‑Agent Engine",
            "Routing Engine",
            "Conflict Resolver",
            "Orchestrator Archive",
            "Orchestrator Settings",
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

    </div>
  );
}
