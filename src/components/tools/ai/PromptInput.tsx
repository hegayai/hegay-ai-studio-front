"use client";

import React, { useState, KeyboardEvent } from "react";

interface PromptInputProps {
  label?: string;
  placeholder?: string;
  initialValue?: string;
  disabled?: boolean;
  onSubmit: (value: string) => void;
  className?: string;
}

export function PromptInput({
  label = "Prompt",
  placeholder = "Describe what you want the AI to create...",
  initialValue = "",
  disabled,
  onSubmit,
  className,
}: PromptInputProps) {
  const [value, setValue] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    if (!value.trim() || disabled || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await onSubmit(value.trim());
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className={["space-y-2", className || ""].join(" ")}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-xs text-gray-400">
          Press ⌘+Enter / Ctrl+Enter to send
        </span>
      </div>

      <textarea
        className="min-h-[120px] w-full rounded-xl border border-gray-200 bg-white/80 p-3 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-gray-400 focus:bg-white focus:shadow-md"
        placeholder={placeholder}
        value={value}
        disabled={disabled || isSubmitting}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {value.length} characters
        </span>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={disabled || isSubmitting || !value.trim()}
          className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSubmitting ? "Thinking…" : "Generate"}
        </button>
      </div>
    </div>
  );
}
