// Central knowledge base — used by the site content and the AI chat assistant.
// Sourced directly from Eekshitha's resume; keep this in sync with reality.

export const PROFILE = {
  name: "Eekshitha Gujjala",
  role: "Design Engineer",
  roleSubtitle: "React & Next.js · TypeScript · Component Systems · UX-Driven Development",
  location: "Overland Park, KS",
  relocate: "Open to Relocate",
  availability:
    "Currently employed full-time at ETS, open to exploring new opportunities. Comfortable with relocation and remote/hybrid arrangements.",
  phone: "+1 660-238-5761",
  email: "eekshithaofficial25@gmail.com",
  github: "https://github.com/Eekshitha25",
  linkedin: "https://www.linkedin.com/in/eekshitha-gujjala-6614442b5",
  liveSitePrior: "https://eekshitha-portfolio.vercel.app/",
  resumeUrl: "/resume.pdf",
  yearsExperience: "3+",

  summary:
    "Design Engineer with 3+ years of enterprise experience sitting at the intersection of frontend engineering and UX — building highly interactive, state-heavy React/TypeScript interfaces and component systems used at scale. Deep experience in Next.js, advanced state management for complex nested UI state, and styling systems like Tailwind CSS. Comfortable working with ambiguity and evolving requirements, known for proactively identifying rough edges and shaping UX rather than just implementing it. Active daily user of AI tools — Claude, GitHub Copilot, and Cursor — to move fast without sacrificing craft.",

  education: [
    {
      degree: "Master of Science — Computer Science",
      institution: "University of Central Missouri, Lee's Summit, USA",
      period: "2022 – 2024",
    },
    {
      degree: "Bachelor of Technology — Electronics & Communication Engineering",
      institution: "JNTU, India",
      period: "2018 – 2022",
    },
  ],

  certifications: [
    "Google UX Design Specialization (2024)",
    "Front-End Web Development — IBM (2024)",
    "HTML, CSS & JavaScript — IBM (2024)",
  ],

  experience: [
    {
      title: "Frontend Engineer",
      company: "ETS",
      period: "December 2025 – Present",
      highlights: [
        "Designed, developed, tested, and deployed scalable React/TypeScript web applications for a data-intensive assessment platform serving millions of users globally.",
        "Architected a reusable component library and shared UI infrastructure consumed by 3+ product teams, cutting cross-team development time by 30%.",
        "Built highly interactive, state-heavy interfaces handling complex nested UI state using Redux — dynamic form builders, conditional rendering, real-time validation.",
        "Reduced page load by 35% through bundle optimization, code-splitting, lazy loading, and rendering efficiency improvements, verified via Lighthouse Core Web Vitals audits.",
        "Led WCAG 2.1 AA accessibility compliance — semantic HTML, ARIA roles, keyboard navigation, screen reader validation — tested with axe DevTools.",
        "Drove CI/CD integration for frontend quality gates — automated Jest/RTL unit tests and Cypress E2E suites in GitLab CI.",
      ],
      stack: ["React", "TypeScript", "Redux", "GitLab CI", "Jest", "Cypress"],
    },
    {
      title: "Software Engineer (UX Focus)",
      company: "Accenture",
      period: "August 2024 – December 2025",
      highlights: [
        "Designed and built a centralized React + TypeScript design system — reusable components, design tokens, interaction patterns — eliminating 40% of UI inconsistencies across a Fortune 500 enterprise SaaS platform adopted by 4 product teams.",
        "Built complex data-rich dashboards and analytics interfaces with filtering, sorting, pagination, and real-time visualization using Recharts and D3.js.",
        "Integrated RESTful APIs and GraphQL endpoints with optimistic updates, error boundary patterns, and real-time WebSocket data flows.",
        "Improved mobile usability by 30% through responsive layout engineering with Tailwind CSS and iterative usability testing.",
        "Reduced design-to-development rework by 30% through tight Figma collaboration and pixel-perfect prototype-to-production translation.",
      ],
      stack: ["React", "TypeScript", "D3.js", "GraphQL", "Tailwind CSS", "Figma"],
    },
  ],

  skills: {
    frontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "SCSS", "CSS Modules", "MUI"],
    stateApis: ["Redux", "TanStack Query", "Context API", "React Hooks", "RESTful APIs", "GraphQL", "WebSocket", "Optimistic Updates"],
    testing: ["Jest", "React Testing Library", "Cypress", "Playwright (familiar)", "Accessibility testing (axe DevTools)"],
    buildCicd: ["Webpack", "Vite", "Code-splitting", "Lazy loading", "GitLab CI", "GitHub Actions", "Docker (familiar)", "Git"],
    dataViz: ["Recharts", "Chart.js", "D3.js", "Interactive dashboards", "Filtering / Sorting / Pagination"],
    perfA11y: ["WCAG 2.1/2.2 AA", "ARIA", "Semantic HTML", "Core Web Vitals", "Lighthouse", "Bundle optimization"],
    aiTools: ["Claude (Claude Code)", "GitHub Copilot", "Cursor"],
    design: ["Figma", "Adobe XD", "Design Systems", "Figma-to-code", "Agile/Scrum", "Code Reviews"],
  },

  projects: [
    {
      name: "Planora",
      tagline: "AI Travel Planning Platform",
      stack: ["Next.js", "React.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Redux", "Webpack", "Vercel"],
      url: "https://planora-five-xi.vercel.app",
      summary:
        "Full-stack AI platform integrating the OpenAI API — real-time streaming dashboard, interactive data visualizations, complex multi-step workflows, and Redux state management with optimistic updates, deployed via CI/CD on Vercel.",
    },
    {
      name: "FocusFlow",
      tagline: "Productivity Platform",
      stack: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Context API"],
      url: "https://focusflow-nu-mauve.vercel.app",
      summary:
        "Modular component library with WCAG 2.1 compliance, performance optimization, and pixel-perfect Figma-to-code implementation — showcasing cross-team reusable UI architecture patterns.",
    },
  ],

  achievements: [
    "35% page load reduction at ETS through bundle optimization and rendering efficiency improvements.",
    "40% UI inconsistency elimination at Accenture via a centralized design system adopted by 4 product teams.",
    "25% engagement improvement through UX-driven interface refinements.",
    "Gold Medalist in Chess — strategic, long-horizon thinking under pressure.",
  ],

  interests: ["Photography", "Travel", "Cooking"],

  workingStyle:
    "Comfortable working with ambiguity and evolving requirements across Agile/Scrum teams — proactively identifying UX rough edges rather than just implementing tickets. Daily user of AI-assisted development tools (Claude, Copilot, Cursor) to move fast without sacrificing craft.",
};

// Pre-written quick questions shown as tappable chips in the chat widget.
export const SUGGESTED_QUESTIONS = [
  "What's her current role and experience?",
  "What measurable impact has she delivered?",
  "Tell me about the Planora project",
  "What's her tech stack?",
  "Is she open to relocation?",
  "How do I contact her directly?",
];
