import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react"
import { ArchitectureOverview, ArchitectureDataFlow } from "@/components/architecture-diagram"
import { projects, getProjectBySlug } from "@/data/projects"
import { Reveal } from "@/components/animations/reveal"
import { Badge } from "@/components/ui/badge"
import type { ProjectSection } from "@/types"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Najeem Shaik`,
      description: project.tagline,
    },
  }
}

function SectionHeading({ heading, subtitle }: { heading?: string; subtitle?: string }) {
  if (!heading) return null
  return (
    <div className="mb-6">
      <h2 className="font-display text-[var(--color-foreground)] text-2xl md:text-3xl mb-2">{heading}</h2>
      {subtitle && (
        <p className="text-[var(--color-muted-foreground)] text-sm">{subtitle}</p>
      )}
    </div>
  )
}

function ImageOrPlaceholder({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) {
  // Render actual image — if missing, Next.js will show broken image which signals to add it
  return <Image src={src} alt={alt} fill={fill} className={className} />
}

function renderSection(section: ProjectSection, index: number) {
  switch (section.type) {
    case "text":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          {section.content && (
            <div className="max-w-2xl">
              {section.content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[var(--color-muted-foreground)] text-base leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </Reveal>
      )

    case "video":
      return (
        <Reveal key={index} className="mb-16">
          <figure>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-muted)]">
              <video
                src={section.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            {section.videoCaption && (
              <figcaption className="text-caption text-[var(--color-muted-foreground)] mt-3 text-center italic">
                {section.videoCaption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      )

    case "full-width-image":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          {section.images?.[0] && (
            <figure>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1a1a2e] border border-[var(--color-border)]">
                <ImageOrPlaceholder
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              {section.images[0].caption && (
                <figcaption className="text-caption text-[var(--color-muted-foreground)] mt-3 text-center italic">
                  {section.images[0].caption}
                </figcaption>
              )}
            </figure>
          )}
        </Reveal>
      )

    case "comparison":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          {section.content && (
            <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed mb-6 max-w-2xl">
              {section.content}
            </p>
          )}
          {section.options && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.options.map((opt, i) => (
                <div
                  key={i}
                  className={`rounded-lg border p-6 ${
                    opt.selected
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                      : "border-[var(--color-border)]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-display text-[var(--color-foreground)] text-lg">{opt.title}</h3>
                    {opt.selected && (
                      <span className="text-[10px] tracking-wider uppercase text-[var(--color-accent)] border border-[var(--color-accent)] px-2 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {opt.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                        <Check size={14} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      )

    case "feature-grid":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          {section.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.features.map((feat, i) => (
                <div key={i} className="border border-[var(--color-border)] rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <ArrowRight size={14} className="text-[var(--color-accent)] mt-1 shrink-0" />
                    <div>
                      <h3 className="text-[var(--color-foreground)] text-sm font-medium mb-1">{feat.title}</h3>
                      <p className="text-[var(--color-muted-foreground)] text-sm">{feat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      )

    case "metrics-grid":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          {section.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)]">
              {section.metrics.map((metric, i) => (
                <div key={i} className="bg-[var(--color-background)] p-6">
                  <p className="font-display text-[var(--color-foreground)] text-2xl md:text-3xl mb-1">
                    {metric.value}
                  </p>
                  <p className="text-caption text-[var(--color-muted-foreground)]">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      )

    case "image":
      return (
        <Reveal key={index} className="mb-16">
          {section.images?.[0] && (
            <figure>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-muted)]">
                <ImageOrPlaceholder
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              {section.images[0].caption && (
                <figcaption className="text-caption text-[var(--color-muted-foreground)] mt-3">
                  {section.images[0].caption}
                </figcaption>
              )}
            </figure>
          )}
        </Reveal>
      )

    case "gallery":
      return (
        <Reveal key={index} className="mb-16">
          {section.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.images.map((img, i) => (
                <figure key={i}>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-muted)]">
                    <ImageOrPlaceholder
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="text-caption text-[var(--color-muted-foreground)] mt-3 italic">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </Reveal>
      )

    case "architecture-overview":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          <ArchitectureOverview />
        </Reveal>
      )

    case "architecture-dataflow":
      return (
        <Reveal key={index} className="mb-16">
          <SectionHeading heading={section.heading} subtitle={section.subtitle} />
          <ArchitectureDataFlow />
        </Reveal>
      )

    default:
      return null
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const allSlugs = projects.map((p) => p.slug)
  const currentIndex = allSlugs.indexOf(slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Back */}
      <Reveal className="mb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-caption text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors duration-200"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          All projects
        </Link>
      </Reveal>

      {/* Hero */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <Reveal>
            <p className="text-caption text-[var(--color-accent)] mb-4">{project.category}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-display-xl text-[var(--color-foreground)] mb-6">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] mb-8">{project.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-caption border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
          {project.links && project.links.length > 0 && (
            <Reveal delay={0.12}>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-caption text-[var(--color-foreground)] border border-[var(--color-border)] px-4 py-2 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {link.label}
                    <ExternalLink size={12} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* Metrics sidebar */}
        {project.metrics && (
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="border border-[var(--color-border)] divide-y divide-[var(--color-border)]">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-4">
                    <p className="font-display text-[var(--color-foreground)] text-xl mb-0.5">
                      {metric.value}
                    </p>
                    <p className="text-caption text-[var(--color-muted-foreground)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--color-border)] mb-20" />

      {/* Content sections */}
      <div>
        {project.sections.map((section, i) => renderSection(section, i))}
      </div>

      {/* Prev / Next */}
      <div className="border-t border-[var(--color-border)] mt-24 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col gap-1 hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <span className="text-caption text-[var(--color-muted-foreground)] flex items-center gap-1">
              <ArrowLeft size={12} strokeWidth={1.5} />
              Previous
            </span>
            <span className="font-display text-[var(--color-foreground)] text-xl group-hover:text-[var(--color-accent)] transition-colors duration-200">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-1 items-end md:text-right hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <span className="text-caption text-[var(--color-muted-foreground)] flex items-center gap-1">
              Next
              <ArrowRight size={12} strokeWidth={1.5} />
            </span>
            <span className="font-display text-[var(--color-foreground)] text-xl group-hover:text-[var(--color-accent)] transition-colors duration-200">
              {nextProject.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
