'use client'

import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="relative">
      <div className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-3 md:pb-4">
        <h2 className="text-base font-semibold tracking-wide text-paper md:text-2xl">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="shrink-0 text-xs font-light tracking-wide text-paper/55 underline underline-offset-4 transition-colors hover:text-paper md:text-sm"
        >
          {open ? 'Close' : 'Open'}
        </button>
      </div>

      <div
        className={cn(
          'grid transition-all duration-300',
          open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </section>
  )
}
