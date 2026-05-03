// lib/apiClient.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:10000";

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `API error ${res.status}: ${text || res.statusText || "Unknown error"}`
    );
  }

  return (await res.json()) as T;
}
