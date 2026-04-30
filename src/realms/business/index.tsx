"use client";

import { useState } from "react";
import { createBusiness } from "./actions";
import { BusinessForm } from "./components/BusinessForm";

export default function BusinessRealm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: any) {
    setLoading(true);
    const res = await createBusiness(data);
    setResult(res);
    setLoading(false);
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-semibold">Business Realm</h1>

      <BusinessForm onSubmit={handleSubmit} loading={loading} />

      {result && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-medium mb-2">Business Created</h2>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
