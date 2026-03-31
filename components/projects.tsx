"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Proyectos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Trabajos seleccionados
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Una selección de proyectos académicos y personales que reflejan mi
            proceso de diseño y mis habilidades técnicas.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/proyecto/${project.slug}`}
              target="_blank"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:gap-10">
                {/* Thumbnail area */}
                <div
                  className={`flex h-40 w-full shrink-0 items-center justify-center rounded-lg md:h-48 md:w-64 ${project.color} transition-all`}
                >
                  <span className="font-serif text-5xl font-bold text-primary/30">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <div className="mb-1 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-bold text-foreground sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all ${
                        hoveredId === project.id
                          ? "translate-x-0.5 -translate-y-0.5 text-primary"
                          : ""
                      }`}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Ver proyecto completo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
