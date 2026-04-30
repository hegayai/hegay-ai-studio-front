import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jobId } = body;

    // Fetch job
    const job = await prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    // Execute the job using the unified model router
    const result = await modelRouter({
      provider: "fal",
      model: "agent-worker",
      prompt: JSON.stringify(job.payload),
    });

    // Update job result
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: "completed",
        result,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Agent worker error", details: String(error) },
      { status: 500 }
    );
  }
}
