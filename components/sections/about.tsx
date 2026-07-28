"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { about } from "@/data/about";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        description={about.summary}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="glass-card flex flex-col gap-4 p-6 lg:col-span-2"
        >
          <div className="flex items-center gap-2 text-accent">
            <Sparkles size={18} />
            <h3 className="text-lg font-semibold text-heading">My Journey</h3>
          </div>
          <p className="text-base leading-relaxed text-paragraph">
            {about.journey}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="glass-card flex flex-col gap-4 p-6"
        >
          <div className="flex items-center gap-2 text-accent">
            <GraduationCap size={18} />
            <h3 className="text-lg font-semibold text-heading">Education</h3>
          </div>
          <div className="flex flex-col gap-3">
            {about.education.map((edu) => (
              <div key={edu.institution} className="flex flex-col gap-1">
                <p className="text-sm font-medium text-heading">
                  {edu.degree}
                </p>
                <p className="text-xs text-muted">{edu.institution}</p>
                <p className="text-xs text-accent">{edu.period}</p>
                <p className="mt-1 text-sm text-paragraph">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {about.highlights.map((highlight) => (
          <motion.div
            key={highlight.title}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="glass-card group flex flex-col gap-3 p-5 transition-colors hover:border-accent/30"
          >
            <h4 className="text-sm font-semibold text-heading">
              {highlight.title}
            </h4>
            <p className="text-sm leading-relaxed text-paragraph">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
