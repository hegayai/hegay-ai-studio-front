"use client";

import React from "react";

interface PanelProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Panel({
  title,
  description,
  children,
  footer,
  className,
}: PanelProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur",
        className || "",
      ].join(" ")}
    >
      {(title || description) && (
        <div className="mb-4 space-y-1">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {children}
      </div>

      {footer && (
        <div className="mt-6 border-t border-gray-100 pt-4">
          {footer}
        </div>
      )}
    </div>
  );
}
