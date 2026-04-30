import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      prompt,
      model,
      voice,
      seed,
      mode
    } = body;

    // Combine all text-to-audio parameters into a single prompt string
    const combinedPrompt = JSON.stringify({
      prompt,
      model,
      voice,
      seed,
      mode
    });

    // Unified provider-based text-to-audio generation
    const result = await modelRouter({
      provider: "fal",
      model: "audio-text-to-audio",
      prompt: combinedPrompt
    });

    // ModelCallResult returns: { output, provider, model }
    if (!result?.output) {
      return NextResponse.json(
        { error: "Audio generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Audio generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
