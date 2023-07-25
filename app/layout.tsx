import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wolf Wits Checklist',
  description: 'Check off the cards your opponent has played in Wolf Wits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === 'production' && (<GoogleAnalytics GA_MEASUREMENT_ID="G-ZSFX5YDH6P" />)}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
