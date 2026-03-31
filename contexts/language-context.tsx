"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import es from "@/lang/es.json"
import en from "@/lang/en.json"

type Language = "es" | "en"
type Translations = typeof es

interface LanguageContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null
    if (saved === "es" || saved === "en") {
      setLang(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLang(lang)
    localStorage.setItem("lang", lang)
  }

  const t = (language === "es" ? es : en) as Translations

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
