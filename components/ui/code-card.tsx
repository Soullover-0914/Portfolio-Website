"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const codeLines = [
  { text: "const engineer = {", indent: 0 },
  { text: "name: 'G. Jyothi Swaroop',", indent: 1, color: "text-accent" },
  { text: "role: 'Software Engineer',", indent: 1, color: "text-accent" },
  { text: "focus: ['Web', 'AI', 'Scale'],", indent: 1, color: "text-accent" },
  { text: "stack: {", indent: 1 },
  { text: "frontend: ['Next.js', 'React'],", indent: 2, color: "text-accent" },
  { text: "backend: ['Node', 'Python'],", indent: 2, color: "text-accent" },
  { text: "ai: ['LangChain', 'RAG'],", indent: 2, color: "text-accent" },
  { text: "},", indent: 1 },
  { text: "available: true,", indent: 1, color: "text-emerald-400" },
  { text: "};", indent: 0 },
];

const tabs = ["engineer.ts", "README.md", "package.json"];

export function CodeCard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`rounded-md px-3 py-1 font-mono text-xs transition-colors ${
                  activeTab === i
                    ? "bg-card text-heading"
                    : "text-muted hover:text-heading"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 select-none border-r border-border bg-background/30 py-4 text-right font-mono text-xs text-muted/60">
            {codeLines.map((_, i) => (
              <div key={i} className="pr-3 leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto py-4 pl-14 pr-4 font-mono text-sm leading-6">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.06,
                  ease: "easeOut",
                }}
                className="whitespace-pre"
              >
                <span style={{ paddingLeft: `${line.indent * 2}ch` }}>
                  <span className={line.color ?? "text-paragraph"}>
                    {line.text}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border bg-background/40 px-4 py-2.5">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>main</span>
          </div>
          <span className="font-mono text-xs text-muted">TypeScript</span>
        </div>
      </div>
    </motion.div>
  );
}
