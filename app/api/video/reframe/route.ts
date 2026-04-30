import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const aspect = (form.get("aspect") as string) || "9:16";
    const focus = (form.get("focus") as string) || "center";
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-reframe",
      input: {
        file: fileBuffer,
        filename: file.name,
        aspect,
        focus
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Video reframing failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      aspect,
      focus
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video reframing error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
