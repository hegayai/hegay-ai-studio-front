const FAL_KEY = process.env.FAL_KEY!;

export interface FalCleanupOptions {
  image_url: string;
  mask_prompt?: string;
}

export async function falCleanupImage(options: FalCleanupOptions) {
  const res = await fetch("https://api.fal.ai/v1/images/cleanup", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_url: options.image_url,
      mask_prompt: options.mask_prompt || "remove imperfections",
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Cleanup Error: ${res.statusText}`);
  }

  return res.json();
}
