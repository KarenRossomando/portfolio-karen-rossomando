"use client"

import { Search, Target, Lightbulb, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const stepIcons = [Search, Target, Lightbulb, CheckCircle]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.process.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.process.heading}
          </h2>
        </div>

        {/* Process cards - desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            <div className="absolute top-16 left-[12.5%] h-0.5 w-1/4 bg-gradient-to-r from-primary to-primary/50" />
            
            {/* Cards grid */}
            <div className="relative grid grid-cols-4 gap-6">
              {t.process.steps.map((step: { title: string; items: string[] }, index: number) => {
                const Icon = stepIcons[index]
                return (
                  <div key={step.title} className="flex flex-col items-center">
                    {/* Icon circle */}
                    <div className="relative z-10 mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-border bg-background transition-all hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    
                    {/* Card content */}
                    <div className="w-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                      <h3 className="mb-4 text-center font-serif text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.items.map((item: string, itemIndex: number) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process cards - mobile/tablet */}
        <div className="lg:hidden">
          <div className="relative space-y-6">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            {t.process.steps.map((step: { title: string; items: string[] }, index: number) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.title} className="relative flex gap-6">
                  {/* Icon on timeline */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                    <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.items.map((item: string, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
