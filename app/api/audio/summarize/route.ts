import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const mode = (form.get("mode") as string) || "summary";
    const language = (form.get("language") as string) || "auto";

    if (!file) {
      return NextResponse.json(
        { error: "No audio file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Convert structured audio summarization input into a single prompt string
    const combinedPrompt = JSON.stringify({
      file: fileBuffer.toString("base64"),
      filename: file.name,
      mode,
      language
    });

    const result = await modelRouter({
      provider: "fal",
      model: "audio-summarize",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Audio summarization failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      summary: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Audio summarization error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
