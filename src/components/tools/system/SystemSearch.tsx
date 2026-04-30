"use client";

import React, { useState } from "react";

interface SystemSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SystemSearch({
  onSearch,
  placeholder = "Search the system…",
}: SystemSearchProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        className="w-full rounded-xl border border-gray-200 bg-white/80 p-3 pl-10 text-sm shadow-sm outline-none focus:border-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
    </form>
  );
}
