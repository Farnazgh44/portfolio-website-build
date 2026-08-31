'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CaseImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    else if (diff < -50) prev()
    touchStartX.current = null
  }

  return (
    <div className="my-6 select-none">
      {/* Image + side buttons */}
      <div className="relative flex items-center gap-3">
        {/* Prev button — desktop only */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="hidden md:flex shrink-0 size-10 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/25"
        >
          <ChevronLeft className="size-5" strokeWidth={1.75} />
        </button>

        {/* Image */}
        <div
          className="relative flex-1 overflow-hidden rounded-[30px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <Image
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1} of ${images.length}`}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Next button — desktop only */}
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="hidden md:flex shrink-0 size-10 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/25"
        >
          <ChevronRight className="size-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-5 h-1.5 bg-paper' : 'w-1.5 h-1.5 bg-paper/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
