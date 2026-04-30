import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      image,
      skinSmooth,
      blemishRemove,
      eyeEnhance,
      mode
    } = body;

    if (!image) {
      return NextResponse.json(
        { error: "Missing image" },
        { status: 400 }
      );
    }

    // Convert structured face cleanup parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      image,
      skinSmooth,
      blemishRemove,
      eyeEnhance,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-face-cleanup",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Face cleanup failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Face cleanup error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
