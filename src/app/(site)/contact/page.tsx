import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Najeem Shaik.",
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <Reveal>
            <h1 className="text-display-xl text-[var(--color-foreground)] mb-6">Contact</h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-xl">
              Open to internships, collaboration, or a good conversation about building things that matter.
            </p>
          </Reveal>
        </div>
      </div>

      <StaggerContainer className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
        {siteConfig.social.map((s) => (
          <StaggerItem key={s.platform}>
            <Link
              href={s.url}
              target={s.url.startsWith("mailto") ? undefined : "_blank"}
              rel={s.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between py-8 hover:bg-[var(--color-muted)] -mx-6 px-6 transition-colors duration-200"
            >
              <div>
                <p className="text-caption text-[var(--color-accent)] mb-1">{s.platform}</p>
                <p className="font-display text-[var(--color-foreground)] text-2xl">{s.label}</p>
              </div>
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
              />
            </Link>
          </StaggerItem>
        ))}

        <StaggerItem>
          <div className="flex items-center justify-between py-8">
            <div>
              <p className="text-caption text-[var(--color-accent)] mb-1">Phone</p>
              <p className="font-display text-[var(--color-foreground)] text-2xl">{siteConfig.phone}</p>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  )
}
