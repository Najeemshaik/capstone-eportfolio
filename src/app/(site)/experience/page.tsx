import type { Metadata } from "next"
import Image from "next/image"
import { experiences } from "@/data/experience"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience across electrical engineering, automation systems, and creative production.",
}

export default function ExperiencePage() {
  const engineering = experiences.filter((e) => e.type === "engineering")
  const creative = experiences.filter((e) => e.type === "creative")

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-20">
        <h1 className="text-display-xl text-[var(--color-foreground)]">Experience</h1>
      </Reveal>

      {/* Engineering */}
      <div className="mb-24">
        <Reveal className="mb-12">
          <h2 className="text-caption text-[var(--color-accent)]">Engineering</h2>
        </Reveal>

        <StaggerContainer className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {engineering.map((exp) => (
            <StaggerItem key={exp.company}>
              <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <p className="text-caption text-[var(--color-muted-foreground)] mb-1">{exp.period}</p>
                  {exp.location && (
                    <p className="text-caption text-[var(--color-muted-foreground)]">{exp.location}</p>
                  )}
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-4 mb-1">
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={120}
                        height={32}
                        className="object-contain h-8 w-auto"
                      />
                    )}
                    <h3 className="font-display text-[var(--color-foreground)] text-2xl">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-caption text-[var(--color-accent)] mb-4">{exp.role}</p>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-6 max-w-xl">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[var(--color-muted-foreground)]">
                        <span className="text-[var(--color-accent)] shrink-0 mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Creative */}
      <div className="border-t border-[var(--color-border)] pt-16">
        <Reveal className="mb-12">
          <h2 className="text-caption text-[var(--color-accent)]">Creative</h2>
        </Reveal>

        <StaggerContainer className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {creative.map((exp) => (
            <StaggerItem key={exp.company}>
              <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <p className="text-caption text-[var(--color-muted-foreground)]">{exp.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-[var(--color-foreground)] text-2xl mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-caption text-[var(--color-accent)] mb-4">{exp.role}</p>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-6 max-w-xl">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[var(--color-muted-foreground)]">
                        <span className="text-[var(--color-accent)] shrink-0 mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
