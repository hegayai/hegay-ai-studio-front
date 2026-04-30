import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { audio, language, mode } = await req.json();

    if (!audio) {
      return NextResponse.json({ error: "Missing audio" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      audio,
      language,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "audio-transcribe",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Transcription failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ text: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Transcription error", details: String(error) }, { status: 500 });
  }
}
