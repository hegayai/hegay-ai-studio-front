"use client";

import Link from "next/link";
import CosmicContainerLayout from "@/components/cosmic/CosmicContainerLayout";
import CosmicPanel from "@/components/cosmic/CosmicPanelSystem";
import { DriftUp } from "@/components/cosmic/CosmicMotionTokens";

export default function DashboardSelector() {
  return (
    <CosmicContainerLayout center padding="p-10 md:p-16">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-4xl w-full">

        {/* CREATOR DASHBOARD */}
        <DriftUp>
          <CosmicPanel padding="p-10">
            <h2 className="text-2xl font-bold mb-4">Creator Dashboard</h2>
            <p className="opacity-70 leading-relaxed mb-6">
              Access your personal command center. Manage universes, engines,
              realms, diagnostics, and creative civilization systems.
            </p>
            <Link
              href="/dashboard/personal"
              className="btn-primary w-full text-center"
            >
              Enter Creator Dashboard
            </Link>
          </CosmicPanel>
        </DriftUp>

        {/* USER DASHBOARD */}
        <DriftUp>
          <CosmicPanel padding="p-10">
            <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
            <p className="opacity-70 leading-relaxed mb-6">
              Access tools, assets, prompts, projects, and activity across the
              Hegay OS ecosystem.
            </p>
            <Link
              href="/dashboard/user"
              className="btn-secondary w-full text-center"
            >
              Enter User Dashboard
            </Link>
          </CosmicPanel>
        </DriftUp>

      </div>
    </CosmicContainerLayout>
  );
}
