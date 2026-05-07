import { deepseekChat } from "../integrations/deepseek-chat";
import { deepseekReason } from "../integrations/deepseek-reasoning";
import { falGenerateImage } from "../integrations/fal-image";
import { falGenerateVideo } from "../integrations/fal-video";
import { falGenerateMotion } from "../integrations/fal-motion";
import { falCleanupImage } from "../integrations/fal-cleanup";
import { falGenerateReel } from "../integrations/fal-reels";
import { falScriptToVideo } from "../integrations/fal-script-video";

// --------------------------------------------------
// ADD "admin_image" HERE
// --------------------------------------------------
export type EngineType =
  | "chat"
  | "reason"
  | "image"
  | "video"
  | "motion"
  | "cleanup"
  | "reels"
  | "script_video"
  | "admin_image";   // <-- FIXED

export async function modelRouter(engine: EngineType, payload: any) {
  switch (engine) {
    case "chat":
      return deepseekChat(payload.prompt, payload.system);

    case "reason":
      return deepseekReason(payload.prompt, payload.system);

    case "image":
      return falGenerateImage(payload);

    case "video":
      return falGenerateVideo(payload);

    case "motion":
      return falGenerateMotion(payload);

    case "cleanup":
      return falCleanupImage(payload);

    case "reels":
      return falGenerateReel(payload);

    case "script_video":
      return falScriptToVideo(payload);

    case "admin_image":
      // For now, admin_image uses the same engine as falGenerateImage
      // You can replace this with a stronger model later.
      return falGenerateImage(payload);

    default:
      throw new Error("Unknown engine type");
  }
}
