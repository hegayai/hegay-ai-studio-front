"use server";

import { CreatorPayload } from "./types";

export async function createCreator(payload: CreatorPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/creator/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Creator creation failed", details: String(error) };
  }
}
