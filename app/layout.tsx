import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

export const poppips = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppips',
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
      <body className={`${poppips.variable} antialiased`}>
        <div className='min-w-[320px] overflow-hidden'>{children}</div>
      </body>
    </html>
  )
}
