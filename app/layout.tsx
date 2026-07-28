import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jyothi-swaroop.example.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Software Engineer and AI Developer building modern web applications, AI-powered software, and scalable digital solutions.",
  keywords: [
    "Software Engineer",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Full-Stack",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyothi-swaroop.example.com",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Software Engineer and AI Developer building modern web applications, AI-powered software, and scalable digital solutions.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Software Engineer and AI Developer building modern web applications, AI-powered software, and scalable digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen overflow-x-hidden bg-background antialiased">
        <Background />
        <SmoothScroll />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
