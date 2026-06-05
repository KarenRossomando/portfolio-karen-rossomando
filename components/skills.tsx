"use client"

import {
  Users,
  TestTube,
  Network,
  Workflow,
  LayoutTemplate,
  BarChart3,
  FileText,
  ClipboardList,
  TrendingUp,
  GitBranch,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const designIcons = [Users, TestTube, Network, Workflow, LayoutTemplate, BarChart3]
const techIcons = [ClipboardList, FileText, TrendingUp, GitBranch]

const tools = [
  "Figma", "Figjam", "Miro", "Notion", "Maze",
  "Optimal Workshop", "Dovetail", "Hotjar", "Google Analytics", "Jira",
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
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.skills.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.skills.heading}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Design skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t.skills.designLabel}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.skills.designSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={designIcons[index]}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          {/* Tech skills */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t.skills.techLabel}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.skills.techSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={techIcons[index]}
                  description={skill.description}
                />
              ))}
            </div>

            {/* Tools badges */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t.skills.toolsLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
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
