export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 max-w-5xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Hegay OS · Supreme Dashboard
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Orchestrate your entire creative civilization from one living surface.
          Realms, studios, rituals, and timelines converge into a single command
          space—tuned to your Pantheon and World‑Soul.
        </p>
      </div>
      {/* PRIMARY ACTIONS */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Open Studio
        </button>
        <button className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          View Realms
        </button>
      </div>
      {/* CORE MODULES */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">New Studio Session</h3>
          <p className="opacity-70 text-sm">Start a fresh creative ritual</p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Summon Pantheon</h3>
          <p className="opacity-70 text-sm">Consult archetypal guidance</p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Open Timeline Engine</h3>
          <p className="opacity-70 text-sm">Review active storylines</p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Universe Builder</h3>
          <p className="opacity-70 text-sm">Design new creative worlds</p>
        </div>
      </div>
      {/* REALMS */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Culture Realm</h3>
          <p className="opacity-70 text-sm">
            Curate, archive, and broadcast cultural signals.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Studio Engine</h3>
          <p className="opacity-70 text-sm">
            Record, mix, and orchestrate creator sessions.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Timeline Engine</h3>
          <p className="opacity-70 text-sm">
            Track arcs, launches, and narrative beats.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-medium mb-1">Archive Vault</h3>
          <p className="opacity-70 text-sm">
            Preserve masterworks and origin artifacts.
          </p>
        </div>
      </div>
      {/* LIVE ACTIVITY */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-medium mb-3">Live Activity</h3>
        <p className="opacity-70 text-sm mb-3">Synced with rituals & timelines</p>
        <ul className="text-sm opacity-80 space-y-1">
          <li>New studio session completed · NaijaMix Radio · 14 min ago</li>
          <li>Pantheon influence updated · Aruwa · Memory field tuned</li>
          <li>World‑Soul resonance shift · Level moved from 1 → 2</li>
          <li>Universe blueprint saved · Diaspora Storyworld v3</li>
        </ul>
      </div>
      {/* MOTION AI PLANS */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-medium mb-3">Motion AI Plans</h3>
        <div className="flex flex-wrap gap-3 text-sm opacity-80">
          <span>Basic (£15/mo)</span>
          <span>Pro (£29/mo)</span>
          <span>Creator (£49/mo)</span>
          <span>Studio (£99/mo)</span>
        </div>
      </div>
    </div>
  );
}
