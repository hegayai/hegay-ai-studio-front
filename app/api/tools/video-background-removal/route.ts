import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real video background removal engine
async function removeVideoBackground(videoUrl: string) {
  return `VIDEO_BG_REMOVED_URL_${videoUrl}`;
}

export async function POST(req: Request) {
  const { userId, videoUrl } = await req.json();

  // 1 unit per video
  const units = 1;

  const result = await deductCredits(userId, "video_background_removal", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const processed = await removeVideoBackground(videoUrl);

  return NextResponse.json({
    success: true,
    video: processed,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
