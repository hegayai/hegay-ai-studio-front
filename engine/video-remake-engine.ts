import { falGenerateReel } from "../integrations/fal-reels";

export async function remakeVideo(prompt: string, duration = 12) {
  return falGenerateReel({
    prompt,
    duration,
    format: "vertical",
  });
}
