import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'
import { SiteMenu } from '@/components/site-menu'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const dancingScript = Dancing_Script({
  variable: '--font-sugar',
  subsets: ['latin'],
  weight: ['700'],
})

export const metadata: Metadata = {
  title: 'Farnaz Gholami — UI/UX & Digital Designer',
  description:
    'Portfolio of Farnaz Gholami, a UI/UX and Digital Designer based in Vancouver crafting visually engaging, atmospheric, and user-centered interfaces.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#191c20',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteMenu />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
