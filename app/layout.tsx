import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'Eekshitha Gujjala — Frontend Developer & UI Engineer',
  description:
    'Frontend Developer and UI Engineer specializing in React, Next.js, and intuitive web experiences. Available for junior frontend and UI engineering roles across the United States.',
  keywords: [
    'Frontend Developer', 'React Developer', 'UI Engineer', 'UX Engineer',
    'Next.js Developer', 'TypeScript', 'Tailwind CSS', 'Eekshitha Gujjala',
    'Frontend Engineer', 'Web Developer',
  ],
  authors: [{ name: 'Eekshitha Gujjala' }],
  creator: 'Eekshitha Gujjala',
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://eekshitha.dev',
    title: 'Eekshitha Gujjala — Frontend Developer & UI Engineer',
    description: 'Frontend Developer crafting intuitive, high-performance web experiences with React, Next.js & modern design systems.',
    siteName: 'Eekshitha Gujjala Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eekshitha Gujjala — Frontend Developer & UI Engineer',
    description: 'Frontend Developer crafting intuitive, high-performance web experiences.',
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
