import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata = {
  title: 'Cosmic E-commerce Preview',
  description: 'Products, collections and reviews from your Cosmic bucket'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string | undefined

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Pass bucket slug to client badge */}
        {bucketSlug && <CosmicBadge bucketSlug={bucketSlug} />}
      </body>
    </html>
  )
}