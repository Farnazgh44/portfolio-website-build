import { Logo } from '@/components/logo'
import { CONTACT } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-20 lg:px-16 xl:px-20 2xl:px-32">
      {/* thin gradient separator line */}
      <div className="mx-auto mb-8 h-px w-full max-w-screen-2xl bg-gradient-to-r from-transparent via-[#FFFAFC] to-transparent md:mb-10" />
      <div className="mx-auto flex max-w-screen-2xl items-end justify-between gap-4">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-xs font-light tracking-wide text-paper/55 md:text-base">
            © 2026 Farnaz Gholami
          </p>
          <nav className="flex items-center gap-5 text-xs font-light tracking-wide text-paper/75 md:gap-10 md:text-sm">
            <a
              href={CONTACT.mailto}
              className="transition-colors hover:text-paper"
            >
              Email
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
            <a href={CONTACT.resume} className="transition-colors hover:text-paper">
              Resume
            </a>
          </nav>
        </div>
        <Logo variant="white" href={null} className="h-8 -translate-y-4 md:h-12" />
      </div>
    </footer>
  )
}
