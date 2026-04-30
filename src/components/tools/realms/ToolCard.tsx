"use client";

import React from "react";

interface ToolCardProps {
  title: string;
  description: string;
  icon?: string;
  onClick?: () => void;
}

export function ToolCard({ title, description, icon = "⚡", onClick }: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white/80 p-5 text-left shadow-sm transition hover:bg-gray-100"
    >
      <span className="text-2xl mb-3">{icon}</span>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </button>
  );
}
