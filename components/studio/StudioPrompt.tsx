"use client";

export default function StudioPrompt({ prompt, setPrompt }: any) {
  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Describe what you want to create..."
      className="w-full h-32 p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/20"
    />
  );
}
