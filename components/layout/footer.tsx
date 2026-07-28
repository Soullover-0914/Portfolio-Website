import Link from "next/link";
import { socialLinks } from "@/data/socials";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-background/60">
      <div className="container-content flex flex-col items-center justify-between gap-6 py-10 sm:flex-row sm:py-12">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link
            href="/"
            className="text-sm font-semibold text-heading transition-colors hover:text-accent"
          >
            {siteConfig.name}
          </Link>
          <p className="text-xs text-muted">
            Building modern web applications & AI-powered software.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
