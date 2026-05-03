// app/api/user/profile/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TEMPORARY: mock profile
    return NextResponse.json({
      success: true,
      user: {
        id: "dev-user",
        name: "Developer",
        email: "dev@example.com",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load profile" },
      { status: 500 }
    );
  }
}
