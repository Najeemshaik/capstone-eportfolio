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
      "Web Serial",
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
      { label: "Frequency range", value: "0–80 Hz" },
      { label: "Transport modes", value: "4 (BLE, USB, WebSocket, Mock)" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      {
        type: "text",
        heading: "The Problem",
        content:
          "Parkinson's Disease affects roughly 10 million people worldwide. Tremor — the involuntary rhythmic shaking most associated with the condition — is both a primary diagnostic indicator and a key measure of treatment efficacy. Yet clinical tremor assessment is still largely subjective: a neurologist watches a patient and scores severity on a rating scale. Objective, continuous, and accessible tremor monitoring doesn't exist at the bedside.\n\nOur capstone team set out to change that. The goal: a clinical-grade tremor monitoring system that connects to wearable sensors, streams motion data in real time, and delivers meaningful analysis — all in the browser, with no software installation required.",
      },
      {
        type: "text",
        heading: "Design Iterations",
        content:
          "The project went through several major iterations before arriving at its final architecture.\n\nEarly designs relied on a mobile app approach — but the requirement to support clinical research environments with locked-down devices pushed us toward a browser-native solution. This was a meaningful constraint: we couldn't assume any installed software.\n\nOur first prototype used a React framework with a component library. After several weeks of development, the overhead of the framework's reactivity model against our high-frequency data streams became apparent — the rendering pipeline was causing jitter in the live waveform at higher sample rates. We made the architectural decision to rewrite the platform in vanilla TypeScript with a custom MVC pattern and a reactive observer store. Views subscribe directly to state changes; ViewModels dispatch updates; services handle I/O. This gave us precise control over rendering and eliminated the framework overhead entirely.\n\nThe connection layer also evolved. We initially designed only for Bluetooth (BLE). During integration testing, we discovered that USB serial devices offered lower latency and were more reliable in environments with RF interference. We added Web Serial API support, then a Python WebSocket backend for simulation, then a synthetic mock mode for demos and testing. The four-transport architecture emerged from real constraints, not over-engineering.\n\nThe clinical metrics set grew iteratively in collaboration with our medical advisor. We started with dominant frequency and RMS amplitude — the two most clinically relevant values — and added eight more metrics as we understood the requirements better: UPDRS tremor score estimate, signal-to-noise ratio, peak-to-peak amplitude, bandwidth, stability index, harmonic ratio, spectral power, and signal regularity. Each new metric required understanding the underlying clinical significance before implementing the signal processing.",
      },
      {
        type: "text",
        heading: "Technical Architecture",
        content:
          "The platform runs entirely in the browser with no framework dependencies. The architecture follows a custom MVC pattern with a reactive observer store:\n\n— Services layer handles all I/O: BLE GATT operations, Web Serial framing, WebSocket message parsing, SQLite reads/writes, and Supabase sync.\n— The store is a central state container. Any component can subscribe to specific state slices; updates are batched and dispatched synchronously.\n— ViewModels contain all business logic — signal processing, metric computation, profile management — and are the only layer that writes to the store.\n— Views are pure rendering functions that subscribe to store slices and update the DOM. The live waveform and FFT spectrum render on Canvas API for maximum performance.\n\nThe signal processing pipeline implements a 256-sample Hann-windowed FFT running at the incoming sample rate. Clinical metrics are derived from the frequency-domain representation: dominant frequency is the peak bin, RMS is the square root of mean squared amplitude, spectral power integrates the tremor band (4–12 Hz), harmonic ratio compares fundamental power to harmonics, and so on. All processing runs synchronously in the main thread — the data rates involved (100–200 Hz) are comfortably within single-threaded capacity.\n\nBluetooth latency is monitored continuously via a BLE ping/pong protocol. Round-trip times above 12ms trigger an amber warning; above 50ms, a red alert. This real-time diagnostic was added after discovering that BLE latency in clinical environments could degrade waveform quality in ways that weren't visually obvious.",
      },
      {
        type: "metrics-grid",
        heading: "Key Outcomes",
        metrics: [
          { label: "Clinical metrics computed in real time", value: "10" },
          { label: "Connection modes supported", value: "4" },
          { label: "FFT resolution", value: "256-sample Hann window" },
          { label: "Frequency analysis range", value: "0–80 Hz" },
          { label: "Data export formats", value: "CSV + JSON" },
          { label: "Theme modes", value: "Light / Dark / High-contrast" },
        ],
      },
      {
        type: "text",
        heading: "What I Built",
        content:
          "I was responsible for virtually the entire software platform. This included the full frontend architecture and UI, the signal processing pipeline, the multi-transport connection layer (BLE, USB/Serial, WebSocket, Mock), the clinical metrics engine, the session recording and export system, the profile management system with local SQLite and Supabase cloud sync, the BLE latency diagnostics, and the scripted parameter sequence player.\n\nI also integrated the firmware my teammate developed — bridging the hardware layer into the browser via BLE GATT and Web Serial. The system was tested with Vitest across the core signal processing and metrics computation modules.",
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
    tagline: "Computer vision meets hospitality. 1st Place, UBC Hackathon.",
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
      { label: "Placement", value: "1st Place" },
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
          "Queuo is an AI-powered restaurant queue management system built in 24 hours at the UBC Hackathon, where it won first place. The system uses YOLOv8 to automatically detect party size from a camera feed — eliminating the need for manual check-in. A voice reservation workflow powered by Web Speech API and Gemini handles automated check-in conversations.",
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
    slug: "neuraldrive",
    title: "NeuralDrive",
    heroImage: "/images/projects/neuraldrive.png",
    tagline: "Visual-inertial SLAM for autonomous navigation.",
    description:
      "ORB-SLAM3 visual-inertial SLAM pipeline for depth-based perception and mapping, with CNN-based obstacle classification achieving 92% accuracy.",
    featured: false,
    category: "Robotics / ML",
    techStack: ["ORB-SLAM3", "Python", "PyTorch", "OpenCV", "CNN"],
    metrics: [
      { label: "CNN classification accuracy", value: "92%" },
      { label: "Inference latency", value: "645ms" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "NeuralDrive implements a visual-inertial SLAM pipeline for autonomous vehicle perception. ORB-SLAM3 fuses camera and IMU data to build a real-time map and estimate vehicle pose, enabling depth-based obstacle avoidance without GPS dependency.",
      },
      {
        type: "text",
        heading: "Technical Approach",
        content:
          "A CNN model classifies obstacles in the camera feed with 92% accuracy at 645ms inference latency. The visual-inertial fusion from ORB-SLAM3 provides robust pose estimation even in GPS-denied environments like underground parking or dense urban areas. The system was evaluated on standard autonomous driving datasets.",
      },
      {
        type: "metrics-grid",
        heading: "Performance",
        metrics: [
          { label: "Obstacle classification accuracy", value: "92%" },
          { label: "Inference latency", value: "645ms" },
        ],
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
  {
    slug: "content-intelligence",
    title: "Content Intelligence",
    tagline: "Find what's going viral before everyone else.",
    description:
      "SaaS tool that identifies viral competitor content across social platforms and generates AI-scripted content strategies.",
    featured: false,
    category: "SaaS / AI",
    techStack: ["Next.js", "TypeScript", "LLM", "Whisper", "Supabase"],
    links: [
      { label: "GitHub", url: "https://github.com/najeemshaik" },
    ],
    sections: [
      {
        type: "text",
        heading: "Overview",
        content:
          "Content Intelligence is a Next.js SaaS that monitors competitor social profiles across major platforms, identifies statistical outlier posts — the content that's significantly outperforming a creator's average — and runs them through an automated pipeline: video transcription with Whisper, performance analysis, and LLM-generated script outlines for replication.",
      },
      {
        type: "text",
        heading: "The Pipeline",
        content:
          "The system ingests social platform data on a schedule, computes engagement benchmarks per creator, flags outliers above a configurable threshold, transcribes video content, and generates structured content briefs. The output is a dashboard that tells a content team exactly what's working for competitors and provides an AI-assisted starting point for their own scripts.",
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
