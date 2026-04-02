import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Najeem Shaik — Engineering & Design",
  description:
    "Electrical engineering student at UBC. Building software at the intersection of engineering, design, and product.",
}

const credibilityMarkers = [
  "UBC Electrical Engineering",
  "1st Place — UBC Hackathon",
  "400k+ Image Dataset",
  "Deployed iOS App",
  "Finning Canada Engineering Intern",
]

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col justify-center py-24">
        <Reveal>
          <p className="text-caption text-[var(--color-accent)] mb-6">
            Najeem Shaik
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display-xl text-[var(--color-foreground)] max-w-4xl mb-8">
            Engineering systems that people actually want to use.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-xl mb-12">
            Electrical engineering student at UBC. Software engineer. Aspiring technical founder.
            I build at the intersection of engineering precision and product obsession.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-caption text-[var(--color-foreground)] border border-[var(--color-border)] px-5 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              View work
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-caption text-[var(--color-muted-foreground)] px-5 py-3 hover:text-[var(--color-foreground)] transition-colors duration-200"
            >
              About me
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Credibility signals */}
      <Reveal>
        <div className="border-t border-b border-[var(--color-border)] py-5 mb-32 overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            {credibilityMarkers.map((marker, i) => (
              <span key={i} className="text-caption text-[var(--color-muted-foreground)] shrink-0">
                {marker}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Selected Work */}
      <section className="mb-32">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-display-md text-[var(--color-foreground)]">Selected Work</h2>
            <Link
              href="/projects"
              className="text-caption text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors duration-200 link-underline"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[var(--color-border)]">
          {/* Large card */}
          {featured[0] && (
            <StaggerItem className="md:col-span-7 bg-[var(--color-background)]">
              <Link
                href={`/projects/${featured[0].slug}`}
                className="group block p-8 h-full min-h-64 hover:bg-[var(--color-muted)] transition-colors duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-caption text-[var(--color-accent)] mb-3">
                      {featured[0].category}
                    </p>
                    <h3 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                      {featured[0].title}
                    </h3>
                    <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-6 max-w-sm">
                      {featured[0].tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured[0].techStack.slice(0, 4).map((tech) => (
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
            </StaggerItem>
          )}

          {/* Small card */}
          {featured[1] && (
            <StaggerItem className="md:col-span-5 bg-[var(--color-background)]">
              <Link
                href={`/projects/${featured[1].slug}`}
                className="group block p-8 h-full min-h-64 hover:bg-[var(--color-muted)] transition-colors duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-caption text-[var(--color-accent)] mb-3">
                      {featured[1].category}
                    </p>
                    <h3 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                      {featured[1].title}
                    </h3>
                    <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-6">
                      {featured[1].tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured[1].techStack.slice(0, 3).map((tech) => (
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
            </StaggerItem>
          )}

          {/* Bottom row */}
          {featured[2] && (
            <StaggerItem className="md:col-span-5 bg-[var(--color-background)]">
              <Link
                href={`/projects/${featured[2].slug}`}
                className="group block p-8 h-full min-h-56 hover:bg-[var(--color-muted)] transition-colors duration-300"
              >
                <p className="text-caption text-[var(--color-accent)] mb-3">
                  {featured[2].category}
                </p>
                <h3 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {featured[2].title}
                </h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                  {featured[2].tagline}
                </p>
              </Link>
            </StaggerItem>
          )}

          {featured[3] && (
            <StaggerItem className="md:col-span-7 bg-[var(--color-background)]">
              <Link
                href={`/projects/${featured[3].slug}`}
                className="group block p-8 h-full min-h-56 hover:bg-[var(--color-muted)] transition-colors duration-300"
              >
                <p className="text-caption text-[var(--color-accent)] mb-3">
                  {featured[3].category}
                </p>
                <h3 className="text-display-md text-[var(--color-foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {featured[3].title}
                </h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed max-w-sm">
                  {featured[3].tagline}
                </p>
              </Link>
            </StaggerItem>
          )}
        </StaggerContainer>
      </section>

      {/* Brief About */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <Reveal className="md:col-span-3">
          <h2 className="text-display-md text-[var(--color-foreground)]">About</h2>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] mb-8 max-w-2xl">
              I&apos;m an electrical engineering student at UBC with a decade of graphic design experience
              and a compulsion to ship products that are both technically rigorous and genuinely
              well-designed. I want to build category-defining software — not incrementally better tools.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-caption text-[var(--color-accent)] hover:gap-3 transition-all duration-200"
            >
              Read more
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
