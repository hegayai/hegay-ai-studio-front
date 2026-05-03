// app/api/video/generate/route.ts
import { NextResponse } from "next/server";

// Placeholder route until Flask backend video generation is connected.
// Prevents build errors and keeps deployment stable.

export async function POST(req: Request) {
  try {
    // TEMPORARY: bypass auth (frontend-only auth cannot run on server)
    const user = { id: "dev-user" };

    const body = await req.json();

    if (!body || !body.prompt) {
      return NextResponse.json(
        { error: "Missing prompt" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock video generation response
    return NextResponse.json({
      success: true,
      message: "Video generation placeholder",
      video: {
        id: "temp-video-id",
        userId: user.id,
        prompt: body.prompt,
        url: "https://example.com/temp-video.mp4",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Video generation failed" },
      { status: 500 }
    );
  }
}
