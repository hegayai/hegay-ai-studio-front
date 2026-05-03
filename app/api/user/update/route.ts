// app/api/user/update/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // TEMPORARY: mock update
    return NextResponse.json({
      success: true,
      user: {
        id: "dev-user",
        name: body.name,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
