export default function UniversePage() {
  return (
    <div className="p-10 space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-semibold mb-2">Hegay OS Supreme</h1>
        <p className="text-lg text-white/70">
          CREATION WITHOUT LIMITS
        </p>
      </div>

      {/* INTRO */}
      <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">The Creative Universe</h2>
        <p className="text-white/70 leading-relaxed">
          Hegay OS Supreme is a cinematic operating system built for creators,
          thinkers, and innovators. It is the place where imagination becomes
          civilization — a unified environment where intelligence, creativity,
          and tools merge into a seamless experience.
        </p>
      </div>

      {/* CREATIVE SUITE */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Creative Suite</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <UniverseCard title="Studio" path="/creative/studio" />
          <UniverseCard title="Canvas" path="/creative/canvas" />
          <UniverseCard title="Video Lab" path="/creative/video-lab" />
          <UniverseCard title="Audio Lab" path="/creative/audio-lab" />
          <UniverseCard title="Reels" path="/creative/reels" />
          <UniverseCard title="Image Forge" path="/creative/image-forge" />
          <UniverseCard title="Motion" path="/creative/motion" />

        </div>
      </div>

      {/* SYSTEM */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">System</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UniverseCard title="Dashboard" path="/dashboard" />
          <UniverseCard title="About" path="/about" />
        </div>
      </div>

    </div>
  );
}

function UniverseCard({ title, path }: { title: string; path: string }) {
  return (
    <a
      href={path}
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] block"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">Open {title}</p>
    </a>
  );
}
