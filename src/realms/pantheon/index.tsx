"use client";

import { useState } from "react";
import { createPantheonEntity } from "./actions";
import { PantheonForm } from "./components/PantheonForm";

export default function PantheonRealm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: any) {
    setLoading(true);
    const res = await createPantheonEntity(data);
    setResult(res);
    setLoading(false);
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-semibold">Pantheon Realm</h1>

      <PantheonForm onSubmit={handleSubmit} loading={loading} />

      {result && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-medium mb-2">Response</h2>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
