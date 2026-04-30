import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image } = body;

    if (!image) {
      return NextResponse.json(
        { error: "Missing image" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      model: "image-enhance",
      input: { image },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Enhance failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Enhance error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
