import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const grade = (form.get("grade") as string) || "cinematic";
    const intensity = Number(form.get("intensity") || 0.8);

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const result = await modelRouter({
      model: "video-color-grade",
      input: {
        file: fileBuffer,
        filename: file.name,
        grade,
        intensity
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video color grading failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      grade,
      intensity
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video color grading error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
