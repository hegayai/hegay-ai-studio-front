// app/dashboard/page.tsx
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Creator Dashboard</h1>

      <p className="text-gray-400 mt-3">Your creative universe at a glance.</p>

      <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Quick Launch">
          <div className="flex flex-col gap-3">
            <Link href="/admin/desktop" className="btn">Open Hegay OS</Link>
            <Link href="/admin/tools/playground" className="btn">Model Playground</Link>
            <Link href="/admin/tools/prompt-studio" className="btn">Prompt Studio</Link>
            <Link href="/admin/tools/assets" className="btn">Asset Manager</Link>
          </div>
        </DashboardCard>

        <DashboardCard title="Recent Projects">
          <p className="text-gray-400">Your latest creations will appear here.</p>
        </DashboardCard>

        <DashboardCard title="Saved Assets">
          <p className="text-gray-400">Your stored images, prompts, and files.</p>
        </DashboardCard>

        <DashboardCard title="Prompt Library">
          <p className="text-gray-400">Your saved creative prompts.</p>
        </DashboardCard>

        <DashboardCard title="Activity Timeline">
          <p className="text-gray-400">Your recent actions and OS activity.</p>
        </DashboardCard>
      </div>
    </main>
  );
}

function DashboardCard({ title, children }) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}
