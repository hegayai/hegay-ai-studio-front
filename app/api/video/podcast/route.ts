import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const script = form.get("script") as string | null;
    const layout = form.get("layout") as string | null;
    // e.g. "split-screen", "talking", "aesthetic", "minimal"
    const audio = form.get("audio") as File | null;
    let audioBuffer: Buffer | null = null;
    if (audio) {
      audioBuffer = Buffer.from(await audio.arrayBuffer());
    }
    if (!script && !audioBuffer) {
      return NextResponse.json(
        { error: "Either script or audio is required" },
        { status: 400 }
      );
    }
    const duration = Number(form.get("duration") || 20);
    // ⭐ Unified provider-based podcast video generation
    const result = await modelRouter({
      model: "video-podcast",
      input: {
        script,
        layout,
        duration,
        audio: audioBuffer,
        audioFilename: audio?.name || null
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Podcast video generation failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      duration,
      layout: layout || "default"
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Podcast video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
