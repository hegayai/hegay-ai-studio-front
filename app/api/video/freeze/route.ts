import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const video = form.get("video") as File;
    const time = form.get("time") as string;
    const hold = form.get("hold") as string;
    const mode = form.get("mode") as string;

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
      time: time || "00:00:01",
      hold: hold || "2",
      mode: mode || "freeze"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-freeze",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video freeze effect failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video freeze route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
