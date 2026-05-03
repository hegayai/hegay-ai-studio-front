// app/api/system/status/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    system: "Hegay OS",
    environment: process.env.NODE_ENV,
  });
}
