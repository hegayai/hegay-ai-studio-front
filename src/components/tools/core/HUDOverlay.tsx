"use client";

import React from "react";

interface HUDOverlayProps {
  title?: string;
  subtitle?: string;
  topRight?: React.ReactNode;
  bottomCenter?: React.ReactNode;
}

export function HUDOverlay({
  title,
  subtitle,
  topRight,
  bottomCenter,
}: HUDOverlayProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-between">
      <div className="flex items-start justify-between p-6">
        <div className="pointer-events-auto">
          {title && (
            <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-1 text-xs text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
        <div className="pointer-events-auto">
          {topRight}
        </div>
      </div>

      <div className="pointer-events-auto flex justify-center pb-6">
        {bottomCenter && (
          <div className="rounded-full bg-black/70 px-4 py-2 text-xs text-gray-200 backdrop-blur">
            {bottomCenter}
          </div>
        )}
      </div>
    </div>
  );
}
