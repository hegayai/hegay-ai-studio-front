import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const videoA = form.get("videoA") as File;
    const videoB = form.get("videoB") as File;
    const mode = form.get("mode") as string;

    if (!videoA || !videoB) {
      return NextResponse.json(
        { error: "Both videoA and videoB are required" },
        { status: 400 }
      );
    }

    const bufferA = Buffer.from(await videoA.arrayBuffer());
    const bufferB = Buffer.from(await videoB.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      videoA: bufferA.toString("base64"),
      videoAFilename: videoA.name,
      videoB: bufferB.toString("base64"),
      videoBFilename: videoB.name,
      mode: mode || "side-by-side"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-split",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video split failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video split route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
