import { GraduationCap, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Sobre mí
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Diseño & Tecnología, un enfoque integral
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - text */}
          <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
            <p>
              Soy una apasionada del diseño de interfaces y la experiencia de
              usuario. Mi camino comenzó en el mundo del análisis de sistemas,
              donde aprendí a entender los problemas desde su raíz y a pensar
              soluciones de forma estructurada.
            </p>
            <p>
              Hoy combino esa formación técnica con mis habilidades creativas
              para diseñar productos digitales que no solo se ven bien, sino que
              funcionan de manera intuitiva y resuelven necesidades reales de los
              usuarios.
            </p>
            <p>
              Actualmente me encuentro cursando el último año de la carrera de
              Analista de Sistemas, lo que me da una perspectiva única: puedo
              hablar el mismo idioma con desarrolladores y stakeholders, generando
              puentes entre diseño y desarrollo.
            </p>
          </div>

          {/* Right column - highlights */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                Formación Técnica
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Analista de Sistemas (último año). Sólida base en lógica,
                bases de datos, ingeniería de software y metodologías ágiles.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                Visión de Diseño
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Especializada en UI/UX Design con foco en accesibilidad, design
                systems y experiencias centradas en el usuario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
