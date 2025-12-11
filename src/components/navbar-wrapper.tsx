'use client'

import { usePathname } from 'next/navigation'
import { useBanner } from './banner-context'
import { Container } from './container'
import { Navbar } from './navbar'

export function NavbarWrapper() {
  const banner = useBanner()
  const pathname = usePathname()

  // Hide navbar on CMS studio route
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <Container>
      <Navbar banner={banner} />
    </Container>
  )
}
