export interface PublishedApp {
  id: string;
  name: string;
  packageId: string;
  playStoreUrl: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  ctaText: string;
  technologies: string[];
  isFeatured?: boolean;
  mockupScreens?: { title: string; subtitle: string }[];
}

export const publishedApps: PublishedApp[] = [
  {
    id: "quickboom-hrm",
    name: "QuickBoom HRM",
    packageId: "org.quickboom.hrm",
    playStoreUrl: "https://play.google.com/store/apps/details?id=org.quickboom.hrm",
    category: "ENTERPRISE • HRMS • MOBILE",
    shortDesc: "Comprehensive enterprise employee management, geo-attendance, leave approvals, and payroll access.",
    fullDesc: "A production enterprise mobile workforce application designed for real-time employee self-service and field operations. Features biometric / geo-fenced attendance clock-in, leave application pipelines, real-time approval status, and confidential salary slip access.",
    accentColor: "#14B8A6",
    accentBorder: "rgba(20, 184, 166, 0.4)",
    accentBg: "rgba(20, 184, 166, 0.1)",
    ctaText: "VIEW ON GOOGLE PLAY",
    technologies: ["Flutter", "Dart", "REST API", "Android", "iOS", "FCM"],
    isFeatured: true,
    mockupScreens: [
      { title: "Geo Check-In", subtitle: "Real-time location & timesheet validation" },
      { title: "Attendance Log", subtitle: "Monthly calendar & punch records" },
      { title: "Leave Approvals", subtitle: "Multi-level management workflow" },
      { title: "Payroll & Slips", subtitle: "Confidential salary & breakdown views" },
    ],
  },
  {
    id: "calculator",
    name: "Calculator",
    packageId: "com.avinash.calculator",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.avinash.calculator&pli=1",
    category: "UTILITY • ANDROID",
    shortDesc: "Clean, responsive, high-precision utility calculator designed for instant daily mathematical computations.",
    fullDesc: "An uncluttered, ergonomic Android calculator built for smooth touch interactions, tactile visual feedback, and reliable arithmetic operations with a minimal aesthetic.",
    accentColor: "#38BDF8",
    accentBorder: "rgba(56, 189, 248, 0.4)",
    accentBg: "rgba(56, 189, 248, 0.1)",
    ctaText: "VIEW ON GOOGLE PLAY",
    technologies: ["Android", "Flutter / Native", "Dart", "Responsive UI"],
    isFeatured: false,
    mockupScreens: [
      { title: "Clean Keypad", subtitle: "High-contrast tactile buttons" },
      { title: "Formula Display", subtitle: "Real-time expression evaluation" },
    ],
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    packageId: "com.avinash.bmi_calculator",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.avinash.bmi_calculator",
    category: "HEALTH UTILITY • ANDROID",
    shortDesc: "Intuitive health metric tracker computing Body Mass Index with dynamic range indicators and weight health insights.",
    fullDesc: "A health utility application offering clear biometric calculations based on standard WHO guidelines. Features intuitive slider controls, instant health range categorization, and personalized weight metrics.",
    accentColor: "#10B981",
    accentBorder: "rgba(16, 185, 129, 0.4)",
    accentBg: "rgba(16, 185, 129, 0.1)",
    ctaText: "VIEW ON GOOGLE PLAY",
    technologies: ["Android", "Flutter", "Material Design", "Health Algorithms"],
    isFeatured: false,
    mockupScreens: [
      { title: "Metric Slider", subtitle: "Height & weight dynamic adjustment" },
      { title: "Health Classification", subtitle: "Color-coded BMI score matrix" },
    ],
  },
  {
    id: "thought-vault",
    name: "Thought Vault",
    packageId: "com.avinashmagar.thoughtvault",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.avinashmagar.thoughtvault",
    category: "PRODUCTIVITY • ANDROID",
    shortDesc: "Sophisticated personal productivity and thought-capture vault featuring distraction-free note organization.",
    fullDesc: "Designed for modern knowledge workers, Thought Vault allows rapid capture of ideas, voice memos, and categorized personal notes with local-first encryption and offline storage.",
    accentColor: "#A855F7",
    accentBorder: "rgba(168, 85, 247, 0.4)",
    accentBg: "rgba(168, 85, 247, 0.1)",
    ctaText: "VIEW ON GOOGLE PLAY",
    technologies: ["Android", "Flutter", "SQLite / Hive", "Offline-First", "State Management"],
    isFeatured: false,
    mockupScreens: [
      { title: "Vault Feed", subtitle: "Categorized card stream & search" },
      { title: "Focus Editor", subtitle: "Distraction-free Markdown writing" },
    ],
  },
  {
    id: "hard-mode-restart",
    name: "Hard Mode Restart",
    packageId: "com.hardmode.restart",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hardmode.restart",
    category: "GAME • ANDROID",
    shortDesc: "Challenging reflex game testing agility, timing, and split-second precision under escalating difficulty.",
    fullDesc: "An energetic mobile gaming experience featuring high-frame-rate animations, custom physics engines, instant restart loops, and bold neon visual styling designed to test player limits.",
    accentColor: "#F97316",
    accentBorder: "rgba(249, 115, 22, 0.45)",
    accentBg: "rgba(249, 115, 22, 0.12)",
    ctaText: "PLAY ON GOOGLE PLAY",
    technologies: ["Mobile Gaming", "Flutter Game Engine / Native", "Physics Engine", "Custom Audio"],
    isFeatured: false,
    mockupScreens: [
      { title: "Arcade Arena", subtitle: "High-contrast dynamic obstacles" },
      { title: "Precision Timer", subtitle: "Millisecond reaction tracking" },
    ],
  },
  {
    id: "do-now",
    name: "Do Now",
    packageId: "com.avinash.do_now",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.avinash.do_now",
    category: "PRODUCTIVITY • ANDROID",
    shortDesc: "Action-oriented task organizer eliminating procrastination through prioritized single-task execution.",
    fullDesc: "A minimalist daily productivity app crafted around urgent task sequencing. Cuts out complex sub-tasks in favor of immediate execution momentum, time tracking, and streak progression.",
    accentColor: "#06B6D4",
    accentBorder: "rgba(6, 182, 212, 0.4)",
    accentBg: "rgba(6, 182, 212, 0.1)",
    ctaText: "VIEW ON GOOGLE PLAY",
    technologies: ["Android", "Flutter", "Local Notifications", "Reactive UI"],
    isFeatured: false,
    mockupScreens: [
      { title: "Active Queue", subtitle: "Priority task focus cards" },
      { title: "Quick Capture", subtitle: "Instant 1-tap item dispatch" },
    ],
  },
];
