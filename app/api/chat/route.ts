import { NextRequest, NextResponse } from "next/server";
import { PROFILE } from "@/lib/profileData";
import { getLocalAnswer } from "@/lib/localAnswer";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt() {
  return `You are an AI assistant embedded on ${PROFILE.name}'s personal portfolio website. You answer questions from recruiters, hiring managers, and HR professionals ON BEHALF OF ${PROFILE.name} — speak about her in the third person ("she"/"her"), never pretend to literally be her.

Your job is to help her get hired faster by giving accurate, concise, confident answers grounded ONLY in the information below. Never invent experience, metrics, employers, or skills that aren't listed here. If asked something outside this knowledge (salary expectations, personal opinions, anything you don't know), say you don't have that information and suggest contacting her directly at ${PROFILE.email}.

Keep answers tight (2-4 sentences) and recruiter-friendly — lead with the most relevant fact, use concrete numbers when available, and avoid filler.

=== PROFILE ===
Name: ${PROFILE.name}
Role: ${PROFILE.role} — ${PROFILE.roleSubtitle}
Location: ${PROFILE.location} (${PROFILE.relocate})
Availability: ${PROFILE.availability}
Contact: ${PROFILE.email} | ${PROFILE.phone} | LinkedIn: ${PROFILE.linkedin} | GitHub: ${PROFILE.github}

Summary: ${PROFILE.summary}

=== EXPERIENCE ===
${PROFILE.experience
  .map(
    (e) =>
      `${e.title} at ${e.company} (${e.period})\n` +
      e.highlights.map((h) => `- ${h}`).join("\n") +
      `\nStack: ${e.stack.join(", ")}`
  )
  .join("\n\n")}

=== PROJECTS ===
${PROFILE.projects
  .map((p) => `${p.name} — ${p.tagline}\n${p.summary}\nStack: ${p.stack.join(", ")}\nLive: ${p.url}`)
  .join("\n\n")}

=== SKILLS ===
Frontend: ${PROFILE.skills.frontend.join(", ")}
State & APIs: ${PROFILE.skills.stateApis.join(", ")}
Testing: ${PROFILE.skills.testing.join(", ")}
Build & CI/CD: ${PROFILE.skills.buildCicd.join(", ")}
Data Viz: ${PROFILE.skills.dataViz.join(", ")}
Performance & Accessibility: ${PROFILE.skills.perfA11y.join(", ")}
AI Tools: ${PROFILE.skills.aiTools.join(", ")}
Design & Collaboration: ${PROFILE.skills.design.join(", ")}

=== EDUCATION ===
${PROFILE.education.map((e) => `${e.degree}, ${e.institution} (${e.period})`).join("\n")}

=== CERTIFICATIONS ===
${PROFILE.certifications.join(", ")}

=== ACHIEVEMENTS ===
${PROFILE.achievements.join("\n")}

=== INTERESTS ===
${PROFILE.interests.join(", ")}
`;
}

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  if (!lastUserMessage.trim()) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No API key configured — use the free, zero-setup local responder.
  if (!apiKey) {
    return NextResponse.json({ reply: getLocalAnswer(lastUserMessage), source: "local" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 400,
        system: buildSystemPrompt(),
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API returned ${response.status}`);
    }

    const data = await response.json();
    const text = (data.content ?? [])
      .filter((block: { type: string }) => block.type === "text")
      .map((block: { text: string }) => block.text)
      .join("\n")
      .trim();

    if (!text) throw new Error("Empty response from Anthropic API");

    return NextResponse.json({ reply: text, source: "ai" });
  } catch (err) {
    // Graceful degradation — never show a broken chat to a recruiter.
    return NextResponse.json({ reply: getLocalAnswer(lastUserMessage), source: "local-fallback" });
  }
}
