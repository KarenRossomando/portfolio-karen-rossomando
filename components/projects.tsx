"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.projects.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.projects.heading}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.projects.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((base) => {
            const project = t.projects.items.find((p) => p.slug === base.slug)
            if (!project) return null

            return (
              <Link
                key={base.id}
                href={`/proyecto/${base.slug}`}
                onMouseEnter={() => setHoveredId(base.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Project cover placeholder */}
                <div
                  className={`relative flex h-56 items-center justify-center ${base.color} transition-all sm:h-64`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/20" />
                  <div className="relative text-center">
                    <span className="font-serif text-6xl font-bold text-primary/20 sm:text-7xl">
                      {String(base.id).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-xs font-medium uppercase tracking-widest text-primary/60">
                      Case Study
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                      <h3 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight
                      className={`mt-1 h-6 w-6 shrink-0 text-muted-foreground transition-all ${
                        hoveredId === base.id
                          ? "translate-x-1 -translate-y-1 text-primary"
                          : ""
                      }`}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                      {t.projects.viewProject}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
