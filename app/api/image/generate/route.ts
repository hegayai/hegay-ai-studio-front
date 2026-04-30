import { NextResponse } from "next/server";
import { getCurrentUser, getTodayUsage, canGenerateImage } from "@/lib/auth";
import { prisma } from "@/src/core/db/client";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const usage = await getTodayUsage(user.id);
    if (!canGenerateImage(user.planId as any, usage)) {
      return NextResponse.json(
        { error: "Image limit reached for today" },
        { status: 429 }
      );
    }

    // Combine parameters into a single prompt string
    const combinedPrompt = JSON.stringify({ prompt });

    // Unified provider-based generation
    const result = await modelRouter({
      provider: "fal",
      model: "flux-pro",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Fal.ai generation failed", raw: result },
        { status: 500 }
      );
    }

    const imageUrl = result.output;

    await prisma.media.create({
      data: {
        userId: user.id,
        type: "image",
        url: imageUrl,
        prompt
      }
    });

    await prisma.usage.update({
      where: { id: usage.id },
      data: { imagesUsed: usage.imagesUsed + 1 }
    });

    return NextResponse.json({
      success: true,
      url: imageUrl
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Fal.ai image generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
