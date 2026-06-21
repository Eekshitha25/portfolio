"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { SUGGESTED_QUESTIONS, PROFILE } from "@/lib/profileData";

type Message = { role: "user" | "assistant"; content: string };

const INTRO: Message = {
  role: "assistant",
  content: `Hi! I'm an AI assistant trained on ${PROFILE.name}'s background. Ask me anything an HR or hiring manager would want to know — her experience, skills, projects, or availability.`,
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "Sorry, something went wrong." }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Sorry, I couldn't connect just now. Please email ${PROFILE.email} directly.` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        data-cursor="link"
        onClick={() => {
          setOpen((o) => !o);
          setHasOpened(true);
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.4 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-[55] w-14 h-14 rounded-full bg-primary text-main shadow-xl shadow-black/20 flex items-center justify-center hover:bg-accent hover:text-ink-900 transition-colors duration-300"
        aria-label="Ask AI about Eekshitha"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {!hasOpened && (
          <motion.span
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-accent"
          />
        )}
      </motion.button>

      {/* Launcher label */}
      {!hasOpened && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 0.4 }}
          className="fixed bottom-9 right-24 z-[55] hidden sm:block px-3 py-2 rounded-xl bg-primary text-main text-xs font-medium shadow-lg whitespace-nowrap"
        >
          Ask AI about me ✨
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-primary rotate-45" />
        </motion.div>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[55] w-[92vw] max-w-sm h-[70vh] max-h-[600px] rounded-3xl border border-subtle bg-main shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-subtle bg-surface">
              <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <Sparkles size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight">Ask about Eekshitha</p>
                <p className="text-[11px] text-muted leading-tight">AI assistant · answers for recruiters</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-main rounded-br-md"
                        : "bg-surface border border-subtle text-secondary rounded-bl-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-subtle rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions — only show before any user message */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-subtle text-secondary hover:border-accent hover:text-accent transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 p-3 border-t border-subtle bg-surface"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about Eekshitha..."
                className="flex-1 bg-main border border-subtle rounded-full px-4 py-2.5 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full bg-accent text-ink-900 flex items-center justify-center disabled:opacity-40 transition-opacity flex-shrink-0"
                aria-label="Send"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
