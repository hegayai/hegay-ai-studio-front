import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Find the next scheduled or queued job
    const job = await prisma.job.findFirst({
      where: {
        status: "queued"
      },
      orderBy: {
        scheduledAt: "asc"
      }
    });

    if (!job) {
      return NextResponse.json({ message: "No scheduled posts" });
    }

    // Prepare payload for the model
    const combinedPrompt = JSON.stringify(job.payload);

    // Run the model
    const result = await modelRouter({
      provider: "fal",
      model: "social-post",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      await prisma.job.update({
        where: { id: job.id },
        data: {
          status: "failed",
          error: "Model returned no output",
          updatedAt: new Date()
        }
      });

      return NextResponse.json(
        { error: "Social post generation failed", raw: result },
        { status: 500 }
      );
    }

    // Mark job as completed
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: "completed",
        result: result.output,
        completedAt: new Date(),
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      message: "Post generated",
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Social post route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
