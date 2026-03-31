"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Diseñadora UI/UX & Analista de Sistemas
        </p>

        <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Karen Rossomando
        </h1>

        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground sm:text-xl">
          Creando experiencias digitales con{" "}
          <span className="font-semibold text-primary">propósito</span>
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Combino mi formación técnica como Analista de Sistemas con mi pasión por
          el diseño centrado en el usuario para crear interfaces intuitivas,
          accesibles y visualmente atractivas.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Contactame
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Desplazar hacia abajo"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
