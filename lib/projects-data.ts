export interface ProjectBase {
  id: number
  slug: string
  color: string
  tools: string[]
}

export const projects: ProjectBase[] = [
  {
    id: 1,
    slug: "huellitas-adopcion",
    color: "bg-primary/10",
    tools: ["Figma", "FigJam", "Google Forms", "Miro", "Notion"],
  },
  {
    id: 2,
    slug: "sistema-turnos-medicos",
    color: "bg-chart-2/10",
    tools: ["Figma", "FigJam", "Miro", "Google Forms", "Notion"],
  },
]
