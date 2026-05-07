"use client";

export default function HomeHub() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Hegay OS Supreme</h1>
      <p className="text-lg opacity-70 mb-10">
        Your cosmic‑minimal creative operating system.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {[
          { name: "Canvas", path: "/canvas" },
          { name: "Studio", path: "/studio" },
          { name: "Video Lab", path: "/video-lab" },
          { name: "Audio Lab", path: "/audio-lab" },
          { name: "Reels Generator", path: "/reels" },
          { name: "Cleanup Studio", path: "/cleanup" },
        ].map((app) => (
          <a
            key={app.name}
            href={app.path}
            className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition text-center"
          >
            {app.name}
          </a>
        ))}
      </div>
    </div>
  );
}
