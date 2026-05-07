import { NextResponse } from "next/server";

const FAL_API_URL = "https://fal.run/fal-ai";
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const STYLE_MAP: Record<string, string> = {
  cinematic:
    "cinematic, film still, dramatic lighting, shallow depth of field, 4K, highly detailed",
  neon_noir:
    "neon noir, dark city, glowing signs, high contrast, moody atmosphere, cyberpunk",
  afro_futurism:
    "Afro-futurism, rich African patterns, futuristic tech, bold colors, mythic energy",
  cosmic_minimal:
    "cosmic minimalism, clean composition, subtle gradients, space-inspired, premium UI aesthetic",
  anime:
    "anime style, expressive characters, clean line art, vibrant colors, dynamic framing",

  pixar:
    "Pixar-style 3D animation, soft lighting, expressive faces, warm color palette, cinematic framing",
  hyper_realistic:
    "hyper-realistic photography, ultra-sharp details, lifelike textures, natural lighting",
  vintage_film:
    "vintage 1970s film, grainy texture, warm tones, analog imperfections",
  dark_fantasy:
    "dark fantasy, dramatic shadows, mythic atmosphere, epic mood",
  mythic_realism:
    "mythic realism, painterly detail, divine proportions, epic lighting",
  vogue_editorial:
    "high-fashion editorial, dramatic poses, studio lighting, luxury aesthetic",
  diaspora_cinematic:
    "African diaspora cinematic storytelling, rich tones, cultural symbolism, emotional depth",
  gospel_art:
    "gospel-inspired divine imagery, radiant light, spiritual symbolism, glowing atmosphere",
  studio_ghibli:
    "Studio Ghibli style, soft anime, whimsical, magical realism, gentle colors",
  dreamcore:
    "dreamcore surrealism, ethereal atmosphere, soft haze, dreamlike visuals",
  noir_blackwhite:
    "black and white noir, harsh shadows, dramatic contrast, vintage detective mood",
  afro_surrealism:
    "Afro-surrealism, bold colors, symbolic imagery, cultural surreal visuals",
  hyper_pop:
    "hyper-pop art, bright neon colors, glossy textures, bold shapes",
};

async function enhancePromptWithDeepSeek(original: string) {
  if (!process.env.DEEPSEEK_API_KEY) return original;

  const res = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            "You are a prompt engineer for an AI image and video generator. Rewrite the user's idea as a vivid, concise, cinematic prompt. Do not add disclaimers.",
        },
        { role: "user", content: original },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) return original;

  const data = await res.json();
  const enhanced =
    data?.choices?.[0]?.message?.content?.trim() || original;

  return enhanced;
}

async function applyStyleWithGroq(
  styleId: string | undefined,
  basePrompt: string
) {
  if (!styleId) return basePrompt;
  const styleDesc = STYLE_MAP[styleId];
  if (!styleDesc) return basePrompt;

  // Fallback if GROQ_API_KEY is missing: simple local composition
  if (!process.env.GROQ_API_KEY) {
    return `${basePrompt}, ${styleDesc}`;
  }

  const res = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a style composer for an AI image/video generator. Combine the user's idea with the given style description into one vivid, concise prompt.",
        },
        {
          role: "user",
          content: `User idea: "${basePrompt}". Style: "${styleDesc}".`,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) return `${basePrompt}, ${styleDesc}`;

  const data = await res.json();
  const styled =
    data?.choices?.[0]?.message?.content?.trim() ||
    `${basePrompt}, ${styleDesc}`;

  return styled;
}

export async function POST(req: Request) {
  try {
    const { prompt, mode, enhance, style } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Missing prompt" },
        { status: 400 }
      );
    }

    if (!process.env.FAL_KEY) {
      return NextResponse.json(
        { error: "FAL_KEY is not set in environment" },
        { status: 500 }
      );
    }

    let finalPrompt = prompt;

    if (enhance === true) {
      finalPrompt = await enhancePromptWithDeepSeek(finalPrompt);
    }

    finalPrompt = await applyStyleWithGroq(style, finalPrompt);

    const isVideo = mode === "video";

    const endpoint = isVideo
      ? `${FAL_API_URL}/flux/dev`
      : `${FAL_API_URL}/flux/dev`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Key ${process.env.FAL_KEY}`,
      },
      body: JSON.stringify({
        prompt: finalPrompt,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: "Fal.ai request failed", details: text },
        { status: 500 }
      );
    }

    const data = await response.json();

    const url =
      data?.image_url ||
      data?.video_url ||
      data?.url ||
      data?.output?.[0]?.url ||
      "";

    return NextResponse.json({
      url,
      raw: data,
      usedPrompt: finalPrompt,
      style,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Studio engine error",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
