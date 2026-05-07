export default function ShowcasePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12">Hegay OS Cinematic Showcase</h1>

      <video
        src="/videos/hegay-origin-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-5xl rounded-xl shadow-2xl mb-10"
      />

      <video
        src="/videos/hegay-os-boot.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-5xl rounded-xl shadow-2xl"
      />
    </div>
  );
}
