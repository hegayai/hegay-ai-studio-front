// app/welcome/page.tsx
import Link from "next/link";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to Hegay AI</h1>

      <p className="text-gray-400 mt-4 max-w-lg">
        A worldwide creative operating system built for imagination, culture, and origin.
      </p>

      <Link
        href="/onboarding"
        className="mt-8 px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Begin
      </Link>
    </main>
  );
}
