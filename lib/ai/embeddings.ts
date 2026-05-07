export async function embedText(payload: any) {
  const { text } = payload || {};

  if (!text) {
    return { error: "Missing 'text' for embedding." };
  }

  const vector = Array.from({ length: 32 }, () => Math.random());

  return {
    success: true,
    vector,
    metadata: { length: text.length },
  };
}
