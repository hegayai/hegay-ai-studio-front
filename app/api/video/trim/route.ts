import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const video = form.get("video") as File | null;
    const start = Number(form.get("start") || 0);
    const end = Number(form.get("end") || 5);
    if (!video) {
      return NextResponse.json(
        { error: "A video file is required for trimming" },
        { status: 400 }
      );
    }
    if (end <= start) {
      return NextResponse.json(
        { error: "End time must be greater than start time" },
        { status: 400 }
      );
    }
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    // ⭐ Unified provider-based video trimming
    const result = await modelRouter({
      model: "video-trim",
      input: {
        video: videoBuffer,
        videoFilename: video.name,
        start,
        end
      },
      provider: fal,
      type: "video"
    });
    if (!result?.url) {
      return NextResponse.json(
        { error: "Video trimming failed", raw: result },
        { status: 500 }
      );
    }
    return NextResponse.json({
      url: result.url,
      start,
      end
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Video trimming error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
