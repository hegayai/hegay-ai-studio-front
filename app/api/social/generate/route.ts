import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { platform, topic, style } = await req.json();

    if (!platform || !topic) {
      return NextResponse.json(
        { error: "Platform and topic are required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      platform,
      topic,
      style
    });

    const result = await modelRouter({
      provider: "fal",
      model: "social-generate",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Social content generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Social generator route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
