// app/ai/providers/fal.ts
import type { ModelCallInput, ModelCallResult } from "../callModel";

export async function callFal(input: ModelCallInput & { image?: any }): Promise<ModelCallResult> {
  const payload: any = {
    model: input.model,
    prompt: input.prompt,
    systemPrompt: input.systemPrompt,
  };

  // Attach image if provided
  if (input.image) {
    payload.image = input.image;
  }

  const res = await fetch("https://api.fal.ai/v1/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.FAL_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return {
    output: JSON.stringify(data), // MUST be a string
    provider: "fal",
    model: input.model,
  };
}
