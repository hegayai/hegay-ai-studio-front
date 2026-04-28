// app/ai/providers/fal.ts
// Clean, stable provider with both legacy and modern exports.
// Prevents Vercel build failures and maintains compatibility
// with all API routes expecting `fal` or `callFal`.

export async function callFal(options: any = {}) {
  return {
    success: false,
    provider: "fal",
    message: "FAL provider not implemented yet",
    options,
  };
}

// Modern router-style export (used by many API routes)
export const fal = {
  async generate(options: any = {}) {
    return await callFal(options);
  },

  async transform(options: any = {}) {
    return await callFal(options);
  },

  async upscale(options: any = {}) {
    return await callFal(options);
  },

  async colorGrade(options: any = {}) {
    return await callFal(options);
  },

  async video(options: any = {}) {
    return await callFal(options);
  },
};
