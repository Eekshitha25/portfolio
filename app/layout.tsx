import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import { PROFILE } from "@/lib/profileData";

export const metadata: Metadata = {
  metadataBase: new URL("https://eekshitha-portfolio.vercel.app"),
  title: "Eekshitha Gujjala — Design Engineer · React & Next.js · UX-Driven Development",
  description:
    "Design Engineer with 3+ years of enterprise experience building interactive React/TypeScript interfaces and component systems. Currently at ETS, previously Accenture.",
  keywords: [
    "Design Engineer",
    "Frontend Engineer",
    "React Developer",
    "UI Engineer",
    "UX Engineer",
    "Next.js Developer",
    "TypeScript",
    "Redux",
    "GraphQL",
    "Eekshitha Gujjala",
  ],
  authors: [{ name: "Eekshitha Gujjala" }],
  creator: "Eekshitha Gujjala",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Eekshitha Gujjala — Design Engineer",
    description: "3+ years building interactive React/TypeScript interfaces and component systems at enterprise scale.",
    siteName: "Eekshitha Gujjala Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eekshitha Gujjala — Design Engineer",
    description: "3+ years building interactive React/TypeScript interfaces at enterprise scale.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    description: PROFILE.summary,
    email: PROFILE.email,
    telephone: PROFILE.phone,
    address: { "@type": "PostalAddress", addressLocality: PROFILE.location },
    sameAs: [PROFILE.linkedin, PROFILE.github],
    alumniOf: PROFILE.education.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
    knowsAbout: [...PROFILE.skills.frontend, ...PROFILE.skills.stateApis, ...PROFILE.skills.design],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <PersonJsonLd />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            <div className="grain-layer" />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
