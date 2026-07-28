export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Lead frontend engineering for the AI platform team, owning architecture and delivery of customer-facing surfaces.",
    achievements: [
      "Re-architected the core app shell, reducing initial load time by 48% and improving Lighthouse scores to 98+.",
      "Built a streaming RAG interface serving 12k+ daily active users with sub-second perceived latency.",
      "Mentored four engineers and established the team's accessibility and testing standards.",
    ],
  },
  {
    company: "DataLabs",
    role: "Full-Stack Engineer",
    period: "2021 — 2023",
    location: "Bengaluru, India",
    description:
      "Shipped data-intensive features across the stack, from ingestion pipelines to interactive dashboards.",
    achievements: [
      "Designed a real-time analytics pipeline handling 5M+ events/day with sub-second query latency.",
      "Built a reusable charting library adopted across six internal products.",
      "Cut infrastructure costs by 30% by optimizing query patterns and caching layers.",
    ],
  },
  {
    company: "Studio Nine",
    role: "Frontend Developer",
    period: "2019 — 2021",
    location: "Hyderabad, India",
    description:
      "Crafted marketing sites and web apps for early-stage startups, with a focus on motion and performance.",
    achievements: [
      "Delivered 20+ production sites with consistent 95+ Lighthouse performance scores.",
      "Introduced a component-driven workflow that halved average project delivery time.",
    ],
  },
];
