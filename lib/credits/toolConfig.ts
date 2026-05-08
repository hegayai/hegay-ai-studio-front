export const CATEGORY_B_TOOLS = {
  text_to_audio: {
    name: "Text to Audio",
    unit: "characters",
    credits_per_unit: 1,
    category: "audio",
    gpu_cost: "low",
  },

  speech_to_audio: {
    name: "Speech to Audio",
    unit: "seconds",
    credits_per_unit: 2,
    category: "audio",
    gpu_cost: "medium",
  },

  image_to_video: {
    name: "Image to Video",
    unit: "seconds",
    credits_per_unit: 5,
    category: "video",
    gpu_cost: "high",
  },

  video_to_video: {
    name: "Video to Video",
    unit: "seconds",
    credits_per_unit: 8,
    category: "video",
    gpu_cost: "very_high",
  },

  upscale_image: {
    name: "Upscale Image",
    unit: "image",
    credits_per_unit: 3,
    category: "image",
    gpu_cost: "medium",
  },

  hegay_chat: {
    name: "Hegay Chat",
    unit: "tokens",
    credits_per_unit: 1,
    category: "chat",
    gpu_cost: "low",
  },
} as const;
