import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const target = form.get("target") as string;

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
      target: target || "en"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-translate",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video translation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      translation: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video translate route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
