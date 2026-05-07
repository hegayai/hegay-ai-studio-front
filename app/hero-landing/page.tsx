import Image from "next/image";

export default function HeroLandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
      <Image
        src="/images/hegay-vision-core.png"
        alt="Hegay Vision Core"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-6">Hegay OS Supreme</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          The next evolution of creative intelligence. Powered by Hegay Vision Core.
        </p>
      </div>
    </div>
  );
}
