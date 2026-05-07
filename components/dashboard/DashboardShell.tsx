"use client";

import type { ReactNode } from "react";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">Creator Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">{children}</div>

        <div className="col-span-1 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-lg font-medium mb-3">Quick Stats</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/60">Projects</span>
              <span className="font-medium">12</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/60">AI Generations</span>
              <span className="font-medium">482</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/60">Storage</span>
              <span className="font-medium">3.1 GB</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/60">Users</span>
              <span className="font-medium">1 (You)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
