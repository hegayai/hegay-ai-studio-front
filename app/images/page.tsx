import Image from "next/image";

export default function ImagesPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Hegay OS Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <Image
          src="/images/hegay-crystal-core.png"
          width={800}
          height={800}
          alt="Hegay Crystal Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-dashboard-core.png"
          width={800}
          height={800}
          alt="Hegay Dashboard Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-project-core.png"
          width={800}
          height={800}
          alt="Hegay Project Core"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-realms-gateway.png"
          width={800}
          height={800}
          alt="Hegay Realms Gateway"
          className="rounded-xl shadow-xl"
        />

        <Image
          src="/images/hegay-vision-core.png"
          width={800}
          height={800}
          alt="Hegay Vision Core"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
