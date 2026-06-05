"use client"

import { Search, Target, Lightbulb, TestTube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const stepIcons = [Search, Target, Lightbulb, TestTube]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.process.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.process.heading}
          </h2>
        </div>

        {/* Process cards with connector */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div
                  key={step.number}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Step number with icon */}
                  <div className="relative z-10 mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                      {step.number}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                    {step.title}
                  </h3>

                  {/* Items list */}
                  <ul className="flex flex-col gap-2">
                    {step.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow connector for mobile/tablet */}
                  {index < t.process.steps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-primary/40 sm:hidden">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
