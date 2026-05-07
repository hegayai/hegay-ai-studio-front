import Image from "next/image";

export default function CrystalCore() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Image
        src="/images/hegay-crystal-core.png"
        width={1200}
        height={1200}
        alt="Hegay OS Crystal Core"
        className="rounded-xl shadow-xl"
      />
    </div>
  );
}
