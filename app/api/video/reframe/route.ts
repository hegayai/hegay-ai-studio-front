import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File;
    const aspect = form.get("aspect") as string;
    const mode = form.get("mode") as string;
    const focus = form.get("focus") as string;

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
      aspect: aspect || "9:16",
      mode: mode || "auto",
      focus: focus || "center"
    });

    const result = await modelRouter({
      provider: "fal",
      model: "video-reframe",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Video reframing failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video reframe route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
