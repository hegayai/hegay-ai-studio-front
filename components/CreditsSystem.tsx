"use client";

import { useState } from "react";

// ------------------------------------------------------
// 1. CREDIT BADGE (Dashboard Header)
// ------------------------------------------------------
export function CreditBadge({ credits }: { credits: number }) {
  return (
    <div className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm font-semibold shadow-sm">
      {credits} Credits
    </div>
  );
}

// ------------------------------------------------------
// 2. TOOL COST DISPLAY (Inside Each Tool UI)
// ------------------------------------------------------
export function ToolCost({
  credits_per_unit,
  unit,
}: {
  credits_per_unit: number;
  unit: string;
}) {
  return (
    <p className="text-sm text-gray-400 mt-1">
      Cost: {credits_per_unit} credits per {unit.replace("_", " ")}
    </p>
  );
}

// ------------------------------------------------------
// 3. BUY CREDITS MODAL (Upsell Modal)
// ------------------------------------------------------
export function BuyCreditsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const creditOptions = [
    { label: "Buy 100 Credits", lookup: process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_100 },
    { label: "Buy 300 Credits", lookup: process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_300 },
    { label: "Buy 600 Credits", lookup: process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_600 },
    { label: "Buy 1200 Credits", lookup: process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITS_1200 },
  ];

  const handleBuy = async (lookupKey: string | undefined) => {
    if (!lookupKey) return;

    const res = await fetch("/api/checkout/credits", {
      method: "POST",
      body: JSON.stringify({ lookupKey }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[350px] shadow-xl">
        <h2 className="text-lg font-bold mb-4">Not Enough Credits</h2>
        <p className="text-gray-600 mb-4">
          You need more credits to use this tool. Choose a credit pack below:
        </p>

        <div className="space-y-3">
          {creditOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleBuy(opt.lookup!)}
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {opt.label}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------------
// 4. HOOK: HANDLE NOT ENOUGH CREDITS
// ------------------------------------------------------
export function useCreditModal() {
  const [open, setOpen] = useState(false);

  const handleError = (error: string) => {
    if (error === "NOT_ENOUGH_CREDITS") {
      setOpen(true);
    }
  };

  return {
    open,
    setOpen,
    handleError,
  };
}
