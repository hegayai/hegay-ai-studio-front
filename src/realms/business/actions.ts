"use server";

import { BusinessPayload } from "./types";

export async function createBusiness(payload: BusinessPayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Business creation failed", details: String(error) };
  }
}
