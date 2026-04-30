"use server";

import { OriginPayload } from "./types";

export async function generateOrigin(payload: OriginPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/origin/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Origin generation failed", details: String(error) };
  }
}
