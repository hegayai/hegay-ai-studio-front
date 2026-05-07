import { falGenerateMotion } from "../integrations/fal-motion";

export async function generateMotion(prompt: string, duration = 6) {
  return falGenerateMotion({ prompt, duration });
}
