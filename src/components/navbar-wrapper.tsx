'use client'

import { Container } from './container'
import { Navbar } from './navbar'
import { useBanner } from './banner-context'

export function NavbarWrapper() {
  const banner = useBanner()

  return (
    <Container>
      <Navbar banner={banner} />
    </Container>
  )
}
