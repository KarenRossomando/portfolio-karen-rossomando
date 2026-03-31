import {
  Figma,
  Layout,
  Users,
  Layers,
  Monitor,
  Database,
  Code,
  FileSearch,
  PenTool,
  GitBranch,
} from "lucide-react"

const designSkills = [
  {
    name: "Figma",
    icon: Figma,
    description: "Diseño de interfaces, componentes y sistemas de diseño",
  },
  {
    name: "Wireframing",
    icon: Layout,
    description: "Estructuración y planificación de flujos de usuario",
  },
  {
    name: "Prototipado",
    icon: Layers,
    description: "Prototipos interactivos de alta y baja fidelidad",
  },
  {
    name: "User Research",
    icon: Users,
    description: "Investigación de usuarios, entrevistas y encuestas",
  },
  {
    name: "UI Design",
    icon: PenTool,
    description: "Diseño visual, tipografía, color y composición",
  },
  {
    name: "Usability Testing",
    icon: FileSearch,
    description: "Evaluación heurística y pruebas de usabilidad",
  },
]

const techSkills = [
  {
    name: "HTML / CSS",
    icon: Code,
    description: "Maquetado web y estilos responsivos",
  },
  {
    name: "Bases de Datos",
    icon: Database,
    description: "Modelado relacional y consultas SQL",
  },
  {
    name: "Análisis de Requerimientos",
    icon: FileSearch,
    description: "Relevamiento, documentación y especificación funcional",
  },
  {
    name: "Diagramas UML",
    icon: GitBranch,
    description: "Casos de uso, diagramas de clases y secuencia",
  },
]

function SkillCard({
  name,
  icon: Icon,
  description,
}: {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}) {
  return (
    <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-card-foreground">{name}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Habilidades
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Herramientas & Competencias
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Design skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Diseño UI/UX
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {designSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tech skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Análisis de Sistemas
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {techSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>

            {/* Tools badges */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Figjam",
                  "Adobe XD",
                  "Notion",
                  "Miro",
                  "Jira",
                  "Trello",
                  "Git",
                  "SQL",
                  "Draw.io",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
