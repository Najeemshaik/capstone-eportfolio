import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { Reveal } from "@/components/animations/reveal"
import { ProjectList } from "@/components/project-list"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work across AI, systems engineering, web development, and mobile.",
}

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-20">
        <h1 className="text-display-xl text-[var(--color-foreground)]">Projects</h1>
      </Reveal>

      <ProjectList projects={projects} />
    </div>
  )
}
