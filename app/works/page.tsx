import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Works — Farnaz Gholami',
  description: 'Selected UI/UX and digital design projects by Farnaz Gholami.',
}

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-ink">
      <SiteHeader />

        {/* Hero: full-bleed video fading to black */}
        {/* ── LINE 18: min-h-[85vh] controls hero HEIGHT — increase % = taller, decrease = shorter ── */}
        <section className="relative min-h-[85vh] overflow-hidden">
          {/* Full-bleed background video */}
          {/* ── object-cover fills the section; object-position controls crop focus ── */}
          {/* ── To move video UP: change object-[50%_20%] second value lower, e.g. object-[50%_10%] ── */}
          {/* ── To move video DOWN: increase second value, e.g. object-[50%_60%] ── */}
          <video
            src="/Works_Hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
            aria-hidden
          />
          {/* Gradient overlay: transparent at top -> solid ink at bottom */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,28,32,0)_0%,rgba(25,28,32,0)_30%,rgba(25,28,32,0.35)_55%,rgba(25,28,32,0.75)_75%,rgba(25,28,32,0.93)_90%,#191c20_100%)]" />

          {/* "Projects" heading overlaid at bottom-left */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-60 md:px-10 md:pb-68 lg:px-16 xl:px-20 2xl:px-32">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-7xl lg:text-8xl">
              Projects
            </h1>
          </div>
        </section>

        {/* Post-hero: continues the front gradient as black -> pink -> black (footer) */}
        <div className="brand-gradient">
          <section className="px-6 pt-10 md:px-10 md:pt-14 lg:px-16 xl:px-20 2xl:px-32">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  href={`/works/${project.slug}`}
                />
              ))}
            </div>
          </section>

          <SiteFooter />
        </div>
    </main>
  )
}
