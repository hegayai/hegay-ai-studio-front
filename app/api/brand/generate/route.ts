import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/src/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      industry,
      style = "modern" 
      // "modern" | "minimal" | "bold" | "playful" | "luxury" | "tech" | "cinematic"
    } = body;

    if (!name || !description) {
      return NextResponse.json(
        { error: "Brand name and description are required" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      model: "brand-kit-generate",
      input: {
        name,
        description,
        industry,
        style
      },
      provider: fal,
      type: "text"
    });

    if (!result?.brandKit) {
      return NextResponse.json(
        { error: "Brand kit generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      brandKit: result.brandKit
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Brand kit generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
