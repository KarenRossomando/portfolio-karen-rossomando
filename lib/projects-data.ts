export interface ProjectBase {
  id: number
  slug: string
  color: string
  tools: string[]
}

export const projects: ProjectBase[] = [
  {
    id: 1,
    slug: "app-finanzas-personales",
    color: "bg-primary/10",
    tools: ["Figma", "FigJam", "Maze", "Google Forms", "Notion"],
  },
  {
    id: 2,
    slug: "plataforma-e-learning",
    color: "bg-chart-2/10",
    tools: ["Figma", "FigJam", "Maze", "Miro", "Optimal Workshop"],
  },
  {
    id: 3,
    slug: "dashboard-gestion",
    color: "bg-chart-3/10",
    tools: ["Figma", "FigJam", "Notion", "Zeroheight"],
  },
]
