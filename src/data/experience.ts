import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    company: "Finning Canada",
    role: "Electrical Engineering Intern",
    period: "Apr 2023 – Aug 2024",
    location: "Vancouver, BC",
    logo: "/images/logos/finning.png",
    description:
      "Built production-grade automation and monitoring infrastructure for heavy equipment service operations.",
    highlights: [
      "Built web-based HMI integrating Siemens PLCs and OPC UA for real-time generator monitoring",
      "Designed RS485 communication architecture for RTAC–PLC telemetry across distributed systems",
      "Developed single-line and three-phase electrical schematics for standby generator installations",
      "Created a standardized component library of 150+ electrical symbols, reducing drafting time across teams",
      "Led AutoCAD Electrical training sessions, improving team productivity by over 50%",
    ],
    type: "engineering",
  },
  {
    company: "RANKS Electrical and Security Systems",
    role: "Engineering Project Assistant",
    period: "Jan 2021 – Sep 2022",
    location: "Vancouver, BC",
    description:
      "Supported field engineering work across commercial and industrial electrical installations.",
    highlights: [
      "Conducted field assessments for transformers, control panels, and lighting systems",
      "Performed arc-flash studies using ETAP software for safety compliance",
      "Designed standby generator distribution schematics in EPLAN",
    ],
    type: "engineering",
  },
  {
    company: "TheSampleLab",
    role: "Music Producer",
    period: "2019 – Present",
    description:
      "Produced commercial sample packs and visual content distributed to music producers worldwide.",
    highlights: [
      "Produced and released commercial sample packs distributed to global music producers",
      "Created all visual branding, motion graphics, and promotional content",
      "Grew YouTube channel to 3,000 subscribers and 40,000 monthly viewers",
    ],
    type: "creative",
  },
]
