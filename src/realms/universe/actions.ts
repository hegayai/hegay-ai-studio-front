"use server";

import { UniversePayload } from "./types";

export async function generateUniverseMap(payload: UniversePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/universe/map`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Universe map generation failed", details: String(error) };
  }
}
