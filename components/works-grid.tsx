'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { SocialProjectCard } from '@/components/social-project-card'
import type { Project } from '@/lib/projects'
import type { SocialCard } from '@/lib/social-projects'

type FilterTab = 'All' | 'UI/UX' | 'Social Media'

const TABS: FilterTab[] = ['All', 'UI/UX', 'Social Media']

export function WorksGrid({
  projects,
  socialProjects,
}: {
  projects: Project[]
  socialProjects: SocialCard[]
}) {
  const [filter, setFilter] = useState<FilterTab>('All')

  const uiuxProjects = projects.filter(
    (p) => !p.filterCategory || p.filterCategory === 'UI/UX'
  )
  const socialFromLib = projects.filter((p) => p.filterCategory === 'Social Media')

  const showUIUX = filter === 'All' || filter === 'UI/UX'
  const showSocial = filter === 'All' || filter === 'Social Media'

  return (
    <section className="px-6 pt-10 md:px-10 md:pt-14 lg:px-16 xl:px-20 2xl:px-32">
      {/* Filter tabs */}
      <div className="flex gap-2 mb-8 md:mb-10 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium tracking-wide transition-colors ${
              filter === tab
                ? 'bg-paper text-ink'
                : 'border border-paper/30 text-paper/70 hover:border-paper/60 hover:text-paper'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        {showUIUX &&
          uiuxProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`/works/${project.slug}`}
            />
          ))}
        {showSocial &&
          socialFromLib.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`/works/${project.slug}`}
            />
          ))}
        {showSocial &&
          socialProjects.map((card) => (
            <SocialProjectCard key={card.id} card={card} />
          ))}
      </div>
    </section>
  )
}
