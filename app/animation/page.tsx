import React from "react";

export default function AnimationPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Hegay OS Animations</h1>

      {/* Video 1 */}
      <video
        src="/videos/hegay-origin-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-4xl rounded-xl shadow-xl mb-10"
      />

      {/* Video 2 */}
      <video
        src="/videos/hegay-os-boot.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-4xl rounded-xl shadow-xl"
      />
    </div>
  );
}
