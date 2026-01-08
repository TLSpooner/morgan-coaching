'use client'

import { delay as motionDelay } from 'motion'
import { Typewriter as MotionTypewriter } from 'motion-plus-react'
import { useState, useEffect } from 'react'
import type { ElementType } from 'react'

interface TypewriterProps<T extends ElementType = 'span'> {
  text: string
  delay?: number
  className?: string
  speed?: number | 'slow' | 'normal' | 'fast'
  cursorDuration?: number
  as?: T
  onComplete?: () => void
}

export function Typewriter<T extends ElementType = 'span'>({
  text,
  delay = 0,
  className = '',
  speed = 'normal',
  cursorDuration,
  as,
  onComplete,
}: TypewriterProps<T>) {
  const [hasStarted, setHasStarted] = useState(delay === 0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay === 0) return

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  const handleComplete = () => {
    if (cursorDuration !== undefined) {
      motionDelay(() => {
        setIsComplete(true)
      }, cursorDuration)
    }
    if (onComplete) {
      onComplete()
    }
  }

  // Convert speed from seconds to milliseconds if it's a number
  const typingSpeed = typeof speed === 'number' ? speed * 1000 : speed

  if (!hasStarted) {
    return null
  }

  if (isComplete) {
    const Component = (as || 'span') as ElementType
    return <Component className={className}>{text}</Component>
  }

  return (
    <MotionTypewriter
      as={as}
      speed={typingSpeed}
      className={className}
      onComplete={handleComplete}
    >
      {text}
    </MotionTypewriter>
  )
}
