"use client";

import React from "react";
import HeroPage from "../hero/page";
import Logo from "../brand/logo";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <HeroPage />

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">A New Creative OS</h2>
        <p className="opacity-80 text-lg">
          Hegay OS Supreme is a multi‑device, cloud‑synced, creative intelligence
          environment designed for creators, producers, and innovators.
        </p>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Powered by DeepSeek + Fal.ai</h2>
        <p className="opacity-80 text-lg">
          Ultra‑fast reasoning, cinematic image generation, and AI‑driven video
          creation — all inside your OS.
        </p>
      </section>

      <footer className="py-10 flex flex-col items-center opacity-60">
        <Logo size={40} />
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Hegay OS Supreme</p>
      </footer>
    </div>
  );
}
