"use server";

import { PantheonPayload } from "./types";

export async function createPantheonEntity(payload: PantheonPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pantheon/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Pantheon creation failed", details: String(error) };
  }
}
