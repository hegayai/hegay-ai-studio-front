export default function PersonalDashboard() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Personal Dashboard
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Your private command center. Monitor system health, universe activity,
          realm operations, engine status, sync diagnostics, and creative tasks.
          This dashboard gives you full oversight of your creative civilization.
        </p>
      </div>
      {/* SYSTEM HEALTH */}
      <section>
        <h2 className="text-xl font-medium mb-4">System Health</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "OS Shell Status",
            "Engine Status",
            "Sync Layer Health",
          ].map((item) => (
            <div
              key={item}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{item}</h3>
              <p className="opacity-70 text-sm mt-1">View details</p>
            </div>
          ))}
        </div>
      </section>
      {/* UNIVERSE ACTIVITY */}
      <section>
        <h2 className="text-xl font-medium mb-4">Universe Activity</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld",
            "Aruwa Mythos",
            "NaijaMix Multiverse",
          ].map((uni) => (
            <div
              key={uni}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{uni}</h3>
              <p className="opacity-70 text-sm mt-1">Open universe</p>
            </div>
          ))}
        </div>
      </section>
      {/* REALM OPERATIONS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Realm Operations</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Active Realms",
            "Realm Builder",
            "Realm Metadata",
          ].map((realm) => (
            <div
              key={realm}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{realm}</h3>
              <p className="opacity-70 text-sm mt-1">Manage</p>
            </div>
          ))}
        </div>
      </section>
      {/* ENGINE STATUS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Engine Status</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Pantheon Engine",
            "Timeline Engine",
            "World‑Soul Engine",
            "Story Arc Engine",
            "Character Genome Engine",
            "Culture Grid Engine",
          ].map((engine) => (
            <div
              key={engine}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{engine}</h3>
              <p className="opacity-70 text-sm mt-1">View status</p>
            </div>
          ))}
        </div>
      </section>
      {/* SYNC DIAGNOSTICS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Sync Diagnostics</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Multiverse Sync",
            "Continuity Checker",
            "Resonance Alignment",
          ].map((sync) => (
            <div
              key={sync}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{sync}</h3>
              <p className="opacity-70 text-sm mt-1">Inspect</p>
            </div>
          ))}
        </div>
      </section>
      {/* CREATIVE TASKS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Creative Tasks</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Pending Tasks",
            "In‑Progress Work",
            "Completed Work",
          ].map((task) => (
            <div
              key={task}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{task}</h3>
              <p className="opacity-70 text-sm mt-1">Open</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
