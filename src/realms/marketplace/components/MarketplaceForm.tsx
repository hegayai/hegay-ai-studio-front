"use client";

import { useState } from "react";

export function MarketplaceForm({ onSubmit, loading }: any) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [metadata, setMetadata] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    let parsedMetadata: any = undefined;
    if (metadata.trim().length > 0) {
      try {
        parsedMetadata = JSON.parse(metadata);
      } catch {
        parsedMetadata = { raw: metadata };
      }
    }

    onSubmit({
      product,
      price: Number(price),
      category,
      metadata: parsedMetadata,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Product Name</label>
        <input
          className="w-full border p-2 rounded"
          value={product}
          onChange={e => setProduct(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Price</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <input
          className="w-full border p-2 rounded"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Metadata (JSON optional)</label>
        <textarea
          className="w-full border p-2 rounded"
          value={metadata}
          onChange={e => setMetadata(e.target.value)}
          placeholder='{"color":"red","size":"XL"}'
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Creating..." : "Create Marketplace Item"}
      </button>
    </form>
  );
}
