"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        src="/videos/hegay-os-boot.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
