const FAL_KEY = process.env.FAL_KEY || "";
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

// FAL.AI IMAGE GENERATION (ACTIVE)
export async function generateImage(payload: any) {
  const { prompt, size = "1024x1024" } = payload || {};

  if (!prompt) {
    return { error: "Missing 'prompt' for image generation." };
  }

  // If OpenAI key exists → use OpenAI automatically
  if (OPENAI_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt,
          size,
        }),
      });

      const data = await response.json();
      return {
        success: true,
        provider: "openai",
        data: {
          id: "img-" + Date.now(),
          url: data.data?.[0]?.url || null,
          prompt,
          size,
          createdAt: new Date().toISOString(),
        },
      };
    } catch (err: any) {
      return { error: "OpenAI image generation failed.", details: String(err) };
    }
  }

  // FAL.AI (DEFAULT)
  try {
    const response = await fetch("https://api.fal.ai/v1/images/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${FAL_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    const data = await response.json();

    return {
      success: true,
      provider: "fal.ai",
      data: {
        id: "img-" + Date.now(),
        url: data.image?.url || null,
        prompt,
        size,
        createdAt: new Date().toISOString(),
      },
    };
  } catch (error: any) {
    return { error: "FAL image generation failed.", details: String(error) };
  }
}
