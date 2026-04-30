import Link from "next/link";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">
        Hegay OS Supreme
      </h1>
      <h2 className="text-lg opacity-80">
        Ascension Layer · Origin Realm
      </h2>
      <p className="opacity-70 leading-relaxed">
        Welcome to the creative civilization operating system. This is your
        entry point into the World‑Soul, Pantheon, Realms, and the infinite
        expansion architecture of Hegay OS Supreme.
      </p>
      <div className="flex gap-4 mt-4">
        <Link href="/dashboard">
          <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Enter Dashboard
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Control Room
          </button>
        </Link>
      </div>
    </div>
  );
}
