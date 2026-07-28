export type AboutHighlight = {
  title: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export type AboutData = {
  summary: string;
  journey: string;
  highlights: AboutHighlight[];
  education: Education[];
};

export const about: AboutData = {
  summary:
    "Aspiring software developer with a strong foundation in full-stack web development and emerging knowledge in Artificial Intelligence and Machine Learning. Proficient in building interactive web applications using modern technologies and developing scalable backend systems.",
  journey:
    "Driven by a passion for building things that work — from interactive frontends to scalable backends and intelligent systems. Currently pursuing my B.Tech at Vignan University while applying AI and ML to solve real-world problems through hands-on projects.",
  highlights: [
    {
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications with React.js, Node.js, Express.js, and MongoDB — from responsive UIs to RESTful backend APIs.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Applying Python, scikit-learn, TensorFlow, and computer vision to develop intelligent systems with real-world impact.",
    },
    {
      title: "Problem-Solving Mindset",
      description:
        "Demonstrating adaptability and a continuous learning mindset to architect efficient and intelligent software solutions.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying applications on AWS (S3, EC2) and platforms like Vercel and Render, with Git-based version control and CI workflows.",
    },
  ],
  education: [
    {
      institution: "Vignan University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 — 2027",
      description:
        "Andhra Pradesh, India · CGPA: 7.0 · Coursework: Backend Development, REST APIs, Database Optimization, AI/ML Fundamentals, Data Processing, Web Development.",
    },
    {
      institution: "Bhashyam Junior College",
      degree: "Intermediate (MPC)",
      period: "2021 — 2023",
      description:
        "Andhra Pradesh, India · 80.2% · Coursework: Mathematics, Physics, Chemistry.",
    },
  ],
};
