"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with"
        description="A focused toolkit honed across production work — from pixel-perfect interfaces to data-intensive backends and applied AI."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="glass-card group flex flex-col gap-4 p-6 transition-colors hover:border-accent/30"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-background/40 px-3 py-1.5 text-sm text-paragraph transition-colors group-hover:border-border/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
