"use client";

import { useSpaces } from "./OSSpacesContext";

export default function OSSpacesSwitcher() {
  const { spaces, activeSpace, switchSpace, addSpace } = useSpaces();

  return (
    <div className="fixed top-20 right-6 z-[999] flex gap-2">
      {spaces.map((s) => (
        <button
          key={s.id}
          onClick={() => switchSpace(s.id)}
          className={`px-4 py-2 rounded-xl text-sm transition ${
            activeSpace === s.id
              ? "bg-white/20 text-white"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          {s.name}
        </button>
      ))}

      <button
        onClick={addSpace}
        className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
      >
        +
      </button>
    </div>
  );
}
