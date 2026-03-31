import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { ProjectDetail } from "@/lib/projects-data"

interface ProjectDetailContentProps {
  project: ProjectDetail
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portfolio
          </Link>
          <span className="font-serif text-sm font-bold text-foreground">
            {'KR.'}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-primary">
            {project.category}
          </span>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Banner visual */}
        <div
          className={`mb-16 flex h-48 items-center justify-center rounded-2xl sm:h-64 md:h-80 ${project.color}`}
        >
          <span className="font-serif text-7xl font-bold text-primary/20 sm:text-8xl md:text-9xl">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
            Resumen del proyecto
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </section>

        {/* Challenge & Solution */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-lg font-bold text-primary">{"?"}</span>
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
              El desafío
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
              <span className="text-lg font-bold text-accent">{"!"}</span>
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
              La solución
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
            Proceso de diseño
          </h2>
          <div className="relative flex flex-col gap-8">
            {project.process.map((step, index) => (
              <div key={step.step} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  {index < project.process.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                    {step.step}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools used */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
            Herramientas utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
            Resultados destacados
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-foreground">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
            {"¿Te interesa este proyecto?"}
          </h2>
          <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Si quieres saber más sobre mi proceso de diseño o colaborar en un
            proyecto, no dudes en contactarme.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contactar
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Ver todos los proyectos
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        Karen Rossomando &mdash; Diseñadora UI/UX & Analista de Sistemas
      </footer>
    </div>
  )
}
