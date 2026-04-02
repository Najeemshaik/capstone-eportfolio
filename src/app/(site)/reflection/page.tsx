import type { Metadata } from "next"
import { Reveal } from "@/components/animations/reveal"

export const metadata: Metadata = {
  title: "Reflection",
  description:
    "A reflection on learning, growth, and the responsibilities of a professional engineer.",
}

export default function ReflectionPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 md:col-start-1">
          <Reveal className="mb-16">
            <p className="text-caption text-[var(--color-accent)] mb-4">Capstone Reflection</p>
            <h1 className="text-display-xl text-[var(--color-foreground)]">Reflection</h1>
          </Reveal>

          <div className="space-y-12 max-w-2xl">
            <Reveal>
              <h2 className="text-caption text-[var(--color-accent)] mb-4">The Design Process</h2>
              <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
                What this course made clear to me is that the design process is fundamentally iterative —
                not because iteration is an abstract principle, but because the first version of anything
                is almost certainly wrong. I learned this concretely through the Tremor Dashboard. We started
                with a React-based architecture that seemed reasonable on paper, but when we tested it against
                real high-frequency data streams, the framework&apos;s rendering overhead created jitter in the
                live waveform. The right answer wasn&apos;t to optimize around the problem — it was to rebuild with
                an architecture that matched the actual constraints. That decision cost time in the short term
                and produced a significantly better system. The design process, I now understand, is a commitment
                to making those corrections rather than defending early choices.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-caption text-[var(--color-accent)] mb-4">Attributes of an Engineer</h2>
              <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
                The attribute I came to value most in this course is honest technical judgment —
                the ability to assess what a system actually does, not what you intended it to do.
                It&apos;s easy to confuse specification with reality, especially under deadline pressure.
                The engineers I respect most have an almost uncomfortable relationship with their own work:
                they look for failure modes, test edge cases, and treat positive results with skepticism
                until the system has been challenged seriously. I also found that communication matters
                more than I expected. A technically excellent decision that can&apos;t be explained to a
                collaborator or stakeholder doesn&apos;t translate into a better outcome. Engineering is
                ultimately a collaborative discipline, and the ability to communicate precisely — about
                uncertainty, tradeoffs, and limitations — is as important as the technical work itself.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-caption text-[var(--color-accent)] mb-4">
                The Engineer&apos;s Role in Society
              </h2>
              <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
                Working on a clinical monitoring system for Parkinson&apos;s patients gave this question
                immediate weight. The people who would use the Tremor Dashboard aren&apos;t software engineers.
                They&apos;re neurologists, researchers, and ultimately patients. When I was designing the BLE
                latency warning thresholds, I wasn&apos;t making an aesthetic decision — I was making a decision
                about when a clinician should be informed that the data they&apos;re reading might be degraded.
                Getting that threshold wrong in either direction has real consequences. That experience
                clarified for me that engineering decisions are rarely purely technical. They involve
                assumptions about who will use the system, under what conditions, and with what level
                of expertise. The professional engineer&apos;s responsibility is to hold those assumptions
                accountable — to ask not just "does it work?" but "does it work for the people who will
                actually use it, in the conditions they&apos;ll actually face?"
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-caption text-[var(--color-accent)] mb-4">Strengths and Growth</h2>
              <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed">
                I bring a combination of technical depth and design sensibility that I think is genuinely
                rare. I can build complex systems — the Tremor Dashboard is the clearest evidence of that —
                and I care about how those systems feel to use. That combination tends to produce work that
                holds up at both the implementation and the experience level. My graphic design background
                makes me think about information hierarchy and interaction patterns that engineers without
                that background often don&apos;t notice until something feels wrong.\n\nThe area where I need the
                most growth is in formal verification and testing discipline. I wrote tests for the Tremor
                Dashboard&apos;s signal processing pipeline, but I didn&apos;t write them first. The value of test-driven
                development isn&apos;t theoretical to me anymore — I saw it directly in the places where I
                found defects through testing versus the places where I found them through user feedback.
                The latter is slower and more expensive. I intend to build a more rigorous testing practice
                going forward, both in terms of unit and integration coverage and in terms of making
                testing a first step rather than a final one.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
