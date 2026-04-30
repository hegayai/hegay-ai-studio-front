import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File;
    const factor = form.get("factor") as string;

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
      factor: factor || "1.5x"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-zoom",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video zoom failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video zoom route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
