import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/test`);
    const data = await res.json();

    return NextResponse.json({
      frontend: "ok",
      backend: data,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Backend not reachable", details: err },
      { status: 500 }
    );
  }
}
