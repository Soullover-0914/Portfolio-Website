"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A few projects I'm proud of — each one built on real data, real constraints, and engineered for measurable impact."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className={cn(
              "glass-card group relative flex flex-col overflow-hidden transition-colors hover:border-accent/30",
              project.featured && "md:col-span-2",
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden border-b border-border",
                project.featured ? "h-72 sm:h-80" : "h-56",
              )}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              {project.featured && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-background/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur-xl">
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-heading">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-paragraph">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 pt-2">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border/40 bg-card/30 px-4 py-2 text-sm font-medium text-muted/40">
                    <Github size={15} />
                    GitHub
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                  >
                    Live Demo
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
