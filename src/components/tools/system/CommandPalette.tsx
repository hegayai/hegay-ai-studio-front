"use client";

import React, { useState, useEffect } from "react";

interface Command {
  id: string;
  label: string;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  commands: Command[];
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ commands, open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
        <input
          autoFocus
          className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-gray-400"
          placeholder="Type a command…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <div className="mt-3 max-h-72 overflow-y-auto">
          {filtered.map(cmd => (
            <button
              key={cmd.id}
              onClick={() => {
                cmd.action();
                onClose();
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
            >
              <span>{cmd.label}</span>
              {cmd.shortcut && (
                <span className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
                  {cmd.shortcut}
                </span>
              )}
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="p-3 text-center text-sm text-gray-400">
              No commands found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
