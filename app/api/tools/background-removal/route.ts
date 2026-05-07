import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real background removal engine
async function removeBackground(imageUrl: string) {
  return `BG_REMOVED_IMAGE_URL_${imageUrl}`;
}

export async function POST(req: Request) {
  const { userId, imageUrl } = await req.json();

  // 1 unit per image
  const units = 1;

  const result = await deductCredits(userId, "background_removal", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const processed = await removeBackground(imageUrl);

  return NextResponse.json({
    success: true,
    image: processed,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
