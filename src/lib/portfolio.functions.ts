import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GITHUB_USER = "ArunRajoriya";

export type Repo = {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  updatedAt: string;
};

export const listRepos = createServerFn({ method: "GET" }).handler(async (): Promise<Repo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
    { headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio" } },
  );
  if (!res.ok) {
    throw new Error(`GitHub request failed [${res.status}]: ${await res.text()}`);
  }
  const raw = (await res.json()) as Array<Record<string, unknown>>;
  return raw
    .filter((r) => !r["fork"])
    .map((r) => ({
      name: String(r["name"]),
      description: (r["description"] as string | null) ?? null,
      url: String(r["html_url"]),
      homepage: (r["homepage"] as string | null) || null,
      language: (r["language"] as string | null) ?? null,
      topics: Array.isArray(r["topics"]) ? (r["topics"] as string[]) : [],
      stars: Number(r["stargazers_count"] ?? 0),
      updatedAt: String(r["updated_at"]),
    }));
});

const BriefInput = z.object({
  name: z.string().min(1).max(120),
  description: z.string().max(500).nullable(),
  language: z.string().max(60).nullable(),
  topics: z.array(z.string().max(60)).max(20),
});

export type ProjectBrief = { summary: string; stack: string[] };

export const generateProjectBrief = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BriefInput.parse(input))
  .handler(async ({ data }): Promise<ProjectBrief> => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) throw new Error("AI is not configured on this project.");

    const prompt = [
      `Repository name: ${data.name}`,
      `Repository description: ${data.description ?? "(none provided)"}`,
      `Primary language: ${data.language ?? "unknown"}`,
      `Topics: ${data.topics.join(", ") || "(none)"}`,
      "",
      "Write a recruiter-facing draft for this software project.",
      'Reply with ONLY JSON: {"summary": string, "stack": string[]}.',
      "summary: 2 sentences, max 45 words, plain professional English, focused on what the project does and the engineering value. No hype, no first person.",
      "stack: 3 to 7 likely technologies inferred from the name, language and topics.",
    ].join("\n");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        reasoning_effort: "low",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You draft concise, factual project descriptions for a developer portfolio. Respond with JSON only.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      if (res.status === 429) throw new Error("AI is busy right now — try again in a moment.");
      if (res.status === 402)
        throw new Error("AI credits are exhausted. Add credits in Lovable to keep generating.");
      throw new Error(`AI request failed [${res.status}]: ${body}`);
    }

    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = json.choices?.[0]?.message?.content ?? "{}";
    let parsed: { summary?: unknown; stack?: unknown } = {};
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = {};
    }

    return {
      summary:
        typeof parsed.summary === "string" && parsed.summary.trim()
          ? parsed.summary.trim()
          : "Draft unavailable — try generating again.",
      stack: Array.isArray(parsed.stack)
        ? parsed.stack.filter((s): s is string => typeof s === "string").slice(0, 7)
        : [],
    };
  });

const ContactInput = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(4000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactInput.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env["SUPABASE_URL"] ?? import.meta.env["VITE_SUPABASE_URL"],
      process.env["SUPABASE_PUBLISHABLE_KEY"] ??
        import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"],
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      company: data.company ? data.company : null,
      message: data.message,
    });

    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
