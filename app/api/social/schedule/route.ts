import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { platform, content, hashtags, scheduledAt } = await req.json();

    if (!platform || !content) {
      return NextResponse.json(
        { error: "Platform and content are required" },
        { status: 400 }
      );
    }

    const job = await prisma.job.create({
      data: {
        workflowId: "social-post",   // ⭐ REQUIRED FIELD
        task: "social-post",
        payload: {
          platform,
          content,
          hashtags
        },
        scheduledAt,
        status: "queued"
      }
    });

    return NextResponse.json({
      message: "Post scheduled",
      jobId: job.id
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Social schedule route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
