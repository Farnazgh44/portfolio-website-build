'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Data ── */
type Spread = { leftCaption?: string; rightCaption?: string; note: string }
type Hobby  = { label: string; spreads: Spread[] }

const hobbies: Hobby[] = [
  {
    label: 'Game',
    spreads: [{
      leftCaption: 'Late-night sessions',
      rightCaption: 'In the zone',
      note: 'Gaming is how I unwind and explore other worlds — every level a new story to live through.',
    }],
  },
  {
    label: 'Art',
    spreads: [{
      leftCaption: 'Sketchbook',
      rightCaption: 'Digital canvas',
      note: 'Art is where it all started — picking up a pencil before a mouse, telling stories through shapes and color.',
    }],
  },
  {
    label: 'Food',
    spreads: [{
      leftCaption: 'In the kitchen',
      rightCaption: 'The result',
      note: 'Cooking is design on a plate — balancing color, texture, and flavor to create something memorable.',
    }],
  },
  {
    label: 'Travel',
    spreads: [{
      leftCaption: 'New horizons',
      rightCaption: 'Vancouver, BC',
      note: 'Every journey reminds me why I took the biggest one — flying across the world to build a new life.',
    }],
  },
]

/* ── Placeholder page (swap with <Image> when photos are ready) ── */
function Page({ caption, label }: { caption?: string; label?: string }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-ink/[0.06]">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/25">{label}</p>
        )}
        <p className="text-[10px] font-light uppercase tracking-widest text-ink/20">photo</p>
      </div>
      {caption && (
        <p className="px-5 py-3 text-[11px] font-light italic tracking-wide text-ink/40 md:px-6 md:py-3.5">
          {caption}
        </p>
      )}
    </div>
  )
}

/* ── Main component ── */
export function HobbyBook() {
  const n = hobbies.length

  // current = fully displayed index; staged = index loading behind the leaf
  const [current,  setCurrent]  = useState(0)
  const [staged,   setStaged]   = useState<number | null>(null)
  const [angle,    setAngle]    = useState(0)      // 0 → 180
  const [dir,      setDir]      = useState<'fwd' | 'back'>('fwd')
  const [animating,setAnimating]= useState(false)
  const [dragging, setDragging] = useState(false)

  const bookRef    = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const angleRef   = useRef(0)  // live angle for endDrag decision

  const cData  = hobbies[current]
  const bData  = staged !== null ? hobbies[staged] : cData
  const cSpread = cData.spreads[0]
  const bSpread = bData.spreads[0]

  /* Auto-flip animation */
  function autoFlip(target: number, direction: 'fwd' | 'back') {
    if (animating || dragging || target === current) return
    setDir(direction)
    setStaged(target)
    setAnimating(true)
    setAngle(180)
    setTimeout(() => {
      setCurrent(target)
      setStaged(null)
      setAngle(0)
      angleRef.current = 0
      setAnimating(false)
    }, 680)
  }

  function goNext()  { autoFlip((current + 1) % n, 'fwd') }
  function goPrev()  { autoFlip((current - 1 + n) % n, 'back') }
  function goTab(i: number) {
    if (i === current) return
    autoFlip(i, i > current ? 'fwd' : 'back')
  }

  /* Drag to turn (forward only — drag right→left on the right half) */
  function startDrag(clientX: number) {
    if (animating) return
    setDir('fwd')
    setStaged((current + 1) % n)
    setDragging(true)
    dragStartX.current = clientX
  }

  function moveDrag(clientX: number) {
    if (!dragging || !bookRef.current) return
    const halfW = bookRef.current.offsetWidth / 2
    const dx    = Math.max(0, dragStartX.current - clientX)
    const a     = Math.min(180, (dx / halfW) * 180)
    setAngle(a)
    angleRef.current = a
  }

  function endDrag() {
    if (!dragging) return
    setDragging(false)
    const a = angleRef.current
    if (a > 60) {
      const next = (current + 1) % n
      setAnimating(true)
      setAngle(180)
      setTimeout(() => {
        setCurrent(next)
        setStaged(null)
        setAngle(0)
        angleRef.current = 0
        setAnimating(false)
      }, 400)
    } else {
      setAngle(0)
      angleRef.current = 0
      setTimeout(() => setStaged(null), 320)
    }
  }

  /* Whether a leaf is active right now */
  const leafActive = animating || dragging || angle > 0

  /* Leaf CSS — forward: right half rotates left; back: left half rotates right */
  const leafCSS: React.CSSProperties = dir === 'fwd' ? {
    position: 'absolute', top: 0, left: '50%',
    width: '50%', height: '100%',
    transformOrigin: '0% 50%',
    transform: `perspective(2000px) rotateY(${-angle}deg)`,
    transformStyle: 'preserve-3d',
    transition: dragging ? 'none' : 'transform 0.68s cubic-bezier(0.4,0,0.2,1)',
    zIndex: 10,
    cursor: 'grabbing',
  } : {
    position: 'absolute', top: 0, right: '50%',
    width: '50%', height: '100%',
    transformOrigin: '100% 50%',
    transform: `perspective(2000px) rotateY(${angle}deg)`,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.68s cubic-bezier(0.4,0,0.2,1)',
    zIndex: 10,
  }

  const faceStyle: React.CSSProperties = {
    position: 'absolute', inset: 0,
    backfaceVisibility: 'hidden',
    backgroundColor: '#f7f5f2',
    overflow: 'hidden',
  }

  const backFaceStyle: React.CSSProperties = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  }

  /* Shadow intensity on the leaf */
  const shadowAlpha = Math.sin((angle / 180) * Math.PI) * 0.18

  /* Note shown: crossfade when angle > 90 */
  const showBehindNote = angle > 90

  return (
    <div className="mx-auto max-w-3xl">

      {/* ── Tabs ── */}
      <div className="flex justify-center gap-8 border-b border-paper/15 md:gap-14">
        {hobbies.map((h, i) => (
          <button key={h.label} type="button" onClick={() => goTab(i)}
            className={cn(
              'relative pb-3 text-sm font-medium tracking-wide transition-colors duration-200 md:text-base',
              i === current ? 'text-paper' : 'text-paper/35 hover:text-paper/65',
            )}
          >
            {h.label}
            {i === current && <span className="absolute inset-x-0 -bottom-px h-px bg-paper" />}
          </button>
        ))}
      </div>

      {/* ── Arrows + Book ── */}
      <div className="relative mt-8 px-14 md:mt-10 md:px-16">

        {/* Left arrow */}
        <button type="button" onClick={goPrev} aria-label="Previous"
          className="absolute left-0 top-[38%] z-20 -translate-y-1/2 rounded-full border border-paper/20 bg-paper/5 p-2 text-paper/60 backdrop-blur-sm transition-all hover:border-paper/50 hover:text-paper"
        >
          <ChevronLeft className="size-4" strokeWidth={1.5} />
        </button>

        {/* Right arrow */}
        <button type="button" onClick={goNext} aria-label="Next"
          className="absolute right-0 top-[38%] z-20 -translate-y-1/2 rounded-full border border-paper/20 bg-paper/5 p-2 text-paper/60 backdrop-blur-sm transition-all hover:border-paper/50 hover:text-paper"
        >
          <ChevronRight className="size-4" strokeWidth={1.5} />
        </button>

        {/* ── Book ── */}
        <div
          ref={bookRef}
          className="select-none overflow-hidden rounded-2xl bg-[#f7f5f2] shadow-2xl"
          style={{ userSelect: 'none' }}
          onMouseMove={(e) => moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
        >
          {/* ── Image spread ── */}
          <div className="relative aspect-[16/7]">

            {/* ── BOTTOM LAYER — content behind the leaf ── */}
            {leafActive ? (
              dir === 'fwd' ? (
                /* Forward: left stays, right is pending */
                <>
                  <div className="absolute inset-y-0 left-0 w-1/2 border-r border-ink/10 bg-[#f7f5f2]">
                    <Page caption={cSpread.leftCaption} />
                  </div>
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f7f5f2]">
                    <Page caption={bSpread.rightCaption} />
                  </div>
                </>
              ) : (
                /* Backward: right stays, left is pending */
                <>
                  <div className="absolute inset-y-0 left-0 w-1/2 border-r border-ink/10 bg-[#f7f5f2]">
                    <Page caption={bSpread.leftCaption} />
                  </div>
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f7f5f2]">
                    <Page caption={cSpread.rightCaption} />
                  </div>
                </>
              )
            ) : (
              /* Idle: just show current */
              <>
                <div className="absolute inset-y-0 left-0 w-1/2 border-r border-ink/10">
                  <Page caption={cSpread.leftCaption} />
                </div>
                <div
                  className="absolute inset-y-0 right-0 w-1/2 cursor-grab"
                  onMouseDown={(e) => startDrag(e.clientX)}
                  onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                >
                  <Page caption={cSpread.rightCaption} />
                  {/* Right-edge drag hint */}
                  <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: 40,
                    background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.04))',
                    pointerEvents: 'none',
                  }} />
                  {/* Corner curl hint */}
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 28, height: 28,
                    background: 'linear-gradient(135deg, transparent 55%, rgba(0,0,0,0.07) 55%)',
                    borderRadius: '0 0 12px 0',
                    pointerEvents: 'none',
                  }} />
                </div>
              </>
            )}

            {/* ── THE LEAF ── */}
            {leafActive && (
              <div style={leafCSS}
                onMouseDown={dir === 'fwd' ? (e) => startDrag(e.clientX) : undefined}
                onTouchStart={dir === 'fwd' ? (e) => startDrag(e.touches[0].clientX) : undefined}
              >
                {/* Front face */}
                <div style={faceStyle}>
                  {dir === 'fwd'
                    ? <Page caption={cSpread.rightCaption} />
                    : <Page caption={cSpread.leftCaption} />
                  }
                  {/* Spine shadow on front */}
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: dir === 'fwd'
                      ? `linear-gradient(to right, rgba(0,0,0,${shadowAlpha}) 0%, transparent 25%)`
                      : `linear-gradient(to left,  rgba(0,0,0,${shadowAlpha}) 0%, transparent 25%)`,
                  }} />
                </div>

                {/* Back face (shows when > 90°, content is mirrored via scaleX) */}
                <div style={backFaceStyle}>
                  <div style={{ transform: 'scaleX(-1)', height: '100%' }}>
                    {dir === 'fwd'
                      ? <Page caption={bSpread.leftCaption} />
                      : <Page caption={bSpread.rightCaption} />
                    }
                  </div>
                  {/* Spine shadow on back */}
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: dir === 'fwd'
                      ? `linear-gradient(to left,  rgba(0,0,0,${shadowAlpha}) 0%, transparent 25%)`
                      : `linear-gradient(to right, rgba(0,0,0,${shadowAlpha}) 0%, transparent 25%)`,
                  }} />
                </div>
              </div>
            )}

            {/* Book spine line */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px bg-ink/10" />
          </div>

          {/* ── Note strip ── */}
          <div className="border-t border-ink/10 px-6 py-4 md:px-8 md:py-5">
            <p
              className="text-sm font-light italic leading-relaxed text-ink/60 transition-opacity duration-200 md:text-base"
              style={{ opacity: leafActive ? 0.4 : 1 }}
            >
              &ldquo;{showBehindNote ? bSpread.note : cSpread.note}&rdquo;
            </p>
          </div>
        </div>

        {/* Drag hint label */}
        {!leafActive && (
          <p className="mt-3 text-center text-[11px] font-light tracking-widest text-paper/30 uppercase">
            drag right page or use arrows
          </p>
        )}
      </div>
    </div>
  )
}
