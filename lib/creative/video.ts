export async function generateVideo(payload: any) {
  const { prompt, duration = 5 } = payload || {};

  if (!prompt) {
    return { error: "Missing 'prompt' for video generation." };
  }

  const result = {
    id: "video-" + Date.now(),
    url: "https://example.com/video/" + Date.now() + ".mp4",
    prompt,
    duration,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: result,
  };
}
