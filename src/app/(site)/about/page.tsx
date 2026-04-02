import type { Metadata } from "next"
import { Reveal } from "@/components/animations/reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export const metadata: Metadata = {
  title: "About",
  description:
    "Electrical engineering student at UBC, software engineer, and aspiring technical founder with a decade of design experience.",
}

const skills = [
  {
    category: "Languages",
    items: ["Python", "C", "C++", "Java", "Swift", "TypeScript", "SQL", "MATLAB"],
  },
  {
    category: "AI / ML",
    items: ["Computer Vision", "YOLOv8", "PyTorch", "Vertex AI", "Gemini API", "LLM Workflows"],
  },
  {
    category: "Web / Backend",
    items: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "SQLite", "REST APIs"],
  },
  {
    category: "Systems",
    items: ["Web Bluetooth", "PLCs", "OPC UA", "RS485", "Linux", "Embedded Systems"],
  },
  {
    category: "Tools",
    items: ["Git", "Bash", "AWS", "AutoCAD Electrical", "EPLAN", "ETAP", "TIA Portal"],
  },
  {
    category: "Creative",
    items: ["Blender", "Premiere Pro", "Photoshop", "Illustrator"],
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-8">
          <h1 className="text-display-xl text-[var(--color-foreground)]">About</h1>
        </Reveal>
      </div>

      {/* Background */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Background</h2>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] mb-6 max-w-2xl">
              I&apos;m studying Electrical & Computer Engineering at UBC. I&apos;ve been building software for years —
              not just coursework, but deployed products with real users. My background isn&apos;t purely technical:
              I&apos;ve spent over a decade doing graphic design, and that sensibility runs through everything I build.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
              The combination isn&apos;t incidental. Great products come from engineers who understand design and
              designers who understand constraints. I care about both. I&apos;ve worked as an electrical engineering
              intern building industrial automation systems, and I&apos;ve shipped iOS apps with production machine
              learning pipelines. The range is deliberate.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Philosophy */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Philosophy</h2>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
              I believe the best technical work is inseparable from the experience of using it.
              A system that&apos;s architecturally sound but painful to use isn&apos;t finished. A product
              that feels beautiful but breaks under load isn&apos;t serious. The job is to do both,
              simultaneously, at a standard that makes people notice. I&apos;m a UX/UI enthusiast who
              actually ships — and an engineer who cares about how things feel.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Ambition */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Ambition</h2>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
              I want to build a company. Not a side project or a lifestyle business — a product company
              that defines a category. I&apos;m most interested in B2B SaaS, AI-native tools, and technically
              differentiated software where the engineering itself is the moat. The playbook is: build
              something that only someone with this specific combination of skills can build, and build
              it to a standard that makes the incumbents look embarrassed.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Creative */}
      <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[var(--color-border)] pt-16">
        <Reveal className="md:col-span-3">
          <h2 className="text-caption text-[var(--color-accent)] pt-1">Outside Engineering</h2>
        </Reveal>
        <div className="md:col-span-9">
          <Reveal delay={0.05}>
            <p className="text-body-lg text-[var(--color-muted-foreground)] max-w-2xl">
              I produce music — commercial sample packs distributed to producers worldwide, with a YouTube
              channel at 3,000 subscribers and 40,000 monthly viewers. I also do video editing, motion
              graphics, and 3D work in Blender. These aren&apos;t hobbies that exist separately from the
              engineering; the same sensibility — precision, taste, craft — runs through all of it.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-24 border-t border-[var(--color-border)] pt-16">
        <Reveal className="mb-12">
          <h2 className="text-display-md text-[var(--color-foreground)]">Skills & Tools</h2>
        </Reveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[var(--color-border)]">
          {skills.map((group) => (
            <StaggerItem
              key={group.category}
              className="border-b border-r border-[var(--color-border)] p-6"
            >
              <p className="text-caption text-[var(--color-accent)] mb-3">{group.category}</p>
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                {group.items.join(" · ")}
              </p>
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
              <p className="text-[var(--color-muted-foreground)] mb-4">
                B.A.Sc. Electrical Engineering · Vancouver, BC
              </p>
              <p className="text-caption text-[var(--color-muted-foreground)]">
                Relevant Courses: Object-Oriented Programming · Internet of Things · Industrial Automation ·
                VLSI Design · Linear Algebra
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
