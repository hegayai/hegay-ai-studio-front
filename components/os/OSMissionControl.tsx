"use client";

import { motion } from "framer-motion";
import { useMissionControl } from "./OSMissionControlContext";

export default function OSMissionControl() {
  const { missionControl, windows, setMissionControl } = useMissionControl();

  if (!missionControl) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-3xl z-[999999] p-10"
      onClick={() => setMissionControl(false)}
    >
      <div className="grid grid-cols-3 gap-6">
        {windows.map((w) => (
          <motion.div
            key={w.id}
            className="bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="text-sm font-medium mb-3 opacity-80">{w.title}</div>
            <div className="bg-black/20 rounded-lg h-40 overflow-hidden">
              {w.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
