import {
  DIGITAL_TWIN_MODEL,
  digitalTwinSystemPrompt,
} from "@/lib/digital-twin-knowledge";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type OpenRouterResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

const WINDOW_MS = 10 * 60 * 1000;
const REQUEST_LIMIT = 15;
const requestLog = new Map<string, number[]>();

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (requestLog.get(identifier) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= REQUEST_LIMIT) {
    requestLog.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(identifier, recent);
  return false;
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 12) {
    return null;
  }

  const messages: ChatMessage[] = [];

  for (const item of value) {
    if (
      typeof item !== "object" ||
      item === null ||
      !("role" in item) ||
      !("content" in item)
    ) {
      return null;
    }

    const { role, content } = item as { role: unknown; content: unknown };

    if (
      (role !== "user" && role !== "assistant") ||
      typeof content !== "string"
    ) {
      return null;
    }

    const trimmed = content.trim();
    if (!trimmed || trimmed.length > 1600) {
      return null;
    }

    messages.push({ role, content: trimmed });
  }

  if (messages.at(-1)?.role !== "user") {
    return null;
  }

  return messages;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPEN_ROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "The Digital Twin is not configured yet." },
      { status: 503 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const identifier = forwardedFor?.split(",")[0]?.trim() || "local";

  if (isRateLimited(identifier)) {
    return Response.json(
      { error: "Too many questions. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = parseMessages(
    typeof body === "object" && body !== null && "messages" in body
      ? (body as { messages: unknown }).messages
      : null,
  );

  if (!messages) {
    return Response.json(
      { error: "Please send a valid conversation." },
      { status: 400 },
    );
  }

  let openRouterResponse: Response;
  try {
    openRouterResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-OpenRouter-Title": "Mosa Rahimi Digital Twin",
        },
        body: JSON.stringify({
          model: DIGITAL_TWIN_MODEL,
          messages: [
            { role: "system", content: digitalTwinSystemPrompt },
            ...messages,
          ],
          max_tokens: 800,
          temperature: 0.35,
        }),
        signal: AbortSignal.timeout(60_000),
      },
    );
  } catch (error) {
    console.error("Digital Twin upstream request failed:", error);
    return Response.json(
      { error: "The Digital Twin could not connect. Please try again." },
      { status: 502 },
    );
  }

  const data = (await openRouterResponse.json().catch(() => null)) as
    | OpenRouterResponse
    | null;

  if (!openRouterResponse.ok) {
    console.error(
      "OpenRouter returned an error:",
      openRouterResponse.status,
      data?.error?.message ?? "Unknown upstream error",
    );
    return Response.json(
      { error: "The Digital Twin is temporarily unavailable." },
      { status: 502 },
    );
  }

  const answer = data?.choices?.[0]?.message?.content?.trim();

  if (!answer) {
    return Response.json(
      { error: "The Digital Twin returned an empty response." },
      { status: 502 },
    );
  }

  return Response.json({
    answer,
    model: DIGITAL_TWIN_MODEL,
  });
}
