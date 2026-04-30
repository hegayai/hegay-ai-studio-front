import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File;
    const format = form.get("format") as string;
    const quality = form.get("quality") as string;

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
      format: format || "mp4",
      quality: quality || "high"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-export",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video export failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video export route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
