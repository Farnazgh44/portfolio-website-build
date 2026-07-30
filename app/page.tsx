import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { getProject } from '@/lib/projects'
import { CONTACT } from '@/lib/site'

export default function HomePage() {
  const dogwood = getProject('dogwood-landscaping')!
  const alpine = getProject('alpinelink')!

  return (
    <main className="min-h-screen bg-ink">
      <SiteHeader />

        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden">
          {/* Video placeholder background */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          >
            {/* Replace with your own hero video file */}
            <source src="/The one.mp4" type="video/mp4" />
          </video>

          {/* Gradient layer: transparent at top -> solid ink at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

          <div className="relative flex min-h-[100svh] flex-col px-6 pb-12 pt-60 md:px-10 md:pb-24 md:pt-48 lg:px-16 xl:px-20 2xl:px-32">
            {/* Name + subheading near the top */}
            <div>
              <h1 className="text-balance text-[36px] font-bold leading-[1.05] tracking-tight text-paper md:text-6xl lg:text-7xl">
                Farnaz Gholami
              </h1>
              <p className="mt-3 text-[30px] font-bold leading-tight text-paper md:mt-5 md:text-5xl lg:text-6xl">
                UI/UX &amp;{' '}
                <span>Digital</span>
                <br className="md:hidden" />
                {' '}Designer
              </p>
            </div>

            {/* About + buttons in the dark part of the gradient */}
            <div className="mt-auto md:mt-20">
              <p className="max-w-xs text-pretty text-base leading-relaxed text-paper md:max-w-md">
                <span className="text-[18px] font-light text-paper/85 md:text-xl">
                  Hi, I&apos;m{' '}
                </span>
                <span className="text-[18px] font-semibold md:text-xl">
                  Farnaz Gholami
                </span>
                <br />
                <span className="font-light text-paper/85 md:text-lg">
                  Based in Vancouver, focused on creating visually engaging,
                  atmospheric, and user-centered interfaces.
                </span>
              </p>

              <div className="mt-7 flex gap-3 md:mt-9 md:gap-4">
                <Link
                  href="/works"
                  className="w-32 rounded-full border border-paper/70 px-4 py-2 text-center text-xs font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink md:w-40 md:py-3 md:text-sm"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="w-32 rounded-full border border-paper/70 px-4 py-2 text-center text-xs font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink md:w-40 md:py-3 md:text-sm"
                >
                  About Me
                </Link>
              </div>

              {/* Three shining scroll arrows */}
              <div className="mt-10 flex justify-end pr-1 md:mt-12 md:justify-start md:pl-1">
                <div className="flex flex-col items-center -space-y-3 text-paper">
                  <ChevronDown
                    className="size-7 arrow-pulse"
                    style={{ animationDelay: '0ms' }}
                    strokeWidth={1.5}
                  />
                  <ChevronDown
                    className="size-7 arrow-pulse"
                    style={{ animationDelay: '200ms' }}
                    strokeWidth={1.5}
                  />
                  <ChevronDown
                    className="size-7 arrow-pulse"
                    style={{ animationDelay: '400ms' }}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POST-HERO: starts black and gradually turns pink */}
        <div className="brand-gradient">
          {/* FEATURED PROJECTS */}
          <section className="px-6 pt-12 md:px-10 md:pt-24 lg:px-16 xl:px-20 2xl:px-32">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold tracking-wide text-paper md:text-3xl">
              Featured Projects
            </h2>
            <Link
              href="/works"
              className="hidden text-sm font-light tracking-wide text-paper/80 underline underline-offset-4 transition-colors hover:text-paper md:inline-block"
            >
              View All
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-8 md:mt-10 md:grid md:grid-cols-2 md:gap-8">
            <ProjectCard project={dogwood} href={`/works/${dogwood.slug}`} />
            <ProjectCard project={alpine} href={`/works/${alpine.slug}`} />
          </div>

          <div className="mt-8 md:mt-12">
            <Link
              href="/works"
              className="inline-block w-32 whitespace-nowrap rounded-full border border-paper/70 px-4 py-2 text-center text-xs font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink md:w-40 md:py-3 md:text-sm"
            >
              All Projects
            </Link>
          </div>
        </section>

        {/* LET'S WORK TOGETHER */}
        <section id="contact" className="scroll-mt-6 px-6 pt-16 md:px-10 md:pb-16 md:pt-32 lg:px-16 xl:px-20 2xl:px-32">
          <h2 className="text-2xl font-bold tracking-tight text-paper md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <div className="mt-4 space-y-1 text-base leading-relaxed text-paper/85 md:mt-6 md:space-y-2 md:text-lg">
            <p className="font-light">
              Always open to creative opportunities, collaborations, and new
              ideas.
            </p>
            <p className="font-light">
              If you&apos;re looking for someone passionate about crafting
              engaging digital experiences, let&apos;s talk.
            </p>
          </div>

          <div className="mt-8 flex gap-3 md:mt-10 md:gap-4">
            <a
              href={CONTACT.mailto}
              className="w-32 rounded-full border border-paper/70 px-4 py-2 text-center text-xs font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink md:w-40 md:py-3 md:text-sm"
            >
              Get in Touch
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-32 rounded-full border border-paper/70 px-4 py-2 text-center text-xs font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink md:w-40 md:py-3 md:text-sm"
            >
              LinkedIn
            </a>
          </div>
        </section>
        </div>

        <SiteFooter />
    </main>
  )
}
