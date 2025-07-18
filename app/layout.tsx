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
        url: 'https://ncaa-settlement.com/og-image.png',
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
    images: ['https://ncaa-settlement.com/og-image.png'],
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
  alternates: {
    canonical: 'https://ncaa-settlement.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NCAA Settlement - Sell Your NIL Claim',
  description: 'Get your House vs NCAA (NIL) settlement money now. Former D1 athletes (2016-2024) can sell their claims for immediate payment.',
  url: 'https://ncaa-settlement.com',
  provider: {
    '@type': 'Organization',
    name: 'Sycamore Grove Claims Group',
    url: 'https://www.sycamoregroveclaims.com',
    logo: 'https://ncaa-settlement.com/sgcg-logo.png',
    sameAs: [
      'https://x.com/NILsettlement',
      'https://www.instagram.com/ncaasettlement/',
      'https://www.linkedin.com/company/sycamore-grove-claims-group/'
    ]
  },
  potentialAction: {
    '@type': 'ContactAction',
    target: 'https://ncaa-settlement.com#contact-form',
    name: 'Submit Claim Information'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-midnight">
        {/* Hidden form for Netlify detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <select name="sport">
            <option value="">Select a sport</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="school" />
          <input type="text" name="startYear" />
          <input type="text" name="endYear" />
          <textarea name="message"></textarea>
          <input type="text" name="bot-field" />
        </form>
        {children}
      </body>
    </html>
  )
}