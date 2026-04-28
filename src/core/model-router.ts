import { callModel } from "@/app/ai/callModel";

export async function modelRouter(provider: string, model: string, systemPrompt: string, userPrompt: string) {
  try {
    const result = await callModel({
      provider,
      model,
      systemPrompt,
      userPrompt,
    });

    return result;
  } catch (err: any) {
    console.error("Model Router Error:", err);
    throw new Error(err.message || "Model router failed");
  }
}
