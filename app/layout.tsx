import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'NovaSoftCode | Scalable Digital Solutions for Future Businesses',
  description: 'NovaSoftCode is a leading software development company specializing in Web Development, Mobile Apps, AI & Machine Learning, Cybersecurity, and Data Science solutions for startups and enterprises worldwide.',
  keywords: ['software development', 'web development', 'mobile app development', 'AI solutions', 'machine learning', 'cybersecurity', 'data science', 'custom software'],
  authors: [{ name: 'NovaSoftCode' }],
  creator: 'NovaSoftCode',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '32x32' }],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'NovaSoftCode | Scalable Digital Solutions',
    description: 'We Build Scalable Digital Solutions for Future Businesses',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaSoftCode | Scalable Digital Solutions',
    description: 'We Build Scalable Digital Solutions for Future Businesses',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {children}
          <WhatsAppButton />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
