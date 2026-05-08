import { deepseekChat } from "../integrations/deepseek-chat";
import { deepseekReason } from "../integrations/deepseek-reasoning";
import { falGenerateImage } from "../integrations/fal-image";
import { falGenerateVideo } from "../integrations/fal-video";
import { falGenerateMotion } from "../integrations/fal-motion";
import { falCleanupImage } from "../integrations/fal-cleanup";
import { falGenerateReel } from "../integrations/fal-reels";
import { falScriptToVideo } from "../integrations/fal-script-video";

// --------------------------------------------------
// FULL ENGINE LIST (FINAL, COMPLETE)
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
  | "admin_image"
  | "admin_video"
  | "motion_advanced"
  | "cleanup_advanced"
  | "reels_advanced"
  | "branding"
  | "memory_engine"
  | "model_forge"
  | "music"
  | "music_video"
  | "thumbnail"
  | "video_remake"
  | "voice"
  | "worker_agent"
  | "writer"
  | "caption_studio"
  | "caption_style"
  | "radio_forge"
  | "radio_automation"
  | "radio_show_builder";

export async function modelRouter(engine: EngineType, payload: any) {
  switch (engine) {
    // ---------------- CORE ----------------
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

    // ------------- ADMIN / ADVANCED -------------
    case "admin_image":
      return falGenerateImage(payload);

    case "admin_video":
      return falGenerateVideo(payload);

    case "motion_advanced":
      return falGenerateMotion(payload);

    case "cleanup_advanced":
      return falCleanupImage(payload);

    case "reels_advanced":
      return falGenerateReel(payload);

    // -------- BRANDING / MEMORY / MODEL --------
    case "branding":
      return deepseekReason(payload.prompt, payload.system);

    case "memory_engine":
      return deepseekReason(payload.prompt, payload.system);

    case "model_forge":
      return deepseekReason(payload.prompt, payload.system);

    // ----------------- MUSIC -------------------
    case "music":
      return deepseekReason(payload.prompt, payload.system);

    case "music_video":
      return falGenerateVideo(payload);

    // --------- VIDEO / THUMBNAIL / REMAKE ------
    case "thumbnail":
      return falGenerateImage(payload);

    case "video_remake":
      return falGenerateVideo(payload);

    // --------- VOICE / AGENTS / WRITING --------
    case "voice":
      return deepseekReason(payload.prompt, payload.system);

    case "worker_agent":
      return deepseekReason(payload.prompt, payload.system);

    case "writer":
      return deepseekReason(payload.prompt, payload.system);

    // --------- CAPTIONS / SUBTITLES ------------
    case "caption_studio":
      return deepseekReason(payload.prompt, payload.system);

    case "caption_style":
      return deepseekReason(payload.prompt, payload.system);

    // ------------- RADIO / BROADCAST -----------
    case "radio_forge":
      return deepseekReason(payload.prompt, payload.system);

    case "radio_automation":
      return deepseekReason(payload.prompt, payload.system);

    case "radio_show_builder":
      return deepseekReason(payload.prompt, payload.system);

    // ---------------- DEFAULT ------------------
    default:
      throw new Error(`Unknown engine type: ${engine}`);
  }
}
