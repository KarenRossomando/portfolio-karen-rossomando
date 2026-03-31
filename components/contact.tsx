"use client"

import { useState } from "react"
import { Mail, Send, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()

      toast.success(t.contact.successMessage)
      reset()
    } catch {
      toast.error(t.contact.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {t.contact.label}
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {t.contact.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t.contact.intro}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:karen.rss.cv@gmail.com"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.emailLabel}</p>
                  <p className="text-xs text-muted-foreground">karen.rss.cv@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/karenrossomando/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.linkedinLabel}</p>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/karenrossomando</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - form */}
          <form
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                {...register("name")}
                className={`rounded-lg border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                  errors.name ? "border-destructive" : "border-border focus:border-primary"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{t.contact.fieldRequired}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {t.contact.emailFieldLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                {...register("email")}
                className={`rounded-lg border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                  errors.email ? "border-destructive" : "border-border focus:border-primary"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{t.contact.fieldRequired}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                {...register("message")}
                className={`resize-none rounded-lg border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary ${
                  errors.message ? "border-destructive" : "border-border focus:border-primary"
                }`}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{t.contact.fieldRequired}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {loading ? t.contact.sending : t.contact.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
