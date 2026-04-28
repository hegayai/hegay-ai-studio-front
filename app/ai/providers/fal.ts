// app/ai/providers/fal.ts
// Clean placeholder provider to satisfy imports across all API routes.
// Prevents Vercel build failures until full FAL integration is added.

export const fal = {
  async generate(options: any = {}) {
    return {
      success: false,
      provider: "fal",
      message: "FAL provider not implemented yet",
      options,
    };
  },

  async transform(options: any = {}) {
    return {
      success: false,
      provider: "fal",
      message: "FAL transform not implemented yet",
      options,
    };
  },

  async upscale(options: any = {}) {
    return {
      success: false,
      provider: "fal",
      message: "FAL upscale not implemented yet",
      options,
    };
  },

  async colorGrade(options: any = {}) {
    return {
      success: false,
      provider: "fal",
      message: "FAL color grading not implemented yet",
      options,
    };
  },

  async video(options: any = {}) {
    return {
      success: false,
      provider: "fal",
      message: "FAL video generation not implemented yet",
      options,
    };
  }
};
