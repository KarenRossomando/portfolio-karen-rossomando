"use client"

import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {t.hero.subtitle}
        </p>

        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {t.hero.title}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {t.hero.description}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label={t.hero.scrollAriaLabel}
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scrollLabel}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
