"use client";

export default function StudioActions({ generate }: any) {
  return (
    <div className="flex gap-4">
      <button
        onClick={generate}
        className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
      >
        Generate
      </button>

      <button className="px-6 py-3 rounded-xl bg-white/5 text-white/60 cursor-not-allowed">
        Variations (coming soon)
      </button>

      <button className="px-6 py-3 rounded-xl bg-white/5 text-white/60 cursor-not-allowed">
        Upscale (coming soon)
      </button>
    </div>
  );
}
