"use client"

/* ───────────────────────── Overview Diagram ───────────────────────── */

export function ArchitectureOverview() {
  return (
    <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-muted)]/50">
        <p className="text-xs font-medium text-[var(--color-foreground)]">System Architecture — MVVM with Pub/Sub Store</p>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Row 1: Views */}
        <Layer
          label="Views"
          description="What the user sees and interacts with"
          color="accent"
        >
          <div className="flex flex-wrap gap-1.5">
            {["Waveform Canvas", "FFT Spectrum", "Clinical Metrics", "Controls", "Profiles", "Sessions", "Sequences", "Settings"].map((v) => (
              <Chip key={v}>{v}</Chip>
            ))}
          </div>
        </Layer>

        <FlowArrow />

        {/* Row 2: ViewModels */}
        <Layer
          label="ViewModels"
          description="Transform user intent into state changes"
        >
          <div className="flex flex-wrap gap-1.5">
            {["Visualization", "Connection", "Params", "Profiles", "Sequences", "Sessions"].map((vm) => (
              <Chip key={vm} mono>{vm}</Chip>
            ))}
          </div>
        </Layer>

        <FlowArrow />

        {/* Row 3: Store */}
        <Layer
          label="Store"
          description="Single source of truth — reactive pub/sub"
          color="accent"
        >
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
            {["connection", "params", "visualization", "metrics", "profiles", "sequences", "sessions", "playback"].map((s) => (
              <Chip key={s} mono small>{s}</Chip>
            ))}
          </div>
        </Layer>

        <FlowArrow />

        {/* Row 4: Services — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ServiceGroup label="Connectivity" items={[
            { text: "Bluetooth (GATT)", active: true },
            { text: "Web Serial", active: true },
            { text: "Python WebSocket", active: true },
            { text: "Mock Generator" },
          ]} />
          <ServiceGroup label="Processing" items={[
            { text: "256-bin FFT" },
            { text: "Hann Window" },
            { text: "RMS / Peak" },
            { text: "10 Metrics" },
          ]} />
          <ServiceGroup label="Persistence" items={[
            { text: "SQLite WASM" },
            { text: "Supabase" },
            { text: "Write Queue" },
            { text: "Export" },
          ]} />
          <ServiceGroup label="Core" items={[
            { text: "Math" },
            { text: "Formatting" },
            { text: "ID Gen" },
            { text: "Toast" },
          ]} />
        </div>

        <FlowArrow />

        {/* Row 5: External */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: "◉", label: "BLE Sensor" },
            { icon: "◉", label: "USB / FTDI" },
            { icon: "◈", label: "Python Sim" },
            { icon: "☁", label: "Supabase Cloud" },
          ].map((ext) => (
            <div key={ext.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-muted-foreground)]">
              <span className="text-[var(--color-accent)]">{ext.icon}</span>
              {ext.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────── Data Flow Diagram ──────────────────────── */

export function ArchitectureDataFlow() {
  return (
    <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-muted)]/50">
        <p className="text-xs font-medium text-[var(--color-foreground)]">Data Pipeline — Sensor Sample to Persistence</p>
      </div>

      <div className="p-6 md:p-8">
        {/* Steps */}
        <div className="space-y-8">
          <Step n="1" title="Acquire" sub="Sensor → raw signal">
            <div className="flex flex-wrap gap-1.5">
              <Chip active>BLE GATT</Chip>
              <Chip active>Web Serial</Chip>
              <Chip>WebSocket</Chip>
              <Chip>Mock</Chip>
            </div>
          </Step>

          <StepConnector />

          <Step n="2" title="Normalize" sub="Protocol → unified format">
            <div className="inline-flex items-center gap-3">
              <code className="text-[11px] px-3 py-1.5 rounded border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 text-[var(--color-accent)]">
                ImuSample {"{"} t, ax, ay, az, gx, gy, gz {"}"}
              </code>
              <span className="text-[10px] text-[var(--color-muted-foreground)]">25–200 Hz</span>
            </div>
          </Step>

          <StepConnector />

          <Step n="3" title="Buffer" sub="Distribute to 6 axis channels">
            <div className="flex gap-1.5">
              {["ax", "ay", "az", "gx", "gy", "gz"].map((a) => (
                <div
                  key={a}
                  className={`flex-1 text-center py-1.5 rounded text-[11px] font-mono border ${
                    a === "gx"
                      ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 text-[var(--color-accent)]"
                      : "border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                  }`}
                >
                  {a}
                </div>
              ))}
            </div>
          </Step>

          <StepConnector split />

          {/* Split into two parallel paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Step n="4a" title="Process" sub="Signal analysis every 500ms" nested>
              <div className="space-y-1.5">
                <PipelineItem>256-sample Hann-windowed DFT</PipelineItem>
                <PipelineItem>Dominant frequency extraction (4–12 Hz)</PipelineItem>
                <PipelineItem>RMS, SNR, peak-to-peak, bandwidth</PipelineItem>
                <PipelineItem highlight>10 clinical metrics → UPDRS score</PipelineItem>
              </div>
            </Step>

            <Step n="4b" title="Render" sub="Canvas drawing @ 60fps" nested>
              <div className="space-y-1.5">
                <PipelineItem highlight>Live waveform (gain / window control)</PipelineItem>
                <PipelineItem highlight>FFT bar spectrum</PipelineItem>
                <PipelineItem>Color-coded metric indicators</PipelineItem>
                <PipelineItem>Latency / PER diagnostics</PipelineItem>
              </div>
            </Step>
          </div>

          <StepConnector />

          <Step n="5" title="Persist" sub="Debounced write (350ms) to local + cloud">
            <div className="grid grid-cols-3 gap-1.5">
              <Chip>SQLite WASM</Chip>
              <Chip>Supabase REST</Chip>
              <Chip>Raw CSV file</Chip>
            </div>
          </Step>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────── Shared Components ──────────────────────── */

function Layer({ label, description, color, children }: {
  label: string
  description: string
  color?: "accent"
  children: React.ReactNode
}) {
  return (
    <div className={`rounded-lg border p-4 ${
      color === "accent"
        ? "border-[var(--color-accent)]/15 bg-[var(--color-accent)]/[0.03]"
        : "border-[var(--color-border)] bg-[var(--color-background)]"
    }`}>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-xs font-medium text-[var(--color-foreground)]">{label}</span>
        <span className="text-[10px] text-[var(--color-muted-foreground)]">{description}</span>
      </div>
      {children}
    </div>
  )
}

function ServiceGroup({ label, items }: {
  label: string
  items: { text: string; active?: boolean }[]
}) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] p-3">
      <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)] mb-2.5 font-medium">{label}</p>
      <div className="space-y-1.5">
        {items.map((item) => (
          <div
            key={item.text}
            className={`text-[11px] px-2.5 py-1.5 rounded ${
              item.active
                ? "bg-[var(--color-accent)]/5 text-[var(--color-accent)] border border-[var(--color-accent)]/15"
                : "bg-[var(--color-muted)]/50 text-[var(--color-muted-foreground)]"
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

function Chip({ children, mono, small, active }: {
  children: React.ReactNode
  mono?: boolean
  small?: boolean
  active?: boolean
}) {
  return (
    <span className={`
      inline-block rounded border px-2.5 py-1 leading-none
      ${small ? "text-[10px]" : "text-[11px]"}
      ${mono ? "font-mono" : ""}
      ${active
        ? "border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 text-[var(--color-accent)]"
        : "border-[var(--color-border)] text-[var(--color-muted-foreground)]"
      }
    `}>
      {children}
    </span>
  )
}

function FlowArrow() {
  return (
    <div className="flex justify-center">
      <svg width="2" height="20" className="text-[var(--color-border)]">
        <line x1="1" y1="0" x2="1" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="1,20 -2,14 4,14" fill="currentColor" />
      </svg>
    </div>
  )
}

function Step({ n, title, sub, nested, children }: {
  n: string
  title: string
  sub: string
  nested?: boolean
  children: React.ReactNode
}) {
  const content = (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-semibold shrink-0">{n}</span>
        <div>
          <span className="text-xs font-medium text-[var(--color-foreground)]">{title}</span>
          <span className="text-[10px] text-[var(--color-muted-foreground)] ml-2">{sub}</span>
        </div>
      </div>
      {children}
    </>
  )

  if (nested) {
    return (
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4">
        {content}
      </div>
    )
  }

  return <div>{content}</div>
}

function StepConnector({ split }: { split?: boolean }) {
  return (
    <div className="flex justify-center">
      <svg width={split ? "120" : "2"} height="20" className="text-[var(--color-border)]">
        {split ? (
          <>
            <line x1="60" y1="0" x2="60" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="8" x2="100" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="8" x2="100" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="20,20 17,14 23,14" fill="currentColor" />
            <polygon points="100,20 97,14 103,14" fill="currentColor" />
          </>
        ) : (
          <>
            <line x1="1" y1="0" x2="1" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="1,20 -2,14 4,14" fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  )
}

function PipelineItem({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`text-[11px] px-3 py-2 rounded flex items-center gap-2 ${
      highlight
        ? "bg-[var(--color-accent)]/5 text-[var(--color-accent)] border border-[var(--color-accent)]/15"
        : "bg-[var(--color-muted)]/50 text-[var(--color-muted-foreground)]"
    }`}>
      <span className={`w-1 h-1 rounded-full shrink-0 ${highlight ? "bg-[var(--color-accent)]" : "bg-[var(--color-muted-foreground)]/40"}`} />
      {children}
    </div>
  )
}
