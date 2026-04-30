"use server";

import { RadioPayload } from "./types";

export async function generateRadio(payload: RadioPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/radio/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Radio generation failed", details: String(error) };
  }
}
