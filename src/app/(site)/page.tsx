import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"
import { Reveal } from "@/components/animations/reveal"
import { ProjectList } from "@/components/project-list"

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
      <section className="min-h-[80vh] flex items-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div>
            <Reveal>
              <p className="text-caption text-[var(--color-accent)] mb-6">
                Najeem Shaik
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-xl text-[var(--color-foreground)] mb-6">
                Engineer, designer, builder.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-md mb-10">
                UBC electrical engineering meets a decade of design. I ship software that&apos;s both rigorous and human.
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
          </div>
          <Reveal delay={0.2} className="relative flex justify-end items-end h-[680px] overflow-hidden">
            <Image
              src="/assets/image.png"
              alt="Najeem Shaik"
              width={600}
              height={750}
              priority
              className="-scale-x-100 object-cover object-bottom"
            />
          </Reveal>
        </div>
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

        <ProjectList projects={featured} />
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
