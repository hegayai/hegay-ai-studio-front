import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File;
    const ratio = form.get("ratio") as string;

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
      ratio: ratio || "9:16"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-crop",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video crop failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video crop route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
