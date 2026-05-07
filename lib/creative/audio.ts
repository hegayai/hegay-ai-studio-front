export async function generateAudio(payload: any) {
  const { script = "", voice = "default" } = payload || {};

  if (!script) {
    return { error: "Missing 'script' for audio generation." };
  }

  const result = {
    id: "audio-" + Date.now(),
    url: "https://example.com/audio/" + Date.now() + ".mp3",
    script,
    voice,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: result,
  };
}
