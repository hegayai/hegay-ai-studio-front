"use server";

import { MythicPayload } from "./types";

export async function generateMythic(payload: MythicPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mythic/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Mythic generation failed", details: String(error) };
  }
}
