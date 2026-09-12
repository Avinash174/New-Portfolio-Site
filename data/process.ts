export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "DISCOVER",
    tagline: "Understand problem space & technical constraints",
    description: "Deep dive into business goals, user personas, throughput requirements, data privacy compliance, and latency thresholds before writing a single line of code.",
    deliverables: ["Requirements Breakdown", "Technical Feasibility Matrix", "Scope Definition"]
  },
  {
    step: "02",
    title: "DESIGN",
    tagline: "Structure intuitive user flows & ergonomics",
    description: "Map user journeys, information hierarchy, and interactive states. Ensure design tokens, spacing scales, and micro-interactions promote seamless adoption.",
    deliverables: ["Wireframes & Screen States", "Component Tokens", "User Journey Flowcharts"]
  },
  {
    step: "03",
    title: "ARCHITECT",
    tagline: "Establish contracts, schemas & system boundaries",
    description: "Design scalable frontend, backend, database and API boundaries before implementation. Model relational schemas, indexing strategies, and security isolation.",
    deliverables: ["Entity Relationship Diagrams", "OpenAPI Specifications", "Data Flow Architecture"]
  },
  {
    step: "04",
    title: "DEVELOP",
    tagline: "Implement clean, modular & type-safe codebases",
    description: "Write structured, scalable code utilizing modular component hierarchies, strict TypeScript typing, state isolation, and separation of concerns.",
    deliverables: ["Type-Safe Codebase", "Reactive UI Components", "Stateless Service Layer"]
  },
  {
    step: "05",
    title: "INTEGRATE",
    tagline: "Unify transport, third-party services & APIs",
    description: "Bridge frontend applications with backend services, authentication mechanisms (JWT/OAuth), cloud storage, payment gateways, and telemetry pipelines.",
    deliverables: ["Auth Flow Integration", "Payment & Webhook Bridges", "Push Notification Channels"]
  },
  {
    step: "06",
    title: "TEST",
    tagline: "Validate resilience, edge cases & performance",
    description: "Conduct thorough unit validation, API contract testing, offline sync verification, and mobile UI rendering across diverse screen geometries and network latencies.",
    deliverables: ["API Regression Tests", "Offline Cache Validation", "Device & Browser Profiling"]
  },
  {
    step: "07",
    title: "DEPLOY",
    tagline: "Automate delivery pipelines & production release",
    description: "Deploy production artifacts to high-availability cloud infrastructure, configure CD pipelines, monitor telemetry, and publish mobile apps to TestFlight and App Stores.",
    deliverables: ["Production CI/CD Pipelines", "App Store / TestFlight Releases", "Telemetry & Observability"]
  }
];
