"use client";

import React from "react";

interface QuickAction {
  id: string;
  label: string;
  icon?: string;
  onClick: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {actions.map(action => (
        <button
          key={action.id}
          onClick={action.onClick}
          className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white/80 p-4 text-sm shadow-sm hover:bg-gray-100"
        >
          <span className="text-2xl">{action.icon || "⚡"}</span>
          <span className="mt-2 text-xs text-gray-700">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
