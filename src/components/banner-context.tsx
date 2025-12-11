'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type BannerContextType = {
  banner: ReactNode | null
  setBanner: (banner: ReactNode | null) => void
}

const BannerContext = createContext<BannerContextType | undefined>(undefined)

export function BannerProvider({ children }: { children: ReactNode }) {
  const [banner, setBanner] = useState<ReactNode | null>(null)

  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </BannerContext.Provider>
  )
}

export function useBanner() {
  const context = useContext(BannerContext)
  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider')
  }
  return context.banner
}

export function useSetBanner() {
  const context = useContext(BannerContext)
  if (context === undefined) {
    throw new Error('useSetBanner must be used within a BannerProvider')
  }
  return context.setBanner
}
