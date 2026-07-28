"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, viewportConfig } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="A track record of shipping meaningful work across startups and product teams."
      />

      <div className="mt-12 flex flex-col gap-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative flex flex-col gap-6 pb-12 last:pb-0 sm:flex-row sm:gap-10"
          >
            <div className="flex flex-row items-start gap-4 sm:w-56 sm:flex-col sm:gap-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-accent">
                <Briefcase size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {exp.period}
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              </div>
            </div>

            <div className="relative flex-1 pb-8 sm:pl-10">
              {index < experiences.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-border via-border to-transparent sm:block"
                />
              )}
              <div className="glass-card flex flex-col gap-3 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-heading">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <p className="text-sm leading-relaxed text-paragraph">
                  {exp.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-paragraph"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
