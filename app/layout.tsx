import type { Metadata } from 'next'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Soy Res - Software Engineer & Marathon Runner',
    template: '%s | Soy Res'
  },
  description: 'Portfolio of Res Pizarro - Software engineer specializing in React, Next.js, and TypeScript. Marathon runner based in Denver, Colorado. Exploring the intersection of technology, endurance, and personal growth.',
  keywords: ['software engineer', 'web developer', 'React', 'Next.js', 'TypeScript', 'marathon runner', 'Denver', 'full-stack developer'],
  authors: [{ name: 'Res Pizarro' }],
  creator: 'Res Pizarro',
  publisher: 'Res Pizarro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://soyres.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Soy Res - Software Engineer & Marathon Runner',
    description: 'Portfolio showcasing full-stack development projects, marathon training insights, and thoughts on technology and personal growth.',
    url: 'https://soyres.com',
    siteName: 'Soy Res Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/soy_res.png',
        width: 1200,
        height: 630,
        alt: 'Res Pizarro - Software Engineer & Runner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soy Res - Software Engineer & Marathon Runner',
    description: 'Portfolio showcasing full-stack development projects, marathon training insights, and thoughts on technology.',
    images: ['/soy_res.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Res Pizarro',
              url: 'https://soyres.com',
              image: 'https://soyres.com/soy_res.png',
              jobTitle: 'Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Tech Company'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Denver',
                addressRegion: 'CO',
                addressCountry: 'US'
              },
              email: 'respizarro3@gmail.com',
              sameAs: [
                'https://github.com/yourusername',
                'https://linkedin.com/in/yourusername'
              ],
              knowsAbout: ['Software Development', 'React', 'Next.js', 'TypeScript', 'Marathon Running']
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}