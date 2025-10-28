import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soy Res - Portfolio',
  description: 'Software engineer, runner, and lifelong learner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}