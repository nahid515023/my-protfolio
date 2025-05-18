import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Script from 'next/script'

// Use better font combinations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap' 
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Nahid Hasan | Full Stack Developer & Competitive Programmer',
  description: 'Portfolio of Nahid Hasan, a Full Stack Developer and Competitive Programmer who builds modern web applications with cutting-edge technologies.',
  keywords: 'Nahid Hasan, Full Stack Developer, Web Developer, Competitive Programmer, React, Next.js, Portfolio',
  authors: [{ name: 'Nahid Hasan' }],
  openGraph: {
    title: 'Nahid Hasan | Full Stack Developer',
    description: 'Full Stack Developer and Competitive Programmer who builds modern web applications',
    url: 'https://nahidhasan.dev',
    siteName: 'Nahid Hasan Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Nahid Hasan - Full Stack Developer'
      }
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Script src="/js/animations.js" strategy="afterInteractive" />
      </body>
    </html>
  )
} 