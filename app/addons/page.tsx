"use client";
export default function AddonsPage() {
  async function subscribe(plan: string) {
    const res = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    });
    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url;
    }
  }
  return (
    <div>
      <button onClick={() => subscribe("basic")}>Subscribe Basic</button>
      <button onClick={() => subscribe("pro")}>Subscribe Pro</button>
      <button onClick={() => subscribe("ultimate")}>Subscribe Ultimate</button>
    </div>
  );
}
