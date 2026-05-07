import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real captioning engine
async function generateCaptions(videoUrl: string, language: string) {
  return {
    captionsUrl: `CAPTIONS_URL_${videoUrl}_${language}`,
    format: "srt",
  };
}

export async function POST(req: Request) {
  const { userId, videoUrl, duration, language = "en" } = await req.json();

  // Video Captioning uses 1-minute units
  const units = Math.ceil(duration / 60);

  const result = await deductCredits(userId, "video_captioning", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const captions = await generateCaptions(videoUrl, language);

  return NextResponse.json({
    success: true,
    ...captions,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
