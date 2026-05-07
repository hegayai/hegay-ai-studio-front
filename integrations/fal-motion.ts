const FAL_KEY = process.env.FAL_KEY!;

export interface FalMotionOptions {
  prompt: string;
  duration?: number;
}

export async function falGenerateMotion(options: FalMotionOptions) {
  const res = await fetch("https://api.fal.ai/v1/motion/generations", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: options.prompt,
      duration: options.duration || 6,
    }),
  });

  if (!res.ok) {
    throw new Error(`Fal Motion Error: ${res.statusText}`);
  }

  return res.json();
}
