'use client'

import { delay as motionDelay, wrap } from 'motion'
import { Typewriter } from 'motion-plus-react'
import { useState, useEffect } from 'react'
import type { ElementType } from 'react'

export interface ScriptSegment {
  text: string
  endDelay?: number
  variance?: number | 'natural'
  backspace?: 'character' | 'word' | 'all'
  backspaceFactor?: number
}

interface TypewriterScriptProps {
  as?: ElementType
  script: ScriptSegment[]
  initialDelay?: number
  loop?: boolean
  speed?: number | 'slow' | 'normal' | 'fast'
  className?: string
  style?: React.CSSProperties
  onComplete?: () => void
  italicizeAfterNewline?: boolean
}

export function TypewriterScript({
  as = 'div',
  script,
  initialDelay = 0,
  loop = true,
  speed = 'normal',
  className = '',
  style,
  onComplete,
  italicizeAfterNewline = false,
}: TypewriterScriptProps) {
  const [segmentIndex, setSegmentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(initialDelay === 0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (initialDelay === 0) return

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, initialDelay * 1000)

    return () => clearTimeout(timer)
  }, [initialDelay])

  const {
    text,
    endDelay = 0.8,
    variance = 'natural',
    backspace = 'word',
    backspaceFactor = 0.5,
  } = script[segmentIndex]

  const handleComplete = () => {
    const isLastSegment = segmentIndex === script.length - 1

    if (isLastSegment && !loop) {
      setIsComplete(true)
      if (onComplete) {
        motionDelay(() => {
          onComplete()
        }, endDelay)
      }
    } else {
      motionDelay(() => {
        setSegmentIndex(wrap(0, script.length, segmentIndex + 1))
      }, endDelay)
    }
  }

  // Convert speed from seconds to milliseconds if it's a number
  const typingSpeed = typeof speed === 'number' ? speed * 1000 : speed

  // Split text at newline if italicizeAfterNewline is true
  const renderContent = () => {
    if (!italicizeAfterNewline || !text.includes('\n')) {
      return text
    }

    const newlineIndex = text.indexOf('\n')
    const firstPart = text.slice(0, newlineIndex)
    const secondPart = text.slice(newlineIndex + 1)

    return (
      <>
        {firstPart}
        {'\n'}
        <span className="italic text-gray-600">{secondPart}</span>
      </>
    )
  }

  if (!hasStarted) {
    return null
  }

  if (isComplete) {
    const Component = as as ElementType
    return (
      <Component className={className} style={style}>
        {renderContent()}
      </Component>
    )
  }

  // For the typewriter animation, we can't use JSX for content
  // So we'll use a custom wrapper that applies italic styling via CSS
  if (italicizeAfterNewline && text.includes('\n')) {
    const Component = as as ElementType
    return (
      <Component className={className} style={style}>
        <style jsx>{`
          :global(.typewriter-example-text::after) {
            font-style: italic;
            color: rgb(75 85 99);
          }
        `}</style>
        <Typewriter
          speed={typingSpeed}
          variance={variance}
          backspace={backspace}
          backspaceFactor={backspaceFactor}
          onComplete={handleComplete}
          replace="type"
        >
          {text}
        </Typewriter>
      </Component>
    )
  }

  return (
    <Typewriter
      as={as}
      className={className}
      style={style}
      speed={typingSpeed}
      variance={variance}
      backspace={backspace}
      backspaceFactor={backspaceFactor}
      onComplete={handleComplete}
      replace="type"
    >
      {text}
    </Typewriter>
  )
}
