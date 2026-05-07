import Image from "next/image";

export default function DashboardPreview() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10">Hegay OS Dashboard Preview</h1>

      <Image
        src="/images/hegay-dashboard-core.png"
        width={1400}
        height={900}
        alt="Dashboard Core"
        className="rounded-xl shadow-2xl"
      />

      <p className="text-lg opacity-80 mt-8 max-w-3xl text-center">
        A unified command center for creators, developers, and innovators.  
        Designed for clarity, power, and infinite expansion.
      </p>
    </div>
  );
}
