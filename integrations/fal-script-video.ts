const FAL_KEY = process.env.FAL_KEY!;

export interface FalScriptVideoOptions {
  script: string;
  duration?: number;
  aspect_ratio?: string;
}

export async function falScriptToVideo(options: FalScriptVideoOptions) {
  const res = await fetch("https://api.fal.ai/v1/videos/script-to-video", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      script: options.script,
      duration: options.duration || 30,
      aspect_ratio: options.aspect_ratio || "16:9",
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Script→Video Error: ${res.statusText}`);
  }

  return res.json();
}
