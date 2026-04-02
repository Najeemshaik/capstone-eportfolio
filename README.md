# Portfolio Website Build Prompt — Najeem Shaik

## Overview

Build a personal portfolio website for **Najeem Shaik** — an electrical engineering student at UBC, software engineer, and aspiring technical founder. The site should communicate someone who is deeply technical, design-obsessed, and creatively ambitious. It is NOT a typical developer portfolio. It should feel like the personal site of someone who could be building the next great product company — equal parts engineer, designer, and builder.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Component Library:** shadcn/ui (as a foundation — heavily customized, not default)
- **Fonts:** Use distinctive, non-generic typefaces from Google Fonts. No Inter, Roboto, or Arial. Pick a bold display font and a refined body font that feel premium and intentional.
- **Animations:** Framer Motion for page transitions, scroll-triggered reveals, and micro-interactions
- **Deployment target:** Vercel

---

## Design Direction

### Aesthetic: "Editorial Engineering"

The site should feel like a high-end design magazine crossed with a technical portfolio. Think: the visual confidence of an Apple product page, the editorial rhythm of a Monocle feature, and the raw credibility of someone who ships real systems.

**Key design principles:**

1. **Intentional whitespace** — generous spacing, breathing room between sections. Nothing cramped.
2. **Bold typography hierarchy** — oversized display headings, tight subheadings, refined body text. Type should do the heavy lifting.
3. **Restrained color palette** — a near-monochrome base (warm off-black on off-white, or inverted) with ONE sharp accent color used sparingly for interactive elements and emphasis. No gradients-on-white cliché.
4. **Subtle motion** — staggered fade-in on scroll, smooth page transitions, hover states that feel tactile. Motion should feel confident and unhurried, not bouncy or playful.
5. **Grid-breaking moments** — mostly clean grid layout, but occasionally let an image or heading break the grid to create visual tension.
6. **Dark/light mode** — both must feel equally polished. Not an afterthought.

**DO NOT** make it look like a generic developer portfolio template. No hero sections with particle.js backgrounds. No floating 3D objects. No "Hi, I'm Najeem" with a waving hand emoji. No purple-on-white gradients. No cookie-cutter project cards.

---

## Site Structure & Pages

### 1. Home (`/`)

The landing page. Sets the tone immediately.

- **Opening statement** — a single, bold typographic moment. Something that communicates identity without being cheesy. Example direction (rewrite to be original): a large-type line that captures the intersection of engineering, design, and building. Think manifesto, not introduction.
- **Selected work** — 3–4 featured projects displayed in an editorial layout (not a uniform grid). Each project gets an asymmetric card with: project name, a one-line description, key tech tags, and a thumbnail/visual. Link to individual project pages.
- **Brief about section** — 2–3 sentences max. Who Najeem is, what drives him. Link to full about page.
- **Signal of credibility** — subtle indicators: "UBC Electrical Engineering", "1st Place UBC Hackathon", "400k image dataset", etc. Displayed as quiet markers, not loud badges.

### 2. About (`/about`)

A full narrative page. Should feel personal and substantial.

**Content to include:**

- **Background:** Electrical & Computer Engineering student at UBC. Has been building software for years — not just coursework, but real deployed products. Has a decade-plus of graphic design experience informing everything he builds.
- **Philosophy:** Values creativity and discipline equally. Believes great products come from obsessing over both the technical architecture AND the user experience. Major UX/UI enthusiast — doesn't just code features, designs experiences.
- **Entrepreneurial ambition:** Aspiring technical founder. Wants to build category-defining products, not incremental improvements. Interested in B2B SaaS, AI-native products, and technically differentiated software.
- **Creative side:** Background in music production (commercial sample packs, YouTube channel with 3k subs and 40k monthly viewers), video editing, animation, and visual design. Uses Blender, Premiere Pro, Photoshop, Illustrator.
- **Skills section** — NOT a boring grid of icons. Present technical skills in a way that shows depth and range:
  - **Languages:** Python, C, C++, Java, Swift, TypeScript, SQL, MATLAB
  - **AI/ML:** Computer Vision, YOLOv8, PyTorch, Vertex AI, Gemini API, LLM Workflows
  - **Web/Backend:** Next.js, React, Tailwind CSS, Supabase, PostgreSQL, SQLite, REST APIs
  - **Systems:** Web Bluetooth, PLCs, OPC UA, RS485, Linux, Embedded Systems
  - **Tools:** Git, Bash, AWS, AutoCAD Electrical, EPLAN, ETAP, TIA Portal
  - **Creative:** Blender, Premiere Pro, Photoshop, Illustrator

### 3. Projects (`/projects`)

An index page listing all projects. Clean, scannable, but with enough visual interest to explore.

### 4. Individual Project Pages (`/projects/[slug]`)

Each major project gets its own page with a deep-dive layout. Structure for each:

- Hero with project name and one-line tagline
- Problem / context section
- Technical approach / architecture
- Key metrics or outcomes
- Tech stack used
- Links (GitHub, demo, etc.)
- Visuals: screenshots, architecture diagrams, or UI shots

**Projects to include:**

#### a. Tremor Dashboard — Parkinson's Tremor Monitoring System
**Tagline:** Clinical-grade tremor analysis built for the browser.

This was Najeem's capstone project. He built virtually all of the frontend and software platform from scratch. He also integrated with the firmware. He collaborated with one other team member on the overall system.

- Browser-native clinical tremor analysis dashboard for Parkinson's Disease monitoring
- Vanilla TypeScript, Web Bluetooth, Web Serial, Supabase — no framework, pure ES modules
- Connects to wearable BLE sensors, USB/serial devices, or a Python simulation backend
- Streams 6-axis IMU data in real time with clinical-grade analysis tools
- **Key features:** Live scrolling waveform (configurable 1–30s window, gain, freeze, snapshot), 256-sample Hann-windowed FFT spectrum (0–80 Hz), 10 color-coded clinical metrics (dominant frequency, RMS, power, regularity, UPDRS estimate, SNR, peak-to-peak, bandwidth, stability, harmonic ratio), 6-axis IMU selectable display, parameter control panel (frequency 4–12 Hz, amplitude, noise), profile save/load/import/export synced to SQLite + Supabase, scripted multi-step parameter sequences with timed playback, session recording with summary stats and CSV/JSON export, raw telemetry capture
- **Connection modes:** Bluetooth (BLE GATT), USB/Serial (Web Serial API), Python simulation (WebSocket to ASGI server with ARMA + synchronous sine-wave modes), Mock (synthetic sine-wave for demos)
- **Architecture:** Custom MVC with reactive observer store — no framework. Views subscribe to store, ViewModels dispatch updates, services handle BLE/Serial/Python/DB/Storage
- BLE latency testing with ping/pong measurement, packet error rate, color-coded warnings (amber 12ms, red 50ms)
- Supabase cloud sync with local SQLite fallback, light/dark/high-contrast theming
- Custom FFT, RMS, band-limited noise processing rendered on Canvas API
- Tested with Vitest

Emphasize: this was a substantial, production-grade system — not a toy demo. The architecture, the signal processing pipeline, the multi-transport connection layer, the clinical metrics — all built from scratch.

#### b. Closia — AI Fashion Platform
**Tagline:** AI-powered wardrobe intelligence. Deployed on TestFlight.

- Full-stack SwiftUI iOS app with Supabase backend
- Trained a 294-class computer vision model on 400,000+ images — 95% detection accuracy for apparel recognition
- Python microservice inference pipeline using YOLO for low-latency clothing detection and metadata extraction
- Vector search architecture using PostgreSQL and Supabase for scalable outfit discovery
- Deployed and in testing via TestFlight

#### c. Queuo — AI Restaurant Queue System
**Tagline:** Computer vision meets hospitality. 1st Place, UBC Hackathon.

- Real-time computer vision queue system using YOLOv8 for automatic party size detection
- Voice reservation workflow combining Web Speech API and Gemini for automated check-in
- Live operations dashboard with Next.js, Supabase, and WebSockets for real-time table tracking
- Won 1st place at UBC hackathon

#### d. NeuralDrive — Autonomous Vehicle Perception
**Tagline:** Visual-inertial SLAM for autonomous navigation.

- ORB-SLAM3 visual-inertial SLAM pipeline for depth-based perception and mapping
- CNN models achieving 92% classification accuracy with 645ms inference latency

#### e. Content Intelligence SaaS
**Tagline:** Find what's going viral before everyone else.

- Next.js + TypeScript SaaS identifying viral competitor outliers across major social platforms
- Automated pipeline: video transcription → performance analysis → LLM-generated scripts

### 5. Experience (`/experience`)

Professional experience presented as a timeline or editorial narrative, not a boring list.

**Finning Canada — Electrical Engineering Intern (Apr 2023 – Aug 2024)**
- Built web-based HMI integrating Siemens PLCs and OPC UA for real-time generator monitoring
- Developed single-line and three-phase electrical schematics for standby generators
- Created standardized library of 150+ electrical components reducing drafting time across teams
- Led AutoCAD Electrical training sessions improving productivity by 50%+
- Designed RS485 communication architecture for RTAC–PLC telemetry

**RANKS Electrical and Security Systems — Engineering Project Assistant (Jan 2021 – Sept 2022)**
- Field assessments for transformers, control panels, and lighting systems
- Arc-flash studies using ETAP, standby generator distribution schematics in EPLAN

**TheSampleLab — Producer**
- Produced commercial sample packs and visuals distributed to global music producers

**YouTube — Music Production**
- Grew channel to 3,000 subscribers and 40,000 monthly viewers

### 6. Contact (`/contact`)

Simple, clean contact page or section.

- Email: najeemshaik.eng@gmail.com
- LinkedIn: linkedin.com/in/najeemshaik
- GitHub: github.com/najeemshaik
- Phone: 778-551-1431

Include a simple contact form (name, email, message) or just direct links. Keep it minimal.

---

## Education

**University of British Columbia** — B.A.Sc. Electrical Engineering, Vancouver, BC

Relevant Courses: Object-Oriented Programming, Internet of Things, Industrial Automation, VLSI Design, Linear Algebra

---

## Global Components

- **Navigation** — minimal top nav. Logo/name on left, page links on right. Sticky but unobtrusive. Hamburger menu on mobile that feels premium (smooth animation, full-screen overlay or slide-in).
- **Footer** — simple. Name, social links, copyright. Maybe a subtle tagline.
- **Page transitions** — smooth fade or slide transitions between routes using Framer Motion.
- **Scroll animations** — elements fade/slide in as they enter viewport. Staggered timing. Not overdone.
- **Responsive** — flawless on mobile, tablet, and desktop. Mobile is NOT an afterthought.
- **SEO** — proper meta tags, Open Graph, structured data on all pages.
- **Performance** — optimize images (next/image), lazy load below-fold content, minimal JS bundle.

---

## Content Tone

Write all placeholder copy in a voice that is:

- **Confident but not arrogant** — lets the work speak
- **Precise** — no fluff, no buzzwords, no "passionate about leveraging synergies"
- **Direct** — short sentences. Clear claims. Backed by specifics (numbers, tech, outcomes).
- **Slightly editorial** — reads like it was written by someone who cares about words, not just code

---

## What NOT to Do

- No generic template aesthetics
- No "Hello World, I'm a developer" energy
- No skill bars or percentage charts
- No testimonial carousels
- No stock photos
- No particle.js or three.js hero backgrounds
- No emoji in headings
- No "Let's connect!" CTAs
- No cookie-cutter project cards that all look the same
- Do not use Inter, Roboto, Arial, or system-ui as primary fonts
- Do not default to purple + white color schemes

---

## Summary

This website should make someone stop scrolling. It should feel like it was designed by someone with real taste — because it was. Every pixel, every transition, every word should communicate: this person builds things that matter, and they care about how those things feel.

Build it to that standard.