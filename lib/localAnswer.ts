import { PROFILE } from "./profileData";

// Lightweight keyword-matching responder. This is the zero-setup, zero-cost
// path: it works the moment the site is deployed, with no API key required.
// If ANTHROPIC_API_KEY is configured, app/api/chat/route.ts uses real Claude
// instead and only falls back to this if that call fails.

type Rule = { keywords: string[]; answer: string };

const RULES: Rule[] = [
  {
    keywords: ["experience", "background", "years", "current role", "job", "where does she work", "currently work"],
    answer: `She has ${PROFILE.yearsExperience} years of enterprise experience. She's currently a Frontend Engineer at ${PROFILE.experience[0].company} (${PROFILE.experience[0].period}), and previously was a Software Engineer (UX Focus) at ${PROFILE.experience[1].company} (${PROFILE.experience[1].period}).`,
  },
  {
    keywords: ["ets"],
    answer: `At ETS (${PROFILE.experience[0].period}) she's a Frontend Engineer building scalable React/TypeScript apps for a data-intensive assessment platform serving millions of users. Highlights: ${PROFILE.experience[0].highlights.slice(0, 3).join(" ")}`,
  },
  {
    keywords: ["accenture"],
    answer: `At Accenture (${PROFILE.experience[1].period}) she was a Software Engineer with a UX focus. Highlights: ${PROFILE.experience[1].highlights.slice(0, 3).join(" ")}`,
  },
  {
    keywords: ["impact", "metric", "result", "measurable", "numbers", "stats", "achievement", "accomplish"],
    answer: PROFILE.achievements.join(" "),
  },
  {
    keywords: ["skill", "tech stack", "technologies", "stack", "good at", "strength"],
    answer: `Her core stack is ${PROFILE.skills.frontend.slice(0, 6).join(", ")}. On state & APIs: ${PROFILE.skills.stateApis.join(", ")}. She also brings strong testing (${PROFILE.skills.testing.slice(0, 3).join(", ")}), performance/accessibility expertise (${PROFILE.skills.perfA11y.slice(0, 3).join(", ")}), and is a daily user of AI tools like ${PROFILE.skills.aiTools.join(", ")}.`,
  },
  {
    keywords: ["planora", "travel", "itinerary", "openai", "ai project"],
    answer: `Planora is her AI travel planning platform: ${PROFILE.projects[0].summary} Stack: ${PROFILE.projects[0].stack.join(", ")}. Live: ${PROFILE.projects[0].url}`,
  },
  {
    keywords: ["focusflow", "productivity"],
    answer: `FocusFlow is her productivity platform: ${PROFILE.projects[1].summary} Stack: ${PROFILE.projects[1].stack.join(", ")}. Live: ${PROFILE.projects[1].url}`,
  },
  {
    keywords: ["project", "portfolio", "built", "shipped", "work she's done"],
    answer: `She's shipped two live projects — Planora (an AI travel planning platform using the OpenAI API) and FocusFlow (a productivity platform with a modular, WCAG-compliant component library). Both are linked in the Projects section above.`,
  },
  {
    keywords: ["remote", "relocat", "location", "based", "where is she", "kansas"],
    answer: `She's based in ${PROFILE.location} and is ${PROFILE.relocate.toLowerCase()}. ${PROFILE.workingStyle}`,
  },
  {
    keywords: ["available", "availability", "notice", "start date", "when can", "join", "open to"],
    answer: PROFILE.availability,
  },
  {
    keywords: ["education", "degree", "college", "university", "masters", "master's", "bachelor", "school"],
    answer: PROFILE.education.map((e) => `${e.degree}, ${e.institution} (${e.period})`).join(". "),
  },
  {
    keywords: ["certification", "certificate", "ibm", "google ux"],
    answer: `Certifications: ${PROFILE.certifications.join(", ")}.`,
  },
  {
    keywords: ["chess", "medal", "hobby", "interest", "free time", "outside of work"],
    answer: `She's a Chess Gold Medalist, recognized for strategic, long-horizon thinking under pressure. Outside of work she's into ${PROFILE.interests.join(", ")}.`,
  },
  {
    keywords: ["contact", "email", "phone", "reach", "linkedin", "github", "resume", "cv"],
    answer: `You can reach her at ${PROFILE.email} or ${PROFILE.phone}. LinkedIn: ${PROFILE.linkedin} · GitHub: ${PROFILE.github}. Her resume is downloadable from the Contact section on this page.`,
  },
  {
    keywords: ["role", "position", "fit", "title", "looking for", "ux", "design engineer"],
    answer: `She's a ${PROFILE.role} — sitting at the intersection of frontend engineering and UX. She fits Frontend Engineer, UI Engineer, Design Engineer, or Frontend/UX Hybrid roles.`,
  },
  {
    keywords: ["hire", "why", "should i", "value", "stand out", "differentiate"],
    answer: `A few reasons: she's delivered measurable impact (35% page load reduction, 40% UI inconsistency elimination, 25% engagement improvement), she works at the design+engineering intersection so there's no hand-off lag, she leads accessibility (WCAG 2.1 AA) and testing rigor, and she uses AI tools daily to move fast without sacrificing quality.`,
  },
];

const GREETING_KEYWORDS = ["hi", "hello", "hey", "yo", "sup"];

export function getLocalAnswer(message: string): string {
  const lower = message.toLowerCase();

  if (GREETING_KEYWORDS.some((g) => lower === g || lower.startsWith(g + " ") || lower.startsWith(g + "!"))) {
    return `Hi! I'm here to answer questions about Eekshitha on her behalf — her experience, skills, projects, or availability. What would you like to know?`;
  }

  let best: { rule: Rule; score: number } | null = null;
  for (const rule of RULES) {
    const score = rule.keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) best = { rule, score };
  }

  if (best) return best.rule.answer;

  return `I don't have a specific answer for that, but I can tell you about her experience at ETS and Accenture, her Planora/FocusFlow projects, her skills, education, or how to reach her directly — feel free to ask, or email her at ${PROFILE.email}.`;
}
