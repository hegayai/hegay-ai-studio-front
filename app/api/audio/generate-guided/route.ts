import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      prompt,
      audio,
      strength,
      preserveTone,
      style,
      model,
      seed,
      mode
    } = body;

    // Combine all guided-audio parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      prompt,
      audio,
      strength,
      preserveTone,
      style,
      model,
      seed,
      mode
    });

    // Unified provider-based guided audio generation
    const result = await modelRouter({
      provider: "fal",
      model: "audio-generate-guided",
      prompt: combinedPrompt
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Guided audio generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Guided audio generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
