'use client'

import { useEffect, type ReactNode } from 'react'
import { useSetBanner } from './banner-context'

export function SetBanner({ children }: { children: ReactNode }) {
  const setBanner = useSetBanner()

  useEffect(() => {
    setBanner(children)
    return () => setBanner(null)
  }, [children, setBanner])

  return null
}
