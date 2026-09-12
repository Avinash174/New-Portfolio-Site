export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  focusAreas: string[];
  points: string[];
}

export const experienceEvolution = [
  { stage: "01", title: "FULL STACK", detail: "Warehow PVT LTD — Cross-platform Flutter & Web development" },
  { stage: "02", title: "ANDROID + iOS", detail: "Trueview India — Native Java Android & Objective-C iOS deployment" },
  { stage: "03", title: "FLUTTER", detail: "S IT Solutions — Production UI, REST API integration & performance" },
  { stage: "04", title: "FULL-STACK + SYSTEMS", detail: "Texto Digital Software — Next.js, Flutter, Jetpack Compose, NestJS & PostgreSQL" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Texto Digital Software PVT LTD",
    role: "Software Engineer",
    period: "May 2026 — Present",
    location: "Navi Mumbai, Maharashtra",
    type: "Full-time",
    focusAreas: ["Flutter", "React Native", "Jetpack Compose", "Next.js", "NestJS", "PostgreSQL"],
    points: [
      "Built production-grade mobile and web applications with Flutter, React Native, Jetpack Compose, and Next.js.",
      "Developed scalable backend systems and high-throughput REST APIs with NestJS, Express.js, and PostgreSQL.",
      "Engineered multi-tenant data structures, role-based access controls (RBAC), and automated cloud asset integration.",
    ],
  },
  {
    company: "S IT Solutions PVT LTD",
    role: "Trainee Flutter Developer",
    period: "Aug 2025 — May 2026",
    location: "Pune, Maharashtra",
    type: "Full-time",
    focusAreas: ["Flutter", "Dart", "REST APIs", "SDK Integration"],
    points: [
      "Built pixel-perfect, responsive UI from Figma designs for Android and iOS platforms.",
      "Integrated third-party SDKs and secure REST APIs for seamless application workflows.",
      "Added and optimized third-party packages to enhance application performance and overall UX quality.",
    ],
  },
  {
    company: "Trueview India",
    role: "Engineer — Android iOS",
    period: "May 2025 — July 2025",
    location: "Aurangabad, Maharashtra",
    type: "Engineering",
    focusAreas: ["Native Android", "Flutter", "Native iOS"],
    points: [
      "Built and deployed native Android applications using Java with clean architecture.",
      "Developed, profiled, and published cross-platform mobile applications using Flutter.",
      "Created and deployed native iOS applications using Objective-C.",
    ],
  },
  {
    company: "Warehow PVT LTD",
    role: "Full Stack Developer",
    period: "Aug 2023 — Feb 2024",
    location: "Gurugram, Haryana",
    type: "Full-time",
    focusAreas: ["Flutter", "REST APIs", "App Store", "Google Play"],
    points: [
      "Developed cross-platform Flutter applications for Android and iOS.",
      "Built responsive user interfaces from Figma specifications.",
      "Deployed production applications to the Google Play Store and Apple App Store.",
      "Integrated REST APIs and native SDKs while optimizing memory and rendering performance.",
    ],
  },
];
