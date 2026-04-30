import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { getCurrentUser, getTodayUsage, canGenerateVideo } from "@/lib/auth";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    // Authenticate user
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { prompt, duration } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Enforce usage limits
    const usage = await getTodayUsage(user.id);
    if (!canGenerateVideo(user.planId as any, usage)) {
      return NextResponse.json(
        { error: "Video limit reached for today" },
        { status: 429 }
      );
    }

    // Build unified prompt payload
    const combinedPrompt = JSON.stringify({
      prompt,
      duration: duration || 6
    });

    // Unified provider-based video generation
    const result = await modelRouter({
      provider: "fal",
      model: "flux-video",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video generation failed", raw: result },
        { status: 500 }
      );
    }

    const videoUrl = result.output;

    // Save media record
    await prisma.media.create({
      data: {
        userId: user.id,
        type: "video",
        url: videoUrl,
        prompt
      }
    });

    // Update usage
    await prisma.usage.update({
      where: { id: usage.id },
      data: { videosUsed: usage.videosUsed + 1 }
    });

    // Success response
    return NextResponse.json({
      success: true,
      url: videoUrl
    });

  } catch (error) {
    console.error("Video Generation Error:", error);
    return NextResponse.json(
      {
        error: "Video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
