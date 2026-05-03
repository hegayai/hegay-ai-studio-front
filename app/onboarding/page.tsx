// app/onboarding/page.tsx
import Link from "next/link";

export default function Onboarding() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Let’s Set Up Your Creative Space</h1>

      <p className="text-gray-400 mt-3 max-w-xl">
        Before entering Hegay OS, we’ll personalize your experience based on your creative style and goals.
      </p>

      <Link
        href="/onboarding/profile"
        className="mt-8 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Continue
      </Link>
    </main>
  );
}
