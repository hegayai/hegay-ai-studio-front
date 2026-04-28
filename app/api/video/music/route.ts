import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const audio = form.get("audio") as File | null;
    const prompt = form.get("prompt") as string | null;
    const style = form.get("style") as string | null;
    // e.g. "visualizer", "neon", "cinematic", "abstract", "album-art"

    if (!audio && !prompt) {
      return NextResponse.json(
        { error: "Either audio or prompt is required" },
        { status: 400 }
      );
    }

    let audioBuffer: Buffer | null = null;
    if (audio) {
      audioBuffer = Buffer.from(await audio.arrayBuffer());
    }

    const duration = Number(form.get("duration") || 15);

    // ⭐ Unified provider-based music video generation
    const result = await modelRouter({
      model: "video-music",
      input: {
        prompt,
        style,
        duration,
        audio: audioBuffer,
        audioFilename: audio?.name || null
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Music video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      duration,
      style: style || "default"
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Music video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
