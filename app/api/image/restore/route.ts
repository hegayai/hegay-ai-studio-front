import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
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
      model: "image-restore",
      input: { image },
      provider: fal,
      type: "image"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Restore failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Restore error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
