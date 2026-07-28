"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  function scrollToProjects() {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 sm:pt-28"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <p className="text-sm font-medium text-muted sm:text-base">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl font-semibold tracking-tightest text-heading sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <h2 className="text-xl font-medium text-accent sm:text-2xl lg:text-3xl">
                {siteConfig.role}
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-base leading-relaxed text-paragraph sm:text-lg"
            >
              Building interactive web applications, AI-powered systems, and
              scalable backend solutions — with a problem-solving mindset and
              a drive to keep learning.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <a
                href={siteConfig.resumePath}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium text-heading backdrop-blur-xl transition-colors hover:border-accent/40 hover:text-accent"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 pt-2"
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
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/60 text-muted backdrop-blur-xl transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-xl" />
              {/* Card frame */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/profile.png"
                  alt="Golla Jyothi Swaroop"
                  width={420}
                  height={560}
                  className="block h-auto w-full max-w-[340px] object-cover lg:max-w-[420px]"
                  priority
                />
                {/* Subtle gradient overlay at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/80 to-transparent" />
                {/* Name chip at the bottom */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-5">
                  <span className="rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-sm font-semibold text-heading backdrop-blur-xl">
                    {siteConfig.name}
                  </span>
                  <span className="rounded-full border border-accent/30 bg-background/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur-xl">
                    {siteConfig.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
