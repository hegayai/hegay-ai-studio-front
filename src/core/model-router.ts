import { callModel } from "@/app/ai/callModel";

export async function modelRouter({
  provider = "local",
  model,
  systemPrompt,
  prompt,
}: {
  provider?: string;
  model: string;
  systemPrompt?: string;
  prompt: string;
}) {
  try {
    const result = await callModel({
      provider,
      model,
      systemPrompt,
      prompt,
    });

    return result;
  } catch (err: any) {
    console.error("Model Router Error:", err);
    throw new Error(err.message || "Model router failed");
  }
}
