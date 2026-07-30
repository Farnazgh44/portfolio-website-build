'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type HeroVideo = { label: string; src: string }

export function ProjectHeroMedia({
  videos,
  title,
  suffix,
  titleFont,
}: {
  videos: HeroVideo[]
  title: string
  suffix?: string
  titleFont?: string
}) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length)
  const next = () => setIndex((i) => (i + 1) % videos.length)

  const current = videos[index]

  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* Full-bleed background video */}
      <video
        key={current.src}
        src={current.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />

      {/* Gradient overlay: transparent at top → solid ink at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      {/* Left arrow — only shown when there are multiple videos */}
      {videos.length > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous preview"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-paper/10 p-3 text-paper backdrop-blur-sm transition-colors hover:bg-paper/25 md:left-8"
        >
          <ChevronLeft className="size-5" strokeWidth={1.75} />
        </button>
      )}

      {/* Right arrow — only shown when there are multiple videos */}
      {videos.length > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next preview"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-paper/10 p-3 text-paper backdrop-blur-sm transition-colors hover:bg-paper/25 md:right-8"
        >
          <ChevronRight className="size-5" strokeWidth={1.75} />
        </button>
      )}

      {/* Bottom overlay: label + dots + title */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-10 md:pb-8 lg:px-16 xl:px-20 2xl:px-32">

        {/* Label + dots */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-paper/60">
            {current.label}
          </span>
          <div className="flex gap-1.5">
            {videos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={videos[i].label}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-5 bg-paper' : 'w-1.5 bg-paper/35'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project title */}
        <h1
          className="text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-7xl lg:text-8xl"
          style={titleFont ? { fontFamily: titleFont } : undefined}
        >
          {title}
        </h1>
        {suffix && (
          <p className="mt-1 text-lg font-medium text-paper/75 md:text-2xl">{suffix}</p>
        )}
      </div>

    </section>
  )
}
