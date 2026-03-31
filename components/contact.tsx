"use client"

import { Mail, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Contacto
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {'¿Trabajamos juntos?'}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Si estás buscando una diseñadora UI/UX con visión técnica, o
              simplemente querés charlar sobre diseño y tecnología, no dudes en
              contactarme.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:hola@tucorreo.com"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">hola@tucorreo.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/tu-perfil</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - form */}
          <form
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                className="rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Contame sobre tu proyecto..."
                className="resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
