import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, from, to } = await req.json();

    if (!text || !from || !to) {
      return NextResponse.json(
        { error: "Text, source language, and target language are required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      text,
      from,
      to
    });

    const result = await modelRouter({
      provider: "fal",
      model: "subtitle-translate",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle translation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle translation route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
