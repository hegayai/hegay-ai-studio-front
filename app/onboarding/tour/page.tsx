// app/onboarding/tour/page.tsx
import Link from "next/link";

export default function Tour() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Explore Hegay OS</h1>

      <p className="text-gray-400 mt-3 max-w-xl">
        Hegay OS is built around floating windows, creative tools, and a universal design language.
      </p>

      <ul className="text-gray-400 mt-6 space-y-2">
        <li>• Drag and move windows freely</li>
        <li>• Resize tools to fit your workflow</li>
        <li>• Launch multiple tools at once</li>
        <li>• Save your creative assets</li>
        <li>• Build prompts, worlds, and ideas</li>
      </ul>

      <Link
        href="/onboarding/start"
        className="mt-8 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full"
      >
        Continue
      </Link>
    </main>
  );
}
