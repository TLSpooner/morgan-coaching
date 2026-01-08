'use client'

import { delay as motionDelay, wrap } from 'motion'
import { Typewriter } from 'motion-plus-react'
import { useState, useEffect } from 'react'
import type { ElementType } from 'react'

interface DefinitionSegment {
  definition: string
  example: string
  pauseAfter?: number
}

interface DefinitionTypewriterProps {
  segments: DefinitionSegment[]
  delay?: number
  speed?: number | 'slow' | 'normal' | 'fast'
  backspaceFactor?: number
  className?: string
  style?: React.CSSProperties
  as?: ElementType
}

export function DefinitionTypewriter({
  segments,
  delay = 0,
  speed = 'normal',
  backspaceFactor = 0.5,
  className = '',
  style,
  as = 'div',
}: DefinitionTypewriterProps) {
  const [segmentIndex, setSegmentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(delay === 0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (delay === 0) return

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  const currentSegment = segments[segmentIndex]
  const displayText = `hospitable: ${currentSegment.definition}\n"${currentSegment.example}"`

  const handleComplete = () => {
    // Use motion's delay utility for timing between segments
    motionDelay(() => {
      setSegmentIndex(wrap(0, segments.length, segmentIndex + 1))
    }, currentSegment.pauseAfter || 1)
  }

  // Convert speed from seconds to milliseconds if it's a number
  const typingSpeed = typeof speed === 'number' ? speed * 1000 : speed

  // Split text to find where example starts (after newline)
  const newlineIndex = displayText.indexOf('\n')
  const definitionPart = displayText.slice(0, newlineIndex + 1)
  const examplePart = displayText.slice(newlineIndex + 1)

  if (!hasStarted) {
    return null
  }

  return (
    <div
      className={className}
      style={style}
      role="status"
      aria-live={prefersReducedMotion ? 'off' : 'polite'}
      aria-atomic="true"
    >
      {prefersReducedMotion ? (
        <>
          <span>{definitionPart}</span>
          <span className="italic text-gray-600">{examplePart}</span>
        </>
      ) : (
        <Typewriter
          as={as}
          speed={typingSpeed}
          variance="natural"
          backspace="word"
          backspaceFactor={backspaceFactor}
          onComplete={handleComplete}
          replace="type"
        >
          {displayText}
        </Typewriter>
      )}
    </div>
  )
}
