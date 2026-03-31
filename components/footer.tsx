export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-serif text-sm font-medium text-foreground">
          {'Portfolio.'}
        </p>
        <p className="text-xs text-muted-foreground">
          {'© 2026 — Diseñado con cariño y mucho café.'}
        </p>
      </div>
    </footer>
  )
}
