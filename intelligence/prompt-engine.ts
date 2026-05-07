export async function savePrompt(payload: any) {
  const { title = "Untitled", content = "", tags = [] } = payload || {};

  const record = {
    id: "prompt-" + Date.now(),
    title,
    content,
    tags,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: record,
  };
}
