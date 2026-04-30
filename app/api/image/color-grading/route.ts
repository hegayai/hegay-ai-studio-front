// app/api/image/color-grading/route.ts
import { NextResponse } from "next/server";
// ⭐ Correct provider import path
// ⭐ Unified model router
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const style = (form.get("style") as string) || "cinematic";
    const intensity = Number(form.get("intensity") || 0.7);
    if (!file) {
      return NextResponse.json(
        { error: "No image file uploaded" },
        { status: 400 }
      );
    }
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await modelRouter({
      model: "image-color-grading",
      input: {
        file: fileBuffer,
        filename: file.name,
        style,
        intensity,
      },
      provider: fal,
      type: "image",
    });
    if (!result) {
      return NextResponse.json(
        { error: "Color grading failed" },
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
        error: "Color grading error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
