import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nare Manukyan | Junior Lawyer',
  description: 'Legal professional with international experience in criminal law, corporate law, and human rights advocacy. Based in Yerevan, Armenia.',
  keywords: ['lawyer', 'criminal law', 'corporate law', 'human rights', 'Armenia', 'Yerevan', 'legal services'],
  authors: [{ name: 'Nare Manukyan' }],
  openGraph: {
    title: 'Nare Manukyan | Junior Lawyer',
    description: 'Legal professional with international experience in criminal law, corporate law, and human rights advocacy.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
