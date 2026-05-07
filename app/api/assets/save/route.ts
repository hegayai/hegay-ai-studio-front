import { NextResponse } from "next/server";

type AssetType = "image" | "video";

type SavedAsset = {
  id: string;
  url: string;
  type: AssetType;
  style: string | null;
  prompt: string;
  usedPrompt: string | null;
  createdAt: string;
};

const assets: SavedAsset[] = [];

export async function POST(req: Request) {
  try {
    const { url, type, style, prompt, usedPrompt } = await req.json();

    if (!url || !type || !prompt) {
      return NextResponse.json(
        { error: "Missing url, type, or prompt" },
        { status: 400 }
      );
    }

    const asset: SavedAsset = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      url,
      type,
      style: style || null,
      prompt,
      usedPrompt: usedPrompt || null,
      createdAt: new Date().toISOString(),
    };

    assets.unshift(asset);

    return NextResponse.json({ success: true, asset });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Failed to save asset",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ assets });
}
