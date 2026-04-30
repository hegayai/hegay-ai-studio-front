import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const factor = Number(form.get("factor") || 1.5); // speed multiplier
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-speed",
      input: {
        file: fileBuffer,
        filename: file.name,
        factor
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Video speed change failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      factor
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video speed change error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
