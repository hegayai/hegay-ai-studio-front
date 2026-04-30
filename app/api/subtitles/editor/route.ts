import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { text, action, language } = await req.json();

    if (!text || !action) {
      return NextResponse.json(
        { error: "Text and action are required" },
        { status: 400 }
      );
    }

    const combinedPrompt = JSON.stringify({
      text,
      action,
      language
    });

    const result = await modelRouter({
      provider: "fal",
      model: "subtitle-editor",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle editing failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle editor route error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
