import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 border-t border-border" />
      </div>
      <About />
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 border-t border-border" />
      </div>
      <Skills />
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 border-t border-border" />
      </div>
      <Process />
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 border-t border-border" />
      </div>
      <Projects />
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 border-t border-border" />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
