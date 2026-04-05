"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following image */}
      <AnimatePresence>
        {hoveredIndex !== null && projects[hoveredIndex]?.heroImage && projects[hoveredIndex]?.slug !== "tremor-dashboard" && (
          <motion.div
            key={hoveredIndex}
            className="hidden lg:block absolute w-[250px] h-[250px] rounded-2xl overflow-hidden pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
            style={{ left: springX, top: springY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={projects[hoveredIndex].heroImage!}
              alt={projects[hoveredIndex].title}
              fill
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project cards */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group block border-b border-[var(--color-border)] first:border-t"
          >
            <div className="py-8 md:py-10 flex flex-col gap-4 group-hover:pl-2 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-caption text-[var(--color-accent)]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed max-w-lg">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-[var(--color-muted-foreground)] mt-2 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-caption border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
