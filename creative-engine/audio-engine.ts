const FAL_KEY = process.env.FAL_KEY || "";
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

export async function generateAudio(payload: any) {
  const { script = "", voice = "default" } = payload || {};

  if (!script) {
    return { error: "Missing 'script' for audio generation." };
  }

  // OpenAI TTS (ACTIVATES ONLY IF KEY EXISTS)
  if (OPENAI_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini-tts",
          voice,
          input: script,
          format: "mp3",
        }),
      });

      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");

      return {
        success: true,
        provider: "openai",
        data: {
          id: "audio-" + Date.now(),
          url: `data:audio/mpeg;base64,${base64}`,
          script,
          voice,
          createdAt: new Date().toISOString(),
        },
      };
    } catch (err: any) {
      return { error: "OpenAI audio generation failed.", details: String(err) };
    }
  }

  // FAL.AI AUDIO (DEFAULT)
  try {
    const response = await fetch("https://api.fal.ai/v1/audio/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${FAL_KEY}`,
      },
      body: JSON.stringify({
        text: script,
        voice,
      }),
    });

    const data = await response.json();

    return {
      success: true,
      provider: "fal.ai",
      data: {
        id: "audio-" + Date.now(),
        url: data.audio?.url || null,
        script,
        voice,
        createdAt: new Date().toISOString(),
      },
    };
  } catch (error: any) {
    return { error: "FAL audio generation failed.", details: String(error) };
  }
}
