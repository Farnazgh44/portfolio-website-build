'use client'

import { useEffect, useState } from 'react'

export const CASE_SECTIONS = [
  { id: 'overview',       label: 'Project Overview' },
  { id: 'challenge',      label: 'Challenge' },
  { id: 'research',       label: 'Research' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'solution',       label: 'Solution' },
  { id: 'final-design',   label: 'Final Design' },
  { id: 'reflection',     label: 'Reflection' },
]

export function ScrollspySidebar() {
  const [active, setActive]     = useState('overview')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    /* ── IntersectionObserver: mark whichever section is most visible ── */
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 },
    )

    CASE_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    /* ── Scroll progress ── */
    const onScroll = () => {
      const scrolled   = window.scrollY
      const docHeight  = document.body.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.round((scrolled / docHeight) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeIndex = CASE_SECTIONS.findIndex((s) => s.id === active)

  return (
    <aside className="sticky top-28 hidden w-44 shrink-0 self-start xl:block">
      <nav className="relative">
        {/* Continuous vertical track */}
        <div
          className="absolute left-[4px] top-2 w-px bg-paper/12"
          style={{ height: `calc(100% - 1.5rem)` }}
        />

        {CASE_SECTIONS.map((section, i) => {
          const isActive = section.id === active
          const isPast   = i < activeIndex

          return (
            <div key={section.id} className="relative flex items-start gap-3.5 pb-7">
              {/* Dot */}
              <div
                className={`relative z-10 mt-[3px] size-[9px] shrink-0 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'border-paper bg-paper shadow-[0_0_6px_rgba(255,255,255,0.4)]'
                    : isPast
                    ? 'border-paper/45 bg-paper/25'
                    : 'border-paper/20 bg-transparent'
                }`}
              />

              {/* Label */}
              <button
                type="button"
                onClick={() => scrollTo(section.id)}
                className={`text-left text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? 'text-paper'
                    : isPast
                    ? 'text-paper/45 hover:text-paper/70'
                    : 'text-paper/25 hover:text-paper/50'
                }`}
              >
                {section.label}
              </button>
            </div>
          )
        })}
      </nav>

      {/* Progress */}
      <p className="ml-[21px] text-[10px] font-light tracking-widest text-paper/25">
        {progress}%
      </p>
    </aside>
  )
}
