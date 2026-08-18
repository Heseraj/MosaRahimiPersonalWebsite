"use client";

import {
  Bot,
  ExternalLink,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const openingMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "I’m Mosa’s AI Digital Twin. Ask me about his career journey, leadership experience, education, technical work, or the history and culture of the Hazara people.",
};

const suggestions = [
  "What connects Mosa’s public service to his work at Amazon?",
  "Why is Mosa moving into AI now?",
  "Who are the Hazara people of Afghanistan?",
  "What shaped Mosa’s leadership style?",
];

function linkify(text: string): ReactNode[] {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, index) => {
    if (!part.startsWith("http://") && !part.startsWith("https://")) {
      return part;
    }

    const trailing = part.match(/[),.;]+$/)?.[0] ?? "";
    const url = trailing ? part.slice(0, -trailing.length) : part;

    return (
      <span key={`${url}-${index}`}>
        <a href={url} target="_blank" rel="noreferrer">
          {url} <ExternalLink aria-hidden="true" />
        </a>
        {trailing}
      </span>
    );
  });
}

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<Message[]>([openingMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = messagesRef.current;
    if (element) {
      element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });
    }
  }, [messages, loading]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    const conversation = [...messages, userMessage]
      .filter((message) => message.id !== "welcome")
      .slice(-11)
      .map(({ role, content }) => ({ role, content }));

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
      });
      const data = (await response.json()) as {
        answer?: string;
        error?: string;
      };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The Digital Twin could not respond.");
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer as string,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The Digital Twin could not respond.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className="twin-chat">
      <div className="twin-chat-header">
        <div className="twin-avatar" aria-hidden="true">
          <Sparkles />
          MR
        </div>
        <div>
          <strong>Mosa&apos;s Digital Twin</strong>
          <span>
            <i /> AI guide · online
          </span>
        </div>
        <span className="twin-model">GPT-OSS-20B</span>
      </div>

      <div
        className="twin-messages"
        ref={messagesRef}
        aria-live="polite"
        aria-label="Digital Twin conversation"
      >
        {messages.map((message) => (
          <div
            className={`twin-message twin-message-${message.role}`}
            key={message.id}
          >
            <span className="twin-message-icon" aria-hidden="true">
              {message.role === "assistant" ? <Bot /> : <UserRound />}
            </span>
            <div>{linkify(message.content)}</div>
          </div>
        ))}
        {loading && (
          <div className="twin-message twin-message-assistant twin-thinking">
            <span className="twin-message-icon" aria-hidden="true">
              <Bot />
            </span>
            <div>
              <i />
              <i />
              <i />
              <span className="sr-only">Thinking</span>
            </div>
          </div>
        )}
      </div>

      {messages.length === 1 && (
        <div className="twin-suggestions" aria-label="Suggested questions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => void ask(suggestion)}
              disabled={loading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="twin-error" role="alert">
          {error}
        </p>
      )}

      <form className="twin-form" onSubmit={handleSubmit}>
        <label htmlFor="digital-twin-question" className="sr-only">
          Ask Mosa&apos;s Digital Twin a question
        </label>
        <textarea
          id="digital-twin-question"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          maxLength={1600}
          rows={2}
          placeholder="Ask about Mosa’s career or the Hazara people…"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          <Send aria-hidden="true" />
          <span className="sr-only">Send question</span>
        </button>
      </form>

      <p className="twin-disclosure">
        <ShieldCheck aria-hidden="true" />
        AI-generated answers grounded in Mosa&apos;s public profile and curated
        sources. This is not Mosa speaking live.
      </p>
    </div>
  );
}
