import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const { prompt, genre, duration, mode } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Missing music prompt" }, { status: 400 });
    }

    const combinedPrompt = JSON.stringify({
      prompt,
      genre,
      duration,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "audio-music-generate",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Music generation failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Music generation error", details: String(error) }, { status: 500 });
  }
}
