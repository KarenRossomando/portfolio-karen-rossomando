"use client"

import { Search, Target, PenTool, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const cardIcons = [Search, Target, PenTool, CheckCircle]

export function About() {
  const { t } = useLanguage()

  const cards = [
    { title: t.about.card1Title, text: t.about.card1Text },
    { title: t.about.card2Title, text: t.about.card2Text },
    { title: t.about.card3Title, text: t.about.card3Text },
    { title: t.about.card4Title, text: t.about.card4Text },
  ]

  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            {t.about.label}
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.about.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.about.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = cardIcons[index]
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
