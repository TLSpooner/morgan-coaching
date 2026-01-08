'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TypePhase {
  text: string
  deleteCount?: number
  pauseAfter?: number
  italic?: boolean
}

interface TypewriterAdvancedProps {
  phases: TypePhase[]
  delay?: number
  className?: string
  speed?: number
  deleteSpeed?: number
  showCursor?: boolean
  cursorDuration?: number
  loop?: boolean
}

export function TypewriterAdvanced({
  phases,
  delay = 0,
  className = '',
  speed = 0.05,
  deleteSpeed = 0.03,
  showCursor = true,
  cursorDuration,
  loop = false
}: TypewriterAdvancedProps) {
  const [hasStarted, setHasStarted] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [italicStartIndex, setItalicStartIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    // Handle looping - delete everything when all phases are complete, then restart
    if (currentPhaseIndex >= phases.length) {
      if (loop) {
        // If there's still text, delete it all
        if (displayText.length > 0) {
          const deleteTimer = setTimeout(() => {
            setDisplayText(prev => prev.slice(0, -1))
            if (displayText.length === 1) {
              // Last character deleted, reset everything
              setItalicStartIndex(null)
            }
          }, deleteSpeed * 1000)
          return () => clearTimeout(deleteTimer)
        } else {
          // Everything deleted, pause then restart
          const loopTimer = setTimeout(() => {
            setCurrentPhaseIndex(0)
            setIsDeleting(false)
            setIsPaused(false)
            setItalicStartIndex(null)
          }, 1000)
          return () => clearTimeout(loopTimer)
        }
      }
      return
    }

    const currentPhase = phases[currentPhaseIndex]

    // Calculate what the full text should be at this phase
    const fullText = phases
      .slice(0, currentPhaseIndex + 1)
      .map(p => p.text)
      .join('')

    // Track italic position
    if (currentPhase.italic && italicStartIndex === null) {
      setItalicStartIndex(displayText.length)
    }

    // Handle pause state
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        // Check if next phase requires deletion
        if (currentPhase.deleteCount && currentPhase.deleteCount > 0) {
          setIsDeleting(true)
        } else {
          setCurrentPhaseIndex(prev => prev + 1)
        }
      }, (currentPhase.pauseAfter || 0.5) * 1000)
      return () => clearTimeout(pauseTimer)
    }

    // Handle deletion
    if (isDeleting) {
      const deleteCount = currentPhase.deleteCount || 0
      const targetLength = displayText.length - deleteCount

      if (displayText.length > targetLength) {
        const deleteTimer = setTimeout(() => {
          setDisplayText(prev => {
            const newText = prev.slice(0, -1)
            // Clear italic index if we're deleting into the italic section
            if (italicStartIndex !== null && newText.length < italicStartIndex) {
              setItalicStartIndex(null)
            }
            return newText
          })
        }, deleteSpeed * 1000)
        return () => clearTimeout(deleteTimer)
      } else {
        // Deletion complete, move to next phase
        setIsDeleting(false)
        if (deleteCount === displayText.length) {
          // If we deleted everything, clear italic index
          setItalicStartIndex(null)
        }
        setCurrentPhaseIndex(prev => prev + 1)
      }
      return
    }

    // Handle typing
    if (displayText.length < fullText.length) {
      const typeTimer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, speed * 1000)
      return () => clearTimeout(typeTimer)
    } else if (displayText.length === fullText.length) {
      setIsPaused(true)
    }
  }, [hasStarted, displayText, currentPhaseIndex, isDeleting, isPaused, phases, speed, deleteSpeed, loop, cursorDuration, italicStartIndex])

  if (!hasStarted) {
    return <span className={className}>&nbsp;</span>
  }

  const isComplete = currentPhaseIndex >= phases.length && !isDeleting && !isPaused && !loop

  // Split text into regular and italic parts
  const renderText = () => {
    if (italicStartIndex !== null && italicStartIndex < displayText.length) {
      const regularPart = displayText.slice(0, italicStartIndex)
      const italicPart = displayText.slice(italicStartIndex)
      return (
        <>
          <span>{regularPart}</span>
          <span className="italic text-gray-600">{italicPart}</span>
        </>
      )
    }
    return <span>{displayText}</span>
  }

  return (
    <span className={className}>
      {renderText()}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.45, 0.5, 1],
          }}
          className="ml-0.5 inline-block"
        >
          |
        </motion.span>
      )}
      {showCursor && isComplete && cursorDuration && !loop && (
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 0.8,
            repeat: Math.floor(cursorDuration / 0.8),
            repeatType: 'loop',
            times: [0, 0.45, 0.5, 1],
          }}
          className="ml-0.5 inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
