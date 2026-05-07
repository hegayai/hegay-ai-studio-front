import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: list available models from config
    const models = [
      { id: "default", label: "Default Model" },
      { id: "deep", label: "Deep Reasoning Model" },
    ];

    return NextResponse.json({ success: true, data: models });
  } catch (error) {
    console.error("[API /models] Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
