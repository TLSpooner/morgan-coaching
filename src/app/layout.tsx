import { BannerProvider } from '@/components/banner-context'
import { GradientBackground } from '@/components/gradient'
import { NavbarWrapper } from '@/components/navbar-wrapper'
import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { jomolhari, twkLausanne } from './fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - Morgan Coaching',
    default: 'Morgan Coaching - Grow with hospitality',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jomolhari.variable} ${twkLausanne.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        {/* Preconnect to Vimeo for faster video loading */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
      </head>
      <body className="text-gray-950 antialiased">
        <GradientBackground />
        <BannerProvider>
          <NavbarWrapper />
          {children}
        </BannerProvider>
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
