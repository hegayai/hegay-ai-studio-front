import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const videoA = form.get("videoA") as File;
    const videoB = form.get("videoB") as File;
    const detail = form.get("detail") as string;

    if (!videoA || !videoB) {
      return NextResponse.json(
        { error: "Both videoA and videoB files are required" },
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
      detail
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-compare",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video comparison failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      comparison: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video compare route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
