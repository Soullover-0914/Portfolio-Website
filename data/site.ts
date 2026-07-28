export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Golla Jyothi Swaroop",
  role: "Aspiring Software Developer",
  email: "jyothiswaroopgolla@gmail.com",
  resumePath: "/resume/resume.pdf",
  location: "India",
  availability: "Open to opportunities",
} as const;
