import { falCleanupImage } from "../integrations/fal-cleanup";

export async function cleanupImage(imageUrl: string, mask?: string) {
  return falCleanupImage({
    image_url: imageUrl,
    mask_prompt: mask || "remove imperfections",
  });
}
