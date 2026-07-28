import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/jyothiswaroop",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jyothiswaroop",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:jyothiswaroopgolla@gmail.com",
    icon: Mail,
  },
];
