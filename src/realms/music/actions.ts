"use server";

import { MusicPayload } from "./types";

export async function generateMusic(payload: MusicPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/music/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Music generation failed", details: String(error) };
  }
}
