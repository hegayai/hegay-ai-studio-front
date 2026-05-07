"use client";

import React, { useEffect, useState } from "react";
import { listApps } from "./app-registry";
import { mountApp } from "./app-loader";

export default function AppShell() {
  const [apps, setApps] = useState<
    { slug: string; name: string; description?: string }[]
  >([]);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const registered = listApps().map((entry) => ({
      slug: entry.manifest.slug,
      name: entry.manifest.name,
      description: entry.manifest.description,
    }));
    setApps(registered);
  }, []);

  useEffect(() => {
    if (!activeSlug) return;
    mountApp(activeSlug, "hegay-app-container");
  }, [activeSlug]);

  return (
    <div className="w-full h-full flex">
      <div className="w-64 border-r border-white/10 p-3 space-y-2">
        <h2 className="text-sm font-semibold mb-2">Apps</h2>
        {apps.map((app) => (
          <button
            key={app.slug}
            onClick={() => setActiveSlug(app.slug)}
            className={`w-full text-left px-2 py-1 rounded text-sm ${
              activeSlug === app.slug ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <div className="font-medium">{app.name}</div>
            {app.description && (
              <div className="text-xs opacity-70">{app.description}</div>
            )}
          </button>
        ))}
        {apps.length === 0 && (
          <div className="text-xs opacity-60">No apps registered yet.</div>
        )}
      </div>

      <div className="flex-1 p-4">
        <div
          id="hegay-app-container"
          className="w-full h-full border border-white/10 rounded-lg p-3 text-sm"
        >
          {activeSlug ? (
            <span className="opacity-60">
              Loading <strong>{activeSlug}</strong>…
            </span>
          ) : (
            <span className="opacity-60">
              Select an app from the left to mount it here.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
