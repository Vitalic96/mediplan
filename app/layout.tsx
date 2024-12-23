import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

export const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppips',
})

export const metadata: Metadata = {
  title: 'MediPlan',
  description: 'MediPlan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
