import Link from 'next/link'
import { ArrowLeft, Download, Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CONTACT } from '@/lib/site'

export const metadata = {
  title: 'Resume — Farnaz Gholami',
  description: 'Resume of Farnaz Gholami, UI/UX & Digital Designer based in Vancouver.',
}

const experience = [
  {
    period: '2026 — Present',
    role: 'UI/UX & Brand Designer',
    company: 'Zagrosia Structural Engineering INC',
    points: [
      'Designed responsive wireframes and interactive prototypes to improve usability and user flow.',
      'Created modern UI designs, branding assets, and marketing materials across web and print.',
    ],
  },
  {
    period: '2026 — Present',
    role: 'Creative Director (Freelance)',
    company: 'Dogwood Landscaping & Gardening',
    points: [
      'Led end-to-end creative direction: UI/UX design, branding, website development, and content.',
      'Produced branded marketing materials, social assets, photography, and edited video.',
    ],
  },
  {
    period: '2024 — Present',
    role: 'New Media Design & Web Development',
    company: 'Studio / Freelance',
    points: [
      'Designed and prototyped responsive websites in Figma with a user-centered approach.',
      'Built modern responsive sites with HTML, CSS, and JavaScript; produced motion graphics.',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Art Instructor',
    company: 'Young Rembrandts',
    points: [
      'Delivered interactive art lessons that boosted student engagement.',
      'Taught drawing and painting fundamentals and creative problem-solving.',
    ],
  },
]

const skillGroups = [
  { heading: 'Design', items: 'Figma, Photoshop, Illustrator, InDesign, After Effects, Dimension' },
  { heading: 'UI/UX', items: 'Wireframing, Prototyping, User Flows, IA, Usability Testing, Accessibility' },
  { heading: 'Development', items: 'HTML/CSS, JavaScript, React, Tailwind CSS, GSAP, React Native, WordPress' },
  { heading: 'Creative & 3D', items: 'Motion Design, Branding, Video Editing, 3D Design, Maya, Tinkercad' },
]

export default function ResumePage() {
  return (
    <main className="brand-gradient min-h-screen">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-0">
        <div className="pt-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-ink/80 transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} />
            Home
          </Link>
        </div>

        {/* Header */}
        <header className="pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-paper">
            Farnaz Gholami
          </h1>
          <p className="mt-2 text-lg font-medium text-paper/85">
            UI/UX &amp; Digital Designer
          </p>
          <p className="mt-1 text-sm font-light text-paper/70">
            Vancouver, BC, Canada
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT.mailto}
              className="inline-flex items-center gap-2 rounded-full border border-paper/60 px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <Mail className="size-4" strokeWidth={1.75} />
              Email
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/60 px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              <Download className="size-4" strokeWidth={1.75} />
              Download PDF
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="pt-10">
          <h2 className="text-base font-semibold tracking-wide text-paper">
            Profile
          </h2>
          <p className="mt-3 text-base font-light leading-relaxed text-paper/85">
            UI/UX and Digital Designer with a strong background in art, visual
            storytelling, and front-end development. I create modern digital
            experiences that feel meaningful, intuitive, and visually engaging —
            balancing aesthetics with functionality.
          </p>
        </section>

        {/* Experience */}
        <section className="pt-10">
          <h2 className="text-base font-semibold tracking-wide text-paper">
            Experience
          </h2>
          <div className="mt-5 flex flex-col gap-7">
            {experience.map((job) => (
              <div key={job.company}>
                <p className="text-xs font-light tracking-wide text-paper/55">
                  {job.period}
                </p>
                <h3 className="mt-1 text-base font-semibold text-paper">
                  {job.role}
                </h3>
                <p className="text-sm font-medium text-rose">{job.company}</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm font-light leading-relaxed text-paper/80 marker:text-rose">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="pt-10">
          <h2 className="text-base font-semibold tracking-wide text-paper">
            Skills &amp; Tools
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {skillGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm font-semibold text-paper">
                  {group.heading}
                </h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-paper/80">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  )
}
