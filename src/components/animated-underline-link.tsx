'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'motion-plus-react'
import { useState, useEffect } from 'react'

interface AnimatedUnderlineLinkProps {
  text: string
  href?: string
  delay?: number
  className?: string
  showCursor?: boolean
  cursorDuration?: number
  speed?: number | 'slow' | 'normal' | 'fast'
  onComplete?: () => void
}

export function AnimatedUnderlineLink({
  text,
  href = 'https://www.google.com/search?q=hospitable+definition',
  delay = 0,
  className = '',
  showCursor = false,
  cursorDuration,
  speed = 'normal',
  onComplete,
}: AnimatedUnderlineLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasStarted, setHasStarted] = useState(delay === 0 && !showCursor)

  useEffect(() => {
    if (delay === 0 && !showCursor) return

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay, showCursor])

  // Convert speed from seconds to milliseconds if it's a number
  const typingSpeed = typeof speed === 'number' ? speed * 1000 : speed

  if (!hasStarted) {
    return null
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {showCursor ? (
        <Typewriter
          speed={typingSpeed}
          cursorBlinkDuration={cursorDuration}
          onComplete={onComplete}
        >
          {text}
        </Typewriter>
      ) : (
        text
      )}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gray-950"
      />
    </motion.a>
  )
}
