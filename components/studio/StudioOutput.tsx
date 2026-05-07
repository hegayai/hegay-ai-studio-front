"use client";

export default function StudioOutput({ output }: any) {
  if (!output) {
    return (
      <div className="text-white/40 text-sm">
        Your generated images will appear here.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <img
        src={output}
        alt="Generated"
        className="rounded-xl border border-white/10 shadow-xl"
      />
    </div>
  );
}
