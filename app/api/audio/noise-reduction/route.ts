import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { audio, reductionLevel, mode } = await req.json();

    if (!audio) {
      return NextResponse.json({ error: "Missing audio" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      audio,
      reductionLevel,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "audio-noise-reduction",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Noise reduction failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Noise reduction error", details: String(error) }, { status: 500 });
  }
}
