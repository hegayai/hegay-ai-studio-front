export default function OutputPanel({ output }: { output: any }) {
  if (!output) {
    return (
      <div className="p-4 text-white/40 text-center">
        Your output will appear here.
      </div>
    );
  }

  if (output.type === "image") {
    return (
      <img
        src={output.url}
        className="rounded-xl border border-white/20"
        alt="Generated"
      />
    );
  }

  if (output.type === "video") {
    return (
      <video
        src={output.url}
        controls
        className="rounded-xl border border-white/20"
      />
    );
  }

  return (
    <pre className="p-4 bg-white/5 border border-white/10 rounded-xl text-white whitespace-pre-wrap">
      {output.text}
    </pre>
  );
}
