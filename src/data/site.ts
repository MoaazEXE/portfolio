export const site = {
  name: "Moaaz Khamis",
  initials: "MK",
  url: "https://moaazexe.dev",
  title: "Moaaz Khamis — Software & Data Engineer",
  description:
    "Software Engineering student at Universiti Malaya and Software & Data Engineer Intern at Rotate Asia. Building digital products that bridge cultures and solve real problems.",
  role: "Software & Data Engineer",
  email: "mouazkhamis@gmail.com",
  cvUrl: "/moaaz-khamis-cv.pdf",
} as const;

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export const socials: SocialLink[] = [
  { label: "email", handle: site.email, href: `mailto:${site.email}` },
  {
    label: "linkedin",
    handle: "Moaaz Khamis",
    href: "https://www.linkedin.com/in/moaaz-khamis-a24309332/",
  },
  { label: "github", handle: "MoaazEXE", href: "https://github.com/MoaazEXE" },
  { label: "whatsapp", handle: "Moaaz Khamis", href: "https://wa.me/601137210528" },
];

export const navLinks = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
] as const;
