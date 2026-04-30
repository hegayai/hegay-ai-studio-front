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

    const result = await modelRouter({
      provider: "fal",
      model: "audio-generate-guided",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Guided audio generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
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
