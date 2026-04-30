import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { audio, noiseLevel, clarityBoost, mode } = await req.json();

    if (!audio) {
      return NextResponse.json({ error: "Missing audio" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      audio,
      noiseLevel,
      clarityBoost,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "audio-enhance",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Audio enhancement failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Audio enhancement error", details: String(error) }, { status: 500 });
  }
}
