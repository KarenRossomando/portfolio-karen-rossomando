"use client"

import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {t.projects.label}
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {t.projects.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.projects.intro}
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((base, index) => {
            const project = t.projects.items.find((p) => p.slug === base.slug)
            if (!project) return null

            return (
              <article
                key={base.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Minimal Cover Placeholder */}
                <div className={`relative h-48 ${base.color} flex items-center justify-center border-b border-border`}>
                  <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
                    <FileText className="h-12 w-12" strokeWidth={1} />
                    <span className="text-xs font-medium uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-serif text-5xl font-bold text-foreground/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-8">
                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* UX Skill Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/proyecto/${base.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
                  >
                    {t.projects.viewProject}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
