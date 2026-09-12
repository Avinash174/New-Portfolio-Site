export interface ArchitectureLayer {
  id: string;
  layerNum: string;
  name: string;
  tagline: string;
  role: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  technologies: { name: string; detail: string }[];
  highlights: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "web",
    layerNum: "01",
    name: "WEB LAYER",
    tagline: "High-performance server-rendered web applications",
    role: "User experience, responsive rendering, SEO optimization & streaming HTML",
    accentColor: "#3B82F6",
    accentBorder: "rgba(59, 130, 246, 0.4)",
    accentBg: "rgba(59, 130, 246, 0.12)",
    technologies: [
      { name: "Next.js", detail: "App Router, SSR, ISR & streaming hydration" },
      { name: "React", detail: "Component hierarchy, custom hooks & reactive state" },
      { name: "TypeScript", detail: "Strict compile-time type safety across UI models" },
      { name: "Tailwind CSS", detail: "Utility-first design tokens and responsive scaling" },
    ],
    highlights: [
      "Sub-second First Contentful Paint",
      "Dynamic OpenGraph & metadata generation",
      "Seamless responsive scaling across screen sizes",
    ],
  },
  {
    id: "mobile",
    layerNum: "02",
    name: "MOBILE LAYER (CROSS-PLATFORM)",
    tagline: "Single codebase compiling to native ARM64 for iOS & Android",
    role: "Cross-platform mobile apps, gesture ergonomics & reactive state isolation",
    accentColor: "#8B5CF6",
    accentBorder: "rgba(139, 92, 246, 0.4)",
    accentBg: "rgba(139, 92, 246, 0.12)",
    technologies: [
      { name: "Flutter", detail: "High-performance skia/impeller canvas engine" },
      { name: "React Native", detail: "JavaScript bridge to native UI components" },
      { name: "Riverpod & Bloc", detail: "Predictable unidirectional state flows" },
      { name: "Dart", detail: "Ahead-of-time (AOT) machine compilation" },
    ],
    highlights: [
      "Smooth 60fps gesture animations",
      "Offline cache synchronization with SQLite / Hive",
      "Zero-latency state updates without unnecessary re-renders",
    ],
  },
  {
    id: "native",
    layerNum: "03",
    name: "NATIVE LAYER (ANDROID & iOS)",
    tagline: "Direct OS runtime & platform-native hardware interfaces",
    role: "Hardware sensor access, background worker daemons & OS lifecycle management",
    accentColor: "#10B981",
    accentBorder: "rgba(16, 185, 129, 0.4)",
    accentBg: "rgba(16, 185, 129, 0.12)",
    technologies: [
      { name: "Android & Kotlin", detail: "Modern Android SDK with Jetpack Compose declarative UI" },
      { name: "Apple & Swift", detail: "Native Swift concurrency with SwiftUI and UIKit bridges" },
      { name: "Native APIs", detail: "Bluetooth, Biometric Auth, Geolocation & Camera SDKs" },
    ],
    highlights: [
      "Direct hardware acceleration and low-level memory control",
      "Compliant with Apple App Store & Google Play guidelines",
      "Seamless integration with OS background task schedulers",
    ],
  },
  {
    id: "api",
    layerNum: "04",
    name: "API GATEWAY & ROUTING",
    tagline: "Contract-driven REST endpoints & event interfaces",
    role: "HTTP transport, schema validation, rate limiting & serialization",
    accentColor: "#14B8A6",
    accentBorder: "rgba(20, 184, 166, 0.4)",
    accentBg: "rgba(20, 184, 166, 0.12)",
    technologies: [
      { name: "Node.js & Express", detail: "Asynchronous non-blocking event-driven pipeline" },
      { name: "NestJS", detail: "Enterprise modular architecture with dependency injection" },
      { name: "Zod Validation", detail: "Strict runtime payload parsing & sanitization" },
    ],
    highlights: [
      "Deterministic HTTP status code contracts",
      "Zero unvalidated payloads passed downstream",
      "Centralized CORS, rate limiting, and helmet security",
    ],
  },
  {
    id: "auth",
    layerNum: "05",
    name: "AUTHENTICATION & SECURITY",
    tagline: "Stateless session authentication & granular access control",
    role: "Identity verification, cryptographic token rotation & permission enforcement",
    accentColor: "#EC4899",
    accentBorder: "rgba(236, 72, 153, 0.4)",
    accentBg: "rgba(236, 72, 153, 0.12)",
    technologies: [
      { name: "JWT Bearer Tokens", detail: "Stateless signed access tokens for horizontal scale" },
      { name: "Refresh Tokens", detail: "Secure HttpOnly cookie rotation with revocation lists" },
      { name: "RBAC Matrix", detail: "Role-Based Access Control protecting enterprise routes" },
    ],
    highlights: [
      "Stateless authorization scaling across multiple instances",
      "Multi-tenant perimeter isolation",
      "Protection against XSS, CSRF, and replay attacks",
    ],
  },
  {
    id: "database",
    layerNum: "06",
    name: "DATABASE & PERSISTENCE",
    tagline: "ACID relational storage & migration management",
    role: "Data integrity, relational schemas, indexing & query planning",
    accentColor: "#3B82F6",
    accentBorder: "rgba(59, 130, 246, 0.4)",
    accentBg: "rgba(59, 130, 246, 0.12)",
    technologies: [
      { name: "PostgreSQL", detail: "Enterprise relational database with JSONB support" },
      { name: "Prisma ORM", detail: "Type-safe database client and declarative migrations" },
      { name: "Connection Pooling", detail: "High-throughput database connection reuse" },
    ],
    highlights: [
      "Strict foreign key relational integrity",
      "Partial and B-Tree indexing for sub-10ms queries",
      "Reproducible programmatic schema migrations",
    ],
  },
  {
    id: "services",
    layerNum: "07",
    name: "EXTERNAL SERVICES & DISTRIBUTION",
    tagline: "Specialized cloud microservices & distribution channels",
    role: "Media processing CDN, real-time push pipelines & logistics automation",
    accentColor: "#F59E0B",
    accentBorder: "rgba(245, 158, 11, 0.4)",
    accentBg: "rgba(245, 158, 11, 0.12)",
    technologies: [
      { name: "Cloudinary CDN", detail: "Automated media transformation, compression & edge delivery" },
      { name: "Firebase / FCM", detail: "Reliable cross-platform push notifications" },
      { name: "Shiprocket", detail: "Automated logistics tracking and courier APIs" },
    ],
    highlights: [
      "Edge image caching with WebP/AVIF auto-negotiation",
      "Guaranteed delivery notification pipelines",
      "Real-time logistics webhook reconciliation",
    ],
  },
];
