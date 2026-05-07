"use client";

import React from "react";
import GlobalSearchButton from "./GlobalSearchButton";
import TopbarNotificationButton from "./TopbarNotificationButton";
import TopbarProfileButton from "./TopbarProfileButton";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* LEFT — BRAND / PAGE TITLE */}
        <div className="flex items-center space-x-3">
          <div className="brand-title text-xl leading-none">Hegay OS</div>
        </div>

        {/* RIGHT — ACTION BUTTONS */}
        <div className="flex items-center space-x-4">
          <GlobalSearchButton />
          <TopbarNotificationButton />
          <TopbarProfileButton />
        </div>
      </div>
    </header>
  );
}
