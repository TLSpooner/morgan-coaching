'use client'

import clsx from 'clsx'
import { useRef, useEffect, useState } from 'react'

interface HeroVideoProps {
  vimeoId: string
  vimeoHash?: string
  className?: string
}

function HeroVideoSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'relative aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-xl',
        className
      )}
    />
  )
}

function HeroVideoPlayer({ vimeoId, vimeoHash, className }: HeroVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const hashParam = vimeoHash ? `&h=${vimeoHash}` : ''

  // Resume playback when page becomes visible again (after sleep/tab switch)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'play' }),
          '*'
        )
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  return (
    <div
      className={clsx(
        'relative aspect-video overflow-hidden rounded-2xl bg-gray-200 shadow-xl',
        className
      )}
    >
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0${hashParam}`}
        className="absolute inset-0 h-full w-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
      />
    </div>
  )
}

export function HeroVideo({ vimeoId, vimeoHash, className }: HeroVideoProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <HeroVideoSkeleton className={className} />
  }

  return (
    <HeroVideoPlayer vimeoId={vimeoId} vimeoHash={vimeoHash} className={className} />
  )
}
