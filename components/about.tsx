"use client"

import { Search, Target, Layers, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const cardIcons = [Search, Target, Layers, CheckCircle]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.about.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - text */}
          <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
          </div>

          {/* Right column - cards grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.cards.map((card, index) => {
              const Icon = cardIcons[index]
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
