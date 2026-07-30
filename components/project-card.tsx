'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

export function ProjectCard({
  project,
  href,
}: {
  project: Project
  href: string
}) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setHovered(true)
    videoRef.current?.play()
  }

  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper text-ink shadow-lg transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2 md:hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f0eeec]">
        {/* Static image */}
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.name} ${project.suffix ?? ''} preview`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className={`object-contain p-2 transition-opacity duration-500 ${
            hovered && project.hoverVideo ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover video */}
        {project.hoverVideo && (
          <video
            ref={videoRef}
            src={project.hoverVideo}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 md:gap-4 md:p-7">
        <p className="text-xs font-medium uppercase tracking-wide text-stone md:text-sm">
          {project.category}
        </p>
        <h3 className="line-clamp-2 min-h-[3.25rem] text-lg font-semibold leading-snug text-ink md:min-h-0 md:text-2xl">
          {project.name}
          {project.suffix ? ` ${project.suffix}` : ''}
        </h3>
        <p className="line-clamp-3 min-h-[4.25rem] text-sm font-light leading-relaxed text-ink/70 md:min-h-0 md:text-base">
          {project.description}
        </p>
        <div className="mt-auto flex min-h-[4rem] flex-wrap content-start gap-2 pt-1 md:min-h-0 md:pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/25 px-3 py-1 text-[11px] font-medium tracking-wide text-ink/80 md:px-4 md:py-1.5 md:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
