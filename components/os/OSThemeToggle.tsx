"use client";

import { useState } from "react";

export default function OSThemeToggle() {
  const [theme, setTheme] = useState("cosmic");

  function toggle() {
    const next = theme === "cosmic" ? "dark" : theme === "dark" ? "light" : "cosmic";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition text-sm"
    >
      Theme: {theme}
    </button>
  );
}
