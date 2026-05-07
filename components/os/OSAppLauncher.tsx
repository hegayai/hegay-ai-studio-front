"use client";

import { useState } from "react";

const apps = [
  { name: "Canvas", path: "/canvas" },
  { name: "Studio", path: "/studio" },
  { name: "Video Lab", path: "/video-lab" },
  { name: "Audio Lab", path: "/audio-lab" },
  { name: "Reels Generator", path: "/reels" },
  { name: "Image Forge", path: "/image-forge" },
  { name: "Motion Studio", path: "/motion" },
  { name: "Writer Suite", path: "/writer-suite" },
  { name: "Branding Suite", path: "/branding-suite" },
  { name: "Thumbnail Suite", path: "/thumbnail-suite" },
];

export default function OSAppLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition"
      >
        Apps
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center p-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 grid grid-cols-3 gap-6 max-w-3xl">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.path}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition text-center"
              >
                {app.name}
              </a>
            ))}

            <button
              onClick={() => setOpen(false)}
              className="col-span-3 mt-6 px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
