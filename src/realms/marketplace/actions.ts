"use server";

import { MarketplacePayload } from "./types";

export async function createMarketplaceItem(payload: MarketplacePayload) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/marketplace/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    return { error: "Marketplace creation failed", details: String(error) };
  }
}
