import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const style = form.get("style") as string;
    const intensity = form.get("intensity") as string;
    const mode = (form.get("mode") as string) || "default";

    if (!file) {
      return NextResponse.json({ error: "No image file uploaded" }, { status: 400 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const combinedPrompt = JSON.stringify({
      file: fileBuffer.toString("base64"),
      filename: file.name,
      style,
      intensity,
      mode
    });

    const result = await modelRouter({
      provider: "fal",
      model: "image-color-grading",
      prompt: combinedPrompt
    });

    if (!result?.output) {
      return NextResponse.json({ error: "Image color grading failed", raw: result }, { status: 500 });
    }

    return NextResponse.json({ url: result.output });

  } catch (error) {
    return NextResponse.json({ error: "Image color grading error", details: String(error) }, { status: 500 });
  }
}
