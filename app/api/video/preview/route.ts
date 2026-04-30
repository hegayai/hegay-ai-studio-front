import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const duration = form.get("duration") as string;
    const resolution = form.get("resolution") as string;
    const fps = form.get("fps") as string;

    if (!video) {
      return NextResponse.json(
        { error: "Video file is required" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      video: videoBuffer.toString("base64"),
      videoFilename: video.name,
      duration: duration || "5",
      resolution: resolution || "720p",
      fps: fps || "24"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-preview",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video preview generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      preview: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video preview route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
