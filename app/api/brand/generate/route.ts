// app/api/brand/generate/route.ts

import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

// ⭐ Correct provider import path
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, description, tone, audience } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Brand name is required" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      model: "brand-generator",
      input: {
        name,
        description,
        tone,
        audience,
      },
      provider: fal,
      type: "business",
    });

    if (!result) {
      return NextResponse.json(
        { error: "Brand generation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      brand: result.brand || null,
      tagline: result.tagline || null,
      palette: result.palette || null,
      voice: result.voice || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Brand generation error",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
