import type { Metadata } from "next"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import {
  SiPython, SiCplusplus, SiSwift, SiTypescript, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiSupabase, SiPostgresql, SiSqlite,
  SiPytorch, SiOpencv, SiGit, SiLinux, SiBlender, SiFigma, SiC,
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa"
import { DiPhotoshop, DiIllustrator } from "react-icons/di"
import { Film } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Electrical engineering student at UBC, software engineer, and aspiring technical founder with a decade of design experience.",
}

const tools = [
  { name: "Python", icon: SiPython },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava },
  { name: "Swift", icon: SiSwift },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQLite", icon: SiSqlite },
  { name: "PyTorch", icon: SiPytorch },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "AWS", icon: FaAws },
  { name: "Blender", icon: SiBlender },
  { name: "Premiere", icon: Film },
  { name: "Photoshop", icon: DiPhotoshop },
  { name: "Illustrator", icon: DiIllustrator },
  { name: "Figma", icon: SiFigma },
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <Reveal className="mb-24">
        <h1 className="text-display-xl text-[var(--color-foreground)]">About</h1>
      </Reveal>

      {/* Background */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Background</h2>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-9">
          <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
            Electrical engineering at UBC, a decade of graphic design, and a drive to ship real products.
            I&apos;ve built industrial automation systems, deployed iOS apps with production ML pipelines,
            and won hackathons. The range is deliberate — great products need both technical depth and design taste.
          </p>
        </Reveal>
      </div>

      {/* Philosophy */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Philosophy</h2>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-9">
          <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
            The best technical work is inseparable from the experience of using it.
            A system that&apos;s architecturally sound but painful to use isn&apos;t finished.
            I&apos;m an engineer who cares about how things feel.
          </p>
        </Reveal>
      </div>

      {/* Ambition */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Ambition</h2>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-9">
          <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
            I want to build a product company that defines a category. B2B SaaS, AI-native tools,
            technically differentiated software where the engineering itself is the moat.
          </p>
        </Reveal>
      </div>

      {/* Outside Engineering */}
      <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Outside Engineering</h2>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-9">
          <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
            I produce music — commercial sample packs, 3K YouTube subscribers, 40K monthly viewers.
            Video editing, motion graphics, 3D work in Blender. Same sensibility: precision, taste, craft.
          </p>
        </Reveal>
      </div>

      {/* Skills & Tools */}
      <div className="mb-24 border-t border-[var(--color-border)] pt-16">
        <Reveal className="mb-12">
          <h2 className="text-display-md text-[var(--color-foreground)]">Skills & Tools</h2>
        </Reveal>
        <StaggerContainer staggerDelay={0.03} className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-8">
          {tools.map((tool) => (
            <StaggerItem
              key={tool.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                <tool.icon size={22} className="text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-200" />
              </div>
              <span className="text-[10px] tracking-wide uppercase text-[var(--color-muted-foreground)] text-center leading-tight">
                {tool.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Education */}
      <div className="border-t border-[var(--color-border)] pt-16">
        <Reveal>
          <h2 className="text-display-md text-[var(--color-foreground)] mb-10">Education</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <p className="text-caption text-[var(--color-muted-foreground)]">2021 — Present</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-[var(--color-foreground)] text-xl mb-1">
                University of British Columbia
              </p>
              <p className="text-[var(--color-muted-foreground)]">
                B.A.Sc. Electrical Engineering · Vancouver, BC
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
