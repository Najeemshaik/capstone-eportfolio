import type { Metadata } from "next"
import Image from "next/image"
import { Reveal } from "@/components/animations/reveal"

export const metadata: Metadata = {
  title: "Reflection",
  description:
    "A reflection on learning, growth, and the responsibilities of a professional engineer.",
}

export default function ReflectionPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-16">
        <p className="text-caption text-[var(--color-accent)] mb-4">Capstone Reflection</p>
        <h1 className="text-display-xl text-[var(--color-foreground)]">Reflection</h1>
      </Reveal>

      {/* Capstone Media */}
      <Reveal className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-muted)]">
              <video
                src="/reflection/hardware-demo.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-caption text-[var(--color-muted-foreground)]">
              Hardware demo — sensor streaming tremor data in real time
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-muted)]">
              <Image
                src="/reflection/software-screenshot.png"
                alt="Tremor Dashboard software interface"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-caption text-[var(--color-muted-foreground)]">
              Software interface — live waveform, FFT spectrum, and clinical metrics
            </p>
          </div>
        </div>
      </Reveal>

      {/* Written Reflection */}
      <div className="max-w-2xl space-y-12">
        <Reveal>
          <h2 className="text-caption text-[var(--color-accent)] mb-4">The Design Process</h2>
          <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
            This course taught me that design is iterative not in theory, but in practice — the first
            version is almost certainly wrong. We started the Tremor Dashboard with a React-based
            architecture that caused waveform jitter under high-frequency data. Rather than patching it,
            we rewrote it in vanilla TypeScript with a custom MVC pattern. The connection layer evolved
            similarly — from Bluetooth-only to three transport modes as real constraints surfaced. That
            willingness to rebuild cost time but produced a fundamentally better system. I now see the
            design process as a commitment to correcting course rather than defending early choices.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-caption text-[var(--color-accent)] mb-4">Attributes of an Engineer</h2>
          <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
            The attribute I value most is honest technical judgment — assessing what a system actually
            does, not what you intended. Good engineers look for failure modes and treat positive results
            with skepticism. I also learned that communication is equally critical. A technically sound
            decision that can&apos;t be explained to a collaborator doesn&apos;t produce a better outcome.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-caption text-[var(--color-accent)] mb-4">
            The Engineer&apos;s Role in Society
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
            Building a clinical monitoring system for Parkinson&apos;s patients made this concrete. When
            I designed the BLE latency warning thresholds, I was deciding when a clinician should be
            told their data might be degraded — a decision with real consequences in either direction.
            Engineering decisions are rarely purely technical. The professional engineer&apos;s responsibility
            is to ask not just &quot;does it work?&quot; but &quot;does it work for the people who will
            actually use it?&quot;
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-caption text-[var(--color-accent)] mb-4">Strengths and Growth</h2>
          <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
            I bring a rare combination of technical depth and design sensibility — I can build complex
            systems and I care deeply about how they feel to use. My graphic design background shapes
            how I think about information hierarchy and interaction patterns. The area where I need
            growth is testing discipline — I wrote tests for the signal processing pipeline, but not
            first. I saw directly how defects caught by tests were cheaper than those caught by users.
            Going forward, I intend to make testing a first step rather than a final one.
          </p>
        </Reveal>
      </div>
    </div>
  )
}
