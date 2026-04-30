import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { script, voice, style, speed, emotion } = await req.json();

    if (!script) {
      return NextResponse.json(
        { error: "Script is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      script,
      voice,
      style,
      speed,
      emotion
    });

    const result = await modelRouter({
      provider: "fal",
      model: "radio-voice-generator",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Radio voice generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Radio generator route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
