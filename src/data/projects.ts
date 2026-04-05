import type { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "tremor-dashboard",
    title: "Tremor Dashboard",
    heroImage: "/images/projects/tremor-dashboard.png",
    tagline: "Clinical-grade tremor analysis built for the browser.",
    description:
      "A browser-native clinical platform for Parkinson's Disease tremor monitoring — built from scratch with vanilla TypeScript, Web Bluetooth, and real-time signal processing.",
    featured: false,
    category: "Capstone Project",
    techStack: [
      "TypeScript",
      "Web Bluetooth",
      "WebSocket",
      "Supabase",
      "SQLite",
      "Canvas API",
      "FFT",
      "Vitest",
    ],
    metrics: [
      { label: "Clinical metrics computed", value: "10" },
      { label: "FFT window size", value: "256 samples" },
      { label: "Tremor band", value: "4–12 Hz" },
      { label: "Transport modes", value: "3 (BLE, WebSocket, Mock)" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      // Hero video/image
      {
        type: "video",
        videoSrc: "/reflection/hardware-demo.mov",
        videoCaption: "Demonstration video of the Tremor Dashboard prototype streaming live sensor data.",
      },
      // Project Overview
      {
        type: "text",
        heading: "Project Overview",
        subtitle: "Understanding the problem and why this project matters.",
        content:
          "Parkinsonian tremor is an involuntary, rhythmic oscillation that significantly impacts the daily lives of affected individuals. For researchers working on assistive devices and robotic validation systems, accurately reproducing this motion in a controlled laboratory environment is critical — but existing approaches rely on inconsistent manual simulation or purely software-based models that fail to capture the physical dynamics of tremor.\n\nNEXERA Medical Solutions Limited required a physical tremor simulation platform that could integrate with their HVPL robotic arm, generate representative tremor-like motion, and allow researchers to configure parameters such as frequency and amplitude. The system needed to be repeatable, modular, and extensible for future research applications.\n\nOur multidisciplinary team designed, built, and evaluated a prototype system composed of three tightly coupled subsystems: a mechanical tremor-generation mechanism, a custom electrical and embedded control platform, and a software dashboard for tuning, monitoring, and data management.",
      },
      // My Role
      {
        type: "text",
        heading: "My Role",
        subtitle: "Software architecture, dashboard design, and integration planning.",
        content:
          "Within the multidisciplinary team, my contribution centered on the software subsystem. I owned the architecture direction, dashboard design, feature planning, and user interaction model for the software interface that would allow engineers and researchers to interact with the tremor simulation hardware.\n\nMy responsibilities included evaluating software platform options, designing and iterating on the dashboard UI, implementing core visualization and control features, structuring cloud and local data storage, and ensuring the software architecture could support future live hardware communication.\n\nI worked closely with the electrical and mechanical subsystems to align interface requirements with real hardware constraints — ensuring the software design was grounded in what the physical system could actually deliver.",
      },
      // Architecture diagrams
      {
        type: "architecture-overview",
        heading: "Software Architecture",
        subtitle: "High-level overview of the MVVM architecture, from UI layer through to hardware and cloud integrations.",
      },
      {
        type: "architecture-dataflow",
        heading: "Data Flow Pipeline",
        subtitle: "How a single sensor sample travels from hardware acquisition through signal processing to persistence.",
      },
      // Design Process
      {
        type: "text",
        heading: "Design Process & Iteration",
        subtitle: "How the software design evolved through constraints, decisions, and refinement.",
        content:
          "The project went through several major iterations before arriving at its final architecture.",
      },
      // Platform comparison
      {
        type: "comparison",
        heading: "Software Architecture Selection",
        content: "We evaluated three candidate architectures against project scope, client needs, and future scalability. The web application was selected as the strongest fit across all criteria.",
        options: [
          {
            title: "Web Application",
            points: ["Cross-platform accessibility", "No installation required", "Matches client expectations for visibility", "Scalable architecture for future features"],
            selected: true,
          },
          {
            title: "Desktop Application",
            points: ["Direct hardware access", "Lower latency for real-time control"],
            selected: false,
          },
          {
            title: "Mobile Application",
            points: ["Portability", "Touch-friendly controls"],
            selected: false,
          },
        ],
      },
      // UI iteration
      {
        type: "text",
        heading: "Dashboard UI Iteration",
        content:
          "The dashboard layout evolved through multiple iterations. Early concepts focused on basic parameter input; later versions introduced real-time waveform monitoring, spectrum visualization, and a clearer separation between control and monitoring views. Each iteration was informed by client feedback, usability considerations, and alignment with the embedded communication strategy.",
      },
      // Wireframes
      {
        type: "gallery",
        images: [
          {
            src: "/images/projects/tremor/wireframe-v1.png",
            alt: "Early dashboard iteration",
            caption: "Early dashboard iteration with connection controls, tremor parameter sliders, and a basic waveform view. Control and monitoring were not yet visually separated.",
          },
          {
            src: "/images/projects/tremor/wireframe-v2.png",
            alt: "Refined dashboard with focused waveform view",
            caption: "Refined iteration with a dedicated real-time waveform visualization, window/gain controls, and cleaner separation of monitoring from parameter tuning.",
          },
        ],
      },
      // Dashboard screenshots
      {
        type: "gallery",
        images: [
          {
            src: "/images/projects/tremor/dashboard-waveform.png",
            alt: "Dashboard with power spectrum and clinical metrics",
            caption: "Later iteration introducing power spectrum visualization, quick actions panel, and system status — consolidating monitoring and control into a single view.",
          },
          {
            src: "/images/projects/tremor/dashboard-spectrum.png",
            alt: "Final dashboard with full clinical metrics suite",
            caption: "Final dashboard iteration with all 10 clinical metrics (dominant frequency, RMS amplitude, signal power, UPDRS score, regularity index, and more), power spectrum analysis, and real-time system telemetry.",
          },
        ],
      },
      // Profiles/sessions screenshot
      {
        type: "full-width-image",
        images: [
          {
            src: "/images/projects/tremor/dashboard-profiles.png",
            alt: "Profile management UI in dark theme",
            caption: "Profile management interface (dark theme) enabling researchers to save, load, rename, and export tremor parameter presets across experimental runs.",
          },
        ],
      },
      // Final solution
      {
        type: "text",
        heading: "Final Software Solution",
        subtitle: "What the dashboard does and how it fits into the larger system.",
        content:
          "The final software deliverable is a web-based dashboard built around the needs of researchers and engineers who will interact with the tremor simulation hardware. It provides the following core capabilities:",
      },
      {
        type: "feature-grid",
        features: [
          { title: "Tremor parameter controls", description: "Sliders and numeric controls for frequency and amplitude tuning" },
          { title: "Real-time waveform display", description: "Live waveform showing generated tremor signals" },
          { title: "Power spectrum visualization", description: "FFT-based frequency-domain analysis" },
          { title: "Profile management", description: "Save and load tremor parameter configurations" },
          { title: "Session management", description: "Track and organize experimental runs" },
          { title: "Cloud + local storage", description: "Supabase cloud storage with local SQLite fallback for offline resilience" },
          { title: "FTDI-mode local recording", description: "Direct serial data capture for high-fidelity recording" },
          { title: "Extensible architecture", description: "Designed for future frontend-to-hardware live communication" },
        ],
      },
      // Key metrics
      {
        type: "metrics-grid",
        heading: "Key Outcomes",
        metrics: [
          { label: "Clinical metrics computed in real time", value: "10" },
          { label: "Connection modes supported", value: "3" },
          { label: "FFT resolution", value: "256-sample" },
          { label: "Tremor analysis band", value: "4–12 Hz" },
          { label: "Data export formats", value: "CSV + JSON" },
          { label: "Theme modes", value: "Light / Dark + High-contrast" },
        ],
      },
    ],
  },
  {
    slug: "closia",
    title: "Closia",
    heroImage: "/images/projects/closia.png",
    tagline: "AI-powered wardrobe intelligence. Deployed on TestFlight.",
    description:
      "Full-stack iOS app with a 294-class computer vision model trained on 400,000+ images for apparel detection and outfit discovery.",
    featured: true,
    featuredOrder: 3,
    category: "AI / Mobile",
    techStack: [
      "SwiftUI",
      "Python",
      "YOLOv8",
      "Supabase",
      "PostgreSQL",
      "Vector Search",
      "TestFlight",
    ],
    metrics: [
      { label: "CV model classes", value: "294" },
      { label: "Training images", value: "400,000+" },
      { label: "Detection accuracy", value: "95%" },
      { label: "Deployment", value: "TestFlight" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "Closia is a full-stack iOS application that uses computer vision to understand what you own and help you discover what to wear. At its core is a 294-class clothing detection model trained on over 400,000 images, achieving 95% accuracy in identifying apparel categories from photos.",
      },
      {
        type: "text",
        heading: "Technical Approach",
        content:
          "The iOS app is built in SwiftUI with a Supabase backend. When a user photographs a garment, the image is sent to a Python microservice running a YOLO-based inference pipeline that identifies the clothing type, color, and relevant metadata. This extracted metadata powers a vector search architecture built on PostgreSQL and Supabase — enabling semantic outfit discovery based on style similarity rather than exact matches.\n\nThe dataset was assembled, cleaned, and annotated for 294 distinct clothing classes before training. The inference pipeline was optimized for low latency to make the capture-to-catalog experience feel immediate.",
      },
      {
        type: "metrics-grid",
        heading: "Key Numbers",
        metrics: [
          { label: "Model classes", value: "294" },
          { label: "Training images", value: "400,000+" },
          { label: "Detection accuracy", value: "95%" },
          { label: "Status", value: "TestFlight" },
        ],
      },
    ],
  },
  {
    slug: "queuo",
    title: "Queuo",
    heroImage: "/images/projects/queuo.png",
    tagline: "Computer vision meets hospitality. Built at UBC Hackathon.",
    description:
      "Real-time restaurant queue management using YOLOv8 for automatic party size detection and voice-powered reservation workflows.",
    featured: true,
    featuredOrder: 2,
    category: "AI / Web",
    techStack: [
      "Next.js",
      "YOLOv8",
      "Supabase",
      "WebSockets",
      "Web Speech API",
      "Gemini",
    ],
    metrics: [
      { label: "Event", value: "UBC Hackathon" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "Queuo is an AI-powered restaurant queue management system built in 24 hours at the UBC Hackathon. The system uses YOLOv8 to automatically detect party size from a camera feed — eliminating the need for manual check-in. A voice reservation workflow powered by Web Speech API and Gemini handles automated check-in conversations.",
      },
      {
        type: "text",
        heading: "How It Works",
        content:
          "When a party arrives, the camera feed runs through a YOLOv8 model that counts the number of people and estimates party size. This data flows to a Next.js operations dashboard via Supabase and WebSockets in real time. The host sees live table availability, party queue, and estimated wait times — all updating without page refreshes.\n\nThe voice check-in system lets guests say their name and party size to complete a reservation, with Gemini handling natural language understanding for edge cases and confirmation flows.",
      },
    ],
  },
  {
    slug: "ayah",
    title: "Ayah",
    heroImage: "/images/projects/ayah.png",
    tagline: "Learn Arabic through the Quran. Point your camera, discover words.",
    description:
      "A Quran-centered Arabic learning iOS app that uses AI-powered object recognition to connect real-world vocabulary to Quranic verses, with a structured curriculum and gamified learning.",
    featured: true,
    featuredOrder: 1,
    category: "AI / Mobile",
    techStack: [
      "SwiftUI",
      "Claude AI",
      "Supabase",
      "StoreKit 2",
    ],
    links: [],
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "Ayah is a minimalist iOS app that helps Muslims learn Arabic through everyday objects and a Quran-centered curriculum. Point your camera at any object to learn its Arabic name and discover where that word appears in the Quran. The app combines AI-powered object identification with a structured learning path, Quran reader with word-by-word highlighting, and a gamified quiz system.",
      },
      {
        type: "text",
        heading: "Technical Approach",
        content:
          "The app uses Claude AI via Supabase Edge Functions for real-time object identification from camera captures, with on-device subject isolation for clean recognition. A structured curriculum spans 9 units covering Arabic letters, diacritics, and Quranic vocabulary. The Quran Explorer features word-by-word reading with audio pronunciation at multiple speed tiers. Monetization is handled through StoreKit 2 subscriptions.",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
}
