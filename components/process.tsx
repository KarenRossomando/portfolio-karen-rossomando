"use client"

import { Search, Target, Lightbulb, Layers, FlaskConical } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const stepIcons = [Search, Target, Lightbulb, Layers, FlaskConical]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.process.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.process.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.process.intro}
          </p>
        </div>

        {/* Timeline layout for desktop */}
        <div className="hidden lg:block">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-border" />
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" style={{ width: '20%' }} />
          </div>
          
          {/* Steps */}
          <div className="relative grid grid-cols-5 gap-6">
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Icon circle on timeline */}
                  <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-border bg-background transition-all hover:border-primary hover:bg-primary/5">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    {step.number}
                  </span>
                  
                  {/* Step title */}
                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Step description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Card layout for mobile/tablet */}
        <div className="lg:hidden">
          <div className="relative space-y-6">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.number} className="relative flex gap-6">
                  {/* Icon on timeline */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-primary">
                      {step.number}
                    </span>
                    <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
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
