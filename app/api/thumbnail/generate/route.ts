import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { title, style, brandColor } = await req.json();

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      title,
      style,
      brandColor
    });

    const result = await modelRouter({
      provider: "fal",
      model: "thumbnail-generate",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Thumbnail generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Thumbnail generator route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
