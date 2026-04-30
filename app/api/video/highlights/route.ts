import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File;
    const style = form.get("style") as string;
    const duration = form.get("duration") as string;

    if (!file) {
      return NextResponse.json(
        { error: "Video file is required" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      file: fileBuffer.toString("base64"),
      filename: file.name,
      style: style || "cinematic",
      duration: duration || "30"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-auto-highlights",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Auto‑highlights generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      highlights: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video highlights route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
