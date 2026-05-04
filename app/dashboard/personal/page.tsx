"use client";

import Link from "next/link";
import CosmicContainerLayout from "@/components/cosmic/CosmicContainerLayout";
import CosmicPanel from "@/components/cosmic/CosmicPanelSystem";
import { DriftUp } from "@/components/cosmic/CosmicMotionTokens";

export default function Dashboard() {
  return (
    <CosmicContainerLayout padding="p-10 md:p-16">
      {/* HERO PANEL */}
      <DriftUp>
        <CosmicPanel padding="p-10" className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight">
            Creator Dashboard
          </h1>
          <p className="opacity-70 mt-3 max-w-2xl leading-relaxed">
            Your creative universe at a glance. Access your tools, projects,
            assets, and activity across the Hegay OS ecosystem.
          </p>
        </CosmicPanel>
      </DriftUp>

      {/* GRID OF PANELS */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* QUICK LAUNCH */}
        <DriftUp>
          <CosmicPanel>
            <h3 className="text-xl font-semibold mb-4">Quick Launch</h3>
            <div className="flex flex-col gap-3">
              <Link href="/admin/desktop" className="btn-primary">
                Open Hegay OS
              </Link>
              <Link href="/admin/tools/playground" className="btn-secondary">
                Model Playground
              </Link>
              <Link href="/admin/tools/prompt-studio" className="btn-secondary">
                Prompt Studio
              </Link>
              <Link href="/admin/tools/assets" className="btn-secondary">
                Asset Manager
              </Link>
            </div>
          </CosmicPanel>
        </DriftUp>

        {/* RECENT PROJECTS */}
        <DriftUp>
          <CosmicPanel>
            <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
            <p className="opacity-70">Your latest creations will appear here.</p>
          </CosmicPanel>
        </DriftUp>

        {/* SAVED ASSETS */}
        <DriftUp>
          <CosmicPanel>
            <h3 className="text-xl font-semibold mb-4">Saved Assets</h3>
            <p className="opacity-70">Your stored images, prompts, and files.</p>
          </CosmicPanel>
        </DriftUp>

        {/* PROMPT LIBRARY */}
        <DriftUp>
          <CosmicPanel>
            <h3 className="text-xl font-semibold mb-4">Prompt Library</h3>
            <p className="opacity-70">Your saved creative prompts.</p>
          </CosmicPanel>
        </DriftUp>

        {/* ACTIVITY TIMELINE */}
        <DriftUp>
          <CosmicPanel>
            <h3 className="text-xl font-semibold mb-4">Activity Timeline</h3>
            <p className="opacity-70">Your recent actions and OS activity.</p>
          </CosmicPanel>
        </DriftUp>
      </div>
    </CosmicContainerLayout>
  );
}
