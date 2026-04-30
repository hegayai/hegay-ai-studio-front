"use client";

import { useState } from "react";

export function BusinessForm({ onSubmit, loading }: any) {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [pricing, setPricing] = useState("");
  const [features, setFeatures] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      name,
      model,
      pricing,
      features: features.split(",").map(f => f.trim()),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Business Name</label>
        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Business Model</label>
        <input
          className="w-full border p-2 rounded"
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="e.g. SaaS, Subscription, Marketplace"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Pricing Structure</label>
        <input
          className="w-full border p-2 rounded"
          value={pricing}
          onChange={e => setPricing(e.target.value)}
          placeholder="e.g. $10/month, tiered, freemium"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Features (comma separated)</label>
        <input
          className="w-full border p-2 rounded"
          value={features}
          onChange={e => setFeatures(e.target.value)}
          placeholder="analytics, ai-engine, dashboard, api-access"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Creating..." : "Create Business"}
      </button>
    </form>
  );
}
