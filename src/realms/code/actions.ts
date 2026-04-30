"use server";

import { CodePayload } from "./types";

export async function generateCode(payload: CodePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/code/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Code generation failed", details: String(error) };
  }
}
