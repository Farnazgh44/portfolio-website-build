'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Data ── */
type Hobby = {
  label: string
  description: string
  locations: string[]
  leftPhoto?: string
  rightPhoto?: string
}

const hobbies: Hobby[] = [
  {
    label: 'Adventure',
    description: "Lately, I've been pushing myself to explore more, try new things, and step outside my comfort zone. Life is too short and too beautiful not to experience as much of it as possible!",
    locations: ['SilverStar Mountain, BC', 'Aldor Acres Family Farm, BC'],
    leftPhoto: '/Advanture1.jpeg',
    rightPhoto: '/Advanture2.jpeg',
  },
  {
    label: 'Art',
    description: 'Art has been part of my life since childhood. I love experimenting with different styles and mediums, from sketching and charcoal to oil painting and markers. There\'s always something new to learn, and that\'s what makes it so fascinating to me.',
    locations: ['Oil Painting', 'Charcoal'],
    leftPhoto: '/Art1.jpg',
    rightPhoto: '/Art2.jpg',
  },
  {
    label: 'Game',
    description: "I've played over 100 games, and I'm always excited to discover more! Gaming has always been one of my favourite ways to spend my free time, explore new worlds, and experience different stories.",
    locations: ['Red Dead Redemption 2', 'Detroit Become Human'],
    leftPhoto: '/Game1.jpg',
    rightPhoto: '/Game2.jpg',
  },
  {
    label: 'Food',
    description: 'Cooking is my comfort activity! I love trying new recipes and experimenting with different flavours. Whenever life gets overwhelming, you\'ll probably find me in the kitchen making something delicious.',
    locations: ['Burger Bowl', 'Lubia Polo'],
    leftPhoto: '/Food1.jpeg',
    rightPhoto: '/Food2.jpeg',
  },
]

/* ── Lightbox ── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="size-5" strokeWidth={1.5} />
      </button>
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: 200, minHeight: 200 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}

/* ── One half of a hobby card (desktop book) ── */
function CardHalf({ hobby, side, onOpen }: { hobby: Hobby; side: 'left' | 'right'; onOpen?: (src: string) => void }) {
  const photo = side === 'left' ? hobby.leftPhoto : hobby.rightPhoto
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f7f5f2]">
      <div className="relative min-h-0 flex-[3]">
        {photo ? (
          <Image
            src={photo}
            alt={hobby.label}
            fill
            className={cn('object-cover', onOpen && 'cursor-zoom-in')}
            onClick={() => onOpen?.(photo)}
          />
        ) : (
          <div className={cn(
            'h-full w-full',
            side === 'left'
              ? 'bg-gradient-to-br from-stone/10 via-stone/20 to-stone/30'
              : 'bg-gradient-to-bl from-stone/10 via-stone/20 to-stone/30',
          )} />
        )}
      </div>
      <div className={cn(
        'flex-[2] border-t border-ink/10 px-4 py-3 md:px-6 md:py-4',
        side === 'right' && 'text-right',
      )}>
        {side === 'left' ? (
          <>
            <p className="text-[11px] font-bold uppercase tracking-widest text-rose md:text-xs">
              {hobby.label}
            </p>
            <p className="mt-1.5 text-[11px] font-light leading-relaxed text-ink/55 md:text-xs">
              {hobby.description}
            </p>
          </>
        ) : (
          <div className="flex h-full flex-col justify-between">
            <div>
              {hobby.locations.map((loc) => (
                <p key={loc} className="text-[11px] font-light italic text-ink/40 md:text-xs">
                  {loc}
                </p>
              ))}
            </div>
            <p className="text-[10px] font-light tracking-widest text-ink/25">
              Click to flip »
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Arrow button (desktop) ── */
function ArrowBtn({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="shrink-0 flex size-9 md:size-10 items-center justify-center rounded-full border border-dashed border-paper/30 text-paper/50 transition-all hover:border-paper/70 hover:text-paper"
    >
      {children}
    </button>
  )
}

/* ════════════════════════════════════════════
   MOBILE: single-card swipe view
   ════════════════════════════════════════════ */
function MobileHobbyView({
  current,
  goNext,
  goPrev,
  onOpen,
}: {
  current: number
  goNext: () => void
  goPrev: () => void
  onOpen: (src: string) => void
}) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    touchStartX.current = null
    touchStartY.current = null
    // Only count horizontal swipes (more horizontal than vertical)
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) goNext()
    else goPrev()
  }

  const hobby = hobbies[current]
  const photo = hobby.leftPhoto ?? hobby.rightPhoto

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{ height: '420px' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Sliding cards */}
      {hobbies.map((h, i) => {
        const offset = i - current
        return (
          <div
            key={h.label}
            aria-hidden={i !== current}
            className="absolute inset-0 flex flex-col bg-[#f7f5f2]"
            style={{
              transform: `translateX(${offset * 100}%)`,
              transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Photo */}
            <div className="relative flex-[3] overflow-hidden">
              {(h.leftPhoto ?? h.rightPhoto) ? (
                <Image
                  src={(h.leftPhoto ?? h.rightPhoto)!}
                  alt={h.label}
                  fill
                  className="cursor-zoom-in object-cover"
                  onClick={() => onOpen((h.leftPhoto ?? h.rightPhoto)!)}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-b from-stone/10 to-stone/25" />
              )}
            </div>

            {/* Text */}
            <div className="flex flex-[2] flex-col border-t border-ink/10 px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-rose">
                {h.label}
              </p>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-ink/55">
                {h.description}
              </p>
              <p className="mt-auto text-right text-[10px] font-light tracking-widest text-ink/20">
                Swipe to flip »
              </p>
            </div>

            {/* Left corner tap → prev */}
            <button
              type="button"
              aria-label="Previous"
              onClick={goPrev}
              className="absolute bottom-0 left-0 h-20 w-20"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />
            {/* Right corner tap → next */}
            <button
              type="button"
              aria-label="Next"
              onClick={goNext}
              className="absolute bottom-0 right-0 h-20 w-20"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />

            {/* Corner curl hints */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: 26, height: 26, pointerEvents: 'none',
              background: 'linear-gradient(225deg, transparent 55%, rgba(0,0,0,0.07) 55%)',
              borderRadius: '0 0 0 16px',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 26, height: 26, pointerEvents: 'none',
              background: 'linear-gradient(135deg, transparent 55%, rgba(0,0,0,0.07) 55%)',
              borderRadius: '0 0 16px 0',
            }} />
          </div>
        )
      })}
    </div>
  )
}

/* ════════════════════════════════════════════
   MAIN export
   ════════════════════════════════════════════ */
export function HobbyBook() {
  const n = hobbies.length

  /* ── Shared state ── */
  const [current,      setCurrent]      = useState(0)
  const [lightboxSrc,  setLightboxSrc]  = useState<string | null>(null)

  /* ── Desktop-only state ── */
  const [staged,    setStaged]    = useState<number | null>(null)
  const [angle,     setAngle]     = useState(0)
  const [dir,       setDir]       = useState<'fwd' | 'back'>('fwd')
  const [animating, setAnimating] = useState(false)
  const [dragging,  setDragging]  = useState(false)

  const bookRef    = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const angleRef   = useRef(0)
  const dragDirRef = useRef<'fwd' | 'back'>('fwd')

  const cHobby = hobbies[current]
  const bHobby = staged !== null ? hobbies[staged] : cHobby

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

  function goNext() { autoFlip((current + 1) % n, 'fwd') }
  function goPrev() { autoFlip((current - 1 + n) % n, 'back') }
  function goDot(i: number) {
    if (i === current) return
    autoFlip(i, i > current ? 'fwd' : 'back')
  }

  /* mobile nav — no flip animation, just slide */
  function mobileNext() { setCurrent(c => (c + 1) % n) }
  function mobilePrev() { setCurrent(c => (c - 1 + n) % n) }

  function startDragFwd(clientX: number) {
    if (animating) return
    dragDirRef.current = 'fwd'
    setDir('fwd')
    setStaged((current + 1) % n)
    setDragging(true)
    dragStartX.current = clientX
  }

  function startDragBack(clientX: number) {
    if (animating) return
    dragDirRef.current = 'back'
    setDir('back')
    setStaged((current - 1 + n) % n)
    setDragging(true)
    dragStartX.current = clientX
  }

  function moveDrag(clientX: number) {
    if (!dragging || !bookRef.current) return
    const halfW = bookRef.current.offsetWidth / 2
    const dx = dragDirRef.current === 'fwd'
      ? Math.max(0, dragStartX.current - clientX)
      : Math.max(0, clientX - dragStartX.current)
    const a = Math.min(180, (dx / halfW) * 180)
    setAngle(a)
    angleRef.current = a
  }

  function endDrag() {
    if (!dragging) return
    setDragging(false)
    const a = angleRef.current
    if (a > 60) {
      const target = dragDirRef.current === 'fwd'
        ? (current + 1) % n
        : (current - 1 + n) % n
      setAnimating(true)
      setAngle(180)
      setTimeout(() => {
        setCurrent(target)
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

  const leafActive  = animating || dragging || angle > 0
  const shadowAlpha = Math.sin((angle / 180) * Math.PI) * 0.18

  const leafCSS: React.CSSProperties = dir === 'fwd' ? {
    position: 'absolute', top: 0, left: '50%',
    width: '50%', height: '100%',
    transformOrigin: '0% 50%',
    transform: `perspective(2000px) rotateY(${-angle}deg)`,
    transformStyle: 'preserve-3d',
    transition: dragging ? 'none' : 'transform 0.68s cubic-bezier(0.4,0,0.2,1)',
    zIndex: 10,
  } : {
    position: 'absolute', top: 0, left: 0,
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
    overflow: 'hidden',
  }

  const backFaceStyle: React.CSSProperties = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  }

  const bottomLeft  = dir === 'fwd' ? cHobby : bHobby
  const bottomRight = dir === 'fwd' ? bHobby : cHobby

  const openPhoto = (src: string) => setLightboxSrc(src)

  const leafFront = dir === 'fwd'
    ? <CardHalf hobby={cHobby} side="right" onOpen={openPhoto} />
    : <CardHalf hobby={cHobby} side="left"  onOpen={openPhoto} />

  const leafBack = dir === 'fwd'
    ? <CardHalf hobby={bHobby} side="left"  onOpen={openPhoto} />
    : <CardHalf hobby={bHobby} side="right" onOpen={openPhoto} />

  /* ── Progress dots (shared) ── */
  const Dots = (
    <div className="mb-8 flex items-start">
      {hobbies.map((h, i) => (
        <div key={h.label} className="flex flex-1 flex-col items-center">
          <div className="flex w-full items-center">
            <div className={cn(
              'h-px flex-1 transition-colors duration-300',
              i === 0 ? 'invisible' : i <= current ? 'bg-rose/50' : 'bg-paper/15',
            )} />
            <button
              type="button"
              onClick={() => goDot(i)}
              aria-label={`Go to ${h.label}`}
              className={cn(
                'shrink-0 rounded-full border-2 transition-all duration-300',
                i === current
                  ? 'size-3 scale-125 border-rose bg-rose'
                  : i < current
                  ? 'size-3 border-rose/50 bg-rose/40'
                  : 'size-3 border-paper/25 bg-transparent hover:border-paper/50',
              )}
            />
            <div className={cn(
              'h-px flex-1 transition-colors duration-300',
              i === n - 1 ? 'invisible' : i < current ? 'bg-rose/50' : 'bg-paper/15',
            )} />
          </div>
          <button
            type="button"
            onClick={() => goDot(i)}
            className={cn(
              'mt-2 whitespace-nowrap text-[10px] font-medium transition-colors duration-200 md:text-[11px]',
              i === current ? 'text-rose' : 'text-paper/35 hover:text-paper/60',
            )}
          >
            {h.label}
          </button>
        </div>
      ))}
    </div>
  )

  return (
    <div className="mx-auto max-w-3xl">
      {Dots}

      {/* ══ MOBILE: single sliding card ══ */}
      <div className="md:hidden">
        <MobileHobbyView
          current={current}
          goNext={mobileNext}
          goPrev={mobilePrev}
          onOpen={openPhoto}
        />
        <p className="mt-3 text-center text-[10px] font-light uppercase tracking-widest text-paper/25">
          swipe or tap corners to flip
        </p>
      </div>

      {/* ══ DESKTOP: book with page-turn ══ */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <ArrowBtn onClick={goPrev} label="Previous">
            <span className="text-sm leading-none">←</span>
          </ArrowBtn>

          <div
            ref={bookRef}
            className="relative min-w-0 flex-1 select-none overflow-hidden rounded-2xl shadow-2xl"
            style={{ height: '320px' }}
            onMouseMove={(e) => moveDrag(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            {leafActive ? (
              <>
                <div className="absolute inset-y-0 left-0 w-1/2">
                  <CardHalf hobby={bottomLeft} side="left" onOpen={openPhoto} />
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2">
                  <CardHalf hobby={bottomRight} side="right" onOpen={openPhoto} />
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-y-0 left-0 w-1/2 cursor-grab"
                  onMouseDown={(e) => startDragBack(e.clientX)}
                  onTouchStart={(e) => startDragBack(e.touches[0].clientX)}
                >
                  <CardHalf hobby={cHobby} side="left" onOpen={openPhoto} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0,
                    width: 28, height: 28, pointerEvents: 'none',
                    background: 'linear-gradient(225deg, transparent 55%, rgba(0,0,0,0.07) 55%)',
                    borderRadius: '0 0 0 12px',
                  }} />
                </div>
                <div
                  className="absolute inset-y-0 right-0 w-1/2 cursor-grab"
                  onMouseDown={(e) => startDragFwd(e.clientX)}
                  onTouchStart={(e) => startDragFwd(e.touches[0].clientX)}
                >
                  <CardHalf hobby={cHobby} side="right" onOpen={openPhoto} />
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 28, height: 28, pointerEvents: 'none',
                    background: 'linear-gradient(135deg, transparent 55%, rgba(0,0,0,0.07) 55%)',
                    borderRadius: '0 0 12px 0',
                  }} />
                </div>
              </>
            )}

            {leafActive && (
              <div style={leafCSS}>
                <div style={faceStyle}>
                  {leafFront}
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: dir === 'fwd'
                      ? `linear-gradient(to right, rgba(0,0,0,${shadowAlpha}) 0%, transparent 40%)`
                      : `linear-gradient(to left, rgba(0,0,0,${shadowAlpha}) 0%, transparent 40%)`,
                  }} />
                </div>
                <div style={backFaceStyle}>
                  <div style={{ transform: 'scaleX(-1)', height: '100%' }}>
                    {leafBack}
                  </div>
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: dir === 'fwd'
                      ? `linear-gradient(to left, rgba(0,0,0,${shadowAlpha}) 0%, transparent 40%)`
                      : `linear-gradient(to right, rgba(0,0,0,${shadowAlpha}) 0%, transparent 40%)`,
                  }} />
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px bg-ink/10" />
          </div>

          <ArrowBtn onClick={goNext} label="Next">
            <span className="text-sm leading-none">→</span>
          </ArrowBtn>
        </div>

        {!leafActive && (
          <p className="mt-3 text-center text-[10px] font-light uppercase tracking-widest text-paper/25">
            drag or use arrows to flip
          </p>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt="Hobby photo"
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </div>
  )
}
