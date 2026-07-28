export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS (S3, EC2)"],
  },
];
