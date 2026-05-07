import { registerAsset } from "./asset-registry";

export async function mixMedia(payload: any) {
  const { inputs = [] } = payload || {};

  if (!Array.isArray(inputs) || inputs.length === 0) {
    return { error: "Missing or invalid 'inputs' for media mix." };
  }

  const record = {
    id: "mix-" + Date.now(),
    inputs,
    url: "about:blank",
    createdAt: new Date().toISOString(),
  };

  const asset = await registerAsset({
    type: "mixed",
    url: record.url,
    metadata: { inputs },
  });

  return {
    success: true,
    data: {
      ...record,
      assetId: asset.data?.id,
    },
  };
}
