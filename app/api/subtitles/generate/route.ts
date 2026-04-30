import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File;
    const mode = form.get("mode") as string;

    if (!file) {
      return NextResponse.json(
        { error: "Video or audio file is required" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      file: fileBuffer.toString("base64"),
      filename: file.name,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "subtitle-transcribe",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      subtitles: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle generation route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
