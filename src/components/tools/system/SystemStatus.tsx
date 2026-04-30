"use client";

import React from "react";

interface SystemStatusProps {
  status: "idle" | "processing" | "error" | "success";
  message?: string;
}

export function SystemStatus({ status, message }: SystemStatusProps) {
  const colors = {
    idle: "text-gray-400",
    processing: "text-amber-500",
    error: "text-red-600",
    success: "text-emerald-600",
  };

  const icons = {
    idle: "●",
    processing: "●",
    error: "●",
    success: "●",
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={colors[status]}>{icons[status]}</span>
      <span className="text-gray-700">{message || status}</span>
    </div>
  );
}
