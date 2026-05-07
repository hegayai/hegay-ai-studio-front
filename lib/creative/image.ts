export async function generateImage(payload: any) {
  const { prompt, size = "1024x1024" } = payload || {};

  if (!prompt) {
    return { error: "Missing 'prompt' for image generation." };
  }

  const result = {
    id: "img-" + Date.now(),
    url: `https://dummyimage.com/${size.replace("x", "/")}/000/fff&text=${encodeURIComponent(
      prompt
    )}`,
    prompt,
    size,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: result,
  };
}
