export async function storeMemory(payload: any) {
  const { content, metadata = {} } = payload || {};

  if (!content) {
    return { error: "Missing 'content' for memory engine." };
  }

  const record = {
    id: "mem-" + Date.now(),
    content,
    metadata,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: record,
  };
}
