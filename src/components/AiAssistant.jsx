'use client';

import { useEffect, useRef, useState } from "react";
import { Bot, X, Send, Sparkles, Loader2 } from "lucide-react";
import { portfolio } from "@/lib/portfolioData";

const starterMessages = [
  {
    role: "assistant",
    content: `Hi, I am the portfolio assistant for ${portfolio.name}. Ask me about projects, skills, internships, or contact details.`
  }
];

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (messageText) => {
    const text = messageText.trim();
    if (!text || loading) return;

    const userMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "AI request failed");

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I hit a technical issue. Please try again in a moment."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:scale-[1.02]"
      >
        <Sparkles size={16} />
        AI Assistant
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-slate-950/40 p-4 backdrop-blur-sm md:items-end md:p-6">
          <div className="glass neon-border flex h-[80vh] w-full max-w-md flex-col overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div>
                <p className="text-sm font-semibold text-white">Portfolio AI Assistant</p>
                <p className="text-xs text-slate-400">Ask about this site or Mohit&apos;s background</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-xl p-2 text-slate-300 hover:bg-white/5">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      msg.role === "user"
                        ? "bg-white text-slate-950"
                        : "border border-white/10 bg-white/5 text-slate-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <Loader2 className="animate-spin" size={16} />
                    Thinking...
                  </div>
                </div>
              ) : null}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="border-t border-white/10 p-4"
            >
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-slate-950 transition hover:scale-[1.01]"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
