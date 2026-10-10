export type ExperienceKind = "work" | "education";

export interface Experience {
  id: string;
  kind: ExperienceKind;
  date: string;
  role: string;
  org: string;
  description: string;
  /** Short callout shown under the role, e.g. a promotion. */
  note?: string;
  /** Still ongoing — counted as an active role in the hero stats. */
  current?: boolean;
}

/** Current work first, then past roles and education, newest first. */
export const experiences: Experience[] = [
  {
    id: "rotate",
    kind: "work",
    date: "Jul 2026 – Present",
    role: "Software & Data Engineer Intern",
    org: "Rotate Asia · Kuala Lumpur",
    description:
      "Hybrid software and data engineering role on a large production stack — including Angular on the frontend, Databricks on the data side, and Cube.js as the middleware between them. Working across both the application and the data layers alongside the engineering team.",
    current: true,
  },
  {
    id: "umisa-hod",
    kind: "work",
    date: "Oct 2026 – Present",
    role: "Head of Department — Technology",
    note: "↑ Continued from Technical Lead (Feb – Sep 2026)",
    org: "UMISA — Universiti Malaya International Students' Association",
    description:
      "Appointed Head of the Technology Department for the 2026/2027 session. Leading the tech department to keep maintaining and improving umisa.net and the association's wider technology.",
    current: true,
  },
  {
    id: "umisa-tech-lead",
    kind: "work",
    date: "Feb 2026 – Sep 2026",
    role: "Technical Lead",
    org: "UMISA — Universiti Malaya International Students' Association",
    description:
      "Led the technical direction of Digital UMISA (umisa.net). Architected the Next.js, Sanity CMS and Supabase platform, managed sprint delivery, and led a team of developers and a designer while actively writing code through launch and post-launch iterations.",
  },
  {
    id: "um",
    kind: "education",
    date: "Oct 2024 – Feb 2028",
    role: "Bachelor in Software Engineering",
    org: "Universiti Malaya",
    description:
      "CGPA 3.30 / 4.00. Relevant courses: Mobile App Development, Databases, Web Programming, Machine Learning, Data Structures, Algorithms, Software Modeling, Software Maintenance and Evolution, Project Management.",
  },
  {
    id: "high-school",
    kind: "education",
    date: "Graduated 2023",
    role: "High School Diploma",
    org: "Al Uloom Al Shariea High School",
    description: "GPA 4.0 / 4.0",
  },
];

export const activeRoles = experiences.filter((e) => e.kind === "work" && e.current);
