import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const result = await modelRouter({
      model: "video-stabilize",
      input: {
        file: fileBuffer,
        filename: file.name
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video stabilization failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video stabilization error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
