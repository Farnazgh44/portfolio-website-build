'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ContactModal } from '@/components/contact-modal'
import { openSiteMenu, DESKTOP_NAV } from '@/lib/site'

export function SiteHeader() {
  const [contactOpen, setContactOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/5 shadow-md backdrop-blur-[2px]' : 'bg-transparent'
      }`}>
        <div className={`mx-auto flex max-w-screen-2xl items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 transition-all duration-300 ${
          scrolled ? 'py-4' : 'pt-6 pb-2 md:pt-9 md:pb-3'
        }`}>
          <Logo variant="white" className="md:h-11" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex lg:gap-12">
            {DESKTOP_NAV.map((item) =>
              item.label === 'Contact' ? (
                <button
                  key="contact"
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="group relative text-[15px] font-medium tracking-wide text-paper transition-colors hover:text-paper lg:text-base"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={item.href.endsWith('.pdf') ? 'noreferrer' : undefined}
                  className="group relative text-[15px] font-medium tracking-wide text-paper transition-colors hover:text-paper lg:text-base"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={openSiteMenu}
            aria-label="Open menu"
            className="p-2 text-paper transition-opacity hover:opacity-70 md:hidden"
          >
            <Menu className="size-6" strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
