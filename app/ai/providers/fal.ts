// app/ai/providers/fal.ts

import type { ModelCallInput, ModelCallResult } from "../callModel";

export async function callFal(input: ModelCallInput): Promise<ModelCallResult> {
  try {
    // Your actual FAL API call goes here
    const response = await fetch("https://api.fal.ai/v1/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: input.model,
        input: input.input,
      }),
    });

    const data = await response.json();

    return {
      success: true,
      provider: "fal",
      model: input.model,
      output: data, // MUST exist
    };
  } catch (error: any) {
    return {
      success: false,
      provider: "fal",
      model: input.model,
      output: null,
      error: String(error),
    };
  }
}
