'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { draftFilters, draftItems, type DraftItem } from '@/lib/projects'
import { cn } from '@/lib/utils'

/* ── Media renderer (used in both card and modal) ── */
function DraftMedia({
  media,
  name,
  className,
}: {
  media: string
  name: string
  className?: string
}) {
  const isVideo = media.endsWith('.mp4') || media.endsWith('.webm')

  if (isVideo) {
    return (
      <video
        src={media}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    )
  }

  return (
    <Image
      src={media}
      alt={`${name} preview`}
      fill
      sizes="(min-width: 768px) 800px, 100vw"
      className={className}
    />
  )
}

/* ── Lightbox: just the media ── */
function Lightbox({ item, onClose }: { item: DraftItem; onClose: () => void }) {
  const isVideo = item.media.endsWith('.mp4') || item.media.endsWith('.webm')

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(25,28,32,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 rounded-full bg-paper/10 p-2 text-paper transition-colors hover:bg-paper/20"
      >
        <X className="size-5" strokeWidth={1.5} />
      </button>

      {isVideo ? (
        <video
          src={item.media}
          autoPlay
          controls
          loop
          playsInline
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={item.media}
          alt={item.name}
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  )
}

/* ── Main gallery ── */
export function DraftGallery() {
  const [active, setActive] = useState<(typeof draftFilters)[number]>('All')
  const [selected, setSelected] = useState<DraftItem | null>(null)

  const filtered =
    active === 'All'
      ? draftItems
      : draftItems.filter((item) =>
          Array.isArray(item.category)
            ? item.category.includes(active)
            : item.category === active,
        )

  return (
    <>
      <div>
        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {draftFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors md:px-6 md:py-2.5 md:text-sm',
                active === filter
                  ? 'border-paper bg-paper text-ink'
                  : 'border-paper/40 text-paper/80 hover:border-paper',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {filtered.map((item) => (
            <article
              key={item.name}
              onClick={() => setSelected(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-paper text-ink shadow-lg transition-transform duration-300 md:hover:-translate-y-1.5 md:hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <DraftMedia
                  media={item.media}
                  name={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-5 md:p-7">
                <h3 className="text-lg font-semibold leading-tight text-ink md:text-xl">
                  {item.name}
                </h3>
                <p className="line-clamp-2 text-sm font-light leading-relaxed text-ink/70 md:text-base">
                  {item.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-ink/25 px-3 py-1 text-[11px] font-medium tracking-wide text-ink/80 md:text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <Lightbox item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
