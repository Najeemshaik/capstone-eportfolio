import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Badge } from "@/components/ui/badge"

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

      <StaggerContainer className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {projects.map((project, i) => (
          <StaggerItem key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 hover:bg-[var(--color-muted)] -mx-6 px-6 transition-colors duration-200"
            >
              <div className="md:col-span-1 flex items-start pt-1">
                <span className="text-caption text-[var(--color-muted-foreground)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-caption text-[var(--color-accent)] mb-2">{project.category}</p>
                <h2 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed max-w-lg">
                  {project.tagline}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-caption border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.metrics && project.metrics[0] && (
                  <div>
                    <p className="text-xl font-display text-[var(--color-foreground)]">
                      {project.metrics[0].value}
                    </p>
                    <p className="text-caption text-[var(--color-muted-foreground)]">
                      {project.metrics[0].label}
                    </p>
                  </div>
                )}
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200"
                />
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
