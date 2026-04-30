"use client";

import React from "react";

interface SystemLoaderProps {
  active: boolean;
  label?: string;
}

export function SystemLoader({ active, label = "Loading…" }: SystemLoaderProps) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        <p className="mt-3 text-sm text-gray-700">{label}</p>
      </div>
    </div>
  );
}
