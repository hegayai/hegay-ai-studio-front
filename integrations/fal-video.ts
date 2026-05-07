const FAL_KEY = process.env.FAL_KEY!;

export interface FalVideoOptions {
  prompt: string;
  duration?: number;
  aspect_ratio?: string;
}

export async function falGenerateVideo(options: FalVideoOptions) {
  const res = await fetch("https://api.fal.ai/v1/videos/generations", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: options.prompt,
      duration: options.duration || 8,
      aspect_ratio: options.aspect_ratio || "9:16",
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Video Error: ${res.statusText}`);
  }

  return res.json();
}
