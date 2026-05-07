export async function registerAsset(payload: any) {
  const { type, url, metadata = {} } = payload || {};

  if (!type || !url) {
    return { error: "Missing 'type' or 'url' for asset registration." };
  }

  const record = {
    id: "asset-" + Date.now(),
    type,
    url,
    metadata,
    createdAt: new Date().toISOString(),
  };

  return {
    success: true,
    data: record,
  };
}
