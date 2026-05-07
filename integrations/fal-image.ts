const FAL_KEY = process.env.FAL_KEY!;

export interface FalImageOptions {
  prompt: string;
  aspect_ratio?: string;
}

export async function falGenerateImage(options: FalImageOptions) {
  const res = await fetch("https://api.fal.ai/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: options.prompt,
      aspect_ratio: options.aspect_ratio || "16:9",
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Image Error: ${res.statusText}`);
  }

  return res.json();
}
