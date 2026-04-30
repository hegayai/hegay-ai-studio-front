"use client";

import React from "react";
import { ModelSelect, ModelOption } from "./ModelSelect";
import { TemperatureControl } from "./TemperatureControl";

interface AdvancedAIControlsProps {
  model: string;
  onModelChange: (id: string) => void;
  temperature: number;
  onTemperatureChange: (value: number) => void;
  maxTokens?: number;
  onMaxTokensChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  modelOptions: ModelOption[];
}

export function AdvancedAIControls({
  model,
  onModelChange,
  temperature,
  onTemperatureChange,
  maxTokens,
  onMaxTokensChange,
  disabled,
  className,
  modelOptions,
}: AdvancedAIControlsProps) {
  return (
    <div
      className={[
        "space-y-4 rounded-2xl border border-gray-200 bg-white/80 p-4 text-sm shadow-sm backdrop-blur",
        className || "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          AI Controls
        </h3>
        <span className="text-[10px] text-gray-400">
          Tuned for Hegay OS Studio
        </span>
      </div>

      <ModelSelect
        value={model}
        onChange={onModelChange}
        options={modelOptions}
        disabled={disabled}
      />

      <TemperatureControl
        value={temperature}
        onChange={onTemperatureChange}
      />

      {typeof maxTokens === "number" && onMaxTokensChange && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Max Tokens
            </label>
            <span className="text-xs text-gray-400">
              {maxTokens}
            </span>
          </div>
          <input
            type="range"
            min={64}
            max={4096}
            step={64}
            value={maxTokens}
            disabled={disabled}
            onChange={e => onMaxTokensChange(parseInt(e.target.value, 10))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-black"
          />
          <div className="flex justify-between text-[10px] uppercase tracking-wide text-gray-400">
            <span>Short</span>
            <span>Medium</span>
            <span>Long</span>
          </div>
        </div>
      )}
    </div>
  );
}
