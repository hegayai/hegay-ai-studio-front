import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const transform = (form.get("transform") as string) || "resize";
    const width = Number(form.get("width") || 1080);
    const height = Number(form.get("height") || 1920);
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-transform",
      input: {
        file: fileBuffer,
        filename: file.name,
        transform,
        width,
        height
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Video transform failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      transform,
      width,
      height
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video transform error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
