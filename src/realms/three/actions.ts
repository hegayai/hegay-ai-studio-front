"use server";

import { ThreePayload } from "./types";

export async function generateThree(payload: ThreePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/3d/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "3D generation failed", details: String(error) };
  }
}
