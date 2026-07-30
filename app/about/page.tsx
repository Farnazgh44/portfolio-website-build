import Image from 'next/image'
import { Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CollapsibleSection } from '@/components/collapsible-section'
import { HobbyBook } from '@/components/hobby-book'
import { CONTACT } from '@/lib/site'

export const metadata = {
  title: 'About — Farnaz Gholami',
  description:
    'Farnaz Gholami is a UI/UX and Digital Designer based in Vancouver, designing thoughtful digital experiences through creativity, storytelling, and user-centered design.',
}

const biography = [
  'There are moments when I imagine what it would be like to be a bird, to soar above rivers, mountains, and cities, seeing the world from a different perspective. But the more I think about it, the more I realize that, in my own way, I already am one.',
  'I left my home country and flew across the world to Canada in search of opportunities, growth, and the chance to become the person I had always dreamed of being. It meant leaving behind my family, my comfort zone, and everything familiar, but it also meant embracing a future filled with possibility.',
  'That\'s why the hero section of this page holds a special meaning for me. The birds soaring freely through a sky painted in my favorite color, pink, represent more than just a beautiful scene. They reflect my journey, my freedom to dream, and the belief that sometimes the greatest flights begin with the courage to leave the nest.',
]

const experience = [
  {
    period: '2026 — Present',
    role: 'Zagrosia Structural Engineering INC',
    points: [
      'Designed responsive low- and high-fidelity wireframes and interactive prototypes to improve usability and user flow.',
      'Created modern UI designs, branding assets, and marketing materials focused on clean, user-centered experiences.',
      'Worked on graphic, digital, and web design solutions across both web and print platforms.',
    ],
  },
  {
    period: '2026 — Present',
    role: 'Dogwood Landscaping & Gardening',
    points: [
      'Led the end-to-end creative direction for the brand, including UI/UX design, branding, website development, and digital content creation.',
      'Designed responsive wireframes and modern user-centered web experiences focused on usability and visual consistency.',
      'Created branded marketing materials, social media assets, photography, and edited video content to maintain a cohesive brand identity.',
    ],
  },
  {
    period: '2024 — Present',
    role: 'New Media Design & Web Development',
    points: [
      'Designed and prototyped responsive websites in Figma with a strong user-centered approach.',
      'Created print and digital design assets using Photoshop, Illustrator, and InDesign.',
      'Produced storyboards, motion graphics, and video content using After Effects and Premiere Pro.',
      'Developed modern responsive websites with HTML, CSS, and JavaScript while collaborating on team-based creative projects.',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Young Rembrandts',
    points: [
      'Designed and delivered interactive art lessons that boosted student engagement.',
      'Taught fundamentals of drawing, painting, and creative expression.',
      'Developed activities that encouraged problem-solving and teamwork.',
    ],
  },
]

const skills = [
  {
    heading: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Dimension'],
  },
  {
    heading: 'UI/UX',
    items: [
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Information Architecture',
      'Usability Testing',
      'Responsive Design',
      'Accessibility',
    ],
  },
  {
    heading: 'Development',
    items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'GSAP', 'React Native', 'WordPress', 'WooCommerce'],
  },
  {
    heading: 'Creative & 3D',
    items: ['Motion Design', 'Branding', 'Video Editing', '3D Design', 'Maya', 'Tinkercad'],
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink">
      <SiteHeader />

        {/* Hero: full-bleed profile photo fading to black */}
        <section className="relative min-h-[92vh] overflow-hidden">
          {/* Layer 1: full-bleed background */}
          <Image
            src="/BG.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />

          {/* Layer 2: No BG.png — portrait cutout, sits in front of BG but behind gradient */}
          {/* ── MOBILE: change -translate-y-[20%] to move portrait up (increase %) or down (decrease %) ── */}
          {/* ── DESKTOP: md:translate-y-0 resets to original — do not edit the md: value ── */}
          <Image
            src="/No BG.png"
            alt="Portrait of Farnaz Gholami"
            fill
            sizes="100vw"
            className="object-contain object-[80%_100%] -translate-y-[20%] md:translate-y-0"
          />

          {/* Layer 3: gradient overlay — transparent at top -> solid ink at bottom */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,28,32,0)_0%,rgba(25,28,32,0)_25%,rgba(25,28,32,0.35)_50%,rgba(25,28,32,0.75)_72%,rgba(25,28,32,0.93)_88%,#191c20_100%)]" />

          {/* Text content — overlaid at bottom-left */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-10 md:pb-8 lg:px-16 xl:px-20 2xl:px-32">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-7xl lg:text-8xl">
              About
              <br />
              Me
            </h1>
            <p className="mt-4 text-lg font-bold text-paper md:text-2xl">
              Designer based in Vancouver.
            </p>
            <p className="mt-2 max-w-sm text-base font-light leading-relaxed text-paper/85 md:max-w-md md:text-lg">
              Designer focused on creating thoughtful, accessible digital experiences.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-12 items-center justify-center rounded-full bg-paper text-ink transition-transform hover:scale-105 md:size-14"
              >
                <span className="text-sm font-semibold lowercase md:text-base">in</span>
              </a>
              <a
                href={CONTACT.mailto}
                aria-label="Email"
                className="flex size-12 items-center justify-center rounded-full bg-paper text-ink transition-transform hover:scale-105 md:size-14"
              >
                <Mail className="size-5 md:size-6" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </section>

        {/* Collapsible sections with connector lines — continues black -> pink -> black */}
        <section className="brand-gradient flex flex-col px-6 pt-0 md:px-10 md:pt-0 lg:px-16 xl:px-20 2xl:px-32">
          {/* lead-in line — sits close under the social circles */}
          <span aria-hidden className="ml-6 mb-5 mt-1 h-56 w-px bg-paper/40" />

          <CollapsibleSection title="Biography" defaultOpen>
            <div className="space-y-4 text-base font-light leading-relaxed text-paper/85 md:max-w-4xl md:text-lg">
              {biography.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </CollapsibleSection>

          <span aria-hidden className="ml-6 my-4 h-16 w-px bg-paper/40" />

          <CollapsibleSection title="Experience" defaultOpen>
            <div className="space-y-7 md:max-w-4xl md:space-y-9">
              {experience.map((job) => (
                <div key={job.role}>
                  <p className="text-xs font-light tracking-wide text-paper/55 md:text-sm">
                    {job.period}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-paper md:text-xl">
                    {job.role}
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm font-light leading-relaxed text-paper/80 marker:text-rose md:mt-3 md:text-base">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <span aria-hidden className="ml-6 my-4 h-16 w-px bg-paper/40" />

          <CollapsibleSection title="Skills & Tools" defaultOpen>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4 md:gap-x-8">
              {skills.map((group) => (
                <div key={group.heading}>
                  <h3 className="text-sm font-semibold tracking-wide text-paper md:text-base">
                    {group.heading}
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm font-light text-paper/80 md:mt-3 md:text-base">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <span aria-hidden className="ml-6 my-4 h-16 w-px bg-paper/40" />

          <CollapsibleSection title="Hobbies" defaultOpen>
            <HobbyBook />
          </CollapsibleSection>
        </section>

        <SiteFooter />
    </main>
  )
}
