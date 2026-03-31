import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import { ProjectDetailContent } from "@/components/project-detail"
import type { Metadata } from "next"
import esTranslations from "@/lang/es.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const projectT = esTranslations.projects.items.find((p) => p.slug === slug)

  if (!projectT) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${projectT.title} | Karen Rossomando`,
    description: projectT.overview.slice(0, 160),
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const base = projects.find((p) => p.slug === slug)

  if (!base) {
    notFound()
  }

  return (
    <ProjectDetailContent
      slug={base.slug}
      color={base.color}
      id={base.id}
      tools={base.tools}
    />
  )
}
