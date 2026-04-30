import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const script = form.get("script") as string | null;
    const voice = form.get("voice") as string | null;
    const avatar = form.get("avatar") as string | null;
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
    // ⭐ Unified provider-based talking avatar generation
    const result = await modelRouter({
      model: "talking-avatar",
      input: {
        script,
        voice,
        avatar,
        audio: audioBuffer,
        audioFilename: audio?.name || null
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Talking avatar generation failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      avatar,
      voice
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Talking avatar error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
