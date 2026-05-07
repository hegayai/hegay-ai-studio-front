export async function mixMedia(payload: any) {
  const { inputs = [] } = payload || {};

  if (!Array.isArray(inputs) || inputs.length === 0) {
    return { error: "Missing or invalid 'inputs' for media mix." };
  }

  const result = {
    id: "mix-" + Date.now(),
    url: "https://example.com/mix/" + Date.now() + ".mp4",
    inputs,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: result,
  };
}
