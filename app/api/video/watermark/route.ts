import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const watermark = form.get("watermark") as File;
    const position = form.get("position") as string;

    if (!video || !watermark) {
      return NextResponse.json(
        { error: "Both video and watermark files are required" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());
    const watermarkBuffer = Buffer.from(await watermark.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      video: videoBuffer.toString("base64"),
      videoFilename: video.name,
      watermark: watermarkBuffer.toString("base64"),
      watermarkFilename: watermark.name,
      position: position || "top-right"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-watermark",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video watermarking failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video watermark route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
