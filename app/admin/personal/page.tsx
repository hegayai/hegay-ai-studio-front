"use client";

export default function PersonalDashboard() {
  return (
    <div className="p-10 md:p-16 space-y-12">

      <div className="p-10 rounded-xl border border-white/10 bg-white/5">
        <h1 className="text-3xl font-bold tracking-tight">
          Personal Command Center
        </h1>
        <p className="opacity-70 mt-3 max-w-2xl leading-relaxed">
          Your private control room. Monitor system health, universe activity,
          realm operations, engines, diagnostics, and creative civilization
          processes.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {/* SYSTEM HEALTH */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <div className="grid gap-4">
            {["OS Shell Status", "Engine Status", "Sync Layer Health"].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{item}</h3>
                <p className="opacity-70 text-sm mt-1">View details</p>
              </div>
            ))}
          </div>
        </div>

        {/* UNIVERSE ACTIVITY */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">Universe Activity</h2>
          <div className="grid gap-4">
            {["Diaspora Storyworld", "Aruwa Mythos", "NaijaMix Multiverse"].map((uni) => (
              <div key={uni} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{uni}</h3>
                <p className="opacity-70 text-sm mt-1">Open universe</p>
              </div>
            ))}
          </div>
        </div>

        {/* REALM OPERATIONS */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">Realm Operations</h2>
          <div className="grid gap-4">
            {["Active Realms", "Realm Builder", "Realm Metadata"].map((realm) => (
              <div key={realm} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{realm}</h3>
                <p className="opacity-70 text-sm mt-1">Manage</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENGINE STATUS */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">Engine Status</h2>
          <div className="grid gap-4">
            {[
              "Pantheon Engine",
              "Timeline Engine",
              "World‑Soul Engine",
              "Story Arc Engine",
              "Character Genome Engine",
              "Culture Grid Engine",
            ].map((engine) => (
              <div key={engine} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{engine}</h3>
                <p className="opacity-70 text-sm mt-1">View status</p>
              </div>
            ))}
          </div>
        </div>

        {/* SYNC DIAGNOSTICS */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">Sync Diagnostics</h2>
          <div className="grid gap-4">
            {[
              "Multiverse Sync",
              "Continuity Checker",
              "Resonance Alignment",
            ].map((sync) => (
              <div key={sync} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{sync}</h3>
                <p className="opacity-70 text-sm mt-1">Inspect</p>
              </div>
            ))}
          </div>
        </div>

        {/* CREATIVE TASKS */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-semibold mb-4">Creative Tasks</h2>
          <div className="grid gap-4">
            {["Pending Tasks", "In‑Progress Work", "Completed Work"].map((task) => (
              <div key={task} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-medium">{task}</h3>
                <p className="opacity-70 text-sm mt-1">Open</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
