"use client"

import Link from "next/link"
import { ArrowRight, Search, Target, Lightbulb, CheckCircle } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { useLanguage } from "@/contexts/language-context"

const processIcons = [Search, Target, Lightbulb, CheckCircle]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
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

        {/* Case Study Cards */}
        <div className="flex flex-col gap-16">
          {projects.map((base, index) => {
            const project = t.projects.items.find((p) => p.slug === base.slug)
            if (!project) return null

            return (
              <article
                key={base.id}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Card Header with Number and Category */}
                <div className="flex items-center justify-between border-b border-border px-8 py-5 bg-muted/50">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl font-bold text-primary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-8 w-px bg-border" />
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 lg:p-10">
                  {/* Title and Overview */}
                  <div className="mb-10">
                    <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
                      {project.overview}
                    </p>
                  </div>

                  {/* Problem and Solution Grid */}
                  <div className="grid gap-8 md:grid-cols-2 mb-10">
                    {/* Problem */}
                    <div className="rounded-xl border border-border bg-background p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                          <Target className="h-5 w-5 text-destructive" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {t.projectDetail.challenge}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="rounded-xl border border-border bg-background p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {t.projectDetail.solution}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Research Process */}
                  <div className="mb-10">
                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Search className="h-4 w-4 text-primary" />
                      {t.projectDetail.process}
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {project.process.map((phase, phaseIndex) => {
                        const Icon = processIcons[phaseIndex] || Search
                        return (
                          <div
                            key={phase.step}
                            className="relative rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/30"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Icon className="h-4 w-4 text-primary" />
                              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                                {phase.step}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {phase.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-8">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {t.projectDetail.results}
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/proyecto/${base.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
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
