"use client";

export default function StudioModelSelector({ engine, setEngine }: any) {
  const models = [
    { id: "flux", label: "Flux 1.1 Pro" },
    { id: "luma", label: "Luma Dream Machine" },
    { id: "os", label: "Hegay OS Model" },
  ];

  return (
    <div className="flex gap-3">
      {models.map((m) => (
        <button
          key={m.id}
          onClick={() => setEngine(m.id)}
          className={`px-4 py-2 rounded-xl text-sm transition ${
            engine === m.id
              ? "bg-white/20 text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
