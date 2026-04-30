import { NextResponse } from "next/server";
// ⭐ Provider architecture
// ⭐ Unified model router
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const mode = form.get("mode") as string;
    const language = form.get("language") as string;
    const file = form.get("file") as File | null;
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }
    // ⭐ Convert file to ArrayBuffer → Uint8Array
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    // ⭐ Unified provider-based transcription
    const result = await modelRouter({
      model: "subtitle-transcribe",
      input: {
        file: fileBuffer,
        filename: file.name,
        mode,
        language
      },
      provider: fal,
      type: "audio"
    });
    if (!result?.text) {
      return NextResponse.json(
        { error: "Transcription failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      text: result.text
    });
  } catch (err) {
    console.error("Subtitle generation error:", err);
    return NextResponse.json(
      { error: "Subtitle generation failed", details: String(err) },
      { status: 500 }
    );
  }
}
