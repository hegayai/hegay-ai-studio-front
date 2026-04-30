import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-scene-detection",
      input: {
        file: fileBuffer,
        filename: file.name
      },
      provider: fal,
      type: "video"
    });
    if (!result?.scenes) {
      return NextResponse.json(
        { error: "Scene detection failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      scenes: result.scenes
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Scene detection error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
