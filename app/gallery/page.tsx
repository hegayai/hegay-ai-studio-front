import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">Hegay OS Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        <Image
          src="/images/hegay-crystal-core.png"
          width={600}
          height={600}
          alt="Crystal Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-dashboard-core.png"
          width={600}
          height={600}
          alt="Dashboard Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-project-core.png"
          width={600}
          height={600}
          alt="Project Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-realms-gateway.png"
          width={600}
          height={600}
          alt="Realms Gateway"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-vision-core.png"
          width={600}
          height={600}
          alt="Vision Core"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
