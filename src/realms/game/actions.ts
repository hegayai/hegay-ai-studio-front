"use server";

import { GamePayload } from "./types";

export async function generateGame(payload: GamePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/game/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Game generation failed", details: String(error) };
  }
}
