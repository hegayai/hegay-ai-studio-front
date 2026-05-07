"use client";

import { useState } from "react";
import { modelRouter } from "@/engine/model-router";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    const response = await modelRouter("chat", {
      prompt: userMessage.content,
      system: "You are Hegay OS Supreme assistant.",
    });

    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setLoading(false);
  }

  return (
    <div className="p-10 text-white flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-6">Chat</h1>

      <div className="flex-1 overflow-y-auto space-y-4 mb-6">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl max-w-xl ${
              m.role === "user" ? "bg-white/10 ml-auto" : "bg-white/5"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <input
          className="flex-1 p-4 rounded bg-white/5"
          placeholder="Ask something..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={send}
          className="px-6 py-3 bg-white/10 rounded hover:bg-white/20 transition"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
