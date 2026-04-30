"use client";

import { useState } from "react";
import { generateRadio } from "./actions";
import { RadioForm } from "./components/RadioForm";

export default function RadioRealm() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: any) {
    setLoading(true);
    const res = await generateRadio(data);
    setResult(res);
    setLoading(false);
  }

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-semibold">Radio Realm</h1>

      <RadioForm onSubmit={handleSubmit} loading={loading} />

      {result && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-medium mb-2">Generated Radio Audio</h2>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
