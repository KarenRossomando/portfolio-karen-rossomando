import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import { ProjectDetailContent } from "@/components/project-detail"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} | Karen Rossomando`,
    description: project.overview.slice(0, 160),
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}
