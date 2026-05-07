export async function runModel(payload: any) {
  const { model = "default", prompt } = payload || {};

  if (!prompt) {
    return { error: "Missing 'prompt' for model execution." };
  }

  const output = `Model '${model}' generated output for: ${prompt}`;

  return {
    success: true,
    model,
    output,
  };
}
