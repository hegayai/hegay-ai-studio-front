// app/onboarding/profile/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Your Creative Identity</h1>

      <p className="text-gray-400 mt-3">Tell us a little about how you create.</p>

      <div className="mt-6 max-w-md">
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />

        <label className="mt-6 block">Creative Focus</label>
        <input
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          placeholder="e.g. storytelling, design, world‑building"
          className="w-full mt-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />
      </div>

      <Link
        href="/onboarding/tour"
        className="mt-8 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Continue
      </Link>
    </main>
  );
}
