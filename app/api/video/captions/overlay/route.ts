import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const style = (form.get("style") as string) || "dynamic";
    const language = (form.get("language") as string) || "auto";
    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "video-caption-overlay",
      input: {
        file: fileBuffer,
        filename: file.name,
        style,
        language
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Caption overlay failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      style,
      language
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Caption overlay error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
