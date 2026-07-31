import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DraftGallery } from '@/components/draft-gallery'

export const metadata = {
  title: 'Draft — Farnaz Gholami',
  description:
    'A space for creative exploration — experiments, illustrations, motion graphics, and 3D work by Farnaz Gholami.',
}

export default function DraftPage() {
  return (
    <main className="min-h-screen bg-ink">
      <SiteHeader />

      {/* Hero: full-bleed video fading to black */}
      {/* ── MOBILE: min-h-[55vh] controls mobile hero height. DESKTOP: md:min-h-[85vh] ── */}
      <section className="relative min-h-[55vh] md:min-h-[85vh] overflow-hidden">
        {/* Full-bleed background video */}
        {/* ── MOBILE object-position: first value = left/right, second = up/down ── */}
        {/* ── DESKTOP: md:object-[50%_35%] — do not edit ── */}
        <video
          src="/Draft_Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[90%_50%] md:object-[50%_35%]"
          aria-hidden
        />
        {/* Gradient overlay: transparent at top -> solid ink at bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,28,32,0)_0%,rgba(25,28,32,0)_30%,rgba(25,28,32,0.35)_55%,rgba(25,28,32,0.75)_75%,rgba(25,28,32,0.93)_90%,#191c20_100%)]" />

        {/* "Draft" heading overlaid at bottom-left */}
        {/* ── MOBILE: pb-6 = distance from bottom. DESKTOP: md:pb-68 — do not edit ── */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-10 md:pb-68 lg:px-16 xl:px-20 2xl:px-32">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-7xl lg:text-8xl">Draft</h1>
        </div>
      </section>

      {/* Post-hero: continues the gradient as black -> pink -> black (footer) */}
      <div className="brand-gradient">
        {/* Intro */}
        <section className="px-6 pt-2 md:px-10 md:pt-4 lg:px-16 xl:px-20 2xl:px-32">
          <div className="mt-5 space-y-4 text-base leading-relaxed text-paper/85 md:mt-8 md:max-w-3xl md:text-lg">
            <p className="font-semibold text-paper">
              &quot;Not every idea needs a full story to have meaning.&quot;
            </p>
            <p className="font-light">
              This collection is a space for creative exploration, experimenting
              with styles, visuals, and ideas while refining my skills and design
              thinking.
            </p>
            <p className="font-light">
              Each piece reflects my attention to detail, curiosity, and passion
              for creating without limits.
            </p>
            
          </div>
        </section>

        {/* Thin gradient separator */}
        <div className="px-6 pt-8 md:px-10 md:pt-12 lg:px-16 xl:px-20 2xl:px-32">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/40 to-transparent" />
        </div>

        {/* Filterable gallery */}
        <section className="px-6 pt-8 md:px-10 md:pt-12 lg:px-16 xl:px-20 2xl:px-32">
          <DraftGallery />
        </section>
      </div>

      <SiteFooter />
    </main>
  )
}
