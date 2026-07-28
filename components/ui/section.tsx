"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding scroll-mt-20", className)}
    >
      <motion.div
        className="container-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
