import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { getProject, getOtherProjects, projects } from '@/lib/projects'
import { ProjectHeroMedia } from '@/components/project-hero-media'
import { ScrollspySidebar } from '@/components/scrollspy-sidebar'
import { CaseImageCarousel } from '@/components/case-image-carousel'

/* ── Body renderer ─────────────────────────────────────────────────────────
   Supported string formats (in the body[] array in lib/projects.ts):
     "quote"         → bold italic pull-quote with rose left border
     * item          → bullet list item (consecutive * items merge into one <ul>)
     **bold**        → inline <strong> within any paragraph
     [image:file]    → full-width image with 30px radius (e.g. [image:/Reddit_Before.png])
     [carousel:f1|f2|f3] → swipeable image carousel (e.g. [carousel:/a.png|/b.png])
     [video:file]        → autoplaying muted looping video (e.g. [video:/CoverCrispup.mp4])
     [sidebyside:f1|f2]  → two small images side by side (e.g. [sidebyside:/a.png|/b.png])
     [smallimage:file]   → single small image matching sidebyside size (e.g. [smallimage:/a.png])
     [threecol:f1|f2|f3] → three images side by side (e.g. [threecol:/a.png|/b.png|/c.png])
   ────────────────────────────────────────────────────────────────────────── */

function renderInline(raw: string) {
  return raw.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-paper">{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>
  )
}

function BodyRenderer({ paragraphs }: { paragraphs: string[] }) {
  // Group consecutive '* item' strings into ul blocks
  type Block = { type: 'p' | 'ul' | 'img' | 'carousel' | 'video' | 'sidebyside' | 'smallimage' | 'threecol'; items: string[] }
  const blocks: Block[] = []

  for (const text of paragraphs) {
    if (text.startsWith('* ')) {
      const last = blocks[blocks.length - 1]
      if (last?.type === 'ul') {
        last.items.push(text.slice(2))
      } else {
        blocks.push({ type: 'ul', items: [text.slice(2)] })
      }
    } else if (text.startsWith('[image:') && text.endsWith(']')) {
      blocks.push({ type: 'img', items: [text.slice(7, -1)] })
    } else if (text.startsWith('[carousel:') && text.endsWith(']')) {
      blocks.push({ type: 'carousel', items: text.slice(10, -1).split('|') })
    } else if (text.startsWith('[video:') && text.endsWith(']')) {
      blocks.push({ type: 'video', items: [text.slice(7, -1)] })
    } else if (text.startsWith('[sidebyside:') && text.endsWith(']')) {
      blocks.push({ type: 'sidebyside', items: text.slice(12, -1).split('|') })
    } else if (text.startsWith('[smallimage:') && text.endsWith(']')) {
      blocks.push({ type: 'smallimage', items: [text.slice(12, -1)] })
    } else if (text.startsWith('[threecol:') && text.endsWith(']')) {
      blocks.push({ type: 'threecol', items: text.slice(10, -1).split('|') })
    } else {
      blocks.push({ type: 'p', items: [text] })
    }
  }

  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'carousel') {
          return <CaseImageCarousel key={i} images={block.items} />
        }

        if (block.type === 'threecol') {
          return (
            <div key={i} className="my-6 grid grid-cols-3 gap-4 max-w-[880px] mx-auto">
              {block.items.map((src, j) => (
                <div key={j} className="overflow-hidden rounded-[30px]">
                  <Image
                    src={src}
                    alt={`Image ${j + 1} of 3`}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'smallimage') {
          return (
            <div key={i} className="my-6 w-full max-w-[280px] mx-auto overflow-hidden rounded-[30px]">
              <Image
                src={block.items[0]}
                alt="Case study illustration"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          )
        }

        if (block.type === 'sidebyside') {
          return (
            <div key={i} className="my-6 grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {block.items.map((src, j) => (
                <div key={j} className="overflow-hidden rounded-[30px]">
                  <Image
                    src={src}
                    alt={`Side by side image ${j + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'video') {
          return (
            <div key={i} className="my-6 overflow-hidden rounded-[30px] max-w-3xl mx-auto">
              <video
                src={block.items[0]}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
          )
        }

        if (block.type === 'img') {
          return (
            <div key={i} className="my-6 overflow-hidden rounded-[30px] max-w-3xl mx-auto">
              <Image
                src={block.items[0]}
                alt="Case study illustration"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          )
        }

        if (block.type === 'ul') {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 text-paper/85">
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          )
        }

        const text = block.items[0]
        const isQuote = text.startsWith('"') && text.endsWith('"')

        if (isQuote) {
          return (
            <blockquote key={i} className="my-2 border-l-2 border-rose pl-5">
              <p className="text-lg font-bold italic leading-snug text-paper md:text-xl">
                {text}
              </p>
            </blockquote>
          )
        }

        return <p key={i}>{renderInline(text)}</p>
      })}
    </>
  )
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} ${project.suffix ?? ''} — Farnaz Gholami`.trim(),
    description: project.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const others = getOtherProjects(slug)

  const tableRows = [
    { label: 'Tools', value: project.table.tools },
    { label: 'Role', value: project.table.role },
    { label: 'Timeline', value: project.table.timeline },
    { label: 'Industry', value: project.table.industry },
  ]

  return (
    <main className="relative brand-gradient min-h-screen">
      <SiteHeader />

      {/* ── "All Works" — floats below the navbar, above the hero ── */}
      <div className="absolute left-6 top-24 z-20 md:left-10 md:top-28 lg:left-16 xl:left-20 2xl:left-32">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-paper/70 transition-colors hover:text-paper"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          All Works
        </Link>
      </div>

      {/* ── Hero: full-bleed video switcher OR static image ── */}
      {project.heroVideos ? (
        <ProjectHeroMedia
          videos={project.heroVideos}
          title={project.name}
          suffix={project.suffix}
          titleFont={project.titleFont}
        />
      ) : (
        /* Static image hero for projects without videos */
        <section className="relative min-h-[70vh] overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.name} project preview`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-10 md:pb-8 lg:px-16 xl:px-20 2xl:px-32">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-7xl lg:text-8xl">
              {project.name}
            </h1>
            {project.suffix && (
              <p className="mt-1 text-lg font-medium text-paper/75 md:text-2xl">
                {project.suffix}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── Post-hero content ── */}
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32">

        {/* Figma / external link button — hidden when no URL */}
        {project.figmaUrl && (
          <div className="flex justify-start md:justify-end pt-8 md:pt-10">
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/70 px-5 py-2 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {project.figmaLabel ?? 'View in Figma'}
              <ExternalLink className="size-3.5" strokeWidth={1.75} />
            </a>
          </div>
        )}

        {/* Tags + description */}
        <section className="pt-8 md:pt-10">
          <div className="flex flex-wrap gap-2">
            {project.shortRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-paper/30 px-3 py-1 text-[11px] font-medium tracking-wide text-paper/80 md:text-xs"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-5 text-base font-light leading-relaxed text-paper/85 md:mt-6 md:text-lg">
            {project.description}
          </p>
        </section>

        {/* Meta table */}
        <section className="pt-8 md:pt-10">
          <dl>
            {tableRows.map((row) => (
              <div
                key={row.label}
                className="flex justify-between gap-6 border-b border-paper/15 py-4 md:py-5"
              >
                <dt className="text-sm font-semibold tracking-wide text-paper md:text-base">
                  {row.label}
                </dt>
                <dd className="text-right text-sm font-light leading-relaxed text-paper/70 md:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Separator */}
        <div className="pt-10 md:pt-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/40 to-transparent" />
        </div>

        {/* ── Two-column: sticky sidebar + scrollable sections ── */}
        <div className="flex gap-12 pt-10 md:gap-16 md:pt-14">

          {/* Left: scrollspy sidebar (xl+ only) */}
          <ScrollspySidebar />

          {/* Right: the 7 content sections */}
          <div className="min-w-0 flex-1">

            {/* 1 — Project Overview */}
            <section id="overview" className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-tight text-paper md:text-2xl">
                Project Overview
              </h2>
              <div className="mt-4 space-y-4 text-base font-light leading-relaxed text-paper/85 md:mt-6 md:text-lg">
                <BodyRenderer paragraphs={project.overview} />
              </div>
            </section>

            {/* 2–7 — Challenge → Reflection */}
            {project.sections.map((section, i) => {
              const ids = ['challenge', 'research', 'design-process', 'solution', 'final-design', 'reflection']
              return (
                <section
                  key={section.title}
                  id={ids[i]}
                  className="mt-14 scroll-mt-28 md:mt-16"
                >
                  <div className="mb-6 h-px w-full bg-gradient-to-r from-paper/20 via-paper/10 to-transparent" />
                  <h2 className="text-xl font-semibold tracking-tight text-paper md:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base font-light leading-relaxed text-paper/85 md:mt-6 md:text-lg">
                    <BodyRenderer paragraphs={section.body} />
                  </div>
                  {section.image && (
                    <div className="mt-8 overflow-hidden rounded-[30px] max-w-3xl mx-auto">
                      <Image
                        src={section.image}
                        alt={`${section.title} illustration`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </section>
              )
            })}

          </div>
        </div>

        {/* View more works */}
        <div className="pt-16 md:pt-24">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/40 to-transparent" />
        </div>
        <section className="pt-8 md:pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-paper md:text-4xl">
            View More Works
          </h2>
          <div className="mt-6 flex flex-col gap-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {others.map((other) => (
              <ProjectCard
                key={other.slug}
                project={other}
                href={`/works/${other.slug}`}
              />
            ))}
          </div>
        </section>

      </div>

      <SiteFooter />
    </main>
  )
}
