import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function ResumePage() {
  return (
    <section className="container-content section-padding flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold text-heading sm:text-4xl">
        Resume
      </h1>
      <p className="mt-4 max-w-md text-paragraph">
        Download the latest resume below, or use the button in the navigation to
        grab a copy anytime.
      </p>
      <a
        href={siteConfig.resumePath}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
      >
        Download Resume
      </a>
    </section>
  );
}
