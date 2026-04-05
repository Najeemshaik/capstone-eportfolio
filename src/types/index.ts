export interface ProjectSection {
  type: "text" | "image" | "gallery" | "metrics-grid" | "feature-grid" | "comparison" | "video" | "full-width-image" | "architecture-overview" | "architecture-dataflow"
  heading?: string
  subtitle?: string
  content?: string
  images?: { src: string; alt: string; caption?: string }[]
  metrics?: { label: string; value: string }[]
  features?: { title: string; description: string }[]
  options?: { title: string; points: string[]; selected?: boolean }[]
  videoSrc?: string
  videoCaption?: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  featured: boolean
  featuredOrder?: number
  heroImage?: string
  category: string
  techStack: string[]
  sections: ProjectSection[]
  links?: { label: string; url: string }[]
  metrics?: { label: string; value: string }[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description: string
  highlights: string[]
  type: "engineering" | "creative"
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  email: string
  phone: string
  social: { platform: string; url: string; label: string }[]
}
