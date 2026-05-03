"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";

const civPresets = [
  {
    title: "Harmony Collective",
    description: "A peaceful civilization built on balance, ritual, and shared prosperity.",
  },
  {
    title: "Storm‑Forged Dominion",
    description: "A powerful society shaped by conflict, discipline, and elemental myth.",
  },
  {
    title: "Golden Trade Empire",
    description: "A wealth‑driven civilization built on commerce, diplomacy, and innovation.",
  },
  {
    title: "Ancestral Scholar Nation",
    description: "A knowledge‑first society preserving ancient wisdom and cosmic truth.",
  },
];

export default function CivilizationPresetsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-6xl pt-10 pb-20 px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold text-white">Civilization Templates</h1>
          <p className="mt-2 text-slate-400 text-sm">
            One‑click civilizational blueprints
          </p>
        </motion.div>

        {/* PANEL */}
        <GlowShell>
          <div className="space-y-8">
            {civPresets.map((preset, index) => (
              <PresetCard key={index} index={index} {...preset} />
            ))}
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

function PresetCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, x: 6 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition-all"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400 text-sm mt-2">{description}</p>
    </motion.div>
  );
}
