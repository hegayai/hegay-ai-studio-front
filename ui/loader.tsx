"use client";

import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full p-10">
      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );
}
