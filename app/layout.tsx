import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Preloader } from "@/components/ui/Preloader";
import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { TechnicalBackground } from "@/components/ui/TechnicalBackground";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avinash — Full-Stack Web & Mobile Developer",
  description:
    "Portfolio of Avinash, a Full-Stack Web & Mobile Developer building web applications, mobile apps, backend systems, APIs, and digital products.",
  keywords: [
    "Avinash",
    "Avinash Magar",
    "Full-Stack Developer",
    "Mobile Developer",
    "Flutter",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "System Architecture",
  ],
  authors: [{ name: "Avinash" }],
  creator: "Avinash",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://new-portfolio-site-five.vercel.app/",
    title: "Avinash — Full-Stack Web & Mobile Developer",
    description:
      "I build production-ready web platforms, mobile applications, backend systems, APIs, and scalable digital products.",
    siteName: "Avinash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash — Full-Stack Web & Mobile Developer",
    description:
      "I build production-ready web platforms, mobile applications, backend systems, APIs, and scalable digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased selection:bg-teal-primary/30 selection:text-teal-primary transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            <TechnicalBackground />
            <Preloader />
            <Cursor />
            <Navbar />
            <div className="relative z-10">{children}</div>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

