import { Search, PenTool, Layers, TestTube } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Investigación",
    description:
      "Entender el problema, los usuarios y el contexto. User research, benchmarking y análisis de requerimientos.",
    icon: Search,
  },
  {
    number: "02",
    title: "Ideación",
    description:
      "Wireframes de baja y alta fidelidad. Definición de flujos, arquitectura de información y user flows.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Diseño",
    description:
      "Prototipos interactivos en Figma. Design system, componentes reutilizables y especificaciones visuales.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Validación",
    description:
      "Testing de usabilidad, iteración basada en feedback real y handoff detallado para desarrollo.",
    icon: TestTube,
  },
]

export function Process() {
  return (
    <section id="proceso" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Proceso
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Mi forma de trabajar
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <span className="mb-4 block font-serif text-4xl font-bold text-primary/20">
                {step.number}
              </span>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
