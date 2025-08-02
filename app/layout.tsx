import type { Metadata } from 'next'
import './globals-excellence.css'
import TestimonialTicker from '@/components/TestimonialTicker'

export const metadata: Metadata = {
  title: 'NCAA Settlement - Sell Your NIL Claim | Sycamore Grove Claims Group',
  description: 'Get your House vs NCAA (NIL) settlement money now. Former D1 athletes (2016-2024) can sell their claims for immediate payment instead of waiting 10 years.',
  keywords: 'NIL settlement, House vs NCAA, NCAA settlement claims, sell NIL claim, Division 1 athlete settlement, NIL claim value, NCAA settlement payment, D1 athlete compensation, NIL back pay, college athlete settlement',
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
        type: 'image/png',
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
    site: '@NILsettlement',
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
    languages: {
      'en-US': 'https://ncaa-settlement.com',
    },
  },
  verification: {
    google: '', // Add Google Search Console verification code when available
    yandex: '',
    yahoo: '',
    other: {
      me: ['dstratton@sycamoregroveclaims.com'],
    },
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'NCAA Settlement - Sell Your NIL Claim',
    description: 'Get your House vs NCAA (NIL) settlement money now. Former D1 athletes (2016-2024) can sell their claims for immediate payment.',
    url: 'https://ncaa-settlement.com',
    provider: {
      '@type': 'Organization',
      name: 'Sycamore Grove Claims Group',
      url: 'https://www.sycamoregroveclaims.com',
      logo: 'https://ncaa-settlement.com/images/logo/SGCG Logo Color.png',
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is eligible to sell their NIL settlement claim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Former Division I athletes who competed between 2016-2024 are eligible to sell their House vs NCAA settlement claims through Sycamore Grove Claims Group.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the NCAA settlement payment take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NCAA defendants are scheduled to make payments over a 10 year period. By selling your claim to SGCG, you can receive immediate payment instead of waiting.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much is my NIL settlement claim worth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your settlement value depends on various factors including your sport, years played, and performance level. Submit your information for a personalized valuation.'
        }
      }
    ]
  }
]

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
        <TestimonialTicker />
        {children}
      </body>
    </html>
  )
}