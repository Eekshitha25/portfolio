import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Eekshitha Gujjala — Frontend Engineer | React · TypeScript · AEM',
  description:
    'Frontend Engineer with 3+ years enterprise experience at Accenture & ETS. Specializing in React, TypeScript, Next.js, and AEM. Reduced page load by 35%, improved user engagement by 25%. Open to full-time roles across the United States.',
  keywords: [
    'Frontend Engineer', 'React Developer', 'UI Engineer', 'TypeScript Engineer',
    'Next.js Developer', 'AEM Developer', 'Adobe Experience Manager', 'Tailwind CSS',
    'Eekshitha Gujjala', 'Frontend Architect', 'WCAG Accessibility', 'Enterprise UI',
  ],
  authors: [{ name: 'Eekshitha Gujjala' }],
  creator: 'Eekshitha Gujjala',
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://eekshitha-portfolio.vercel.app',
    title: 'Eekshitha Gujjala — Frontend Engineer | React · TypeScript · AEM',
    description: 'Frontend Engineer with 3+ years at Accenture & ETS. React, TypeScript, AEM specialist. Open to full-time roles.',
    siteName: 'Eekshitha Gujjala Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eekshitha Gujjala — Frontend Engineer | React · TypeScript · AEM',
    description: 'Frontend Engineer with 3+ years enterprise experience. React, TypeScript, AEM. Open to full-time roles.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@0,400;0,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
