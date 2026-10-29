'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { blurProps } from '@/lib/image-blur'

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
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1600}
          sizes="90vw"
          {...blurProps(src)}
          className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        />
      </div>
    </div>
  )
}

export function ClickableImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = '(min-width: 880px) 880px, 100vw',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        {...blurProps(src)}
        className={`cursor-zoom-in ${className ?? ''}`}
        onClick={() => setOpen(true)}
      />
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  )
}
