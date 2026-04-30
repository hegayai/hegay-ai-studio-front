import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { script, voice, style } = body;

    const result = await modelRouter({
      model: "radio-voice-generator",
      input: {
        script,
        voice,
        style,
      },
      provider: fal,
      type: "audio",
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Radio generation error", details: String(error) },
      { status: 500 }
    );
  }
}
