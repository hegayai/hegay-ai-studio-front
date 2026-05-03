// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold">Hegay AI</h1>

      <p className="text-gray-400 text-lg mt-4 max-w-xl text-center">
        A worldwide creative operating system built for imagination, culture, and origin.
      </p>

      <Link
        href="/welcome"
        className="mt-8 px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Enter
      </Link>
    </main>
  );
}
