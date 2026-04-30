import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const timestamp = Number(form.get("timestamp") || 1.0);

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const result = await modelRouter({
      model: "video-freeze-frame",
      input: {
        file: fileBuffer,
        filename: file.name,
        timestamp
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Freeze-frame failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      timestamp
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Freeze-frame error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
