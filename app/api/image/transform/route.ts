import { NextResponse } from "next/server";
// ⭐ Correct provider import
// ⭐ Correct model router import
import { modelRouter } from "@/src/core/model-router";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      action,
      amount,
      rotate,
      flip,
      width,
      height,
      image
    } = body;
    // ⭐ Unified provider-based image transform
    const result = await modelRouter({
      model: "image-transform",
      input: {
        action,
        amount,
        rotate,
        flip,
        width,
        height,
        image
      },
      provider: fal,
      type: "image"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Image transform failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      image: {
        url: result.url,
        meta: result.meta || null
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Image transform error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
