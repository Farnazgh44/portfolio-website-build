'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { CONTACT, MENU_OPEN_EVENT } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteMenu() {
  const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener(MENU_OPEN_EVENT, handler)
    return () => window.removeEventListener(MENU_OPEN_EVENT, handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function close() {
    setOpen(false)
    setContactOpen(false)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-ink transition-opacity duration-300',
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
      aria-hidden={!open}
    >
      <div className="mx-auto flex h-full max-w-md flex-col px-6">
        <div className="flex items-center justify-between pt-6">
          <Logo variant="white" />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="p-2 text-paper transition-opacity hover:opacity-70"
          >
            <X className="size-6" strokeWidth={1.75} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-9 pb-16 text-center">
          <Link
            href="/works"
            onClick={close}
            className="text-lg font-light tracking-wide text-paper/85 transition-colors hover:text-paper"
          >
            Works
          </Link>
          <Link
            href="/about"
            onClick={close}
            className="text-lg font-light tracking-wide text-paper/85 transition-colors hover:text-paper"
          >
            About
          </Link>

          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setContactOpen((v) => !v)}
              aria-expanded={contactOpen}
              className={cn(
                'text-lg tracking-wide transition-colors hover:text-paper',
                contactOpen
                  ? 'font-semibold text-paper'
                  : 'font-light text-paper/85',
              )}
            >
              Contact
            </button>
            <div
              className={cn(
                'flex flex-col items-center gap-2 overflow-hidden transition-all duration-300',
                contactOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="text-sm font-light tracking-wide text-paper/70 transition-colors hover:text-paper"
              >
                LinkedIn
              </a>
              <a
                href={CONTACT.mailto}
                onClick={close}
                className="text-sm font-light tracking-wide text-paper/70 transition-colors hover:text-paper"
              >
                Email
              </a>
            </div>
          </div>

          <Link
            href="/draft"
            onClick={close}
            className="text-lg font-light tracking-wide text-paper/85 transition-colors hover:text-paper"
          >
            Draft
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="text-lg font-light tracking-wide text-paper/85 transition-colors hover:text-paper"
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  )
}
