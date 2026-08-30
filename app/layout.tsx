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
  metadataBase: new URL('https://www.farnazgholami.com'),
  title: {
    default: 'Farnaz Gholami — UI/UX & Digital Designer',
    template: '%s | Farnaz Gholami',
  },
  description:
    'Portfolio of Farnaz Gholami, a UI/UX and Digital Designer based in Vancouver crafting visually engaging, atmospheric, and user-centered interfaces.',
  keywords: [
    'UI/UX Designer',
    'Digital Designer',
    'Vancouver Designer',
    'Farnaz Gholami',
    'Product Designer',
    'Web Design',
    'Figma',
    'Portfolio',
    'User Experience',
    'Interface Design',
    'Branding',
    'Motion Design',
  ],
  authors: [{ name: 'Farnaz Gholami', url: 'https://www.farnazgholami.com' }],
  creator: 'Farnaz Gholami',
  verification: {
    google: 'YFGKJkRvz0zLmu4KG7mWH412am_QQwYb_2uObO4ftNU',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.farnazgholami.com',
    siteName: 'Farnaz Gholami — Portfolio',
    title: 'Farnaz Gholami — UI/UX & Digital Designer',
    description:
      'Portfolio of Farnaz Gholami, a UI/UX and Digital Designer based in Vancouver crafting visually engaging, atmospheric, and user-centered interfaces.',
    images: [
      {
        url: '/farnaz-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Farnaz Gholami — UI/UX & Digital Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farnaz Gholami — UI/UX & Digital Designer',
    description:
      'Portfolio of Farnaz Gholami, a UI/UX and Digital Designer based in Vancouver.',
    images: ['/farnaz-portrait.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#191c20',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Farnaz Gholami',
  url: 'https://www.farnazgholami.com',
  jobTitle: 'UI/UX & Digital Designer',
  description: 'UI/UX and Digital Designer based in Vancouver, BC, Canada.',
  address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressCountry: 'CA' },
  email: 'farnazgholami.design@gmail.com',
  sameAs: ['https://www.linkedin.com/in/farnaz-gholami-4165b9345'],
  knowsAbout: ['UI/UX Design', 'Web Design', 'Figma', 'Branding', 'Motion Design', 'Product Design'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SiteMenu />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
