const FAL_KEY = process.env.FAL_KEY || "";
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

export async function generateVideo(payload: any) {
  const { prompt, duration = 5 } = payload || {};

  if (!prompt) {
    return { error: "Missing 'prompt' for video generation." };
  }

  // OpenAI video (ACTIVATES ONLY IF KEY EXISTS)
  if (OPENAI_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/videos/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-video-1",
          prompt,
          duration,
        }),
      });

      const data = await response.json();

      return {
        success: true,
        provider: "openai",
        data: {
          id: "video-" + Date.now(),
          url: data.data?.[0]?.url || null,
          prompt,
          duration,
          createdAt: new Date().toISOString(),
        },
      };
    } catch (err: any) {
      return { error: "OpenAI video generation failed.", details: String(err) };
    }
  }

  // FAL.AI VIDEO (DEFAULT)
  try {
    const response = await fetch("https://api.fal.ai/v1/video/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${FAL_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        duration,
      }),
    });

    const data = await response.json();

    return {
      success: true,
      provider: "fal.ai",
      data: {
        id: "video-" + Date.now(),
        url: data.video?.url || null,
        prompt,
        duration,
        createdAt: new Date().toISOString(),
      },
    };
  } catch (error: any) {
    return { error: "FAL video generation failed.", details: String(error) };
  }
}
