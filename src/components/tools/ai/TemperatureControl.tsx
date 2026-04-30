"use client";

import React from "react";

interface TemperatureControlProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function TemperatureControl({
  label = "Creativity",
  value,
  min = 0,
  max = 1,
  step = 0.05,
  onChange,
  className,
}: TemperatureControlProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={["space-y-2", className || ""].join(" ")}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-xs text-gray-400">
          {value.toFixed(2)}
        </span>
      </div>

      <div className="space-y-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-black"
        />
        <div className="flex justify-between text-[10px] uppercase tracking-wide text-gray-400">
          <span>Focused</span>
          <span>Balanced</span>
          <span>Wild</span>
        </div>
      </div>

      <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
