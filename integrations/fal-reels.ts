const FAL_KEY = process.env.FAL_KEY!;

export interface FalReelsOptions {
  prompt: string;
  duration?: number;
  format?: "vertical" | "horizontal";
}

export async function falGenerateReel(options: FalReelsOptions) {
  const res = await fetch("https://api.fal.ai/v1/videos/reels", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: options.prompt,
      duration: options.duration || 12,
      format: options.format || "vertical",
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Reels Error: ${res.statusText}`);
  }

  return res.json();
}
