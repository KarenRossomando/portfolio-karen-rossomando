"use client"

import { Search, Network } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

const toolLogos: Record<string, string> = {
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "FigJam": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Miro": "https://cdn.worldvectorlogo.com/logos/miro-2.svg",
  "Maze": "/tools/maze.svg",
  "Notion": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
  "Google Analytics": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "Google Forms": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "ChatGPT": "/tools/chatgpt.svg",
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.skills.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.skills.heading}
          </h2>
        </div>

        {/* Skills columns */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* UX Research column */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {t.skills.researchLabel}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.skills.researchSkills.map((skill: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UX Architecture column */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {t.skills.architectureLabel}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.skills.architectureSkills.map((skill: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools section */}
        <div>
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {t.skills.toolsLabel}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {t.skills.tools.map((tool: string) => (
              <div
                key={tool}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="relative h-10 w-10 transition-transform group-hover:scale-110">
                  {toolLogos[tool] ? (
                    <Image
                      src={toolLogos[tool]}
                      alt={tool}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-primary/10 text-xs font-medium text-primary">
                      {tool.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
