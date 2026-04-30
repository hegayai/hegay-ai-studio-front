import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const watermark = form.get("watermark") as File | null;
    const position = form.get("position") as string | null;
    // "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
    const opacity = Number(form.get("opacity") || 0.8);
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for watermarking" },
        { status: 400 }
      );
    }
    if (!watermark) {
      return NextResponse.json(
        { error: "A watermark image is required" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    const watermarkBuffer = Buffer.from(await watermark.arrayBuffer());
    // ⭐ Unified provider-based watermarking
    const result = await modelRouter({
      model: "video-watermark",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        watermark: watermarkBuffer,
        watermarkFilename: watermark.name,
        position: position || "bottom-right",
        opacity
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Watermarking failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      position: position || "bottom-right",
      opacity
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Watermark processing error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
