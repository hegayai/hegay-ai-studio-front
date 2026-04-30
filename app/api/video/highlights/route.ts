import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const style = (form.get("style") as string) || "tiktok";
    const language = (form.get("language") as string) || "auto";
    const clipLength = Number(form.get("clipLength") || 15);
    const maxClips = Number(form.get("maxClips") || 5);
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-auto-highlights",
      input: {
        file: fileBuffer,
        filename: file.name,
        style,
        language,
        clipLength,
        maxClips
      },
      provider: fal,
      type: "video"
    });
    if (!result?.clips) {
      return NextResponse.json(
        { error: "Highlight extraction failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      clips: result.clips,
      metadata: result.metadata || null
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video highlight extraction error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
