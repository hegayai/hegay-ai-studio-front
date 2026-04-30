"use client";

import React from "react";

export interface ModelOption {
  id: string;
  label: string;
  description?: string;
  badge?: string;
}

interface ModelSelectProps {
  label?: string;
  value: string;
  onChange: (id: string) => void;
  options: ModelOption[];
  disabled?: boolean;
  className?: string;
}

export function ModelSelect({
  label = "Model",
  value,
  onChange,
  options,
  disabled,
  className,
}: ModelSelectProps) {
  return (
    <div className={["space-y-2", className || ""].join(" ")}>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="grid gap-2 sm:grid-cols-2">
        {options.map(option => {
          const active = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(option.id)}
              className={[
                "flex flex-col items-start rounded-xl border p-3 text-left text-sm transition",
                active
                  ? "border-black bg-black text-white shadow-sm"
                  : "border-gray-200 bg-white/80 text-gray-900 hover:border-gray-400 hover:bg-white",
                disabled && "cursor-not-allowed opacity-60",
              ].join(" ")}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <span className="font-medium">
                  {option.label}
                </span>
                {option.badge && (
                  <span className="rounded-full bg-gray-900/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                    {option.badge}
                  </span>
                )}
              </div>
              {option.description && (
                <p
                  className={[
                    "mt-1 text-xs",
                    active ? "text-gray-100/80" : "text-gray-500",
                  ].join(" ")}
                >
                  {option.description}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
