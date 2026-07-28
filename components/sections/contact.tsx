"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl sm:p-12 lg:p-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        />

        <motion.div
          variants={fadeInUp}
          className="flex max-w-2xl flex-col gap-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            Contact
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Let&apos;s build something great
          </h2>
          <p className="text-base leading-relaxed text-paragraph sm:text-lg">
            I&apos;m currently {siteConfig.availability.toLowerCase()}. Whether
            you have a role, a project, or just want to talk engineering — my
            inbox is open.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            <Mail size={16} />
            {siteConfig.email}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium text-heading transition-colors hover:border-accent/40 hover:text-accent"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noreferrer noopener"
                }
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon size={16} />
                {social.label}
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}
