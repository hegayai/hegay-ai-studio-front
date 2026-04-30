import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const face = form.get("face") as File;
    const detail = form.get("detail") as string;

    if (!video || !face) {
      return NextResponse.json(
        { error: "Both video and face image are required" },
        { status: 400 }
      );
    }

    const videoBuffer = Buffer.from(await video.arrayBuffer());
    const faceBuffer = Buffer.from(await face.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      video: videoBuffer.toString("base64"),
      videoFilename: video.name,
      face: faceBuffer.toString("base64"),
      faceFilename: face.name,
      detail
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-face-swap",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Face swap failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video face‑swap route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
