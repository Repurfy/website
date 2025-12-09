'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardTransform {
  rotateX: number
  rotateY: number
  scale: number
}

interface Card3dDemoProps {
  Index: number
  Title: string
  Desc: string
}

const Card3dDemo = ({ Index, Title, Desc }: Card3dDemoProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const lastMousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current
    const image = imageRef.current
    if (!card || !image) return

    let rect: DOMRect
    let centerX: number
    let centerY: number

    const updateCardTransform = (mouseX: number, mouseY: number) => {
      if (!rect) {
        rect = card.getBoundingClientRect()
        centerX = rect.left + rect.width / 2
        centerY = rect.top + rect.height / 2
      }

      const relativeX = mouseX - centerX
      const relativeY = mouseY - centerY

      return {
        cardTransform: {
          rotateX: -relativeY * 0.035,
          rotateY: relativeX * 0.035,
          scale: 1.025,
        },
        imageTransform: {
          rotateX: -relativeY * 0.025,
          rotateY: relativeX * 0.025,
          scale: 1.05,
        },
      }
    }

    const animate = () => {
      const { cardTransform, imageTransform } = updateCardTransform(
        lastMousePosition.current.x,
        lastMousePosition.current.y
      )

      card.style.transform = `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) scale3d(${cardTransform.scale}, ${cardTransform.scale}, ${cardTransform.scale})`
      image.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.2s ease'
      image.style.transition = 'transform 0.2s ease'
      animate()
    }

    const handleMouseLeave = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)

      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
      image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Card
      ref={cardRef}
      className="max-w-md cursor-pointer rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.2)] ring-1 ring-transparent transition-all duration-200 dark:border dark:border-transparent dark:ring-transparent dark:hover:border-teal-500/50 dark:hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)] dark:hover:ring-teal-500/50"
    >
      <div className="flex w-full justify-center">
        <div
          ref={imageRef}
          className="bg-brand-gradient-reverse mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3 text-3xl font-semibold text-white"
        >
          {Index}
        </div>
      </div>

      <CardHeader>
        <CardTitle className="font-ai -my-6 text-xl">{Title}</CardTitle>
      </CardHeader>

      <CardContent className="-mt-3">
        <p className="text-text-secondary">{Desc}</p>
      </CardContent>
    </Card>
  )
}

export default Card3dDemo
