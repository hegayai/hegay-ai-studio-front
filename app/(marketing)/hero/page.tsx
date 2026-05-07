"use client";

import React from "react";
import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

      <div className="text-center z-10">
        <h1 className="text-6xl font-bold tracking-tight mb-4">
          Hegay OS Supreme
        </h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          A cosmic‑minimal creative intelligence operating system built for
          creators, thinkers, and world‑builders.
        </p>
      </div>

      <div className="absolute bottom-10 opacity-70">
        <Image
          src="/logo.svg"
          alt="Hegay Logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
