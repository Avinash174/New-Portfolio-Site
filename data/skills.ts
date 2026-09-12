export interface SkillCategory {
  domain: string;
  description: string;
  accentColor: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
    featuredInOrbit?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    domain: "WEB",
    description: "Modern, responsive and scalable web applications and admin platforms.",
    accentColor: "#3B82F6",
    skills: [
      { name: "React", description: "Component architecture & custom hooks", featuredInOrbit: true },
      { name: "Next.js", description: "App Router, SSR, ISR & streaming", featuredInOrbit: true },
      { name: "TypeScript", description: "Type safety & scalable enterprise models", featuredInOrbit: true },
      { name: "JavaScript", description: "ES6+, event loop & asynchronous async/await" },
      { name: "Tailwind CSS", description: "Design systems & responsive layouts" },
      { name: "shadcn/ui", description: "Accessible Radix primitives" },
    ],
  },
  {
    domain: "MOBILE",
    description: "Cross-platform mobile applications with production-focused architecture and UI.",
    accentColor: "#8B5CF6",
    skills: [
      { name: "Flutter", description: "Cross-platform iOS & Android compiling to ARM64", featuredInOrbit: true },
      { name: "React Native", description: "Native component bridge applications" },
      { name: "Dart", description: "AOT & JIT modern language runtime" },
    ],
  },
  {
    domain: "NATIVE",
    description: "Native Android and iOS development alongside cross-platform mobile development.",
    accentColor: "#10B981",
    skills: [
      { name: "Android", description: "Native Android SDK & system services", featuredInOrbit: true },
      { name: "Kotlin", description: "Idiomatic modern Android programming", featuredInOrbit: true },
      { name: "Jetpack Compose", description: "Declarative Android UI toolkit" },
      { name: "Apple / iOS", description: "iOS ecosystem & platform frameworks" },
      { name: "Swift", description: "Modern Swift concurrency & memory safety", featuredInOrbit: true },
      { name: "SwiftUI", description: "Declarative cross-Apple platform UI" },
      { name: "UIKit", description: "Imperative iOS UI foundations" },
    ],
  },
  {
    domain: "BACKEND",
    description: "Scalable server architectures, microservices, and high-throughput APIs.",
    accentColor: "#14B8A6",
    skills: [
      { name: "Node.js", description: "Asynchronous event-driven JavaScript runtime", featuredInOrbit: true },
      { name: "Express.js", description: "Minimalist, flexible Node.js framework" },
      { name: "NestJS", description: "Modular TypeScript enterprise backend framework" },
      { name: "REST API", description: "Contract-driven HTTP JSON interfaces" },
    ],
  },
  {
    domain: "DATA",
    description: "Data modeling, relational indexing, and performant query execution.",
    accentColor: "#3B82F6",
    skills: [
      { name: "PostgreSQL", description: "Battle-tested relational ACID engine", featuredInOrbit: true },
      { name: "Prisma", description: "Next-generation TypeScript ORM & migrations", featuredInOrbit: true },
    ],
  },
  {
    domain: "SERVICES",
    description: "Cloud platforms, distribution pipelines, and specialized micro-integrations.",
    accentColor: "#F59E0B",
    skills: [
      { name: "Firebase", description: "Authentication & Realtime Firestore", featuredInOrbit: true },
      { name: "FCM", description: "Targeted Push Notifications" },
      { name: "Cloudinary", description: "Automated media transformation & CDN" },
      { name: "Shiprocket", description: "Logistics tracking & shipping APIs" },
    ],
  },
  {
    domain: "DEVELOPMENT",
    description: "Engineering workflows, security standards, and resilient practices.",
    accentColor: "#EC4899",
    skills: [
      { name: "Git", description: "Distributed version control" },
      { name: "GitHub", description: "CI/CD actions & repository management" },
      { name: "JWT", description: "Stateless cryptographic bearer authentication" },
      { name: "Zod", description: "TypeScript-first schema validation" },
    ],
  },
];

export const orbitSkills = [
  { name: "React", domain: "Web", color: "#61DAFB" },
  { name: "Next.js", domain: "Web", color: "#FFFFFF" },
  { name: "Flutter", domain: "Mobile", color: "#54C5F8" },
  { name: "Kotlin", domain: "Native", color: "#7F52FF" },
  { name: "Swift", domain: "Native", color: "#F05138" },
  { name: "Node.js", domain: "Backend", color: "#68A063" },
  { name: "PostgreSQL", domain: "Data", color: "#336791" },
  { name: "Prisma", domain: "Data", color: "#2DD4BF" },
  { name: "Firebase", domain: "Services", color: "#FFCA28" },
  { name: "TypeScript", domain: "Web", color: "#3178C6" },
];
