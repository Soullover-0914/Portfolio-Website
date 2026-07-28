"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/lib/use-active-section";
import { useScrolled } from "@/lib/use-scrolled";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="container-content flex h-16 items-center justify-between sm:h-18"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold text-heading"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-accent transition-colors group-hover:border-accent/40">
            G
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    isActive
                      ? "text-heading"
                      : "text-muted hover:text-heading",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-border bg-card/80"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumePath}
            download
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-accent/40 hover:text-accent sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-heading transition-colors hover:border-accent/40 hover:text-accent md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full rounded-lg px-4 py-3 text-left text-sm transition-colors",
                        isActive
                          ? "bg-card text-heading"
                          : "text-muted hover:bg-card/60 hover:text-heading",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
              <li>
                <a
                  href={siteConfig.resumePath}
                  download
                  className="mt-2 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
