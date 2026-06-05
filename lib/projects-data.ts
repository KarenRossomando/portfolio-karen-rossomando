export interface ProjectBase {
  id: number
  slug: string
  color: string
  tools: string[]
}

export const projects: ProjectBase[] = [
  {
    id: 1,
    slug: "sistema-turnos-medicos",
    color: "bg-primary/10",
    tools: ["Figma", "FigJam", "Miro", "Google Forms", "Notion"],
  },
  {
    id: 2,
    slug: "huellitas-adopcion",
    color: "bg-chart-2/10",
    tools: ["Figma", "FigJam", "Optimal Workshop", "Maze", "Dovetail"],
  },
]
