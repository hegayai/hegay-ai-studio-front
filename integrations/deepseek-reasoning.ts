const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY!;

export async function deepseekReason(prompt: string, system?: string) {
  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek-reasoner",
      messages: [
        system ? { role: "system", content: system } : null,
        { role: "user", content: prompt },
      ].filter(Boolean),
    }),
  });

  if (!res.ok) {
    throw new Error(`DeepSeek Reasoning Error: ${res.statusText}`);
  }

  const json = await res.json();
  return json.choices?.[0]?.message?.content ?? "";
}
