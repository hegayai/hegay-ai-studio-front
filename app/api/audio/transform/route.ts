// app/api/audio/transform/route.ts
import { NextResponse } from "next/server";
// ⭐ Import your provider (correct path)
// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const transformType = (form.get("transformType") as string) || "denoise";
    const intensity = Number(form.get("intensity") || 0.5);
    if (!file) {
      return NextResponse.json(
        { error: "No audio file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "audio-transform",
      input: {
        file: fileBuffer,
        filename: file.name,
        transformType,
        intensity,
      },
      provider: fal,
      type: "audio",
    });
    if (!result) {
      return NextResponse.json(
        { error: "Audio transformation failed" },
        { status: 500 }
      );
    }
    return NextResponse.json({
      success: true,
      output: result.output || null,
      metadata: result.metadata || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Audio transformation error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
