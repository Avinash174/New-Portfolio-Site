export interface Project {
  id: string;
  num: string;
  title: string;
  role: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  features: string[];
  type: "rms" | "hrm" | "ecommerce" | "backend";
  links: {
    github?: string;
    live?: string;
    playStore?: string;
    caseStudy?: string;
  };
  accents?: string;
}

export const projects: Project[] = [
  {
    id: "rms-system",
    num: "01",
    title: "RMS — Records Management System",
    role: "Full-Stack / Mobile Developer",
    category: "ANDROID • ENTERPRISE • BACKEND",
    shortDesc: "Android-based enterprise records management system for warehouse box and file tracking, inventory audits, and operational workflows.",
    fullDesc: "Android-based enterprise records management system for warehouse box and file tracking, inventory audits, and operational workflows. Built with native Kotlin and Jetpack Compose for high-speed barcode scanning on rugged devices, paired with a resilient Node.js and PostgreSQL backend for real-time audit trails and warehouse location mapping.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Android",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT"
    ],
    features: [
      "Barcode & QR Code scanning for physical record ingestion",
      "Box & file indexing with warehouse location mapping",
      "Retrieval request lifecycles and physical tracking",
      "Audit logging and access-controlled record retrieval",
      "Offline sync engine for warehouse floor operations",
      "Role-Based Access Control (RBAC) for warehouse operators"
    ],
    type: "rms",
    links: {
      github: "https://github.com/Avinash174"
    },
    accents: "Green + Teal + Blue"
  },
  {
    id: "hrm-platform",
    num: "02",
    title: "HRM — Human Resource Management",
    role: "Full-Stack / Mobile Developer",
    category: "FLUTTER • MOBILE • ENTERPRISE",
    shortDesc: "Full-cycle employee and store operations platform connecting field staff, store managers, and HR administration through mobile and web interfaces.",
    fullDesc: "Comprehensive enterprise HRMS ecosystem published on Google Play and in daily production. Engineered with Flutter and BLoC architecture for cross-platform reliability, coupled with an Express.js & PostgreSQL backend orchestrating geofenced attendance, shift schedules, salary calculations, and automated Firebase push alerts.",
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Firebase"
    ],
    features: [
      "Geofenced attendance tracking with shift scheduling",
      "Payroll calculation, deductions, and pay slip generation",
      "Multi-tier leave request and approval workflows",
      "Store performance metrics & commission tracking",
      "Role-based access control across admin and employee roles",
      "Real-time Firebase Cloud Messaging (FCM) notifications"
    ],
    type: "hrm",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=org.quickboom.hrm",
      github: "https://github.com/Avinash174"
    },
    accents: "Teal + Cyan + Violet"
  },
  {
    id: "ecommerce-platform",
    num: "03",
    title: "E-Commerce Management Platform",
    role: "Full-Stack Developer",
    category: "WEB • ADMIN • SYSTEMS",
    shortDesc: "Production-ready commercial platform combining customer storefront with back-office inventory, order fulfillment, and logistics pipelines.",
    fullDesc: "Modern commerce command center and fast customer storefront engineered using Next.js App Router and Tailwind CSS. Directly integrates Shiprocket logistics APIs for automated AWB generation, Cloudinary media transformations for instant product loading, and atomic PostgreSQL inventory transactions.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Cloudinary",
      "Shiprocket"
    ],
    features: [
      "Product & SKU lifecycle management with multi-variant support",
      "Live inventory tracking with automated low-stock alerts",
      "Order processing pipeline from payment to fulfillment",
      "Shiprocket logistics API integration with automated AWB generation",
      "Cloudinary media pipeline for optimized asset delivery",
      "Admin revenue analytics and performance telemetry"
    ],
    type: "ecommerce",
    links: {
      github: "https://github.com/Avinash174"
    },
    accents: "Blue + Amber + Cyan"
  },
  {
    id: "backend-api-architecture",
    num: "04",
    title: "Backend & API Architecture",
    role: "Backend / Systems Engineer",
    category: "BACKEND • SYSTEMS • DATABASE",
    shortDesc: "Production backend services powering mobile and web platforms with secure authentication, structured error handling, relational databases, and third-party integrations.",
    fullDesc: "Production-grade microservices and monolithic API architectures handling concurrent mobile and web traffic. Features layered service contracts, JWT authentication with secure refresh tokens, schema validation with Zod, and optimized Prisma ORM queries over pooled PostgreSQL databases.",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Zod"
    ],
    features: [
      "Layered service architecture separating transport, logic, and data",
      "JWT authentication with refresh token rotation and RBAC",
      "Relational schema modeling and type-safe queries via Prisma ORM",
      "Connection pooling and query optimization for PostgreSQL",
      "Third-party API integrations (Cloudinary, Shiprocket, Firebase Admin)",
      "Request validation with Zod schemas and centralized error handling"
    ],
    type: "backend",
    links: {
      github: "https://github.com/Avinash174"
    },
    accents: "Teal + Violet + Emerald"
  }
];

