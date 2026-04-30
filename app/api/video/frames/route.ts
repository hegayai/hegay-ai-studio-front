import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const mode = form.get("mode") as string;
    const fps = form.get("fps") as string;
    const resolution = form.get("resolution") as string;

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
      mode: mode || "extract",
      fps: fps || "24",
      resolution: resolution || "720p"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-frames",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Frame extraction failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      frames: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video frames route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
