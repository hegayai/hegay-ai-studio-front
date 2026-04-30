import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const mode = form.get("mode") as string; 
    // "script" | "image" | "product" | "brand"
    const script = form.get("script") as string | null;
    const image = form.get("image") as File | null;
    const brand = form.get("brand") as string | null;
    const product = form.get("product") as string | null;
    // Convert image if provided
    let imageBuffer: Buffer | null = null;
    if (image) {
      imageBuffer = Buffer.from(await image.arrayBuffer());
    }
    // Unified provider-based Ads Video Generation
    const result = await modelRouter({
      model: "video-ads",
      input: {
        mode,
        script,
        brand,
        product,
        image: imageBuffer,
        imageFilename: image?.name || null
      },
      provider: fal,
      type: "video"
    });
    if (!result?.videoUrl) {
      return NextResponse.json(
        { error: "Ads video generation failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      videoUrl: result.videoUrl,
      duration: result.duration || null,
      format: result.format || "mp4"
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Ads video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
