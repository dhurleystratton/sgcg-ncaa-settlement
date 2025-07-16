import type { Metadata } from 'next'
import './globals-excellence.css'

export const metadata: Metadata = {
  title: 'NCAA Settlement - Sell Your NIL Claim | Sycamore Grove Claims Group',
  description: 'Get your House vs NCAA (NIL) settlement money now. Former D1 athletes (2016-2024) can sell their claims for immediate payment instead of waiting 10 years.',
  keywords: 'NIL settlement, House vs NCAA, NCAA settlement claims, sell NIL claim, Division 1 athlete settlement, NIL claim value, NCAA settlement payment',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  authors: [{ name: 'Sycamore Grove Claims Group' }],
  creator: 'Sycamore Grove Claims Group',
  publisher: 'Sycamore Grove Claims Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NCAA Settlement - Get Paid Now | SGCG',
    description: 'Former Division I athletes (2016-2024) can sell their NIL settlement claims for immediate cash payment. No waiting 10+ years for NCAA payments.',
    url: 'https://ncaa-settlement.com',
    siteName: 'NCAA Settlement by SGCG',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NCAA Settlement - Sell Your NIL Claim',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCAA Settlement - Get Paid Now',
    description: 'Sell your NIL settlement claim for immediate payment',
    images: ['/og-image.png'],
    creator: '@sycamoregroveclaims',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-midnight">
        {children}
      </body>
    </html>
  )
}