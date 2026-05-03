// app/onboarding/start/page.tsx
import Link from "next/link";

export default function StartCreating() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Your First Creation</h1>

      <p className="text-gray-400 mt-3 max-w-xl">
        Before entering the OS, let’s begin with a simple creative spark.
      </p>

      <div className="mt-6 p-6 bg-neutral-900 border border-neutral-700 rounded-lg text-green-400 font-semibold">
        “Describe a world shaped by imagination, culture, and origin.”
      </div>

      <Link
        href="/admin/desktop"
        className="mt-8 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Enter Hegay OS
      </Link>
    </main>
  );
}
