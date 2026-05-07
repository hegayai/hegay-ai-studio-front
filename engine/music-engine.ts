import { deepseekReason } from "../integrations/deepseek-reasoning";
import { falGenerateImage } from "../integrations/fal-image";
import { modelRouter } from "./model-router";

export async function generateSong(prompt: string) {
  const composition = await deepseekReason(
    `Create lyrics + composition for: ${prompt}`
  );

  const audio = await modelRouter("script_video", {
    script: composition,
    duration: 30,
    aspect_ratio: "16:9",
  });

  const mastered = await modelRouter("cleanup", {
    image_url: audio.audio_url,
    mask_prompt: "enhance audio quality",
  });

  return {
    composition,
    audio,
    mastered,
  };
}
