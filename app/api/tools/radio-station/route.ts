import { NextResponse } from "next/server";
import { deductCredits } from "@/lib/credits/deductCredits";

// Replace with your real radio station creation engine
async function createRadioStation(name: string, genre: string) {
  return {
    stationId: `STATION_${name}_${genre}`,
    streamUrl: `STREAM_URL_${name}_${genre}`,
  };
}

export async function POST(req: Request) {
  const { userId, name, genre } = await req.json();

  // 1 unit per station
  const units = 1;

  const result = await deductCredits(userId, "radio_station_creation", units);

  if (!result.success) {
    return NextResponse.json(result, { status: 402 });
  }

  const station = await createRadioStation(name, genre);

  return NextResponse.json({
    success: true,
    ...station,
    credits_deducted: result.deducted,
    credits_remaining: result.remaining,
  });
}
