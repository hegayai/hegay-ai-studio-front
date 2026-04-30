import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt, genre, duration, bpm, mood } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      prompt,
      genre,
      duration,
      bpm,
      mood
    });

    const result = await modelRouter({
      provider: "fal",
      model: "music-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Music generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Music generation route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
