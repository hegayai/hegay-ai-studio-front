"use client";

import { useEffect, useState } from "react";

type AssetType = "image" | "video";

type SavedAsset = {
  id: string;
  url: string;
  type: AssetType;
  style: string | null;
  prompt: string;
  usedPrompt: string | null;
  createdAt: string;
};

export default function LibraryPage() {
  const [assets, setAssets] = useState<SavedAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [selected, setSelected] = useState<SavedAsset | null>(null);
  const [copyMessage, setCopyMessage] = useState<string>("");

  async function loadAssets() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/assets/save", {
        method: "GET",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Failed to load assets");
        return;
      }

      setAssets(data.assets || []);
    } catch (e: any) {
      setError(e?.message || "Failed to load assets");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAssets();
  }, []);

  async function handleDelete(id: string) {
    // For now, just remove locally (in-memory backend)
    setAssets((prev) => prev.filter((a) => a.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  async function handleCopyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopyMessage("URL copied.");
      setTimeout(() => setCopyMessage(""), 1500);
    } catch {
      setCopyMessage("Failed to copy.");
      setTimeout(() => setCopyMessage(""), 1500);
    }
  }

  function formatDate(iso: string) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleString();
  }

  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-b from-black via-slate-950 to-black text-white">
      {/* Title bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Asset Library
          </h1>
          <p className="text-xs text-white/50">
            All images and videos saved from Studio.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/60">
          {copyMessage && (
            <span className="text-emerald-400">{copyMessage}</span>
          )}
          <button
            onClick={loadAssets}
            className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Grid */}
        <div className="flex-1 overflow-auto p-6">
          {loading && (
            <div className="text-sm text-white/50">Loading assets…</div>
          )}

          {!loading && error && (
            <div className="text-sm text-red-400">{error}</div>
          )}

          {!loading && !error && assets.length === 0 && (
            <div className="text-sm text-white/40">
              No assets saved yet. Generate something in Studio and click
              &quot;Save to Library&quot;.
            </div>
          )}

          {!loading && !error && assets.length > 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {assets.map((asset) => (
                <button
                  key={asset.id}
                  onClick={() => setSelected(asset)}
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition flex flex-col"
                >
                  <div className="aspect-video w-full bg-black/60 overflow-hidden">
                    {asset.type === "image" ? (
                      <img
                        src={asset.url}
                        alt={asset.prompt}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                      />
                    ) : (
                      <video
                        src={asset.url}
                        className="w-full h-full object-cover"
                        muted
                      />
                    )}
                  </div>

                  <div className="p-3 flex flex-col gap-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                        {asset.type === "image" ? "Image" : "Video"}
                      </span>
                      {asset.style && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 truncate max-w-[120px]">
                          {asset.style}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/70 line-clamp-2">
                      {asset.prompt}
                    </p>
                    <p className="text-[10px] text-white/40">
                      {formatDate(asset.createdAt)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Preview panel (desktop) */}
        <div className="hidden lg:flex w-[360px] border-l border-white/10 bg-black/40 backdrop-blur flex-col">
          {selected ? (
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Details</div>
                  <div className="text-[11px] text-white/50">
                    {selected.type === "image" ? "Image" : "Video"} •{" "}
                    {selected.style || "No style"}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs text-white/50 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="p-4 flex-1 overflow-auto space-y-4">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <div className="aspect-video w-full bg-black/80">
                    {selected.type === "image" ? (
                      <img
                        src={selected.url}
                        alt={selected.prompt}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <video
                        src={selected.url}
                        controls
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="text-white/50 mb-1">Prompt</div>
                    <div className="text-white/80 whitespace-pre-wrap bg-white/5 border border-white/10 rounded-lg p-2">
                      {selected.prompt}
                    </div>
                  </div>

                  {selected.usedPrompt && selected.usedPrompt !== selected.prompt && (
                    <div>
                      <div className="text-white/50 mb-1">Engine Prompt</div>
                      <div className="text-white/70 whitespace-pre-wrap bg-white/5 border border-white/10 rounded-lg p-2">
                        {selected.usedPrompt}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-white/50 text-[11px] mb-1">
                        Type
                      </div>
                      <div className="text-white/80 text-[11px]">
                        {selected.type}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/50 text-[11px] mb-1">
                        Style
                      </div>
                      <div className="text-white/80 text-[11px]">
                        {selected.style || "—"}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/50 text-[11px] mb-1">
                        Created
                      </div>
                      <div className="text-white/80 text-[11px]">
                        {formatDate(selected.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => handleCopyUrl(selected.url)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 transition"
                  >
                    Copy URL
                  </button>
                  <a
                    href={selected.url}
                    download
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 transition"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/40 text-red-300 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-xs text-white/40 px-6 text-center">
              Select an asset to see details.
            </div>
          )}
        </div>
      </div>

      {/* Mobile preview modal */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur flex items-center justify-center">
          <div className="w-full max-w-md max-h-[90vh] bg-black/90 border border-white/15 rounded-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <div className="text-sm font-medium">Asset Details</div>
                <div className="text-[11px] text-white/50">
                  {selected.type === "image" ? "Image" : "Video"} •{" "}
                  {selected.style || "No style"}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-xs text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                <div className="aspect-video w-full bg-black/80">
                  {selected.type === "image" ? (
                    <img
                      src={selected.url}
                      alt={selected.prompt}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={selected.url}
                      controls
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-white/50 mb-1">Prompt</div>
                  <div className="text-white/80 whitespace-pre-wrap bg-white/5 border border-white/10 rounded-lg p-2">
                    {selected.prompt}
                  </div>
                </div>

                {selected.usedPrompt && selected.usedPrompt !== selected.prompt && (
                  <div>
                    <div className="text-white/50 mb-1">Engine Prompt</div>
                    <div className="text-white/70 whitespace-pre-wrap bg-white/5 border border-white/10 rounded-lg p-2">
                      {selected.usedPrompt}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-white/50 text-[11px] mb-1">
                      Type
                    </div>
                    <div className="text-white/80 text-[11px]">
                      {selected.type}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[11px] mb-1">
                      Style
                    </div>
                    <div className="text-white/80 text-[11px]">
                      {selected.style || "—"}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[11px] mb-1">
                      Created
                    </div>
                    <div className="text-white/80 text-[11px]">
                      {formatDate(selected.createdAt)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => handleCopyUrl(selected.url)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 transition"
                >
                  Copy URL
                </button>
                <a
                  href={selected.url}
                  download
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 transition"
                >
                  Download
                </a>
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/40 text-red-300 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
