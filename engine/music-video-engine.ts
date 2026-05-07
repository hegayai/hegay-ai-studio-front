import { falGenerateVideo } from "../integrations/fal-video";
import { falGenerateImage } from "../integrations/fal-image";
import { falGenerateMotion } from "../integrations/fal-motion";

export async function generateMusicVideo(songUrl: string, prompt: string) {
  const cover = await falGenerateImage({
    prompt: `${prompt} album cover, cinematic, cosmic minimal`,
    aspect_ratio: "1:1",
  });

  const motion = await falGenerateMotion({
    prompt: `${prompt} motion visuals synced to music`,
    duration: 8,
  });

  const video = await falGenerateVideo({
    prompt: `${prompt} cinematic music video`,
    duration: 12,
    aspect_ratio: "16:9",
  });

  return {
    cover,
    motion,
    video,
  };
}
