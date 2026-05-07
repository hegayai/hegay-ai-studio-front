"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OSBootScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="text-3xl font-semibold tracking-tight text-white mb-4">
        Hegay OS Supreme
      </div>

      <div className="text-sm text-white/70 tracking-wide">
        CREATION WITHOUT LIMITS
      </div>
    </motion.div>
  );
}
